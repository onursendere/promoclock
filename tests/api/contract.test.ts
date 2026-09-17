import { spawn, type ChildProcess } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { getPeakStatus } from "@/data/claude";

const DIST = path.resolve("dist");
/** Set API_BASE_URL to test a running server (e.g. a container via SSH tunnel) instead of dist/. */
const REMOTE = process.env.API_BASE_URL?.replace(/\/$/, "");
const PORT = 18_000 + Math.floor(Math.random() * 2_000);
const BASE = REMOTE ?? `http://127.0.0.1:${PORT}`;
let server: ChildProcess | undefined;

async function waitForServer() {
  for (let i = 0; i < 50; i++) {
    try {
      await fetch(`${BASE}/api/status`);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  throw new Error("php -S did not start");
}

beforeAll(async () => {
  if (REMOTE) return;
  if (!existsSync(path.join(DIST, "api/status.php"))) {
    throw new Error("dist/ is missing — run `npm run build` before `npm run test:api`.");
  }
  server = spawn("php", ["-S", `127.0.0.1:${PORT}`, "-t", DIST, "scripts/php-router.php"], { stdio: "ignore" });
  await waitForServer();
});

afterAll(() => {
  server?.kill();
});

// A unique client IP per run keeps the rate limiter from bleeding between runs. X-Forwarded-For
// (not CF-Connecting-IP, which Cloudflare rejects from clients) so the suite also runs against
// the live site; there Cloudflare's own CF-Connecting-IP takes precedence in the PHP.
const clientIp = `198.51.100.${1 + Math.floor(Math.random() * 250)}`;
const get = (url: string, ip = clientIp) => fetch(`${BASE}${url}`, { headers: { "X-Forwarded-For": ip } });
/** Behind Cloudflare the real client IP can't be varied, so per-IP limits are only testable at the origin. */
const BEHIND_CDN = REMOTE?.startsWith("https://") ?? false;

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

describe("rate limiting and internals", () => {
  it.skipIf(BEHIND_CDN)("allows 60 requests per minute per IP, then returns 429 with Retry-After", async () => {
    const octet = 1 + Math.floor(Math.random() * 250);
    const ip = `203.0.113.${octet}`;
    const codes: number[] = [];
    for (let i = 0; i < 61; i++) codes.push((await get("/api/status", ip)).status);
    expect(codes.slice(0, 60).every((c) => c === 200)).toBe(true);

    const limited = await get("/api/status", ip);
    expect(limited.status).toBe(429);
    expect(Number(limited.headers.get("retry-after"))).toBeGreaterThan(0);
    expect(await limited.json()).toMatchObject({ error: "Too many requests" });

    // A different client (separate test subnet) is unaffected.
    expect((await get("/api/status", `192.0.2.${octet}`)).status).not.toBe(429);
  });

  it("does not expose the API's internal files", async () => {
    expect((await get("/api/_ratelimit.php")).status).toBe(403);
    expect((await get("/api/claude.json")).status).toBe(403);
  });

  it("answers 410 Gone for the retired deals and tools endpoints", async () => {
    for (const url of ["/api/deals", "/api/deals/", "/api/deals.json", "/api/tools.json"]) {
      expect((await get(url)).status, url).toBe(410);
    }
  });
});
