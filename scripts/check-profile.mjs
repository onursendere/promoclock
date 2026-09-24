#!/usr/bin/env node
// Validates PromoClock tool-profile markdown files (see PROFILE-SPEC.md).
// Usage: node check-profile.mjs <file.md> [...more]   — exit code 1 if any ERROR.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TOOLS_DIR = path.join(REPO, "src/content/tools");
const PROFILES = path.join(REPO, "src/content/tool-profiles");
const LOCALES = ["en", "hi", "ja", "fr", "pt", "ko", "es", "de", "zh-CN", "tr"];
const CJK = new Set(["ja", "zh-CN"]);
const PLATFORMS = ["web", "ios", "android", "macos", "windows", "linux", "vscode", "jetbrains", "cli", "api", "browser-extension"];
const slugs = new Set(readdirSync(TOOLS_DIR).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, "")));
const toolName = (slug) => (readFileSync(path.join(TOOLS_DIR, `${slug}.md`), "utf8").match(/^name:\s*"?(.+?)"?\s*$/m) || [])[1];

const words = (s) => String(s).trim().split(/\s+/).filter(Boolean).length;
const len = (s) => [...String(s)].length;
const isDate = (v) => (v instanceof Date && !isNaN(v)) || /^\d{4}-\d{2}-\d{2}$/.test(String(v));

function parse(file) {
  const raw = readFileSync(file, "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error("no frontmatter block (--- ... ---)");
  return { fm: yaml.load(m[1]) ?? {}, body: m[2] ?? "" };
}

function check(file) {
  const errors = [], warns = [];
  const E = (s) => errors.push(s), W = (s) => warns.push(s);
  const abs = path.resolve(file);
  const rel = path.relative(PROFILES, abs);
  const [locale, base] = rel.split(path.sep);
  const slug = String(base).replace(/\.profile\.md$/, "").replace(/\.md$/, "");
  if (!LOCALES.includes(locale)) E(`path: locale folder '${locale}' unknown (must be under ${PROFILES}/<locale>/)`);
  if (!slugs.has(slug)) E(`path: slug '${slug}' is not a tool in src/content/tools`);
  const name = slugs.has(slug) ? toolName(slug) : slug;
  let fm, body;
  try { ({ fm, body } = parse(abs)); } catch (e) { return { errors: [String(e.message)], warns }; }
  const isEn = locale === "en";
  const cjk = CJK.has(locale);
  const has = (k) => Object.prototype.hasOwnProperty.call(fm, k);
  const str = (k, min, max, unit = "chars") => {
    if (typeof fm[k] !== "string" || !fm[k].trim()) return E(`${k}: missing or not a string`), false;
    const n = unit === "words" ? words(fm[k]) : len(fm[k]);
    if (n < min || n > max) E(`${k}: ${n} ${unit}, expected ${min}–${max}`);
    return true;
  };
  const list = (k, min, max, item) => {
    if (!Array.isArray(fm[k])) return E(`${k}: must be a list`), null;
    if (fm[k].length < min || fm[k].length > max) E(`${k}: ${fm[k].length} items, expected ${min}–${max}`);
    fm[k].forEach((it, i) => item(it, `${k}[${i}]`));
    return fm[k];
  };
  const allowed = isEn
    ? ["summary", "metaTitle", "metaDescription", "bestFor", "keyFeatures", "useCases", "pricing", "platforms", "savingTips", "faq", "alternatives", "sources", "reviewedAt"]
    : ["summary", "metaTitle", "metaDescription", "bestFor", "keyFeatures", "useCases", "pricingSummary", "savingTips", "faq"];
  for (const k of Object.keys(fm)) if (!allowed.includes(k)) E(`unknown key '${k}' (allowed: ${allowed.join(", ")})`);
  for (const k of allowed) if (!has(k)) E(`missing key '${k}'`);

  // text fields
  if (cjk) str("summary", 80, 170); else str("summary", isEn ? 40 : 35, isEn ? 60 : 78, "words");
  if (str("metaTitle", cjk ? 8 : 30, cjk ? 34 : 60)) {
    if (/\|/.test(fm.metaTitle) || /promoclock/i.test(fm.metaTitle)) E("metaTitle: must not contain '|' or 'PromoClock'");
    if (!fm.metaTitle.toLowerCase().includes(String(name).toLowerCase())) E(`metaTitle: must include the tool name '${name}'`);
  }
  const mdRange = cjk ? [60, 95] : locale === "ko" ? [70, 122] : isEn ? [120, 160] : [120, 165];
  if (str("metaDescription", ...mdRange) && !fm.metaDescription.toLowerCase().includes(String(name).toLowerCase())) W(`metaDescription: should include '${name}'`);
  if (typeof fm.summary === "string" && !fm.summary.toLowerCase().includes(String(name).toLowerCase())) E(`summary: must name the tool '${name}'`);

  list("bestFor", 2, 4, (it, at) => { if (typeof it !== "string" || !it.trim()) E(`${at}: string required`); else if (len(it) > (cjk ? 24 : 40)) E(`${at}: too long (${len(it)})`); });
  list("keyFeatures", 5, 7, (it, at) => {
    if (!it || typeof it !== "object") return E(`${at}: needs name + description`);
    for (const k of Object.keys(it)) if (!["name", "description"].includes(k)) E(`${at}: unknown key '${k}'`);
    if (typeof it.name !== "string" || !it.name.trim()) E(`${at}.name: required`); else if (len(it.name) > (cjk ? 24 : 40)) E(`${at}.name: too long (${len(it.name)})`);
    if (typeof it.description !== "string" || !it.description.trim()) E(`${at}.description: required`);
    else if (isEn) { const n = words(it.description); if (n < 8 || n > 30) E(`${at}.description: ${n} words, expected 8–30`); }
  });
  list("useCases", 3, 5, (it, at) => { if (typeof it !== "string" || !it.trim()) E(`${at}: string required`); else if (isEn) { const n = words(it); if (n < 8 || n > 30) E(`${at}: ${n} words, expected 8–30`); } });
  list("savingTips", 0, 4, (it, at) => { if (typeof it !== "string" || !it.trim()) E(`${at}: string required`); });
  list("faq", 4, 6, (it, at) => {
    if (!it || typeof it !== "object") return E(`${at}: needs q + a`);
    for (const k of Object.keys(it)) if (!["q", "a"].includes(k)) E(`${at}: unknown key '${k}' (use q and a)`);
    if (typeof it.q !== "string" || !it.q.trim()) E(`${at}.q: required`); else if (isEn && !/\?$/.test(it.q.trim())) E(`${at}.q: must end with '?'`);
    if (typeof it.a !== "string" || !it.a.trim()) E(`${at}.a: required`);
    else if (isEn) { const n = words(it.a); if (n < 15 || n > 60) E(`${at}.a: ${n} words, expected 15–60`); }
  });

  if (isEn) {
    const p = fm.pricing;
    if (!p || typeof p !== "object") E("pricing: object required");
    else {
      for (const k of Object.keys(p)) if (!["freePlan", "freeTrial", "startingPrice", "currency", "billing", "summary", "asOf"].includes(k)) E(`pricing.${k}: unknown key`);
      if (typeof p.freePlan !== "boolean") E("pricing.freePlan: boolean required");
      if ("freeTrial" in p && typeof p.freeTrial !== "boolean") E("pricing.freeTrial: boolean");
      if ("startingPrice" in p) {
        if (typeof p.startingPrice !== "number" || !(p.startingPrice > 0)) E("pricing.startingPrice: positive number");
        if (!/^[A-Z]{3}$/.test(String(p.currency))) E("pricing.currency: ISO 4217 code required with startingPrice");
        if (!["month", "year"].includes(p.billing)) E("pricing.billing: 'month' or 'year' required with startingPrice");
      } else if ("currency" in p || "billing" in p) W("pricing: currency/billing without startingPrice");
      if (typeof p.summary !== "string" || words(p.summary) < 12 || words(p.summary) > 60) E("pricing.summary: 12–60 words");
      if (!isDate(p.asOf)) E("pricing.asOf: YYYY-MM-DD");
    }
    const pl = list("platforms", 1, PLATFORMS.length, (it, at) => { if (!PLATFORMS.includes(it)) E(`${at}: '${it}' not in ${PLATFORMS.join("|")}`); });
    if (pl && new Set(pl).size !== pl.length) E("platforms: duplicates");
    const alt = list("alternatives", 3, 5, (it, at) => { if (!slugs.has(it)) E(`${at}: '${it}' is not a tool slug`); if (it === slug) E(`${at}: cannot list itself`); });
    if (alt && new Set(alt).size !== alt.length) E("alternatives: duplicates");
    list("sources", 1, 6, (it, at) => { if (!/^https:\/\/\S+$/.test(String(it))) E(`${at}: https URL required`); });
    if (!isDate(fm.reviewedAt)) E("reviewedAt: YYYY-MM-DD");
  } else {
    if (typeof fm.pricingSummary !== "string" || !fm.pricingSummary.trim()) E("pricingSummary: string required");
    const enFile = path.join(PROFILES, "en", `${slug}.profile.md`);
    if (!existsSync(enFile)) W("no English profile yet; count checks skipped");
    else {
      const en = parse(enFile).fm;
      for (const k of ["bestFor", "keyFeatures", "useCases", "savingTips", "faq"]) {
        if (Array.isArray(en[k]) && Array.isArray(fm[k]) && en[k].length !== fm[k].length) E(`${k}: ${fm[k].length} items but English has ${en[k].length}`);
      }
      const enBody = (parse(enFile).body.match(/^## /gm) || []).length;
      const myBody = (body.match(/^## /gm) || []).length;
      if (enBody !== myBody) E(`body: ${myBody} '##' sections but English has ${enBody}`);
      const enPrices = (en.pricing?.summary ?? "").match(/[$€£¥]\s?\d[\d.,]*/g) || [];
      for (const price of enPrices) if (!String(fm.pricingSummary).includes(price.replace(/\s/g, ""))) W(`pricingSummary: price '${price}' from English not found (keep prices verbatim)`);
    }
  }

  // body
  const h2 = (body.match(/^## /gm) || []).length;
  if (/^# /m.test(body)) E("body: no '#' H1 headings");
  if (h2 < 2 || h2 > 4) E(`body: ${h2} '##' sections, expected 2–4`);
  const bw = isEn ? words(body.replace(/^#+.*$/gm, "")) : null;
  if (isEn && (bw < 120 || bw > 260)) E(`body: ${bw} words, expected 120–260`);
  if (!body.trim()) E("body: empty");

  // forbidden / suspicious content
  const all = JSON.stringify(fm) + body;
  if (/aggregateRating|ratingValue/i.test(all)) E("forbidden: rating fields");
  if (/\b\d+(\.\d+)?\s?(million|billion|m\+|k\+)\s+(users|customers|downloads|developers)/i.test(all)) W("user-count claim: keep only if from a cited official source");
  if (/\bin this (article|guide|post)\b/i.test(all)) W("avoid 'in this article' phrasing");
  if (isEn && /(TODO|TBD|lorem)/i.test(all)) E("placeholder text found");
  return { errors, warns };
}

let bad = 0;
const files = process.argv.slice(2);
if (!files.length) { console.error("usage: check-profile.mjs <file.md> ..."); process.exit(2); }
for (const f of files) {
  const { errors, warns } = check(f);
  if (errors.length) bad++;
  const tag = errors.length ? "FAIL" : "ok  ";
  console.log(`${tag} ${f}`);
  for (const e of errors) console.log(`   ERROR ${e}`);
  for (const w of warns) console.log(`   WARN  ${w}`);
}
console.log(`\n${files.length - bad}/${files.length} files pass`);
process.exit(bad ? 1 : 0);
