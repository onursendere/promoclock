import { CITY_SCHEDULES, PEAK_HOURS } from "@/data/claude";

/** Local peak/off-peak windows per city for the given day (DST-aware). */
export function scheduleRows(at: number) {
  const ref = new Date(at);
  const peakStart = new Date(Date.UTC(ref.getUTCFullYear(), ref.getUTCMonth(), ref.getUTCDate(), PEAK_HOURS.startUtc));
  const peakEnd = new Date(Date.UTC(ref.getUTCFullYear(), ref.getUTCMonth(), ref.getUTCDate(), PEAK_HOURS.endUtc));
  return CITY_SCHEDULES.map(({ city, ianaTimezone }) => {
    const time = (d: Date) =>
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: ianaTimezone }).format(d);
    const zonePart = (style: "short" | "shortOffset") =>
      new Intl.DateTimeFormat("en-US", { timeZoneName: style, timeZone: ianaTimezone })
        .formatToParts(peakStart)
        .find((p) => p.type === "timeZoneName")?.value ?? "";
    return {
      city,
      timezone: zonePart("short") || ianaTimezone,
      utcOffset: zonePart("shortOffset"),
      peak: `${time(peakStart)}–${time(peakEnd)}`,
      offPeak: `${time(peakEnd)}–${time(peakStart)}`,
    };
  });
}
