// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cpanelHtaccess from "./integrations/cpanel-htaccess.mjs";
import { i18n } from "./src/lib/i18n/config.ts";

const locales = i18n.locales;
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
      filter: (page) => !page.includes("/go/") && !page.endsWith("/404/") && page !== "https://promoclock.co/",
    }),
    cpanelHtaccess({ locales, defaultLocale: "en", staging }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
