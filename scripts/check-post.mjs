#!/usr/bin/env node
// Validates PromoClock blog posts: src/content/blog/<locale>/<slug>.md (see docs/blog/BLOG-BRIEF.md).
// Usage: node scripts/check-post.mjs <file.md> [...more]   — exit code 1 if any ERROR.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BLOG = path.join(REPO, "src/content/blog");
const LOCALES = ["en", "hi", "ja", "fr", "pt", "ko", "es", "de", "zh-CN", "tr"];
const CJK = new Set(["ja", "zh-CN"]);
const CATEGORIES = ["guides", "comparisons", "deals", "news"];
const SECTIONS = new Set(["", "deals", "tools", "calendar", "about", "affiliate-disclosure", "blog"]);
const toolSlugs = new Set(readdirSync(path.join(REPO, "src/content/tools")).map((f) => f.replace(/\.md$/, "")));
const dealIds = new Set([...readFileSync(path.join(REPO, "src/content/deals.yaml"), "utf8").matchAll(/^- id: (\S+)/gm)].map((m) => m[1]));
// Published English posts plus the planned slugs listed in the brief (posts are written in parallel).
const BRIEF = path.join(REPO, "docs/blog/BLOG-BRIEF.md");
const postSlugs = new Set([
  ...(existsSync(path.join(BLOG, "en")) ? readdirSync(path.join(BLOG, "en")).map((f) => f.replace(/\.md$/, "")) : []),
  ...(existsSync(BRIEF) ? [...readFileSync(BRIEF, "utf8").matchAll(/^\d+\. `([a-z0-9-]+)`/gm)].map((m) => m[1]) : []),
]);

const ENGLISH_KEYS = ["title", "metaTitle", "metaDescription", "excerpt", "category", "featured", "publishedAt", "updatedAt", "image", "tools", "keyTakeaways", "faq", "howTo", "sources"];
const LOCALIZED_KEYS = ["title", "metaTitle", "metaDescription", "excerpt", "imageAlt", "keyTakeaways", "faq", "howTo"];
const OPTIONAL = new Set(["howTo", "image", "imageAlt", "featured"]);

const words = (s) => String(s).replace(/[#*_`>|[\]()-]/g, " ").trim().split(/\s+/).filter(Boolean).length;
const len = (s) => [...String(s)].length;
const isDate = (v) => (v instanceof Date && !isNaN(v)) || /^\d{4}-\d{2}-\d{2}$/.test(String(v));
/** Visible prose only: no link targets, image lines or table rules. */
const prose = (body) =>
  body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/^\|?[\s:|-]+\|?$/gm, " ");

function parse(file) {
  const raw = readFileSync(file, "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error("no frontmatter block (--- ... ---)");
  return { fm: yaml.load(m[1]) ?? {}, body: m[2] ?? "" };
}

const links = (body) => [...body.matchAll(/(?<!!)\[[^\]]*\]\(([^)\s]+)[^)]*\)/g)].map((m) => m[1]);
const images = (body) => [...body.matchAll(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g)].map((m) => ({ alt: m[1], src: m[2] }));
const h2s = (body) => (body.match(/^## /gm) || []).length;

function checkInternal(href, E) {
  if (!href.startsWith("/")) return;
  if (/^\/(en|hi|ja|fr|pt|ko|es|de|zh-CN|tr)\//.test(href)) return E(`link ${href}: write internal links without the locale prefix (e.g. /tools/claude/)`);
  if (!/\/(#[\w-]+)?$/.test(href)) return E(`link ${href}: internal links end with a trailing slash`);
  const [p] = href.split("#");
  const parts = p.split("/").filter(Boolean);
  if (parts.length === 0) return;
  if (parts.length === 1) return SECTIONS.has(parts[0]) || E(`link ${href}: unknown section`);
  if (parts.length !== 2) return E(`link ${href}: unknown page`);
  const [section, id] = parts;
  if (section === "tools" && !toolSlugs.has(id)) E(`link ${href}: '${id}' is not a tool slug`);
  else if (section === "deals" && !dealIds.has(id)) E(`link ${href}: '${id}' is not a deal id`);
  else if (section === "blog" && !postSlugs.has(id)) E(`link ${href}: '${id}' is not an English post`);
  else if (!["tools", "deals", "blog"].includes(section)) E(`link ${href}: unknown page`);
}

function check(file) {
  const errors = [], warns = [];
  const E = (s) => errors.push(s), W = (s) => warns.push(s);
  const rel = path.relative(BLOG, path.resolve(file));
  const [locale, base] = rel.split(path.sep);
  const slug = String(base).replace(/\.md$/, "");
  if (!LOCALES.includes(locale)) E(`path: locale folder '${locale}' unknown (must be src/content/blog/<locale>/<slug>.md)`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) E(`path: slug '${slug}' must be lowercase-kebab-case`);
  let fm, body;
  try { ({ fm, body } = parse(file)); } catch (e) { return { errors: [String(e.message)], warns }; }
  const isEn = locale === "en";
  const cjk = CJK.has(locale);
  const allowed = isEn ? ENGLISH_KEYS : LOCALIZED_KEYS;
  for (const k of Object.keys(fm)) if (!allowed.includes(k)) E(`unknown key '${k}' (allowed: ${allowed.join(", ")})`);
  for (const k of allowed) if (!OPTIONAL.has(k) && !(k in fm)) E(`missing key '${k}'`);

  const str = (k, min, max, unit = "chars") => {
    if (typeof fm[k] !== "string" || !fm[k].trim()) return E(`${k}: missing or not a string`), false;
    const n = unit === "words" ? words(fm[k]) : len(fm[k]);
    if (n < min || n > max) E(`${k}: ${n} ${unit}, expected ${min}–${max}`);
    return true;
  };
  str("title", cjk ? 10 : 30, cjk ? 60 : 100);
  if (str("metaTitle", cjk ? 8 : 25, cjk ? 34 : 60) && /\||promoclock/i.test(fm.metaTitle)) E("metaTitle: must not contain '|' or 'PromoClock' (the site adds it)");
  str("metaDescription", ...(cjk ? [55, 100] : locale === "ko" ? [65, 125] : isEn ? [120, 160] : [110, 170]));
  if (cjk) str("excerpt", 70, 200); else str("excerpt", isEn ? 35 : 30, isEn ? 65 : 85, "words");

  const list = (k, min, max, item) => {
    if (!Array.isArray(fm[k])) return E(`${k}: must be a list`), null;
    if (fm[k].length < min || fm[k].length > max) E(`${k}: ${fm[k].length} items, expected ${min}–${max}`);
    fm[k].forEach((it, i) => item(it, `${k}[${i}]`));
    return fm[k];
  };
  list("keyTakeaways", 3, 5, (it, at) => { if (typeof it !== "string" || !it.trim()) E(`${at}: string required`); else if (isEn && (words(it) < 8 || words(it) > 40)) E(`${at}: ${words(it)} words, expected 8–40`); });
  list("faq", 4, 6, (it, at) => {
    if (!it || typeof it !== "object") return E(`${at}: needs q + a`);
    for (const k of Object.keys(it)) if (!["q", "a"].includes(k)) E(`${at}: unknown key '${k}'`);
    if (typeof it.q !== "string" || !it.q.trim()) E(`${at}.q: required`); else if (isEn && !/\?$/.test(it.q.trim())) E(`${at}.q: must end with '?'`);
    if (typeof it.a !== "string" || !it.a.trim()) E(`${at}.a: required`); else if (isEn && (words(it.a) < 25 || words(it.a) > 90)) E(`${at}.a: ${words(it.a)} words, expected 25–90`);
  });
  if ("howTo" in fm) {
    const h = fm.howTo;
    if (!h || typeof h !== "object" || typeof h.name !== "string" || !h.name.trim()) E("howTo: needs name + steps");
    if (h && Array.isArray(h.steps)) {
      if (h.steps.length < 3 || h.steps.length > 8) E(`howTo.steps: ${h.steps.length} items, expected 3–8`);
      h.steps.forEach((s, i) => { if (!s || typeof s.name !== "string" || typeof s.text !== "string") E(`howTo.steps[${i}]: needs name + text`); });
    } else if (h) E("howTo.steps: list required");
  }

  const bodyLinks = links(body);
  for (const href of bodyLinks) checkInternal(href, E);
  if (/^# /m.test(body)) E("body: no H1 (# ) — the title is the H1; start sections with ##");
  for (const img of images(body)) {
    if (!img.alt.trim()) E(`image ${img.src}: alt text required`);
    if (!img.src.startsWith("../images/")) E(`image ${img.src}: must be ../images/<file>`);
    else if (!existsSync(path.join(BLOG, "images", img.src.slice("../images/".length)))) E(`image ${img.src}: file not found`);
  }

  if (isEn) {
    const n = words(prose(body));
    if (n < 1000) E(`body: ${n} words, expected ≥ 1000`); else if (n < 1200) W(`body: ${n} words (target 1,200–1,900)`);
    if (h2s(body) < 5) E(`body: ${h2s(body)} H2 sections, expected ≥ 5`);
    if (!/^\|.*\|\s*$/m.test(body)) W("body: no table — comparisons and prices read best in a table");
    if (!bodyLinks.some((l) => l.startsWith("/"))) E("body: link at least 3 internal pages (/tools/<slug>/, /deals/<id>/, /)");
    else if (bodyLinks.filter((l) => l.startsWith("/")).length < 3) W("body: fewer than 3 internal links");
    if (!CATEGORIES.includes(fm.category)) E(`category: one of ${CATEGORIES.join(", ")}`);
    if (!isDate(fm.publishedAt)) E("publishedAt: YYYY-MM-DD");
    if (!isDate(fm.updatedAt)) E("updatedAt: YYYY-MM-DD");
    const tools = list("tools", 1, 14, (it, at) => { if (!toolSlugs.has(it)) E(`${at}: '${it}' is not a tool slug`); });
    if (tools && new Set(tools).size !== tools.length) E("tools: duplicates");
    list("sources", 2, 12, (it, at) => { if (!/^https:\/\/\S+$/.test(String(it))) E(`${at}: https URL required`); });
    if ("image" in fm) {
      const im = fm.image;
      for (const k of ["src", "alt", "credit", "creditUrl", "license"]) if (!im || typeof im[k] !== "string" || !im[k].trim()) E(`image.${k}: required`);
      if (im?.src && !existsSync(path.join(BLOG, "en", im.src))) E(`image.src: ${im.src} not found`);
    } else W("image: missing (hero image is added before publishing)");
  } else {
    const enFile = path.join(BLOG, "en", `${slug}.md`);
    if (!existsSync(enFile)) E(`no English original at src/content/blog/en/${slug}.md`);
    else {
      const en = parse(enFile);
      for (const k of ["keyTakeaways", "faq"]) if (Array.isArray(en.fm[k]) && Array.isArray(fm[k]) && en.fm[k].length !== fm[k].length) E(`${k}: ${fm[k].length} items but English has ${en.fm[k].length}`);
      if (Boolean(en.fm.howTo) !== Boolean(fm.howTo)) E(`howTo: ${en.fm.howTo ? "English has a howTo" : "English has no howTo"}`);
      else if (en.fm.howTo && fm.howTo?.steps?.length !== en.fm.howTo.steps.length) E(`howTo.steps: English has ${en.fm.howTo.steps.length}`);
      if (en.fm.image && !fm.imageAlt) E("imageAlt: required (translate image.alt)");
      if (h2s(en.body) !== h2s(body)) E(`body: ${h2s(body)} H2 sections but English has ${h2s(en.body)}`);
      const enH3 = (en.body.match(/^### /gm) || []).length, h3 = (body.match(/^### /gm) || []).length;
      if (enH3 !== h3) E(`body: ${h3} H3 headings but English has ${enH3}`);
      const enTables = (en.body.match(/^\|.*\|\s*$/gm) || []).length, tables = (body.match(/^\|.*\|\s*$/gm) || []).length;
      if (enTables !== tables) E(`body: ${tables} table rows but English has ${enTables}`);
      const a = [...links(en.body)].sort().join("\n"), b = [...bodyLinks].sort().join("\n");
      if (a !== b) {
        const missing = links(en.body).filter((l) => !bodyLinks.includes(l));
        const extra = bodyLinks.filter((l) => !links(en.body).includes(l));
        E(`body: links differ from English${missing.length ? ` — missing ${missing.join(", ")}` : ""}${extra.length ? ` — extra ${extra.join(", ")}` : ""}`);
      }
      if (images(en.body).length !== images(body).length) E(`body: ${images(body).length} images but English has ${images(en.body).length}`);
      const enLen = len(prose(en.body)), ratio = len(prose(body)) / enLen;
      const [lo, hi] = cjk || locale === "ko" ? [0.22, 0.75] : [0.8, 1.6];
      if (ratio < lo) E(`body: ${Math.round(ratio * 100)}% of the English length — content was dropped`);
      else if (ratio > hi) W(`body: ${Math.round(ratio * 100)}% of the English length`);
      const prices = (s) => [...s.matchAll(/\$\d[\d,.]*/g)].map((m) => m[0].replace(/[.,]$/, ""));
      const missingPrices = [...new Set(prices(en.body))].filter((p) => !body.includes(p));
      if (missingPrices.length) W(`body: prices missing or reformatted: ${missingPrices.slice(0, 8).join(" ")}`);
    }
  }
  return { errors, warns };
}

const files = process.argv.slice(2);
if (!files.length) { console.error("usage: node scripts/check-post.mjs <file.md> [...]"); process.exit(2); }
let failed = 0;
for (const f of files) {
  const { errors, warns } = check(f);
  const tag = errors.length ? "FAIL" : "OK  ";
  if (errors.length) failed++;
  console.log(`${tag} ${path.relative(REPO, path.resolve(f))}${warns.length ? ` (${warns.length} warn)` : ""}`);
  for (const e of errors) console.log(`  ERROR ${e}`);
  for (const w of warns) console.log(`  WARN  ${w}`);
}
console.log(`\n${files.length - failed}/${files.length} passed`);
process.exit(failed ? 1 : 0);
