import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  CONSENT_KEY,
  CONSENT_MAX_AGE_DAYS,
  CONSENT_VERSION,
  STORAGE_INVENTORY,
  cookieDomains,
  isAnalyticsCookie,
  parseConsent,
} from "@/lib/consent";

const DAY = 24 * 60 * 60 * 1000;
const CONSENT_MODULE = path.normalize("src/lib/consent.ts");
/** The CSP generator names GA's hosts in its ANALYTICS allowlist so gtag.js may run once allowed; it never loads them. */
const CSP_GENERATOR = path.normalize("integrations/cpanel-htaccess.mjs");

/** Every source file that ends up in the site (pages, islands, scripts, integrations, PHP). */
function sources(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return sources(file);
    return /\.(astro|tsx?|mjs|js|php)$/.test(entry.name) ? [file] : [];
  });
}
const files = ["src", "public", "integrations"].flatMap(sources).map((file) => ({ file, text: readFileSync(file, "utf8") }));

describe("stored consent", () => {
  const now = Date.parse("2026-11-01T12:00:00Z");
  const record = (over: Record<string, unknown> = {}) =>
    JSON.stringify({ analytics: true, at: "2026-10-20T09:00:00.000Z", version: CONSENT_VERSION, ...over });

  it("accepts a current choice either way", () => {
    expect(parseConsent(record(), now)?.analytics).toBe(true);
    expect(parseConsent(record({ analytics: false }), now)?.analytics).toBe(false);
  });

  it("asks again when the choice is missing, malformed, from another policy version or too old", () => {
    expect(parseConsent(null, now)).toBeNull();
    expect(parseConsent("yes", now)).toBeNull();
    expect(parseConsent(record({ analytics: "true" }), now)).toBeNull();
    expect(parseConsent(record({ at: "not a date" }), now)).toBeNull();
    expect(parseConsent(record({ version: "2000-01-01" }), now)).toBeNull();
    expect(parseConsent(record({ at: new Date(now - (CONSENT_MAX_AGE_DAYS + 1) * DAY).toISOString() }), now)).toBeNull();
    expect(parseConsent(record({ at: new Date(now + 2 * DAY).toISOString() }), now)).toBeNull();
  });
});

describe("analytics cookies", () => {
  it("recognises GA cookies only", () => {
    for (const name of ["_ga", "_ga_MN3F77SZVF", "_gid", "_gat_gtag_G_MN3F77SZVF"]) expect(isAnalyticsCookie(name)).toBe(true);
    for (const name of ["LOCALE", "pc-consent", "_gabc", "ga"]) expect(isAnalyticsCookie(name)).toBe(false);
  });

  it("deletes them on the host and every parent domain", () => {
    expect(cookieDomains("promoclock.co")).toEqual(["promoclock.co"]);
    expect(cookieDomains("www.promoclock.co")).toEqual(["www.promoclock.co", "promoclock.co"]);
    expect(cookieDomains("localhost")).toEqual([]);
  });
});

describe("consent gate", () => {
  it("loads Google Analytics only from the consent module", () => {
    const offenders = files
      .filter(({ file, text }) => {
        if (path.normalize(file) === CONSENT_MODULE) return false;
        const checked = path.normalize(file) === CSP_GENERATOR ? text.replace(/const ANALYTICS = \{[\s\S]*?\n\};/, "") : text;
        return /googletagmanager\.com|google-analytics\.com|\bgtag\s*\(/.test(checked);
      })
      .map(({ file }) => file);
    expect(offenders).toEqual([]);
  });

  it("lists every cookie and storage key the site writes on the privacy page", () => {
    const listed = new Set<string>(STORAGE_INVENTORY.flatMap((item) => [...item.names]));
    const written = new Set<string>([CONSENT_KEY]);
    for (const { text } of files) {
      for (const m of text.matchAll(/(?:localStorage|sessionStorage)\.setItem\(\s*["'`]([^"'`]+)["'`]/g)) written.add(m[1]);
      for (const m of text.matchAll(/writeFlag\(\s*["'`]([^"'`]+)["'`]/g)) written.add(m[1]);
      for (const m of text.matchAll(/document\.cookie\s*=\s*["'`]([A-Za-z0-9_-]+)=/g)) written.add(m[1]);
      for (const m of text.matchAll(/setcookie\(\s*["']([^"']+)["']/g)) written.add(m[1]);
    }
    expect([...written].filter((name) => !listed.has(name))).toEqual([]);
    // And nothing stale: every first-party entry is still written somewhere.
    const firstParty = STORAGE_INVENTORY.filter((item) => item.provider === "PromoClock").flatMap((item) => [...item.names]);
    expect(firstParty.filter((name) => !written.has(name))).toEqual([]);
  });
});
