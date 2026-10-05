import { execFileSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { i18n } from "@/lib/i18n/config";
import { countWords, licenseLabel, localizeHref, plainText, readingMinutes } from "@/lib/blog";

/**
 * Blog posts: src/content/blog/<locale>/<slug>.md. English holds the facts; translations mirror
 * its structure (validated by scripts/check-post.mjs). Locales listed here must have every post.
 */
const COMPLETE_BLOG_LOCALES: readonly string[] = i18n.locales;

const ROOT = "src/content/blog";
const english = existsSync(path.join(ROOT, "en"))
  ? readdirSync(path.join(ROOT, "en")).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, "")).sort()
  : [];
const postFiles = i18n.locales.flatMap((locale) =>
  existsSync(path.join(ROOT, locale))
    ? readdirSync(path.join(ROOT, locale)).filter((f) => f.endsWith(".md")).map((f) => path.join(ROOT, locale, f))
    : [],
);

describe("blog posts", () => {
  it("live only in known locale folders (plus images/)", () => {
    const unknown = readdirSync(ROOT).filter((dir) => dir !== "images" && !(i18n.locales as readonly string[]).includes(dir));
    expect(unknown).toEqual([]);
  });

  it("pass scripts/check-post.mjs", () => {
    let output = "";
    let failed = false;
    try {
      output = execFileSync("node", ["scripts/check-post.mjs", ...postFiles], { encoding: "utf8" });
    } catch (error) {
      failed = true;
      output = String((error as { stdout?: string }).stdout ?? error);
    }
    expect(failed, output.split("\n").filter((l) => /FAIL|ERROR/.test(l)).join("\n")).toBe(false);
  });

  it.each(COMPLETE_BLOG_LOCALES)("%s has every post", (locale) => {
    const missing = english.filter((slug) => !existsSync(path.join(ROOT, locale, `${slug}.md`)));
    expect(missing).toEqual([]);
  });
});

describe("blog helpers", () => {
  it("localizes locale-neutral internal links only", () => {
    expect(localizeHref("/tools/claude/", "tr")).toBe("/tr/tools/claude/");
    expect(localizeHref("/", "ja")).toBe("/ja/");
    expect(localizeHref("/#developer-tools", "de")).toBe("/de/#developer-tools");
    expect(localizeHref("/en/tools/claude/", "tr")).toBe("/en/tools/claude/");
    expect(localizeHref("/api/status", "tr")).toBe("/api/status");
    expect(localizeHref("https://claude.com/pricing", "tr")).toBe("https://claude.com/pricing");
  });

  it("counts words in spaced and unspaced scripts", () => {
    expect(countWords(plainText("Claude [Pro](/tools/claude/) costs **$20** a month."), "en")).toBe(6);
    expect(countWords("Claudeのピーク時間帯は平日です。", "ja")).toBeGreaterThan(3);
    expect(readingMinutes(100)).toBe(1);
    expect(readingMinutes(1700)).toBe(7);
  });

  it("labels image licenses", () => {
    expect(licenseLabel("https://unsplash.com/license")).toBe("Unsplash License");
    expect(licenseLabel("https://creativecommons.org/publicdomain/zero/1.0/")).toBe("CC0");
    expect(licenseLabel("https://creativecommons.org/licenses/by-sa/4.0/")).toBe("CC BY-SA 4.0");
  });
});
