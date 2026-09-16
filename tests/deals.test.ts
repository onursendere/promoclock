import { describe, expect, it } from "vitest";
import {
  ENDING_SOON_MS,
  NEWS_FRESH_MS,
  dealHref,
  getClaudeHeroState,
  getDealStatus,
  localize,
  partitionDeals,
  type DealRecord,
  type ToolRecord,
} from "@/lib/deals";
import { localePath, switchLocalePath } from "@/lib/seo";

const DAY = 86_400_000;
const NOW = Date.parse("2026-09-16T12:00:00Z");

function deal(overrides: Partial<DealRecord>): DealRecord {
  return {
    id: "d",
    tool: "claude",
    kind: "discount",
    title: { en: "Title" },
    summary: { en: "Summary" },
    startsAt: NOW - DAY,
    verifiedAt: NOW,
    sourceUrl: "https://example.com",
    sourceLabel: "Example",
    ...overrides,
  };
}

describe("getDealStatus", () => {
  it("covers upcoming, active, ending-soon and ended", () => {
    expect(getDealStatus(deal({ startsAt: NOW + 1 }), NOW)).toBe("upcoming");
    expect(getDealStatus(deal({ endsAt: NOW + 10 * DAY }), NOW)).toBe("active");
    expect(getDealStatus(deal({ endsAt: NOW + ENDING_SOON_MS }), NOW)).toBe("ending-soon");
    expect(getDealStatus(deal({ endsAt: NOW }), NOW)).toBe("ended");
  });

  it("keeps ongoing programs live until they get an end date", () => {
    expect(getDealStatus(deal({ startsAt: NOW - 400 * DAY, ongoing: true }), NOW)).toBe("active");
    expect(getDealStatus(deal({ startsAt: NOW - 400 * DAY, ongoing: true, endsAt: NOW - 1 }), NOW)).toBe("ended");
  });

  it("ages open-ended news out after the freshness window", () => {
    expect(getDealStatus(deal({ startsAt: NOW - NEWS_FRESH_MS }), NOW)).toBe("active");
    expect(getDealStatus(deal({ startsAt: NOW - NEWS_FRESH_MS - 1 }), NOW)).toBe("past");
  });
});

describe("partitionDeals", () => {
  it("orders live deals by soonest deadline, featured first", () => {
    const deals = [
      deal({ id: "later", endsAt: NOW + 20 * DAY }),
      deal({ id: "sooner", endsAt: NOW + 2 * DAY }),
      deal({ id: "open", startsAt: NOW - 2 * DAY }),
      deal({ id: "featured", endsAt: NOW + 30 * DAY, featured: true }),
      deal({ id: "gone", endsAt: NOW - DAY }),
      deal({ id: "soon", startsAt: NOW + DAY }),
    ];
    const { live, upcoming, archive } = partitionDeals(deals, NOW);
    expect(live.map((d) => d.id)).toEqual(["featured", "sooner", "later", "open"]);
    expect(upcoming.map((d) => d.id)).toEqual(["soon"]);
    expect(archive.map((d) => d.id)).toEqual(["gone"]);
  });
});

describe("getClaudeHeroState", () => {
  const change = deal({ id: "change", kind: "limit-change", startsAt: NOW - 2 * DAY });
  const boost = deal({ id: "boost", kind: "limit-boost", startsAt: NOW - DAY, endsAt: NOW + 5 * DAY });

  it("prefers a live limit boost", () => {
    const state = getClaudeHeroState([change, boost], NOW, true);
    expect(state.mode).toBe("promo");
    expect(state.promo?.id).toBe("boost");
    expect(state.latestChange?.id).toBe("change");
  });

  it("falls back to peak hours once the boost ends", () => {
    const state = getClaudeHeroState([change, boost], NOW + 6 * DAY, true);
    expect(state.mode).toBe("peak");
    expect(state.latestChange?.id).toBe("boost");
  });

  it("uses policy mode when peak hours are disabled", () => {
    expect(getClaudeHeroState([change], NOW, false).mode).toBe("policy");
  });

  it("ignores other tools", () => {
    const other = deal({ id: "other", tool: "cursor", kind: "limit-boost", endsAt: NOW + DAY });
    expect(getClaudeHeroState([other], NOW, true).promo).toBeUndefined();
  });
});

describe("helpers", () => {
  it("localizes with English fallback", () => {
    expect(localize({ en: "Hello", tr: "Merhaba" }, "tr")).toBe("Merhaba");
    expect(localize({ en: "Hello" }, "ja")).toBe("Hello");
  });

  it("builds locale paths with trailing slashes", () => {
    expect(localePath("en")).toBe("/en/");
    expect(localePath("tr", "tools/cursor")).toBe("/tr/tools/cursor/");
    expect(switchLocalePath("/en/tools/cursor/", "zh-CN")).toBe("/zh-CN/tools/cursor/");
    expect(switchLocalePath("/", "de")).toBe("/de/");
  });

  it("routes deal CTAs through /go/ unless the deal has its own URL", () => {
    const tool: ToolRecord = {
      slug: "cursor",
      name: "Cursor",
      vendor: "Anysphere",
      category: "coding",
      website: "https://cursor.com",
      popularityRank: 1,
      tagline: { en: "x" },
    };
    expect(dealHref(deal({ tool: "cursor" }), tool)).toEqual({ href: "/go/cursor/", sponsored: false });
    expect(dealHref(deal({ ctaUrl: "https://cursor.com/students" }), tool).href).toBe("https://cursor.com/students");
  });
});
