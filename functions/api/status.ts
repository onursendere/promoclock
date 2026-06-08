/**
 * Cloudflare Pages Function — GET /api/status
 *
 * File-based route: this file IS the /api/status endpoint. Returns the live
 * Claude peak-hours status as JSON (same shape as the old Next.js route),
 * deterministic from the current UTC time.
 *
 * Rate limiting (1 req / 5 min / IP) is enforced by a Cloudflare Rate Limiting
 * Rule on the /api/status path (dashboard → Security → WAF → Rate limiting),
 * not in code — Cloudflare's in-Worker rate-limit binding only supports
 * 10s/60s periods, so it can't express a 5-minute window.
 */

const PEAK_START_UTC = 13; // 1:00 PM UTC
const PEAK_END_UTC = 19; // 7:00 PM UTC

function getPeakHoursLabel(): string {
  const ref = new Date();
  const fmt = (utcHour: number) => {
    const d = new Date(
      Date.UTC(ref.getUTCFullYear(), ref.getUTCMonth(), ref.getUTCDate(), utcHour, 0, 0),
    );
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/Los_Angeles",
    }).format(d);
  };
  const tzAbbr =
    new Intl.DateTimeFormat("en-US", {
      timeZoneName: "short",
      timeZone: "America/Los_Angeles",
    })
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

export const onRequestGet = () => {
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

  const body = JSON.stringify({
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

  return new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": `public, s-maxage=${cacheMaxAge}, stale-while-revalidate=10`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};
