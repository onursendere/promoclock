import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import yaml from "js-yaml";
import { i18n } from "@/lib/i18n/config";
import { PLATFORMS } from "@/lib/deals";
import { ENGLISH_PROFILE_KEYS, LOCALIZED_PROFILE_KEYS, PROFILE_LIST_KEYS } from "@/lib/profiles";

/**
 * Tool profiles: src/content/tool-profiles/<locale>/<slug>.profile.md. Facts live in en/, every other
 * locale mirrors the English structure with text only. Filesystem-only (no astro imports).
 */
const ROOT = "src/content/tool-profiles";
const slugs = readdirSync("src/content/tools")
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""))
  .sort();
const slugSet = new Set(slugs);
const others = i18n.locales.filter((l) => l !== "en");

type Frontmatter = Record<string, any>;
interface ProfileFile {
  fm: Frontmatter;
  body: string;
}

function read(locale: string, slug: string): ProfileFile | undefined {
  const file = path.join(ROOT, locale, `${slug}.profile.md`);
  if (!existsSync(file)) return undefined;
  const match = readFileSync(file, "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { fm: {}, body: "" };
  return { fm: (yaml.load(match[1]) as Frontmatter) ?? {}, body: match[2] };
}

const sections = (body: string) => (body.match(/^## /gm) ?? []).length;
const english = new Map(slugs.flatMap((slug) => (read("en", slug) ? [[slug, read("en", slug)!] as const] : [])));

describe("tool profile files", () => {
  it("live only in known locale folders and match a tool slug", () => {
    const out: string[] = [];
    if (existsSync(ROOT)) {
      for (const locale of readdirSync(ROOT)) {
        if (!(i18n.locales as readonly string[]).includes(locale)) out.push(`${locale}/: unknown locale folder`);
        else
          for (const file of readdirSync(path.join(ROOT, locale))) {
            if (!file.endsWith(".profile.md") || !slugSet.has(file.replace(/\.profile\.md$/, ""))) out.push(`${locale}/${file}: not a tool slug`);
          }
      }
    }
    expect(out).toEqual([]);
  });
});

describe("en", () => {
  it("has a profile for every tool", () => {
    const missing = slugs.filter((slug) => !english.has(slug));
    expect(missing.length, `missing English profiles (${missing.length}): ${missing.join(", ")}`).toBe(0);
  });

  it("has valid facts in every profile", () => {
    const out: string[] = [];
    for (const [slug, { fm }] of english) {
      const at = `en/${slug}`;
      for (const key of Object.keys(fm)) {
        if (!(ENGLISH_PROFILE_KEYS as readonly string[]).includes(key)) out.push(`${at}: unexpected key '${key}'`);
      }
      for (const key of ENGLISH_PROFILE_KEYS) if (!(key in fm)) out.push(`${at}: missing '${key}'`);

      const alts: unknown[] = Array.isArray(fm.alternatives) ? fm.alternatives : [];
      if (alts.length < 3 || alts.length > 5) out.push(`${at}: alternatives has ${alts.length} items, expected 3–5`);
      if (new Set(alts).size !== alts.length) out.push(`${at}: duplicate alternatives`);
      for (const alt of alts) {
        if (alt === slug) out.push(`${at}: lists itself as an alternative`);
        else if (!slugSet.has(String(alt))) out.push(`${at}: alternative '${alt}' is not a tool slug`);
      }

      const platforms: unknown[] = Array.isArray(fm.platforms) ? fm.platforms : [];
      if (!platforms.length) out.push(`${at}: platforms missing`);
      for (const p of platforms) if (!(PLATFORMS as readonly unknown[]).includes(p)) out.push(`${at}: unknown platform '${p}'`);

      const pricing = fm.pricing ?? {};
      if (typeof pricing.freePlan !== "boolean") out.push(`${at}: pricing.freePlan must be a boolean`);
      const hasPrice = pricing.startingPrice !== undefined;
      if (hasPrice && !(typeof pricing.startingPrice === "number" && pricing.startingPrice > 0)) out.push(`${at}: pricing.startingPrice must be > 0`);
      if (hasPrice !== (pricing.currency !== undefined)) out.push(`${at}: pricing.currency must be set exactly when startingPrice is`);
      if (hasPrice !== (pricing.billing !== undefined)) out.push(`${at}: pricing.billing must be set exactly when startingPrice is`);
      if (pricing.billing !== undefined && !["month", "year"].includes(pricing.billing)) out.push(`${at}: pricing.billing must be month or year`);

      const faq: unknown[] = Array.isArray(fm.faq) ? fm.faq : [];
      if (faq.length < 4 || faq.length > 6) out.push(`${at}: faq has ${faq.length} items, expected 4–6`);
      const features: unknown[] = Array.isArray(fm.keyFeatures) ? fm.keyFeatures : [];
      if (features.length < 5 || features.length > 7) out.push(`${at}: keyFeatures has ${features.length} items, expected 5–7`);
      if (/aggregateRating|ratingValue|reviewCount/i.test(readFileSync(path.join(ROOT, "en", `${slug}.profile.md`), "utf8"))) {
        out.push(`${at}: ratings are not allowed`);
      }
    }
    expect(out).toEqual([]);
  });
});

/**
 * Locales whose profile translation is finished. Missing profiles fall back to English at runtime,
 * so a locale is added here only once every tool is translated — that re-arms the completeness guard.
 * During the multi-day rollout, in-progress locales are checked for correctness (below) but not coverage.
 */
const COMPLETE_PROFILE_LOCALES: readonly string[] = ["tr", "fr"];

describe.each(others)("%s", (lang) => {
  it("has a profile for every tool once the locale is marked complete", () => {
    const missing = slugs.filter((slug) => !read(lang, slug));
    if (!COMPLETE_PROFILE_LOCALES.includes(lang)) return; // partial rollout: English fallback covers the rest
    expect(missing.length, `missing ${lang} profiles (${missing.length}): ${missing.join(", ")}`).toBe(0);
  });

  it("mirrors the English structure with text-only keys", () => {
    const out: string[] = [];
    for (const slug of slugs) {
      const local = read(lang, slug);
      if (!local) continue;
      const at = `${lang}/${slug}`;
      for (const key of Object.keys(local.fm)) {
        if (!(LOCALIZED_PROFILE_KEYS as readonly string[]).includes(key)) out.push(`${at}: key '${key}' is not allowed in a localized profile`);
      }
      for (const key of LOCALIZED_PROFILE_KEYS) if (!(key in local.fm)) out.push(`${at}: missing '${key}'`);
      const en = english.get(slug);
      if (!en) {
        out.push(`${at}: no English profile to mirror`);
        continue;
      }
      for (const key of PROFILE_LIST_KEYS) {
        const a = Array.isArray(en.fm[key]) ? en.fm[key].length : 0;
        const b = Array.isArray(local.fm[key]) ? local.fm[key].length : -1;
        if (a !== b) out.push(`${at}: ${key} has ${b < 0 ? "no list" : `${b} items`}, English has ${a}`);
      }
      if (sections(local.body) !== sections(en.body)) {
        out.push(`${at}: ${sections(local.body)} '## ' sections, English has ${sections(en.body)}`);
      }
    }
    expect(out).toEqual([]);
  });
});
