import { getDealStatus } from "@/lib/deals";
import { getCountdown, pad2 } from "@/lib/time";

/**
 * Progressive enhancement for static pages:
 * - [data-deal-timer] badges count down and mark ended deals (hidden from live lists)
 * - [data-copy] buttons copy their value to the clipboard
 */
interface TimerLabels {
  endsIn: string;
  startsIn: string;
  ended: string;
  ongoing: string;
  d: string;
  h: string;
  m: string;
  s: string;
}

function span(target: number, now: number, l: TimerLabels) {
  const c = getCountdown(target, now);
  return c.days > 0
    ? `${c.days}${l.d} ${pad2(c.hours)}${l.h} ${pad2(c.minutes)}${l.m}`
    : `${pad2(c.hours)}${l.h} ${pad2(c.minutes)}${l.m} ${pad2(c.seconds)}${l.s}`;
}

function tick() {
  const now = Date.now();
  document.querySelectorAll<HTMLElement>("[data-deal-timer]").forEach((el) => {
    const startsAt = Number(el.dataset.starts);
    const endsAt = el.dataset.ends ? Number(el.dataset.ends) : undefined;
    const ongoing = el.dataset.ongoing === "true";
    const labels = JSON.parse(el.dataset.labels ?? "{}") as TimerLabels;
    const status = getDealStatus({ startsAt, endsAt, ongoing }, now);

    let text: string;
    if (status === "upcoming") text = `${labels.startsIn} ${span(startsAt, now, labels)}`;
    else if (status === "ended" || status === "past") text = labels.ended;
    else if (endsAt === undefined) text = labels.ongoing;
    else text = `${labels.endsIn} ${span(endsAt, now, labels)}`;

    const label = el.querySelector<HTMLElement>("[data-timer-text]");
    if (label && label.textContent !== text) label.textContent = text;
    el.dataset.status = status;

    const item = el.closest<HTMLElement>("[data-live-list] > *");
    item?.toggleAttribute("data-ended", status === "ended" || status === "past");
  });
}

tick();
setInterval(tick, 1000);

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
