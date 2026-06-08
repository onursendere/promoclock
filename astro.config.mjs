import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
// Tailwind v4 is processed via PostCSS (postcss.config.mjs) rather than the
// @tailwindcss/vite plugin, which is not yet compatible with Astro 6's
// Rolldown-based Vite.
export default defineConfig({
  site: "https://promoclock.co",
  output: "static",
  trailingSlash: "ignore",
  integrations: [react()],
});
