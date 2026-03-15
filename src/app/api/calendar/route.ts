import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const PEAK_START_UTC = 12;
const PEAK_END_UTC = 18;

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function formatICSDate(d: Date): string {
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
}

export function GET(request: NextRequest) {
  const tz = request.nextUrl.searchParams.get("tz") || "UTC";

  const events: string[] = [];
  const uid_base = "promoclock-";

  // March 13-27, 2026 — generate daily off-peak start/end events for weekdays
  for (let day = 13; day <= 27; day++) {
    const date = new Date(Date.UTC(2026, 2, day));
    const dow = date.getUTCDay();

    if (dow === 0 || dow === 6) {
      // Weekend — full day off-peak
      events.push(
        "BEGIN:VEVENT",
        `UID:${uid_base}weekend-${day}@promoclock.co`,
        `DTSTAMP:${formatICSDate(new Date())}`,
        `DTSTART:${formatICSDate(new Date(Date.UTC(2026, 2, day, 0, 0)))}`,
        `DTEND:${formatICSDate(new Date(Date.UTC(2026, 2, day, 23, 59)))}`,
        "SUMMARY:🟢 Claude 2X Limits — All Day (Weekend)",
        "DESCRIPTION:Weekend = full off-peak. Enjoy doubled Claude limits all day.\\nhttps://promoclock.co",
        "STATUS:CONFIRMED",
        "BEGIN:VALARM",
        "TRIGGER:-PT10M",
        "ACTION:DISPLAY",
        "DESCRIPTION:Claude 2X limits are active all day (weekend)",
        "END:VALARM",
        "END:VEVENT"
      );
    } else {
      // Weekday — off-peak before peak
      events.push(
        "BEGIN:VEVENT",
        `UID:${uid_base}offpeak-am-${day}@promoclock.co`,
        `DTSTAMP:${formatICSDate(new Date())}`,
        `DTSTART:${formatICSDate(new Date(Date.UTC(2026, 2, day, 0, 0)))}`,
        `DTEND:${formatICSDate(new Date(Date.UTC(2026, 2, day, PEAK_START_UTC, 0)))}`,
        "SUMMARY:🟢 Claude 2X Limits Active (Off-Peak)",
        "DESCRIPTION:Off-peak window — doubled message and context limits.\\nhttps://promoclock.co",
        "STATUS:CONFIRMED",
        "BEGIN:VALARM",
        "TRIGGER:PT0M",
        "ACTION:DISPLAY",
        "DESCRIPTION:Claude 2X limits are now active!",
        "END:VALARM",
        "END:VEVENT"
      );

      // Peak hours
      events.push(
        "BEGIN:VEVENT",
        `UID:${uid_base}peak-${day}@promoclock.co`,
        `DTSTAMP:${formatICSDate(new Date())}`,
        `DTSTART:${formatICSDate(new Date(Date.UTC(2026, 2, day, PEAK_START_UTC, 0)))}`,
        `DTEND:${formatICSDate(new Date(Date.UTC(2026, 2, day, PEAK_END_UTC, 0)))}`,
        "SUMMARY:🔴 Claude Standard Limits (Peak Hours)",
        "DESCRIPTION:Peak hours (8 AM–2 PM ET) — standard limits apply.\\nhttps://promoclock.co",
        "STATUS:CONFIRMED",
        "BEGIN:VALARM",
        "TRIGGER:-PT5M",
        "ACTION:DISPLAY",
        "DESCRIPTION:Peak hours starting soon — standard limits returning",
        "END:VALARM",
        "END:VEVENT"
      );

      // Off-peak after peak
      events.push(
        "BEGIN:VEVENT",
        `UID:${uid_base}offpeak-pm-${day}@promoclock.co`,
        `DTSTAMP:${formatICSDate(new Date())}`,
        `DTSTART:${formatICSDate(new Date(Date.UTC(2026, 2, day, PEAK_END_UTC, 0)))}`,
        `DTEND:${formatICSDate(new Date(Date.UTC(2026, 2, day, 23, 59)))}`,
        "SUMMARY:🟢 Claude 2X Limits Active (Off-Peak)",
        "DESCRIPTION:Off-peak window resumed — doubled limits until tomorrow's peak.\\nhttps://promoclock.co",
        "STATUS:CONFIRMED",
        "BEGIN:VALARM",
        "TRIGGER:PT0M",
        "ACTION:DISPLAY",
        "DESCRIPTION:Claude 2X limits are back! Off-peak resumed.",
        "END:VALARM",
        "END:VEVENT"
      );
    }
  }

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//PromoClock//Claude March 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Claude March 2026 Promotion",
    `X-WR-TIMEZONE:${tz}`,
    ...events,
    "END:VCALENDAR",
  ].join("\r\n");

  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": "attachment; filename=promoclock-march2026.ics",
    },
  });
}
