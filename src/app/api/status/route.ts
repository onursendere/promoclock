import { NextResponse } from "next/server";

const PROMO_START = Date.UTC(2026, 2, 13, 0, 0, 0);
const PROMO_END = Date.UTC(2026, 2, 28, 6, 59, 0);
const PEAK_START_UTC = 12;
const PEAK_END_UTC = 18;

export const dynamic = "force-dynamic";

export function GET() {
  const now = new Date();
  const nowUTC = now.getTime();

  const isNotStarted = nowUTC < PROMO_START;
  const isExpired = nowUTC > PROMO_END;

  if (isNotStarted) {
    return NextResponse.json({
      status: "not_started",
      isOffPeak: false,
      isPeak: false,
      limitsMultiplier: 1,
      emoji: "⏳",
      label: "1X — Promotion starts March 13",
      promotionStart: new Date(PROMO_START).toISOString(),
      promotionEnd: new Date(PROMO_END).toISOString(),
      timestamp: now.toISOString(),
      utcHour: now.getUTCHours(),
      utcDay: now.getUTCDay(),
    });
  }

  if (isExpired) {
    return NextResponse.json({
      status: "expired",
      isOffPeak: false,
      isPeak: false,
      limitsMultiplier: 1,
      emoji: "⏹️",
      label: "1X — Promotion ended",
      promotionStart: new Date(PROMO_START).toISOString(),
      promotionEnd: new Date(PROMO_END).toISOString(),
      timestamp: now.toISOString(),
      utcHour: now.getUTCHours(),
      utcDay: now.getUTCDay(),
    });
  }

  const dayUTC = now.getUTCDay();
  const hourUTC = now.getUTCHours();
  const isWeekend = dayUTC === 0 || dayUTC === 6;
  const isPeak = !isWeekend && hourUTC >= PEAK_START_UTC && hourUTC < PEAK_END_UTC;
  const isOffPeak = !isPeak;

  // Calculate next change
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();
  const date = now.getUTCDate();
  let nextChange: number;

  if (isWeekend) {
    const daysToMonday = dayUTC === 6 ? 2 : 1;
    nextChange = Date.UTC(year, month, date + daysToMonday, PEAK_START_UTC, 0, 0);
  } else if (isPeak) {
    nextChange = Date.UTC(year, month, date, PEAK_END_UTC, 0, 0);
  } else if (hourUTC < PEAK_START_UTC) {
    nextChange = Date.UTC(year, month, date, PEAK_START_UTC, 0, 0);
  } else {
    const tomorrowDay = (dayUTC + 1) % 7;
    if (tomorrowDay === 6) {
      nextChange = Date.UTC(year, month, date + 3, PEAK_START_UTC, 0, 0);
    } else if (tomorrowDay === 0) {
      nextChange = Date.UTC(year, month, date + 2, PEAK_START_UTC, 0, 0);
    } else {
      nextChange = Date.UTC(year, month, date + 1, PEAK_START_UTC, 0, 0);
    }
  }

  nextChange = Math.min(nextChange, PROMO_END);
  const msUntilChange = nextChange - nowUTC;

  return NextResponse.json({
    status: "active",
    isOffPeak,
    isPeak,
    isWeekend,
    limitsMultiplier: isOffPeak ? 2 : 1,
    emoji: isOffPeak ? "🟢" : "🔴",
    label: isOffPeak ? "2X — Off-peak limits active" : "1X — Peak hours (standard limits)",
    nextChange: new Date(nextChange).toISOString(),
    minutesUntilChange: Math.floor(msUntilChange / 60000),
    peakWindowUTC: `${PEAK_START_UTC}:00–${PEAK_END_UTC}:00 weekdays`,
    promotionStart: new Date(PROMO_START).toISOString(),
    promotionEnd: new Date(PROMO_END).toISOString(),
    timestamp: now.toISOString(),
    utcHour: hourUTC,
    utcDay: dayUTC,
  });
}
