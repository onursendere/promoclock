import { useEffect, useRef, useState } from "react";
import { getDealStatus } from "@/lib/deals";
import { getCountdown, pad2 } from "@/lib/time";
import { cn } from "@/lib/utils";

interface Props {
  startsAt: number;
  endsAt?: number;
  ongoing?: boolean;
  buildTime: number;
  labels: { endsIn: string; startsIn: string; ended: string; ongoing: string; d: string; h: string; m: string; s: string };
}

/**
 * Live countdown for a deal card. When a deal ends after the page was built,
 * it marks its card with data-ended so live lists can hide it immediately.
 */
export default function DealTimer({ startsAt, endsAt, ongoing, buildTime, labels }: Props) {
  const [now, setNow] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const t = now ?? buildTime;
  const status = getDealStatus({ startsAt, endsAt, ongoing }, t);

  useEffect(() => {
    const card = ref.current?.closest("[data-deal-card]");
    if (!card || now === null) return;
    card.toggleAttribute("data-ended", status === "ended" || status === "past");
  }, [status, now]);

  const span = (target: number) => {
    const c = getCountdown(target, t);
    return c.days > 0
      ? `${c.days}${labels.d} ${pad2(c.hours)}${labels.h} ${pad2(c.minutes)}${labels.m}`
      : `${pad2(c.hours)}${labels.h} ${pad2(c.minutes)}${labels.m} ${pad2(c.seconds)}${labels.s}`;
  };

  let text: string;
  if (status === "upcoming") text = `${labels.startsIn} ${span(startsAt)}`;
  else if (status === "ended" || status === "past") text = labels.ended;
  else if (endsAt === undefined) text = labels.ongoing;
  else text = `${labels.endsIn} ${span(endsAt)}`;

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums",
        status === "ending-soon" && "bg-destructive/10 text-destructive",
        status === "active" && "bg-success/10 text-success",
        status === "upcoming" && "bg-info/10 text-info",
        (status === "ended" || status === "past") && "bg-muted text-muted-foreground",
      )}
      suppressHydrationWarning
    >
      {(status === "active" || status === "ending-soon") && (
        <span className={cn("size-1.5 rounded-full bg-current", now !== null && "animate-pulse")} aria-hidden="true" />
      )}
      {text}
    </span>
  );
}
