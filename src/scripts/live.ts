import { format } from "@/lib/i18n/format";
import { getDealStatus } from "@/lib/deals";
import { getCountdown } from "@/lib/time";

/**
 * Progressive enhancement for static pages:
 * - [data-deal-timer] badges show time left and mark ended deals (hidden from live lists)
 * - [data-copy] buttons copy their value to the clipboard
 */
export interface TimerLabels {
  daysLeft: string;
  hoursLeft: string;
  startsIn: string;
  ended: string;
  ongoing: string;
}

export function timerText(
  deal: { startsAt: number; endsAt?: number; ongoing?: boolean },
  now: number,
  labels: TimerLabels,
): { status: ReturnType<typeof getDealStatus>; text: string } {
  const status = getDealStatus(deal, now);
  if (status === "ended" || status === "past") return { status, text: labels.ended };
  if (status === "upcoming") {
    const c = getCountdown(deal.startsAt, now);
    return { status, text: `${labels.startsIn} ${c.days > 0 ? `${c.days}d` : `${c.hours}h ${c.minutes}m`}` };
  }
  if (deal.endsAt === undefined) return { status, text: labels.ongoing };
  const c = getCountdown(deal.endsAt, now);
  return {
    status,
    text: c.days > 0 ? format(labels.daysLeft, { n: c.days }) : format(labels.hoursLeft, { h: c.hours, m: c.minutes }),
  };
}

function tick() {
  const now = Date.now();
  document.querySelectorAll<HTMLElement>("[data-deal-timer]").forEach((el) => {
    const labels = JSON.parse(el.dataset.labels ?? "{}") as TimerLabels;
    const { status, text } = timerText(
      {
        startsAt: Number(el.dataset.starts),
        endsAt: el.dataset.ends ? Number(el.dataset.ends) : undefined,
        ongoing: el.dataset.ongoing === "true",
      },
      now,
      labels,
    );
    const label = el.querySelector<HTMLElement>("[data-timer-text]");
    if (label && label.textContent !== text) label.textContent = text;
    el.dataset.status = status;
    el.closest<HTMLElement>("[data-live-list] > *")?.toggleAttribute("data-ended", status === "ended" || status === "past");
  });
}

if (typeof document !== "undefined") {
  tick();
  setInterval(tick, 30_000);

  document.addEventListener("click", async (event) => {
    const button = (event.target as Element | null)?.closest<HTMLElement>("[data-copy]");
    if (!button) return;
    try {
      await navigator.clipboard.writeText(button.dataset.copy ?? "");
    } catch {
      return;
    }
    const label = button.querySelector<HTMLElement>("[data-copy-label]");
    if (!label) return;
    const original = label.textContent;
    label.textContent = button.dataset.copiedLabel ?? "Copied";
    setTimeout(() => (label.textContent = original), 2000);
  });
}
