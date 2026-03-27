export interface PromotionStatus {
  isActive: boolean;
  isOffPeak: boolean;
  isPeak: boolean;
  isExpired: boolean;
  isNotStarted: boolean;
  isWeekend: boolean;
  nextChangeTimestamp: number;
  userTimezone: string;
  userLocalTime: Date;
  promotionStartUTC: number;
  promotionEndUTC: number;
}

// March 2026 2x promotion (ended) — kept for archive section
export const PROMO_START = Date.UTC(2026, 2, 13, 0, 0, 0);
export const PROMO_END = Date.UTC(2026, 2, 28, 6, 59, 0);

// Session limits peak hours system (March 27, 2026 update)
// Peak hours: weekdays 1pm–7pm GMT / 5am–11am PST (13:00–19:00 UTC)
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

  return {
    isActive: true,
    isOffPeak,
    isPeak,
    isExpired: false,
    isNotStarted: false,
    isWeekend,
    nextChangeTimestamp,
    userTimezone,
    userLocalTime: now,
    promotionStartUTC: PROMO_START,
    promotionEndUTC: PROMO_END,
  };
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
  timezone: string;
  utcOffset: string;
  peakLocal: string;
  offPeakLocal: string;
}

export const CITY_SCHEDULES: CitySchedule[] = [
  {
    city: "New York",
    timezone: "EDT",
    utcOffset: "UTC-4",
    peakLocal: "09:00 – 15:00",
    offPeakLocal: "15:00 – 09:00",
  },
  {
    city: "San Francisco",
    timezone: "PDT",
    utcOffset: "UTC-7",
    peakLocal: "06:00 – 12:00",
    offPeakLocal: "12:00 – 06:00",
  },
  {
    city: "London",
    timezone: "BST",
    utcOffset: "UTC+1",
    peakLocal: "14:00 – 20:00",
    offPeakLocal: "20:00 – 14:00",
  },
  {
    city: "Paris",
    timezone: "CEST",
    utcOffset: "UTC+2",
    peakLocal: "15:00 – 21:00",
    offPeakLocal: "21:00 – 15:00",
  },
  {
    city: "Istanbul",
    timezone: "TRT",
    utcOffset: "UTC+3",
    peakLocal: "16:00 – 22:00",
    offPeakLocal: "22:00 – 16:00",
  },
  {
    city: "New Delhi",
    timezone: "IST",
    utcOffset: "UTC+5:30",
    peakLocal: "18:30 – 00:30",
    offPeakLocal: "00:30 – 18:30",
  },
  {
    city: "Tokyo",
    timezone: "JST",
    utcOffset: "UTC+9",
    peakLocal: "22:00 – 04:00",
    offPeakLocal: "04:00 – 22:00",
  },
  {
    city: "Seoul",
    timezone: "KST",
    utcOffset: "UTC+9",
    peakLocal: "22:00 – 04:00",
    offPeakLocal: "04:00 – 22:00",
  },
  {
    city: "Beijing",
    timezone: "CST",
    utcOffset: "UTC+8",
    peakLocal: "21:00 – 03:00",
    offPeakLocal: "03:00 – 21:00",
  },
  {
    city: "São Paulo",
    timezone: "BRT",
    utcOffset: "UTC-3",
    peakLocal: "10:00 – 16:00",
    offPeakLocal: "16:00 – 10:00",
  },
];
