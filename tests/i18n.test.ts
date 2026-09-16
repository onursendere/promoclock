import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import yaml from "js-yaml";
import { i18n } from "@/lib/i18n/config";

const read = (file: string) => JSON.parse(readFileSync(path.resolve(file), "utf8"));
const en = read("src/dictionaries/en.json");
const others = i18n.locales.filter((l) => l !== "en");

const placeholders = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();

/** Walk two values in parallel and collect structural differences. */
function diff(a: unknown, b: unknown, at: string, out: string[]) {
  if (typeof a === "string") {
    if (typeof b !== "string" || !b.trim()) return out.push(`${at}: missing or empty`);
    if (placeholders(a).join() !== placeholders(b).join()) out.push(`${at}: placeholders ${placeholders(a)} ≠ ${placeholders(b)}`);
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || b.length !== a.length) return out.push(`${at}: expected ${a.length} items`);
    a.forEach((item, i) => diff(item, b[i], `${at}[${i}]`, out));
    return;
  }
  if (a && typeof a === "object") {
    if (!b || typeof b !== "object") return out.push(`${at}: missing`);
    for (const key of Object.keys(a)) diff((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key], `${at}.${key}`, out);
    for (const key of Object.keys(b)) if (!(key in (a as object))) out.push(`${at}.${key}: unexpected key`);
    return;
  }
  if (typeof a !== typeof b) out.push(`${at}: type mismatch`);
}

/** English content reference built from the authored sources. */
function contentReference() {
  const deals = yaml.load(readFileSync("src/content/deals.yaml", "utf8")) as Record<string, any>[];
  const events = yaml.load(readFileSync("src/content/events.yaml", "utf8")) as Record<string, any>[];
  const ref: Record<string, any> = { deals: {}, tools: {}, events: {} };
  for (const d of deals) {
    const e: Record<string, unknown> = {};
    for (const k of ["title", "headline", "value", "audience", "summary"]) e[k] = d[k].en;
    if (d.scope) e.scope = d.scope.en;
    if (d.steps) e.steps = d.steps.map((s: any) => s.en);
    if (d.terms) e.terms = d.terms.map((s: any) => s.en);
    ref.deals[d.id] = e;
  }
  for (const file of readdirSync("src/content/tools")) {
    const tagline = readFileSync(path.join("src/content/tools", file), "utf8").match(/tagline:\n {2}en: (".*")/)![1];
    ref.tools[file.replace(/\.md$/, "")] = { tagline: JSON.parse(tagline) };
  }
  for (const ev of events) {
    ref.events[ev.id] = { title: ev.title.en, ...(ev.description ? { description: ev.description.en } : {}) };
  }
  return ref;
}

describe.each(others)("%s", (lang) => {
  it("translates every UI string with matching placeholders", () => {
    const out: string[] = [];
    diff(en, read(`src/dictionaries/${lang}.json`), lang, out);
    expect(out).toEqual([]);
  });

  it("translates every deal, tool and event", () => {
    const out: string[] = [];
    diff(contentReference(), read(`src/content/translations/${lang}.json`), lang, out);
    expect(out).toEqual([]);
  });
});
