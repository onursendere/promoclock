// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cpanelHtaccess from "./integrations/cpanel-htaccess.mjs";
import blogMarkdown from "./integrations/blog-markdown.mjs";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { i18n } from "./src/lib/i18n/config.ts";

const locales = i18n.locales;
// Hub pages exist in every locale but only translated ones belong in the sitemap;
// the rest canonicalise to English (see BaseLayout).
const hubLocales = locales.filter(
  (l) => l === "en" || "hub" in JSON.parse(readFileSync(new URL(`./src/dictionaries/${l}.json`, import.meta.url), "utf8")),
);
const HUB_SECTIONS = /^\/([^/]+)\/(deals|tools|calendar|affiliate-disclosure|about|blog)\//;
const BLOG_POST = /^\/([^/]+)\/blog\/([^/]+)\/$/;
const staging = process.env.PUBLIC_STAGING === "true";

// Blog posts: an untranslated post renders English under its locale and canonicalises to English,
// so only real translations go in the sitemap. lastmod comes from the English `updatedAt`.
const blogDir = new URL("./src/content/blog/", import.meta.url);
const hasPost = (/** @type {string} */ lang, /** @type {string} */ slug) => existsSync(new URL(`${lang}/${slug}.md`, blogDir));
const postUpdatedAt = new Map(
  (existsSync(new URL("en/", blogDir)) ? readdirSync(new URL("en/", blogDir)) : [])
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const date = readFileSync(new URL(`en/${f}`, blogDir), "utf8").match(/^updatedAt:\s*"?(\d{4}-\d{2}-\d{2})/m)?.[1];
      return [f.replace(/\.md$/, ""), date ? new Date(`${date}T00:00:00Z`).toISOString() : undefined];
    }),
);

export default defineConfig({
  site: "https://promoclock.co",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: Object.fromEntries(locales.map((l) => [l, l])),
      },
      filter: (page) => {
        const { pathname } = new URL(page);
        if (pathname === "/" || pathname.startsWith("/go/") || pathname.startsWith("/og/")) return false;
        const post = pathname.match(BLOG_POST);
        if (post && !hasPost(post[1], post[2])) return false;
        const hub = pathname.match(HUB_SECTIONS);
        return !hub || /** @type {readonly string[]} */ (hubLocales).includes(hub[1]);
      },
      serialize: (item) => {
        const post = new URL(item.url).pathname.match(BLOG_POST);
        const lastmod = post && postUpdatedAt.get(post[2]);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
    blogMarkdown(),
    cpanelHtaccess({ locales, defaultLocale: "en", staging }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
