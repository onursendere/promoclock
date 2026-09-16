// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cpanelHtaccess from "./integrations/cpanel-htaccess.mjs";
import { readFileSync } from "node:fs";
import { i18n } from "./src/lib/i18n/config.ts";

const locales = i18n.locales;
// Hub pages exist in every locale but only translated ones belong in the sitemap;
// the rest canonicalise to English (see BaseLayout).
const hubLocales = locales.filter(
  (l) => l === "en" || "hub" in JSON.parse(readFileSync(new URL(`./src/dictionaries/${l}.json`, import.meta.url), "utf8")),
);
const HUB_SECTIONS = /^\/([^/]+)\/(deals|tools|calendar|affiliate-disclosure|about)\//;
const staging = process.env.PUBLIC_STAGING === "true";

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
        const hub = pathname.match(HUB_SECTIONS);
        return !hub || /** @type {readonly string[]} */ (hubLocales).includes(hub[1]);
      },
    }),
    cpanelHtaccess({ locales, defaultLocale: "en", staging }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
