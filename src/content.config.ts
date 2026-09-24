import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { DEAL_KINDS, PLATFORMS, TOOL_CATEGORIES } from "@/lib/deals";

const localizedText = z
  .object({ en: z.string().min(1) })
  .catchall(z.string().min(1));

const tools = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/tools" }),
  schema: z.object({
    name: z.string(),
    vendor: z.string(),
    category: z.enum(TOOL_CATEGORIES),
    website: z.url(),
    popularityRank: z.number().int().positive(),
    tagline: localizedText,
    affiliate: z
      .object({
        url: z.url(),
        network: z.string(),
        commission: z.string(),
        cookieDays: z.number().int().positive().optional(),
        verifiedAt: z.coerce.date(),
      })
      .optional(),
    referralOnly: z.boolean().optional(),
  }),
});

const deals = defineCollection({
  loader: file("src/content/deals.yaml"),
  schema: z.object({
    tool: reference("tools"),
    kind: z.enum(DEAL_KINDS),
    /** Full, search-friendly title (deal page H1). */
    title: localizedText,
    /** Short card title, ≤ 60 characters. */
    headline: localizedText,
    /** The offer in a few words, e.g. "4 months free", "+25% weekly". */
    value: localizedText,
    /** Who it is for, e.g. "US college students". */
    audience: localizedText,
    /** Answer-first summary: 1–2 sentences. */
    summary: localizedText,
    scope: localizedText.optional(),
    steps: z.array(localizedText).optional(),
    terms: z.array(localizedText).optional(),
    code: z.string().optional(),
    startsAt: z.coerce.date(),
    startKnown: z.boolean().optional(),
    endsAt: z.coerce.date().optional(),
    ongoing: z.boolean().optional(),
    verifiedAt: z.coerce.date(),
    sourceUrl: z.url(),
    sourceLabel: z.string(),
    ctaUrl: z.url().optional(),
    regions: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

const events = defineCollection({
  loader: file("src/content/events.yaml"),
  schema: z.object({
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    title: localizedText,
    description: localizedText.optional(),
    tool: reference("tools").optional(),
    deal: reference("deals").optional(),
    kind: z.enum(["deadline", "launch", "sale", "event"]),
    url: z.url().optional(),
  }),
});

/**
 * Rich tool profiles: `tool-profiles/<locale>/<slug>.profile.md` (id = "<locale>/<slug>").
 * English files carry the facts (pricing numbers, platforms, alternatives, sources, reviewedAt)
 * plus the English text; other locales carry only localized text. See src/lib/profiles.ts.
 */
const keyFeature = z.strictObject({ name: z.string().min(1), description: z.string().min(1) });
const faqItem = z.strictObject({ q: z.string().min(1), a: z.string().min(1) });
const profileText = {
  summary: z.string().min(1),
  metaTitle: z.string().min(1).max(70),
  metaDescription: z.string().min(1).max(200),
  bestFor: z.array(z.string().min(1)).min(2).max(4),
  keyFeatures: z.array(keyFeature).min(5).max(7),
  useCases: z.array(z.string().min(1)).min(3).max(5),
  savingTips: z.array(z.string().min(1)).max(4),
  faq: z.array(faqItem).min(4).max(6),
};

const englishProfile = z.strictObject({
  ...profileText,
  pricing: z
    .strictObject({
      freePlan: z.boolean(),
      freeTrial: z.boolean().optional(),
      startingPrice: z.number().positive().optional(),
      currency: z.string().regex(/^[A-Z]{3}$/).optional(),
      billing: z.enum(["month", "year"]).optional(),
      summary: z.string().min(1),
      asOf: z.coerce.date(),
    })
    .refine((p) => p.startingPrice === undefined || (p.currency !== undefined && p.billing !== undefined), {
      message: "pricing.currency and pricing.billing are required with pricing.startingPrice",
    }),
  platforms: z
    .array(z.enum(PLATFORMS))
    .min(1)
    .refine((list) => new Set(list).size === list.length, { message: "platforms: duplicates" }),
  alternatives: z
    .array(reference("tools"))
    .min(3)
    .max(5)
    .refine((list) => new Set(list.map((r) => r.id)).size === list.length, { message: "alternatives: duplicates" }),
  sources: z.array(z.string().regex(/^https:\/\/\S+$/, "sources: https URL required")).min(1).max(6),
  reviewedAt: z.coerce.date(),
});

const localizedProfile = z.strictObject({
  ...profileText,
  pricingSummary: z.string().min(1),
});

const toolProfiles = defineCollection({
  loader: glob({
    pattern: "**/*.profile.md",
    base: "./src/content/tool-profiles",
    // Keep the locale folder's case ("zh-CN/cursor"); the default id generator lowercases it.
    generateId: ({ entry }) => entry.replace(/\.profile\.md$/, ""),
  }),
  schema: z.union([englishProfile, localizedProfile]),
});

export const collections = { tools, deals, events, toolProfiles };
