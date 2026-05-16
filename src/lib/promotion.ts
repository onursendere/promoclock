export interface PromotionStatus {
  isActive: boolean;
  isOffPeak: boolean;
  isPeak: boolean;
  isExpired: boolean;
  isNotStarted: boolean;
  isWeekend: boolean;
  nextChangeTimestamp: number;
  lastChangeTimestamp: number;
  userTimezone: string;
  userLocalTime: Date;
  promotionStartUTC: number;
  promotionEndUTC: number;
}

// March 2026 2x promotion (ended) — kept for archive section
export const PROMO_START = Date.UTC(2026, 2, 13, 0, 0, 0);
export const PROMO_END = Date.UTC(2026, 2, 28, 6, 59, 0);

// Session limits peak hours system (March 27, 2026 update)
// Peak hours: weekdays 1pm–7pm UTC (13:00–19:00 UTC) — DST-aware local times via IANA
const PEAK_START_UTC = 13;
const PEAK_END_UTC = 19;

export function getPromotionStatus(now: Date = new Date()): PromotionStatus {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dayUTC = now.getUTCDay();
  const hourUTC = now.getUTCHours();
  const isWeekend = dayUTC === 0 || dayUTC === 6;

  const isPeak = !isWeekend && hourUTC >= PEAK_START_UTC && hourUTC < PEAK_END_UTC;
  const isOffPeak = !isPeak;

  const nextChangeTimestamp = calculateNextChange(now, isWeekend, isPeak);
  const lastChangeTimestamp = calculateLastChange(now, isWeekend, isPeak);

  return {
    isActive: true,
    isOffPeak,
    isPeak,
    isExpired: false,
    isNotStarted: false,
    isWeekend,
    nextChangeTimestamp,
    lastChangeTimestamp,
    userTimezone,
    userLocalTime: now,
    promotionStartUTC: PROMO_START,
    promotionEndUTC: PROMO_END,
  };
}

function calculateLastChange(
  now: Date,
  isWeekend: boolean,
  isPeak: boolean
): number {
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();
  const date = now.getUTCDate();
  const dayUTC = now.getUTCDay();
  const hourUTC = now.getUTCHours();

  if (isPeak) {
    return Date.UTC(year, month, date, PEAK_START_UTC, 0, 0);
  }

  if (isWeekend) {
    const daysBack = dayUTC === 6 ? 1 : 2;
    return Date.UTC(year, month, date - daysBack, PEAK_END_UTC, 0, 0);
  }

  if (hourUTC >= PEAK_END_UTC) {
    return Date.UTC(year, month, date, PEAK_END_UTC, 0, 0);
  }

  const daysBack = dayUTC === 1 ? 3 : 1;
  return Date.UTC(year, month, date - daysBack, PEAK_END_UTC, 0, 0);
}

function calculateNextChange(
  now: Date,
  isWeekend: boolean,
  isPeak: boolean
): number {
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();
  const date = now.getUTCDate();
  const dayUTC = now.getUTCDay();

  if (isWeekend) {
    if (dayUTC === 6) {
      const mondayDate = date + 2;
      return Date.UTC(year, month, mondayDate, PEAK_START_UTC, 0, 0);
    }
    const mondayDate = date + 1;
    return Date.UTC(year, month, mondayDate, PEAK_START_UTC, 0, 0);
  }

  if (isPeak) {
    return Date.UTC(year, month, date, PEAK_END_UTC, 0, 0);
  }

  const hourUTC = now.getUTCHours();
  if (hourUTC < PEAK_START_UTC) {
    return Date.UTC(year, month, date, PEAK_START_UTC, 0, 0);
  }

  const tomorrow = date + 1;
  const tomorrowDay = (dayUTC + 1) % 7;

  if (tomorrowDay === 6) {
    const mondayDate = date + 3;
    return Date.UTC(year, month, mondayDate, PEAK_START_UTC, 0, 0);
  }

  if (tomorrowDay === 0) {
    const mondayDate = date + 2;
    return Date.UTC(year, month, mondayDate, PEAK_START_UTC, 0, 0);
  }

  return Date.UTC(year, month, tomorrow, PEAK_START_UTC, 0, 0);
}

export function getCountdown(targetTimestamp: number, now: Date = new Date()) {
  const diff = Math.max(0, targetTimestamp - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    totalMs: diff,
  };
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
