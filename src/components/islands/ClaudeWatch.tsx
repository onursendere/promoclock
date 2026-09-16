import { useEffect, useState } from "react";
import { ChevronRight, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { getPeakStatus, PEAK_HOURS } from "@/data/claude";
import type { HubDictionary } from "@/lib/i18n/dictionaries";
import { getClaudeHeroState, localize, type DealRecord } from "@/lib/deals";
import type { Locale } from "@/lib/i18n/config";
import { getCountdown, pad2 } from "@/lib/time";
import { cn } from "@/lib/utils";

interface Props {
  lang: Locale;
  watch: HubDictionary["claudeWatch"];
  common: HubDictionary["common"];
  deals: DealRecord[];
  /** Deal id → { href, date } for the "New" row. */
  links: Record<string, { href: string; date: string }>;
  buildTime: number;
  peakEnabled: boolean;
}

function useNow(): number | null {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

const pct = (from: number, to: number, now: number) =>
  to > from ? Math.min(100, Math.max(0, ((now - from) / (to - from)) * 100)) : 0;

const clock = (ms: number) =>
  `${pad2(Math.floor(ms / 3_600_000))}:${pad2(Math.floor((ms % 3_600_000) / 60_000))}:${pad2(Math.floor((ms % 60_000) / 1000))}`;

const localTime = (ms: number) => new Date(ms).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });

export default function ClaudeWatch(props: Props) {
  const { watch, common, deals, links, buildTime, peakEnabled, lang } = props;
  const now = useNow();
  const mounted = now !== null;
  const t = now ?? buildTime;

  const state = getClaudeHeroState(deals, t, peakEnabled);
  const peak = getPeakStatus(t);
  const news = state.latestChange;

  // Current window bounds: during peak → today's peak; off-peak → from last change to next peak.
  const windowStart = peak.lastChange;
  const windowEnd = peak.nextChange;
  const nextPeakStart = peak.isPeak ? peak.lastChange : peak.nextChange;
  const nextPeakEnd = nextPeakStart + (PEAK_HOURS.endUtc - PEAK_HOURS.startUtc) * 3_600_000;

  const statusLine = peak.isPeak ? watch.peakShort : watch.offPeakShort;

  return (
    <Card className="gap-0 overflow-hidden py-0 shadow-sm">
      {state.mode === "promo" && state.promo ? (
        <CardHeader className="border-b py-4">
          <CardTitle className="text-sm font-medium text-muted-foreground">{watch.livePromo}</CardTitle>
          <CardAction>
            <Badge className="gap-1.5 bg-success text-white">
              <span className="size-1.5 animate-pulse rounded-full bg-white" aria-hidden="true" />
              {common.live}
            </Badge>
          </CardAction>
          <p className="col-span-2 mt-2 text-xl font-semibold tracking-tight">{localize(state.promo.headline, lang)}</p>
          <p className="col-span-2 text-sm text-muted-foreground">
            {localize(state.promo.value, lang)} · {localize(state.promo.audience, lang)}
          </p>
          {state.promo.endsAt !== undefined && (
            <div className="col-span-2 mt-3 flex flex-col gap-2">
              <div className="flex items-baseline justify-between text-xs text-muted-foreground">
                <span>{watch.promoEndsIn}</span>
                <span className="font-mono text-2xl font-semibold text-foreground tabular-nums">
                  {getCountdown(state.promo.endsAt, t).days > 0
                    ? `${getCountdown(state.promo.endsAt, t).days}d ${clock(getCountdown(state.promo.endsAt, t).totalMs % 86_400_000)}`
                    : clock(getCountdown(state.promo.endsAt, t).totalMs)}
                </span>
              </div>
              <Progress value={pct(state.promo.startsAt, state.promo.endsAt, t)} />
            </div>
          )}
        </CardHeader>
      ) : null}

      <CardHeader className="pt-5">
        <CardTitle className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
          {watch.statusTitle}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon-xs" aria-label={watch.info} className="text-muted-foreground">
                <Info />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-80 text-sm leading-relaxed text-muted-foreground">
              {watch.peakNote}
            </PopoverContent>
          </Popover>
        </CardTitle>
        <CardAction>
          {mounted ? (
            <Badge
              variant="outline"
              className={cn("gap-1.5", peak.isPeak ? "border-destructive/30 text-destructive" : "border-success/30 text-success")}
            >
              <span className={cn("size-1.5 animate-pulse rounded-full", peak.isPeak ? "bg-destructive" : "bg-success")} aria-hidden="true" />
              {peak.isPeak ? watch.peak : watch.offPeak}
            </Badge>
          ) : (
            <Skeleton className="h-5 w-16 rounded-full" />
          )}
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col gap-5 pb-5">
        <div className="flex min-h-9 items-center" aria-live="polite">
          {mounted ? (
            <p
              className={cn(
                "text-3xl leading-tight font-semibold tracking-tight",
                peak.isPeak ? "text-destructive" : "text-success",
              )}
            >
              {statusLine}
            </p>
          ) : (
            <Skeleton className="h-9 w-56" />
          )}
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">{watch.changesIn}</span>
            <span className="font-mono text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
              {mounted ? clock(getCountdown(peak.nextChange, t).totalMs) : "--:--:--"}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Progress value={mounted ? pct(windowStart, windowEnd, t) : 0} />
          <div className="flex justify-between font-mono text-xs text-muted-foreground tabular-nums">
            <span>{mounted ? localTime(windowStart) : "--:--"}</span>
            <span>{mounted ? localTime(windowEnd) : "--:--"}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-lg bg-muted/50 px-3 py-2 text-sm">
          <span className="text-muted-foreground">{peak.isPeak ? watch.peakWindow : watch.nextPeakWindow}</span>
          <span className="font-mono font-medium tabular-nums">
            {mounted ? `${localTime(nextPeakStart)}–${localTime(nextPeakEnd)}` : "--:--–--:--"}
          </span>
        </div>
      </CardContent>

      {news && links[news.id] && (
        <a
          href={links[news.id].href}
          className="flex items-center gap-3 border-t bg-muted/30 px-4 py-3 text-sm transition-colors hover:bg-muted"
        >
          <Badge className="shrink-0">{watch.whatsNew}</Badge>
          <span className="min-w-0 flex-1 font-medium text-pretty">{localize(news.headline, lang)}</span>
          <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        </a>
      )}
    </Card>
  );
}
