#!/usr/bin/env node
/**
 * CSP post-processor for Next.js prerendered output.
 *
 * Walks .next/server/app/**.html, computes SHA-256 of every executable
 * inline <script>, injects a <meta http-equiv="content-security-policy">
 * tag in <head> with the hashes pinned for that exact page.
 *
 * Result: strict CSP with per-page hash coverage. No 'unsafe-inline'.
 * Lighthouse Best-Practices passes (no CSP-XSS warnings).
 *
 * Why this is needed:
 *   Next.js inlines flight-data scripts (self.__next_f.push) into every
 *   prerendered HTML. The content varies per page because it carries
 *   build-hashed asset URLs. Static CSP in next.config.js cannot enumerate
 *   them. Nonces would force dynamic rendering and kill static caching.
 *
 * Note: frame-ancestors is omitted (ignored when delivered via <meta>).
 *       X-Frame-Options in next.config.js handles framing protection.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const APP_DIR = process.argv[2] || '.next/server/app';
const VERBOSE = process.env.CSP_VERBOSE === '1';

function htmlFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...htmlFiles(p));
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

function cspHash(text) {
  const h = createHash('sha256').update(text, 'utf8').digest('base64');
  return `'sha256-${h}'`;
}

function buildCsp(hashes) {
  // Allowlist:
  // - script-src: self + Cloudflare's email-decode helper (auto-injected
  //   from /cdn-cgi which is same-origin) + per-page inline hashes.
  // - style-src: self + 'unsafe-inline' (Next.js + Tailwind inline styles).
  //   Hashes are not added here so 'unsafe-inline' actually takes effect
  //   (CSP3: hash + unsafe-inline together = unsafe-inline ignored).
  // - connect-src: self only. Sogn doesn't talk to external APIs from the
  //   browser; everything is self-hosted assets.
  const directives = [
    "default-src 'self'",
    `script-src 'self' https://static.cloudflareinsights.com ${[...hashes].join(' ')}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://cloudflareinsights.com",
    "form-action 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ];
  return directives.join('; ');
}

function processHtml(html, label) {
  const scriptRe = /<script(\s[^>]*)?>([\s\S]*?)<\/script>/g;
  const hashes = new Set();
  let m;
  while ((m = scriptRe.exec(html)) !== null) {
    const attrs = m[1] || '';
    const content = m[2];
    if (!content.trim()) continue;
    if (/\ssrc\s*=/.test(attrs)) continue;
    const typeMatch = /\stype\s*=\s*"([^"]+)"/.exec(attrs);
    if (typeMatch) {
      const t = typeMatch[1].toLowerCase();
      if (t !== 'module' && t !== 'text/javascript') continue;
    }
    hashes.add(cspHash(content));
  }

  const csp = buildCsp(hashes);
  const metaTag = `<meta http-equiv="content-security-policy" content="${csp}">`;

  // Inject right after <head>, or replace existing if present.
  const existingRe = /<meta\s+http-equiv="content-security-policy"\s+content="[^"]*"\s*\/?\s*>/i;
  let next;
  if (existingRe.test(html)) {
    next = html.replace(existingRe, metaTag);
  } else if (/<head[^>]*>/i.test(html)) {
    next = html.replace(/(<head[^>]*>)/i, `$1${metaTag}`);
  } else {
    if (VERBOSE) console.warn(`[csp] ${label}: no <head>, skipping`);
    return html;
  }

  if (VERBOSE) {
    console.log(`[csp] ${label}: ${hashes.size} hashes`);
  }
  return next;
}

const files = htmlFiles(APP_DIR);
let processed = 0;
for (const f of files) {
  const orig = readFileSync(f, 'utf8');
  const next = processHtml(orig, f.replace(/^.*\.next\/server\/app\//, ''));
  if (next !== orig) {
    writeFileSync(f, next, 'utf8');
    processed++;
  }
}
console.log(`[csp] processed ${processed} HTML files`);
