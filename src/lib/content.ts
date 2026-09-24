import { getCollection, type CollectionEntry } from "astro:content";
import { i18n, type Locale } from "@/lib/i18n/config";
import type { DealRecord, LocalizedText, ToolRecord } from "@/lib/deals";
import type { ProfileText, ToolProfile } from "@/lib/profiles";

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

type ProfileEntry = CollectionEntry<"toolProfiles">;
type EnglishProfileData = Extract<ProfileEntry["data"], { pricing: unknown }>;
type LocalizedProfileData = Extract<ProfileEntry["data"], { pricingSummary: string }>;

const isLocale = (value: string): value is Locale => (i18n.locales as readonly string[]).includes(value);

function profileText(data: EnglishProfileData | LocalizedProfileData): ProfileText {
  return {
    summary: data.summary,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    bestFor: data.bestFor,
    keyFeatures: data.keyFeatures,
    useCases: data.useCases,
    savingTips: data.savingTips,
    faq: data.faq,
  };
}

/**
 * Loads every profile once and returns a lookup: facts always come from `en/<slug>`, text from
 * `<lang>/<slug>` and falls back to English while a translation is missing, so the build never
 * breaks mid-translation. Structural mistakes (wrong folder, unknown slug, English facts in a
 * locale file, alternatives that are not tools) fail the build with a clear message.
 */
export async function createProfileLookup(): Promise<(slug: string, lang: Locale) => ToolProfile | undefined> {
  const [entries, tools] = await Promise.all([getCollection("toolProfiles"), getCollection("tools")]);
  const slugs = new Set(tools.map((t) => t.id));
  const english = new Map<string, EnglishProfileData>();
  const localized = new Map<string, LocalizedProfileData>();

  for (const { id, data } of entries) {
    const [locale, slug, ...rest] = id.split("/");
    const where = `src/content/tool-profiles/${id}.md`;
    if (rest.length || !slug || !isLocale(locale)) throw new Error(`${where}: expected tool-profiles/<locale>/<slug>.md`);
    if (!slugs.has(slug)) throw new Error(`${where}: "${slug}" is not a tool in src/content/tools`);
    const isEnglishShape = "pricing" in data;
    if (locale === "en") {
      if (!isEnglishShape) throw new Error(`${where}: English profiles need the facts (pricing, platforms, alternatives, sources, reviewedAt)`);
      for (const alt of data.alternatives) {
        if (!slugs.has(alt.id)) throw new Error(`${where}: alternative "${alt.id}" is not a tool in src/content/tools`);
        if (alt.id === slug) throw new Error(`${where}: a tool cannot be its own alternative`);
      }
      english.set(slug, data);
    } else {
      if (isEnglishShape) throw new Error(`${where}: localized profiles carry text only (use pricingSummary; facts live in en/${slug}.md)`);
      localized.set(id, data);
    }
  }

  return (slug, lang) => {
    const en = english.get(slug);
    if (!en) return undefined;
    const translation = lang === "en" ? undefined : localized.get(`${lang}/${slug}`);
    const text = translation ?? en;
    const textLang: Locale = translation ? lang : "en";
    return {
      slug,
      ...profileText(text),
      pricing: {
        freePlan: en.pricing.freePlan,
        freeTrial: en.pricing.freeTrial,
        startingPrice: en.pricing.startingPrice,
        currency: en.pricing.currency,
        billing: en.pricing.billing,
        summary: translation ? translation.pricingSummary : en.pricing.summary,
        asOf: en.pricing.asOf.getTime(),
      },
      platforms: en.platforms,
      alternatives: en.alternatives.map((alt) => alt.id),
      sources: en.sources,
      reviewedAt: en.reviewedAt.getTime(),
      textLang,
      bodyId: `${textLang}/${slug}`,
    };
  };
}

/** One merged profile (English facts + text in `lang`, English text as fallback). */
export async function getToolProfile(slug: string, lang: Locale): Promise<ToolProfile | undefined> {
  return (await createProfileLookup())(slug, lang);
}

/** English profiles by tool slug (facts + English text), e.g. for llms-full.txt. */
export async function getToolProfiles(): Promise<Map<string, ToolProfile>> {
  const [lookup, tools] = await Promise.all([createProfileLookup(), getCollection("tools")]);
  const profiles = new Map<string, ToolProfile>();
  for (const { id } of tools) {
    const profile = lookup(id, "en");
    if (profile) profiles.set(id, profile);
  }
  return profiles;
}
