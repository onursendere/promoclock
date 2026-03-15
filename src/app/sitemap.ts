import type { MetadataRoute } from "next";
import { i18n } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://promoclock.co";

  return i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date("2026-03-15"),
    changeFrequency: "daily" as const,
    priority: locale === "en" ? 1.0 : 0.8,
  }));
}
