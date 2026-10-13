#!/usr/bin/env node
// Checks what site audits (StackOptic, securityheaders.com, Mozilla Observatory, AI-readiness
// scanners) look at, on the live responses: security headers, a CSP whose hashes cover every inline
// script on the page (Cloudflare can inject or rewrite scripts at the edge), the heading outline,
// robots.txt naming the AI crawlers, and the web app manifest. Run it against production after a deploy.
//
//   node scripts/audit-headers.mjs                  # https://promoclock.co
//   BASE=http://127.0.0.1:18302 node scripts/audit-headers.mjs

import { createHash } from "node:crypto";

const BASE = (process.env.BASE ?? "https://promoclock.co").replace(/\/$/, "");
const UA = "Mozilla/5.0 (compatible; PromoClockAudit/1.0; +https://promoclock.co)";
const PAGES = ["/en/", "/tr/", "/en/deals/", "/en/tools/", "/en/tools/cursor/", "/en/calendar/", "/en/blog/", "/en/about/", "/en/privacy/"];
const REQUIRED = {
  "strict-transport-security": /max-age=\d{8,}/,
  "content-security-policy": /default-src 'self'/,
  "x-content-type-options": /^nosniff$/,
  "x-frame-options": /^SAMEORIGIN$/i,
  "referrer-policy": /strict-origin-when-cross-origin/,
  "permissions-policy": /camera=\(\)/,
  "cross-origin-opener-policy": /^same-origin$/,
  "cross-origin-embedder-policy": /^(credentialless|require-corp)$/,
  "cross-origin-resource-policy": /^same-(site|origin)$/,
};
const AI_AGENTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Meta-ExternalAgent", "DuckAssistBot"];
const JS_TYPES = new Set(["", "module", "text/javascript", "application/javascript"]);

const problems = [];
const problem = (url, detail) => problems.push(`${url}  ${detail}`);
const get = (path) => fetch(BASE + path, { redirect: "manual", headers: { "user-agent": UA } });

for (const path of PAGES) {
  const res = await get(path);
  if (res.status !== 200) {
    problem(path, `status ${res.status}`);
    continue;
  }
  for (const [name, pattern] of Object.entries(REQUIRED)) {
    const value = res.headers.get(name);
    if (!value) problem(path, `missing ${name}`);
    else if (!pattern.test(value)) problem(path, `${name}: unexpected "${value.slice(0, 80)}"`);
  }
  const html = await res.text();
  const scriptSrc = (res.headers.get("content-security-policy") ?? "").split(";").map((d) => d.trim()).find((d) => d.startsWith("script-src")) ?? "";
  if (/'unsafe-inline'|'unsafe-eval'/.test(scriptSrc)) problem(path, "script-src allows unsafe-inline/unsafe-eval");
  for (const [, attrs, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\ssrc\s*=/i.test(attrs) || !body) continue;
    const type = attrs.match(/\stype\s*=\s*["']?([^"'\s>]+)/i)?.[1]?.toLowerCase() ?? "";
    if (!JS_TYPES.has(type)) continue;
    const hash = `'sha256-${createHash("sha256").update(body, "utf8").digest("base64")}'`;
    if (!scriptSrc.includes(hash)) problem(path, `inline script not covered by the CSP: ${body.trim().slice(0, 60)}…`);
  }
  const headings = [...html.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
  if (headings.filter((h) => h === 1).length !== 1) problem(path, `${headings.filter((h) => h === 1).length} <h1> elements`);
  if (headings[0] !== 1) problem(path, `first heading is <h${headings[0]}>, not <h1>`);
  headings.forEach((h, i) => i > 0 && h > headings[i - 1] + 1 && problem(path, `heading skips from <h${headings[i - 1]}> to <h${h}>`));
}

const robots = await (await get("/robots.txt")).text();
for (const agent of AI_AGENTS) {
  if (!new RegExp(`^User-agent:\\s*${agent}\\s*$`, "mi").test(robots)) problem("/robots.txt", `does not name ${agent}`);
}
if (/^Disallow:\s*\/\S*/m.test(robots)) problem("/robots.txt", "has a Disallow rule (Search Console lists blocked URLs)");

const manifest = await get("/manifest.webmanifest");
if (manifest.status !== 200) problem("/manifest.webmanifest", `status ${manifest.status}`);
else if (!(await manifest.json()).icons?.length) problem("/manifest.webmanifest", "no icons");

const api = await get("/api/status");
if (api.headers.get("cross-origin-resource-policy") !== "cross-origin") problem("/api/status", "CORP should be cross-origin so other sites and apps can read it");

console.log(`${BASE}: ${PAGES.length} pages, robots.txt, manifest and /api/status checked.`);
if (!problems.length) {
  console.log("No header or outline problems found.");
} else {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) console.log(`  ${p}`);
  process.exitCode = 1;
}
