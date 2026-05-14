const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    // Inline critical CSS via critters. Eliminates render-blocking on
    // small per-page CSS chunks (PSI flagged ~350ms wasted on three
    // _next/static/css/*.css files at 6KB/3KB/5KB). With critters the
    // above-fold rules ship in <style> in the document head; the rest
    // loads async after first paint.
    optimizeCss: true,
  },
  // Explicit webpack alias for the "@/*" import pattern. tsconfig.json
  // already declares paths but some Next 14 / webpack 5 builds (notably
  // when running locally with Node 22) fail to wire it through, leaving
  // every Client Component boundary unable to resolve `@/components/*`
  // and `@/config/*`. Setting the alias directly on webpack guarantees
  // resolution in all environments (Vercel CI, local Linux, local Mac,
  // and various Node versions).
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  async headers() {
    // Security headers (NO CSP here). CSP is injected per-page as a
    // <meta http-equiv="content-security-policy"> tag by scripts/csp-postprocess.mjs
    // because each prerendered page has different inline Next.js flight-data
    // scripts whose SHA-256 hashes are page-specific. Doing CSP statically here
    // would require either 'unsafe-inline' (costs Lighthouse Best-Practices)
    // or nonces (forces dynamic rendering, kills static caching).
    const securityHeaders = [
      { key: "Strict-Transport-Security", value: "max-age=15552000; includeSubDomains; preload" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    ];

    return [
      {
        // Long-cache hashed static assets, repeat-visit performance.
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Security headers on every page response.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
