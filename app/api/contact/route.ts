/**
 * /api/contact : Sogn Contracting contact form submission handler.
 *
 * Accepts a POST from the website contact form and forwards a formatted
 * email to sogncontracting@gmail.com. Source-tagged so Paul can see which
 * channel drove the lead.
 *
 * Source tagging via subject prefix:
 *   - From sogncontracting.com (direct): [Sogn Site]
 *   - From winterscode.com /work (referral widget): [WC Portfolio]
 *   - Unknown: [Sogn Form]
 *
 * Email delivery: uses Resend if RESEND_API_KEY is set, otherwise logs to
 * Vercel logs so submissions never silently disappear (current state of
 * the form was a silent 404, fixed by this route).
 *
 * Honeypot field "website" must be empty (basic bot trap, hidden via CSS).
 *
 * Env (set in Vercel project settings):
 *   - RESEND_API_KEY: Resend API key for sending email
 *   - CONTACT_FORWARD_TO: target email (default sogncontracting@gmail.com)
 *   - RESEND_FROM: from address (default "Sogn Contracting <noreply@sogncontracting.com>")
 *     NOTE: Requires verifying sogncontracting.com in Resend dashboard. Until
 *     verified, falls back to "onboarding@resend.dev" which Resend allows
 *     without verification.
 */

import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const ALLOWED_ORIGINS = new Set([
  "https://winterscode.com",
  "https://www.winterscode.com",
  "https://sogncontracting.com",
  "https://www.sogncontracting.com",
  // Localhost dev:
  "http://localhost:3000",
  "http://localhost:4321",
  "http://localhost:4322",
]);

function corsHeaders(origin: string | null): HeadersInit {
  const allowed = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://sogncontracting.com";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin");
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

const MAX_FIELD = 500;
const MAX_MESSAGE = 4000;
const DEFAULT_TO = "sogncontracting@gmail.com";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
  // Honeypot
  website?: string;
}

function trim(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function sourceTag(source: string | undefined, referer: string | null): string {
  // Explicit source from widget takes priority
  if (source === "wc-portfolio") return "[WC Portfolio]";
  if (source === "sogn-site") return "[Sogn Site]";
  // Infer from referer header
  if (referer) {
    if (referer.includes("winterscode.com")) return "[WC Portfolio]";
    if (referer.includes("sogncontracting.com")) return "[Sogn Site]";
  }
  return "[Sogn Form]";
}

function formatEmail(
  p: ContactPayload,
  ip: string,
  referer: string | null,
  tag: string
): { subject: string; text: string; html: string } {
  const subject = `${tag} New lead from ${p.name}`;
  const lines = [
    `New contact form submission`,
    `Submitted: ${new Date().toISOString()}`,
    `Source:    ${tag}`,
    referer ? `Referer:   ${referer}` : null,
    `IP:        ${ip}`,
    "",
    `Name:      ${p.name}`,
    `Email:     ${p.email}`,
    p.phone ? `Phone:     ${p.phone}` : null,
    "",
    "Message:",
    p.message,
  ].filter(Boolean);
  const text = lines.join("\n");
  const html = `<div style="font-family:ui-monospace,Menlo,monospace;font-size:13px;line-height:1.6;color:#111;">
<pre style="margin:0;white-space:pre-wrap;">${text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</pre>
</div>`;
  return { subject, text, html };
}

async function sendViaResend(
  apiKey: string,
  from: string,
  to: string,
  replyTo: string,
  email: ReturnType<typeof formatEmail>
): Promise<boolean> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: replyTo,
        subject: email.subject,
        text: email.text,
        html: email.html,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[contact] resend error", res.status, body);
    }
    return res.ok;
  } catch (err) {
    console.error("[contact] resend exception", err);
    return false;
  }
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400, headers: corsHeaders(origin) });
  }

  // Honeypot: bots usually fill every field including hidden ones.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { headers: corsHeaders(origin) });
  }

  const payload: ContactPayload = {
    name: trim(body.name, MAX_FIELD),
    email: trim(body.email, MAX_FIELD),
    phone: trim(body.phone, MAX_FIELD) || undefined,
    message: trim(body.message, MAX_MESSAGE),
    source: typeof body.source === "string" ? body.source : undefined,
  };

  if (!payload.name || payload.name.length < 2) {
    return NextResponse.json({ error: "name_required" }, { status: 400, headers: corsHeaders(origin) });
  }
  if (!payload.email || !isEmail(payload.email)) {
    return NextResponse.json({ error: "email_invalid" }, { status: 400, headers: corsHeaders(origin) });
  }
  if (!payload.message || payload.message.length < 5) {
    return NextResponse.json({ error: "message_required" }, { status: 400, headers: corsHeaders(origin) });
  }

  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "0.0.0.0";
  const referer = request.headers.get("referer");
  const tag = sourceTag(payload.source, referer);

  const formatted = formatEmail(payload, ip, referer, tag);
  const apiKey = process.env.RESEND_API_KEY;
  // TEMP TEST OVERRIDE: route WC portfolio submissions to Preston for
  // end-to-end testing before exposing to real leads. Revert after test.
  // See commit log for the revert commit hash.
  const to = payload.source === "wc-portfolio"
    ? "preston@winterscode.com"
    : (process.env.CONTACT_FORWARD_TO || DEFAULT_TO);
  const from =
    process.env.RESEND_FROM ||
    "Sogn Contracting <onboarding@resend.dev>";
  const replyTo = payload.email;

  let delivered = false;
  if (apiKey) {
    delivered = await sendViaResend(apiKey, from, to, replyTo, formatted);
    // TEMP DIAGNOSTIC: log target to Vercel logs so we can verify routing
    console.log("[diagnostic] source=" + payload.source + " target=" + to + " delivered=" + delivered);
  } else {
    console.warn("[contact] RESEND_API_KEY not set; submission logged only");
  }

  // Always log the submission so it's recoverable from Vercel logs even
  // if email delivery fails or is not yet configured. This is critical:
  // the form was previously silently broken (404 on this endpoint).
  // Logging guarantees Preston/Paul can recover any submission.
  console.log(
    "[contact-submission]",
    JSON.stringify({
      delivered,
      to,
      tag,
      ...formatted,
    })
  );

  return NextResponse.json({ ok: true, delivered, _diag_to: to, _diag_source: payload.source, _diag_apiKey: !!apiKey }, { headers: corsHeaders(origin) });
}
