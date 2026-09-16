import { getCollection } from "astro:content";
import { i18n, type Locale } from "@/lib/i18n/config";
import type { DealRecord, LocalizedText, ToolRecord } from "@/lib/deals";

/**
 * Content is authored in English (deals.yaml, tools/*.md, events.yaml). Translations live in
 * src/content/translations/<locale>.json, keyed by id, and are merged in here.
 */
export interface ContentTranslation {
  deals: Record<
    string,
    {
      title: string;
      headline: string;
      value: string;
      audience: string;
      summary: string;
      scope?: string;
      steps?: string[];
      terms?: string[];
    }
  >;
  tools: Record<string, { tagline: string }>;
  events: Record<string, { title: string; description?: string }>;
}

const translationFiles = import.meta.glob<ContentTranslation>("../content/translations/*.json", {
  eager: true,
  import: "default",
});

export const translations: Partial<Record<Locale, ContentTranslation>> = Object.fromEntries(
  Object.entries(translationFiles).map(([path, data]) => [path.split("/").pop()!.replace(".json", ""), data]),
);

const others = i18n.locales.filter((l) => l !== "en");

function merge(en: string, pick: (t: ContentTranslation) => string | undefined): LocalizedText {
  const text: LocalizedText = { en };
  for (const lang of others) {
    const value = translations[lang] && pick(translations[lang]!);
    if (value) text[lang] = value;
  }
  return text;
}

export interface EventRecord {
  id: string;
  date: number;
  endDate?: number;
  title: LocalizedText;
  description?: LocalizedText;
  tool?: string;
  deal?: string;
  kind: "deadline" | "launch" | "sale" | "event";
  url?: string;
}

export async function getTools(): Promise<ToolRecord[]> {
  const entries = await getCollection("tools");
  return entries
    .map(({ id, data, body }) => ({
      slug: id,
      name: data.name,
      vendor: data.vendor,
      category: data.category,
      website: data.website,
      popularityRank: data.popularityRank,
      tagline: merge(data.tagline.en, (t) => t.tools[id]?.tagline),
      affiliate: data.affiliate && {
        ...data.affiliate,
        verifiedAt: data.affiliate.verifiedAt.getTime(),
      },
      referralOnly: data.referralOnly,
      body: body?.trim() || undefined,
    }))
    .sort((a, b) => a.popularityRank - b.popularityRank);
}

export async function getDeals(): Promise<DealRecord[]> {
  const entries = await getCollection("deals");
  return entries.map(({ id, data }) => {
    const t = (pick: (d: ContentTranslation["deals"][string]) => string | undefined) => (tr: ContentTranslation) =>
      tr.deals[id] ? pick(tr.deals[id]) : undefined;
    return {
      id,
      tool: data.tool.id,
      kind: data.kind,
      title: merge(data.title.en, t((d) => d.title)),
      headline: merge(data.headline.en, t((d) => d.headline)),
      value: merge(data.value.en, t((d) => d.value)),
      audience: merge(data.audience.en, t((d) => d.audience)),
      summary: merge(data.summary.en, t((d) => d.summary)),
      scope: data.scope && merge(data.scope.en, t((d) => d.scope)),
      steps: data.steps?.map((step, i) => merge(step.en, t((d) => d.steps?.[i]))),
      terms: data.terms?.map((term, i) => merge(term.en, t((d) => d.terms?.[i]))),
      code: data.code,
      startsAt: data.startsAt.getTime(),
      startKnown: data.startKnown,
      endsAt: data.endsAt?.getTime(),
      ongoing: data.ongoing,
      verifiedAt: data.verifiedAt.getTime(),
      sourceUrl: data.sourceUrl,
      sourceLabel: data.sourceLabel,
      ctaUrl: data.ctaUrl,
      regions: data.regions,
      featured: data.featured,
    };
  });
}

export async function getEvents(): Promise<EventRecord[]> {
  const entries = await getCollection("events");
  return entries
    .map(({ id, data }) => ({
      id,
      date: data.date.getTime(),
      endDate: data.endDate?.getTime(),
      title: merge(data.title.en, (t) => t.events[id]?.title),
      description: data.description && merge(data.description.en, (t) => t.events[id]?.description),
      tool: data.tool?.id,
      deal: data.deal?.id,
      kind: data.kind,
      url: data.url,
    }))
    .sort((a, b) => a.date - b.date);
}

export function toolMap(tools: ToolRecord[]): Map<string, ToolRecord> {
  return new Map(tools.map((t) => [t.slug, t]));
}
