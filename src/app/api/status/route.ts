import { NextRequest, NextResponse } from "next/server";

// Peak hours: weekdays 1pm-7pm UTC (13:00-19:00 UTC)
const PEAK_START_UTC = 13;
const PEAK_END_UTC = 19;

export const dynamic = "force-dynamic";

// In-memory rate limiter: 60 req/min per IP
const RATE_LIMIT = 60;
const WINDOW_MS = 60_000;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (entry.count >= RATE_LIMIT) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count++;
  return { allowed: true, retryAfter: 0 };
}

// Periodic cleanup to prevent memory growth
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}, WINDOW_MS);

function getPeakHoursLabel(): string {
  const ref = new Date();
  const fmt = (utcHour: number) => {
    const d = new Date(Date.UTC(ref.getUTCFullYear(), ref.getUTCMonth(), ref.getUTCDate(), utcHour, 0, 0));
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/Los_Angeles",
    }).format(d);
  };
  const tzAbbr = new Intl.DateTimeFormat("en-US", { timeZoneName: "short", timeZone: "America/Los_Angeles" })
    .formatToParts(ref)
    .find((p) => p.type === "timeZoneName")?.value ?? "PT";
  return `Weekdays 1pm–7pm UTC / ${fmt(PEAK_START_UTC)}–${fmt(PEAK_END_UTC)} ${tzAbbr}`;
}

function getNextChange(now: Date, dayUTC: number, isPeak: boolean, isWeekend: boolean): Date {
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();
  const date = now.getUTCDate();
  const hourUTC = now.getUTCHours();

  if (isWeekend) {
    const daysToMonday = dayUTC === 6 ? 2 : 1;
    return new Date(Date.UTC(year, month, date + daysToMonday, PEAK_START_UTC, 0, 0));
  }
  if (isPeak) {
    return new Date(Date.UTC(year, month, date, PEAK_END_UTC, 0, 0));
  }
  if (hourUTC < PEAK_START_UTC) {
    return new Date(Date.UTC(year, month, date, PEAK_START_UTC, 0, 0));
  }
  const tomorrowDay = (dayUTC + 1) % 7;
  if (tomorrowDay === 6) return new Date(Date.UTC(year, month, date + 3, PEAK_START_UTC, 0, 0));
  if (tomorrowDay === 0) return new Date(Date.UTC(year, month, date + 2, PEAK_START_UTC, 0, 0));
  return new Date(Date.UTC(year, month, date + 1, PEAK_START_UTC, 0, 0));
}

export function GET(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests", retryAfter },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  const now = new Date();
  const dayUTC = now.getUTCDay();
  const hourUTC = now.getUTCHours();
  const isWeekend = dayUTC === 0 || dayUTC === 6;
  const isPeak = !isWeekend && hourUTC >= PEAK_START_UTC && hourUTC < PEAK_END_UTC;
  const isOffPeak = !isPeak;
  const nextChange = getNextChange(now, dayUTC, isPeak, isWeekend);
  const msUntilChange = nextChange.getTime() - now.getTime();

  const secondsUntilChange = Math.floor(msUntilChange / 1000);
  const cacheMaxAge = Math.min(secondsUntilChange, 60);

  const response = NextResponse.json({
    status: isPeak ? "peak" : "off_peak",
    isPeak,
    isOffPeak,
    isWeekend,
    sessionLimitSpeed: isPeak ? "faster_than_normal" : "normal",
    emoji: isPeak ? "🔴" : "🟢",
    label: isPeak ? "Peak Hours — Limits Drain Faster" : "Off-Peak — Normal Speed",
    peakHours: getPeakHoursLabel(),
    nextChange: nextChange.toISOString(),
    minutesUntilChange: Math.floor(msUntilChange / 60000),
    timestamp: now.toISOString(),
    utcHour: hourUTC,
    utcDay: dayUTC,
    note: "No known end date for peak hours adjustment. Weekly limits unchanged.",
  });

  response.headers.set("Cache-Control", `public, s-maxage=${cacheMaxAge}, stale-while-revalidate=10`);
  return response;
}
