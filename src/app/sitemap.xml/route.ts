import { NextResponse } from "next/server";
import { i18n } from "@/lib/i18n/config";

export function GET() {
  const baseUrl = "https://promoclock.co";
  
  const urls = i18n.locales.map((locale) => {
    const priority = locale === "en" ? "1.0" : "0.8";
    return `  <url>
    <loc>${baseUrl}/${locale}</loc>
    <lastmod>2026-03-15T00:00:00.000Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
