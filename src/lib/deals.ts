import type { Locale } from "@/lib/i18n/config";

export const DEAL_KINDS = [
  "limit-boost",
  "limit-change",
  "discount",
  "student",
  "free-trial",
  "launch",
  "seasonal",
] as const;
export type DealKind = (typeof DEAL_KINDS)[number];

export const TOOL_CATEGORIES = [
  "chat",
  "coding",
  "image",
  "video",
  "audio",
  "writing",
  "productivity",
  "agents",
] as const;
export type ToolCategory = (typeof TOOL_CATEGORIES)[number];

export type LocalizedText = { en: string } & Partial<Record<Locale, string>>;

/** Serializable deal shape shared by pages, islands, tests and /api/deals.json. */
export interface DealRecord {
  id: string;
  tool: string;
  kind: DealKind;
  title: LocalizedText;
  headline: LocalizedText;
  value: LocalizedText;
  audience: LocalizedText;
  summary: LocalizedText;
  scope?: LocalizedText;
  steps?: LocalizedText[];
  terms?: LocalizedText[];
  code?: string;
  startsAt: number;
  /** False when only the deadline is known (startsAt is then the first-seen date). */
  startKnown?: boolean;
  endsAt?: number;
  /** Standing programs (e.g. student plans) that stay live until they get an end date. */
  ongoing?: boolean;
  verifiedAt: number;
  sourceUrl: string;
  sourceLabel: string;
  ctaUrl?: string;
  regions?: string[];
  featured?: boolean;
}

export interface ToolRecord {
  slug: string;
  name: string;
  vendor: string;
  category: ToolCategory;
  website: string;
  popularityRank: number;
  tagline: LocalizedText;
  affiliate?: {
    url: string;
    network: string;
    commission: string;
    cookieDays?: number;
    verifiedAt: number;
  };
  referralOnly?: boolean;
  body?: string;
}

export type DealStatus = "upcoming" | "active" | "ending-soon" | "ended" | "past";

const HOUR = 3_600_000;
const DAY = 24 * HOUR;
export const ENDING_SOON_MS = 3 * DAY;
/** Open-ended news (limit changes, launches) stays "live" this long. */
export const NEWS_FRESH_MS = 45 * DAY;

export function localize(text: LocalizedText | undefined, lang: Locale): string {
  if (!text) return "";
  return text[lang] ?? text.en;
}

export function getDealStatus(
  deal: Pick<DealRecord, "startsAt" | "endsAt" | "ongoing">,
  now: number,
): DealStatus {
  if (deal.startsAt > now) return "upcoming";
  if (deal.endsAt !== undefined) {
    if (deal.endsAt <= now) return "ended";
    if (deal.endsAt - now <= ENDING_SOON_MS) return "ending-soon";
    return "active";
  }
  if (deal.ongoing) return "active";
  return now - deal.startsAt <= NEWS_FRESH_MS ? "active" : "past";
}

export const isLive = (status: DealStatus) => status === "active" || status === "ending-soon";

/** Live first (soonest deadline first, open-ended by recency), then upcoming. */
export function sortLive(deals: DealRecord[]): DealRecord[] {
  return [...deals].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    const ae = a.endsAt ?? Number.POSITIVE_INFINITY;
    const be = b.endsAt ?? Number.POSITIVE_INFINITY;
    if (ae !== be) return ae - be;
    return b.startsAt - a.startsAt;
  });
}

export function partitionDeals(deals: DealRecord[], now: number) {
  const live: DealRecord[] = [];
  const upcoming: DealRecord[] = [];
  const archive: DealRecord[] = [];
  for (const deal of deals) {
    const status = getDealStatus(deal, now);
    if (isLive(status)) live.push(deal);
    else if (status === "upcoming") upcoming.push(deal);
    else archive.push(deal);
  }
  return {
    live: sortLive(live),
    upcoming: [...upcoming].sort((a, b) => a.startsAt - b.startsAt),
    archive: [...archive].sort((a, b) => (b.endsAt ?? b.startsAt) - (a.endsAt ?? a.startsAt)),
  };
}

export type ClaudeHeroMode = "promo" | "peak" | "policy";

export interface ClaudeHeroState {
  mode: ClaudeHeroMode;
  promo?: DealRecord;
  latestChange?: DealRecord;
}

/**
 * Hero priority: a live Claude limit boost beats everything; otherwise the
 * peak-hours clock (if enabled); otherwise the latest limit change on its own.
 */
export function getClaudeHeroState(
  deals: DealRecord[],
  now: number,
  peakEnabled: boolean,
): ClaudeHeroState {
  const claude = deals.filter((d) => d.tool === "claude");
  const promo = sortLive(
    claude.filter((d) => d.kind === "limit-boost" && isLive(getDealStatus(d, now))),
  )[0];
  const latestChange = claude
    .filter((d) => d.id !== promo?.id && d.startsAt <= now && now - d.startsAt <= NEWS_FRESH_MS)
    .filter((d) => d.kind === "limit-change" || d.kind === "limit-boost" || d.kind === "launch")
    .sort((a, b) => b.startsAt - a.startsAt)[0];

  const mode: ClaudeHeroMode = promo ? "promo" : peakEnabled ? "peak" : "policy";
  return { mode, promo, latestChange };
}

/** Latest verification date across deals — used as dateModified. */
export const lastVerified = (deals: DealRecord[]) => Math.max(...deals.map((d) => d.verifiedAt));

/** Outbound URL for a tool: the tracked /go/ redirect. */
export const goPath = (slug: string) => `/go/${slug}/`;

export function dealHref(deal: DealRecord, tool: ToolRecord | undefined): { href: string; sponsored: boolean } {
  if (deal.ctaUrl) return { href: deal.ctaUrl, sponsored: false };
  if (tool) return { href: goPath(tool.slug), sponsored: Boolean(tool.affiliate) };
  return { href: deal.sourceUrl, sponsored: false };
}
