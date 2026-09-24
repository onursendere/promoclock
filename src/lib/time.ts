export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

export function getCountdown(target: number, now: number): Countdown {
  const totalMs = Math.max(0, target - now);
  const totalSeconds = Math.floor(totalMs / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    totalMs,
  };
}

export const pad2 = (n: number) => String(n).padStart(2, "0");

/** Localized unit ("3 days", "3 gün", "3天") from the runtime's CLDR data, so no dictionary strings are needed. */
export function formatUnit(value: number, unit: "day" | "hour" | "minute", lang: string, display: "short" | "narrow" = "short"): string {
  return new Intl.NumberFormat(lang, { style: "unit", unit, unitDisplay: display }).format(value);
}

/** Time left as "3 days" or "4 hr 12 min", in the reader's language. */
export function formatDuration(c: Countdown, lang: string): string {
  return c.days > 0 ? formatUnit(c.days, "day", lang) : `${formatUnit(c.hours, "hour", lang)} ${formatUnit(c.minutes, "minute", lang)}`;
}

export function formatDate(ms: number, lang: string, opts: Intl.DateTimeFormatOptions = {}): string {
  return new Intl.DateTimeFormat(lang, {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
    ...opts,
  }).format(ms);
}
