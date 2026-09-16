import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { DEAL_KINDS, TOOL_CATEGORIES } from "@/lib/deals";

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

export const collections = { tools, deals, events };
