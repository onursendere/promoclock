/**
 * Single source of truth for Claude's peak-hours window.
 * Read by the hero island, the schedule table, llms.txt and (via the
 * build-generated /api/claude.json) the PHP /api/status endpoint.
 */
export const PEAK_HOURS = {
  enabled: true,
  /** Weekdays, [startUtc, endUtc) in whole UTC hours. */
  startUtc: 13,
  endUtc: 19,
  /** Date the current window was announced. */
  since: "2026-03-27",
  /** Anthropic's Help Center no longer documents peak hours explicitly. */
  documented: false,
} as const;

export interface PeakStatus {
  isPeak: boolean;
  isWeekend: boolean;
  nextChange: number;
  lastChange: number;
}

export function getPeakStatus(now: number, peak = PEAK_HOURS): PeakStatus {
  const d = new Date(now);
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth();
  const date = d.getUTCDate();
  const day = d.getUTCDay();
  const hour = d.getUTCHours();
  const at = (dayOffset: number, h: number) => Date.UTC(year, month, date + dayOffset, h, 0, 0);

  const isWeekend = day === 0 || day === 6;
  const isPeak = !isWeekend && hour >= peak.startUtc && hour < peak.endUtc;

  let nextChange: number;
  if (isWeekend) {
    nextChange = at(day === 6 ? 2 : 1, peak.startUtc);
  } else if (isPeak) {
    nextChange = at(0, peak.endUtc);
  } else if (hour < peak.startUtc) {
    nextChange = at(0, peak.startUtc);
  } else {
    // After today's window: next weekday (Fri → Mon).
    nextChange = at(day === 5 ? 3 : 1, peak.startUtc);
  }

  let lastChange: number;
  if (isPeak) {
    lastChange = at(0, peak.startUtc);
  } else if (isWeekend) {
    lastChange = at(day === 6 ? -1 : -2, peak.endUtc);
  } else if (hour >= peak.endUtc) {
    lastChange = at(0, peak.endUtc);
  } else {
    // Before today's window: previous weekday's end (Mon → Fri).
    lastChange = at(day === 1 ? -3 : -1, peak.endUtc);
  }

  return { isPeak, isWeekend, nextChange, lastChange };
}

export interface CitySchedule {
  city: string;
  ianaTimezone: string;
}

export const CITY_SCHEDULES: CitySchedule[] = [
  { city: "New York", ianaTimezone: "America/New_York" },
  { city: "San Francisco", ianaTimezone: "America/Los_Angeles" },
  { city: "London", ianaTimezone: "Europe/London" },
  { city: "Paris", ianaTimezone: "Europe/Paris" },
  { city: "Istanbul", ianaTimezone: "Europe/Istanbul" },
  { city: "New Delhi", ianaTimezone: "Asia/Kolkata" },
  { city: "Tokyo", ianaTimezone: "Asia/Tokyo" },
  { city: "Seoul", ianaTimezone: "Asia/Seoul" },
  { city: "Beijing", ianaTimezone: "Asia/Shanghai" },
  { city: "São Paulo", ianaTimezone: "America/Sao_Paulo" },
];
