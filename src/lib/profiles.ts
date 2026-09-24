import type { Locale } from "@/lib/i18n/config";
import type { HubDictionary } from "@/lib/i18n/dictionaries";
import { format } from "@/lib/i18n/format";
import type { Platform, ToolCategory } from "@/lib/deals";

/**
 * Tool profiles (src/content/tool-profiles/<locale>/<slug>.md).
 * English files hold every fact plus the English text; other locales hold only the keys in
 * LOCALIZED_PROFILE_KEYS. The loader (src/lib/content.ts) merges both into a ToolProfile.
 * Pure module: no astro imports, so tests and llms.txt can use it.
 */

export const LOCALIZED_PROFILE_KEYS = [
  "summary",
  "metaTitle",
  "metaDescription",
  "bestFor",
  "keyFeatures",
  "useCases",
  "pricingSummary",
  "savingTips",
  "faq",
] as const;

export const ENGLISH_PROFILE_KEYS = [
  "summary",
  "metaTitle",
  "metaDescription",
  "bestFor",
  "keyFeatures",
  "useCases",
  "pricing",
  "platforms",
  "savingTips",
  "faq",
  "alternatives",
  "sources",
  "reviewedAt",
] as const;

/** Lists whose length (and order) every locale must mirror from English. */
export const PROFILE_LIST_KEYS = ["bestFor", "keyFeatures", "useCases", "savingTips", "faq"] as const;

export type BillingPeriod = "month" | "year";

export interface ProfilePricing {
  freePlan: boolean;
  freeTrial?: boolean;
  /** Cheapest paid individual plan, only when verified. */
  startingPrice?: number;
  currency?: string;
  billing?: BillingPeriod;
  /** Localized. */
  summary: string;
  /** Epoch ms of the day the pricing page was checked. */
  asOf: number;
}

/** Localized text of a profile (English or a translation). */
export interface ProfileText {
  summary: string;
  metaTitle: string;
  metaDescription: string;
  bestFor: string[];
  keyFeatures: { name: string; description: string }[];
  useCases: string[];
  savingTips: string[];
  faq: { q: string; a: string }[];
}

/** Language-independent facts, always from the English file. */
export interface ProfileFacts {
  pricing: Omit<ProfilePricing, "summary">;
  platforms: Platform[];
  /** Tool slugs, validated against src/content/tools. */
  alternatives: string[];
  sources: string[];
  reviewedAt: number;
}

/** Merged record used by the tool page: English facts + text in `textLang`. */
export interface ToolProfile extends ProfileText, ProfileFacts {
  slug: string;
  pricing: ProfilePricing;
  /** Locale the text actually comes from ("en" while a translation is missing). */
  textLang: Locale;
  /** Collection id of the entry whose markdown body should be rendered, e.g. "tr/claude". */
  bodyId: string;
}

/** schema.org applicationCategory for our directory categories. */
export const SCHEMA_CATEGORY: Record<ToolCategory, string> = {
  chat: "UtilitiesApplication",
  coding: "DeveloperApplication",
  image: "DesignApplication",
  video: "MultimediaApplication",
  audio: "MultimediaApplication",
  writing: "BusinessApplication",
  productivity: "BusinessApplication",
  agents: "BusinessApplication",
};

const OPERATING_SYSTEMS: Partial<Record<Platform, string>> = {
  web: "Web",
  ios: "iOS",
  android: "Android",
  macos: "macOS",
  windows: "Windows",
  linux: "Linux",
};

/** "Web, iOS, macOS" — only real operating systems, in PLATFORMS order of the profile. */
export const operatingSystems = (platforms: Platform[]) =>
  platforms.flatMap((p) => (OPERATING_SYSTEMS[p] ? [OPERATING_SYSTEMS[p]] : [])).join(", ");

export function formatPrice(amount: number, currency: string, lang: Locale | string): string {
  return new Intl.NumberFormat(lang, {
    style: "currency",
    currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/** "$20/month" in the page language, or undefined when no verified price exists. */
export function startingPriceLabel(
  pricing: Pick<ProfilePricing, "startingPrice" | "currency" | "billing">,
  lang: Locale,
  toolPage: HubDictionary["toolPage"],
): string | undefined {
  const { startingPrice, currency, billing } = pricing;
  if (startingPrice === undefined || !currency || !billing) return undefined;
  const price = formatPrice(startingPrice, currency, lang);
  return format(billing === "year" ? toolPage.perYear : toolPage.perMonth, { price });
}

/** "https://www.claude.com/pricing/" → { host: "claude.com", path: "/pricing" } for source links. */
export function sourceLabel(url: string): { host: string; path: string } {
  try {
    const { hostname, pathname } = new URL(url);
    return { host: hostname.replace(/^www\./, ""), path: pathname.replace(/\/+$/, "") };
  } catch {
    return { host: url, path: "" };
  }
}
