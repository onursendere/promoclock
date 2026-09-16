import { spawn, type ChildProcess } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { getPeakStatus } from "@/data/claude";
import { getDealStatus, type DealRecord } from "@/lib/deals";

const DIST = path.resolve("dist");
const PORT = 18_000 + Math.floor(Math.random() * 2_000);
const BASE = `http://127.0.0.1:${PORT}`;
let server: ChildProcess;

async function waitForServer() {
  for (let i = 0; i < 50; i++) {
    try {
      await fetch(`${BASE}/api/deals.json`);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  throw new Error("php -S did not start");
}

beforeAll(async () => {
  if (!existsSync(path.join(DIST, "api/status.php"))) {
    throw new Error("dist/ is missing — run `npm run build` before `npm run test:api`.");
  }
  server = spawn("php", ["-S", `127.0.0.1:${PORT}`, "-t", DIST, "scripts/php-router.php"], { stdio: "ignore" });
  await waitForServer();
});

afterAll(() => {
  server?.kill();
});

// A unique client IP per run keeps the rate limiter from bleeding between runs.
const clientIp = `198.51.100.${1 + Math.floor(Math.random() * 250)}`;
const get = (url: string, ip = clientIp) => fetch(`${BASE}${url}`, { headers: { "CF-Connecting-IP": ip } });

/** The public /api/status contract that existing integrations (shell prompts, bots) rely on. */
const STATUS_CONTRACT = {
  status: "string",
  isPeak: "boolean",
  isOffPeak: "boolean",
  isWeekend: "boolean",
  sessionLimitSpeed: "string",
  emoji: "string",
  label: "string",
  peakHours: "string",
  nextChange: "string",
  minutesUntilChange: "number",
  timestamp: "string",
  utcHour: "number",
  utcDay: "number",
  note: "string",
} as const;

describe("GET /api/status", () => {
  it("keeps the exact response shape of the original endpoint", async () => {
    for (const url of ["/api/status", "/api/status/"]) {
      const res = await get(url);
      expect(res.status).toBe(200);
      expect(res.headers.get("content-type")).toContain("application/json");
      expect(res.headers.get("access-control-allow-origin")).toBe("*");
      expect(res.headers.get("cache-control")).toMatch(/^public, s-maxage=\d+, stale-while-revalidate=10$/);

      const body = await res.json();
      expect(Object.keys(body).sort()).toEqual(Object.keys(STATUS_CONTRACT).sort());
      for (const [key, type] of Object.entries(STATUS_CONTRACT)) {
        expect(typeof body[key], key).toBe(type);
      }
    }
  });

  it("returns values consistent with each other and with the site's peak logic", async () => {
    const before = Date.now();
    const body = await (await get("/api/status")).json();
    const expected = getPeakStatus(before);

    expect(body.isPeak).toBe(expected.isPeak);
    expect(body.isOffPeak).toBe(!body.isPeak);
    expect(body.isWeekend).toBe(expected.isWeekend);
    expect(body.status).toBe(body.isPeak ? "peak" : "off_peak");
    expect(body.sessionLimitSpeed).toBe(body.isPeak ? "faster_than_normal" : "normal");
    expect(body.emoji).toBe(body.isPeak ? "🔴" : "🟢");
    expect(body.nextChange).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:00:00\.000Z$/);
    expect(Date.parse(body.nextChange)).toBe(expected.nextChange);
    expect(body.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    expect(body.minutesUntilChange).toBe(Math.floor((expected.nextChange - Date.parse(body.timestamp)) / 60_000));
    expect(body.utcHour).toBe(new Date(before).getUTCHours());
    expect(body.utcDay).toBe(new Date(before).getUTCDay());
    expect(body.peakHours).toMatch(/^Weekdays 1pm–7pm UTC \/ \d{1,2}:00 [AP]M–\d{1,2}:00 [AP]M P[SD]T$/);
  });
});

describe("GET /api/deals", () => {
  const dataset = JSON.parse(readFileSync(path.join(DIST, "api/deals.json"), "utf8")) as {
    deals: (Omit<DealRecord, "startsAt" | "endsAt"> & { startsAt: string; endsAt: string | null })[];
  };
  const tsStatus = (d: (typeof dataset.deals)[number]) =>
    getDealStatus(
      { startsAt: Date.parse(d.startsAt), endsAt: d.endsAt ? Date.parse(d.endsAt) : undefined, ongoing: d.ongoing },
      Date.now(),
    );

  it("derives the same status for every deal as the site does", async () => {
    const body = await (await get("/api/deals?status=all")).json();
    expect(body.count).toBe(dataset.deals.length);
    for (const deal of body.deals) {
      const source = dataset.deals.find((d) => d.id === deal.id)!;
      expect(deal.status, deal.id).toBe(tsStatus(source));
    }
  });

  it("defaults to live deals and filters by tool", async () => {
    const live = await (await get("/api/deals")).json();
    expect(live.status).toBe("active");
    expect(live.deals.every((d: { status: string }) => d.status === "active" || d.status === "ending-soon")).toBe(true);

    const claude = await (await get("/api/deals?status=all&tool=claude")).json();
    expect(claude.count).toBeGreaterThan(0);
    expect(claude.deals.every((d: { tool: string }) => d.tool === "claude")).toBe(true);

    const bogus = await (await get("/api/deals?status=nope")).json();
    expect(bogus.status).toBe("active");
  });
});

describe("rate limiting and internals", () => {
  it("allows 60 requests per minute per IP, then returns 429 with Retry-After", async () => {
    const ip = `203.0.113.${1 + Math.floor(Math.random() * 250)}`;
    const codes: number[] = [];
    for (let i = 0; i < 61; i++) codes.push((await get("/api/status", ip)).status);
    expect(codes.slice(0, 60).every((c) => c === 200)).toBe(true);

    const limited = await get("/api/status", ip);
    expect(limited.status).toBe(429);
    expect(Number(limited.headers.get("retry-after"))).toBeGreaterThan(0);
    expect(await limited.json()).toMatchObject({ error: "Too many requests" });

    expect((await get("/api/status", `${ip.slice(0, -1)}9`)).status).not.toBe(429);
  });

  it("does not expose the shared PHP include", async () => {
    expect((await get("/api/_ratelimit.php")).status).toBe(403);
  });
});
