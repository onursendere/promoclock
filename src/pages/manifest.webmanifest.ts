import type { APIRoute } from "astro";
import { SITE_NAME } from "@/lib/site";

/** Web app manifest: name, colours and icons for "Add to Home Screen" and browser UI. */
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: `${SITE_NAME} — Claude peak hours and AI deals`,
      short_name: SITE_NAME,
      description: "Claude peak hours, Claude limit changes and verified deals across 100 AI tools.",
      lang: "en",
      dir: "ltr",
      start_url: "/",
      scope: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
        { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
      ],
    }),
    { headers: { "Content-Type": "application/manifest+json; charset=utf-8" } },
  );
