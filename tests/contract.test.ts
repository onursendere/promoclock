import { describe, expect, it } from "vitest";
import { getPeakStatus } from "../src/claude";

/**
 * Contract tests for GET /api/status. They call the live API by default. To test a local copy,
 * run `npm run serve` and then `API_BASE_URL=http://127.0.0.1:8000 npm test`.
 */
const BASE = (process.env.API_BASE_URL ?? "https://promoclock.co").replace(/\/$/, "");
/** Behind Cloudflare the client IP can't be varied, so the per-IP rate limit is only testable locally. */
const BEHIND_CDN = BASE.startsWith("https://");
const USER_AGENT = "promoclock-contract-test/1.0 (+https://github.com/onursendere/promoclock)";

// A unique client IP per run keeps the rate limiter from bleeding between runs. X-Forwarded-For
// (not CF-Connecting-IP, which Cloudflare rejects from clients) so the suite also runs against
// the live site; there Cloudflare's own CF-Connecting-IP takes precedence in the PHP.
const clientIp = `198.51.100.${1 + Math.floor(Math.random() * 250)}`;
const get = (url: string, ip = clientIp) =>
  fetch(`${BASE}${url}`, { headers: { "User-Agent": USER_AGENT, "X-Forwarded-For": ip } });

/** The response shape that existing integrations (status lines, shell prompts, bots) rely on. */
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
  it("keeps the exact response shape", async () => {
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

  it("returns values consistent with each other and with the peak-hours rule", async () => {
    const before = Date.now();
    const body = await (await get("/api/status")).json();
    // Behind Cloudflare the answer may come from the edge cache, generated up to s-maxage (≤ 60 s) ago
    // but never across a change, so judge it by the moment it was generated (its timestamp).
    expect(body.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    const generated = Date.parse(body.timestamp);
    expect(generated).toBeGreaterThan(before - (BEHIND_CDN ? 75_000 : 5_000));
    expect(generated).toBeLessThan(Date.now() + 5_000);
    const expected = getPeakStatus(generated);

    expect(Date.parse(body.nextChange)).toBeGreaterThan(before - 1_000);
    expect(body.isPeak).toBe(expected.isPeak);
    expect(body.isOffPeak).toBe(!body.isPeak);
    expect(body.isWeekend).toBe(expected.isWeekend);
    expect(body.status).toBe(body.isPeak ? "peak" : "off_peak");
    expect(body.sessionLimitSpeed).toBe(body.isPeak ? "faster_than_normal" : "normal");
    expect(body.emoji).toBe(body.isPeak ? "🔴" : "🟢");
    expect(body.nextChange).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:00:00\.000Z$/);
    expect(Date.parse(body.nextChange)).toBe(expected.nextChange);
    expect(body.minutesUntilChange).toBe(Math.floor((expected.nextChange - generated) / 60_000));
    expect(body.utcHour).toBe(new Date(generated).getUTCHours());
    expect(body.utcDay).toBe(new Date(generated).getUTCDay());
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
});
