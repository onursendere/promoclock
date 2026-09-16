import { getCollection } from "astro:content";
import type { DealRecord, ToolRecord } from "@/lib/deals";

export interface EventRecord {
  id: string;
  date: number;
  endDate?: number;
  title: DealRecord["title"];
  description?: DealRecord["summary"];
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
      tagline: data.tagline as ToolRecord["tagline"],
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
  return entries.map(({ id, data }) => ({
    id,
    tool: data.tool.id,
    kind: data.kind,
    title: data.title as DealRecord["title"],
    summary: data.summary as DealRecord["summary"],
    scope: data.scope as DealRecord["scope"],
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
  }));
}

export async function getEvents(): Promise<EventRecord[]> {
  const entries = await getCollection("events");
  return entries
    .map(({ id, data }) => ({
      id,
      date: data.date.getTime(),
      endDate: data.endDate?.getTime(),
      title: data.title as EventRecord["title"],
      description: data.description as EventRecord["description"],
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
