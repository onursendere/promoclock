import { NextResponse } from "next/server";

// Peak hours: weekdays 5am-11am PT / 1pm-7pm GMT (13:00-19:00 UTC)
const PEAK_START_UTC = 13;
const PEAK_END_UTC = 19;

export const dynamic = "force-dynamic";

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

export function GET() {
  const now = new Date();
  const dayUTC = now.getUTCDay();
  const hourUTC = now.getUTCHours();
  const isWeekend = dayUTC === 0 || dayUTC === 6;
  const isPeak = !isWeekend && hourUTC >= PEAK_START_UTC && hourUTC < PEAK_END_UTC;
  const isOffPeak = !isPeak;
  const nextChange = getNextChange(now, dayUTC, isPeak, isWeekend);
  const msUntilChange = nextChange.getTime() - now.getTime();

  return NextResponse.json({
    status: isPeak ? "peak" : "off_peak",
    isPeak,
    isOffPeak,
    isWeekend,
    sessionLimitSpeed: isPeak ? "faster_than_normal" : "normal",
    emoji: isPeak ? "🔴" : "🟢",
    label: isPeak ? "Peak Hours — Limits Drain Faster" : "Off-Peak — Normal Speed",
    peakHours: "Weekdays 5am–11am PT / 1pm–7pm GMT",
    nextChange: nextChange.toISOString(),
    minutesUntilChange: Math.floor(msUntilChange / 60000),
    timestamp: now.toISOString(),
    utcHour: hourUTC,
    utcDay: dayUTC,
    note: "No known end date for peak hours adjustment. Weekly limits unchanged.",
  });
}
