import { describe, expect, it } from "vitest";
import { getPeakStatus } from "@/data/claude";

const utc = (iso: string) => Date.parse(iso);

describe("getPeakStatus", () => {
  it("is off-peak before the window on a weekday", () => {
    // Wednesday 09:00 UTC
    const s = getPeakStatus(utc("2026-09-16T09:00:00Z"));
    expect(s.isPeak).toBe(false);
    expect(s.isWeekend).toBe(false);
    expect(s.nextChange).toBe(utc("2026-09-16T13:00:00Z"));
    expect(s.lastChange).toBe(utc("2026-09-15T19:00:00Z"));
  });

  it("is peak inside the window", () => {
    const s = getPeakStatus(utc("2026-09-16T13:00:00Z"));
    expect(s.isPeak).toBe(true);
    expect(s.nextChange).toBe(utc("2026-09-16T19:00:00Z"));
    expect(s.lastChange).toBe(utc("2026-09-16T13:00:00Z"));
  });

  it("ends the window at 19:00 UTC exactly", () => {
    const s = getPeakStatus(utc("2026-09-16T19:00:00Z"));
    expect(s.isPeak).toBe(false);
    expect(s.nextChange).toBe(utc("2026-09-17T13:00:00Z"));
    expect(s.lastChange).toBe(utc("2026-09-16T19:00:00Z"));
  });

  it("jumps from Friday evening to Monday", () => {
    const s = getPeakStatus(utc("2026-09-18T20:00:00Z"));
    expect(s.nextChange).toBe(utc("2026-09-21T13:00:00Z"));
  });

  it("treats weekends as off-peak and looks back to Friday", () => {
    const sat = getPeakStatus(utc("2026-09-19T14:00:00Z"));
    expect(sat.isWeekend).toBe(true);
    expect(sat.isPeak).toBe(false);
    expect(sat.nextChange).toBe(utc("2026-09-21T13:00:00Z"));
    expect(sat.lastChange).toBe(utc("2026-09-18T19:00:00Z"));

    const sun = getPeakStatus(utc("2026-09-20T23:59:00Z"));
    expect(sun.nextChange).toBe(utc("2026-09-21T13:00:00Z"));
    expect(sun.lastChange).toBe(utc("2026-09-18T19:00:00Z"));
  });

  it("looks back from Monday morning to Friday", () => {
    const s = getPeakStatus(utc("2026-09-21T08:00:00Z"));
    expect(s.lastChange).toBe(utc("2026-09-18T19:00:00Z"));
  });

  it("crosses month boundaries", () => {
    // Wednesday 30 Sep 2026, 20:00 UTC → Thursday 1 Oct 13:00
    const s = getPeakStatus(utc("2026-09-30T20:00:00Z"));
    expect(s.nextChange).toBe(utc("2026-10-01T13:00:00Z"));
  });
});
