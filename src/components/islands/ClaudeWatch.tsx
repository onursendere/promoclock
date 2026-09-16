import { useEffect, useState } from "react";
import { Clock, ExternalLink, Megaphone, Sparkles } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import Countdown from "@/components/islands/Countdown";
import { getPeakStatus } from "@/data/claude";
import type { Dictionary, HubDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { getClaudeHeroState, localize, type DealRecord } from "@/lib/deals";
import { getCountdown, pad2 } from "@/lib/time";
import { cn } from "@/lib/utils";

export interface DealDates {
  starts: string;
  ends?: string;
  verified: string;
}

interface Props {
  lang: Locale;
  hero: Dictionary["hero"];
  watch: HubDictionary["claudeWatch"];
  common: HubDictionary["common"];
  kinds: HubDictionary["kinds"];
  deals: DealRecord[];
  dates: Record<string, DealDates>;
  buildTime: number;
  peakEnabled: boolean;
  peakDocumented: boolean;
  /** Class applied to legacy ALL-CAPS strings in untranslated languages. */
  caseClass: string;
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

function LatestChange({
  deal,
  dates,
  lang,
  title,
  common,
}: {
  deal: DealRecord;
  dates?: DealDates;
  lang: Locale;
  title: string;
  common: HubDictionary["common"];
}) {
  return (
    <Alert className="text-left">
      <Megaphone />
      <AlertTitle className="line-clamp-none">
        <span className="text-muted-foreground">
          {title}
          {dates && ` · ${dates.starts}`}
        </span>
        <span className="mt-1 block font-semibold text-foreground">{localize(deal.title, lang)}</span>
      </AlertTitle>
      <AlertDescription>
        <p>{localize(deal.summary, lang)}</p>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <a
            href={deal.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
          >
            {common.source}: {deal.sourceLabel}
            <ExternalLink className="size-3" aria-hidden="true" />
          </a>
          {dates && (
            <span>
              {common.verified} {dates.verified}
            </span>
          )}
        </p>
      </AlertDescription>
    </Alert>
  );
}

export default function ClaudeWatch(props: Props) {
  const { lang, hero, watch, common, deals, dates, buildTime, peakEnabled, peakDocumented, caseClass } = props;
  const now = useNow();
  const mounted = now !== null;
  const t = now ?? buildTime;

  const state = getClaudeHeroState(deals, t, peakEnabled);
  const peak = getPeakStatus(t);
  const labels = { days: hero.days, hours: hero.hours, minutes: hero.minutes, seconds: hero.seconds };
  const timezone = mounted ? Intl.DateTimeFormat().resolvedOptions().timeZone : "";
  const localTime = mounted
    ? new Date(t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })
    : "";
  const elapsed = Math.max(0, Math.floor((t - peak.lastChange) / 1000));

  return (
    <div className="flex flex-col gap-4">
      {state.mode === "promo" && state.promo && (
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              {watch.livePromo}
            </CardTitle>
            <CardDescription>{state.promo.scope && localize(state.promo.scope, lang)}</CardDescription>
            <CardAction>
              <Badge className="gap-1.5 bg-success text-white">
                <span className="size-1.5 animate-pulse rounded-full bg-white" aria-hidden="true" />
                Live
              </Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <p className="text-xl leading-snug font-semibold tracking-tight">{localize(state.promo.title, lang)}</p>
              <p className="text-sm text-muted-foreground">{localize(state.promo.summary, lang)}</p>
            </div>
            {state.promo.endsAt !== undefined && (
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-muted-foreground">{watch.promoEndsIn}</p>
                <Countdown value={getCountdown(state.promo.endsAt, t)} labels={labels} />
                <Progress value={pct(state.promo.startsAt, state.promo.endsAt, t)} className="mt-1" />
              </div>
            )}
          </CardContent>
          <CardFooter className="justify-between gap-2 text-xs text-muted-foreground">
            <a href={state.promo.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">
              {common.source}: {state.promo.sourceLabel}
            </a>
            {peakEnabled && mounted && (
              <span className={peak.isPeak ? "text-destructive" : "text-success"}>
                {peak.isPeak ? watch.peak : watch.offPeak}
              </span>
            )}
          </CardFooter>
        </Card>
      )}

      {state.mode === "peak" && (
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              {watch.cardTitle}
            </CardTitle>
            <CardDescription className="font-mono text-xs tabular-nums">
              {mounted ? `${timezone} · ${localTime}` : <Skeleton className="h-4 w-44" />}
            </CardDescription>
            <CardAction>
              {mounted ? (
                <Badge
                  variant="outline"
                  className={cn("gap-1.5", peak.isPeak ? "border-destructive/30 text-destructive" : "border-success/30 text-success")}
                >
                  <span
                    className={cn("size-1.5 animate-pulse rounded-full", peak.isPeak ? "bg-destructive" : "bg-success")}
                    aria-hidden="true"
                  />
                  {peak.isPeak ? watch.peak : watch.offPeak}
                </Badge>
              ) : (
                <Skeleton className="h-5 w-16 rounded-full" />
              )}
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex min-h-20 flex-col gap-1.5" aria-live="polite">
              {mounted ? (
                <>
                  <p
                    className={cn(
                      "text-2xl leading-tight font-semibold tracking-tight",
                      peak.isPeak ? "text-destructive" : "text-success",
                      caseClass,
                    )}
                  >
                    {peak.isPeak ? hero.promotionInactive : hero.promotionActive}
                  </p>
                  <p className="text-sm text-muted-foreground">{peak.isPeak ? hero.inactiveSubtitle : hero.activeSubtitle}</p>
                </>
              ) : (
                <>
                  <Skeleton className="h-7 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium text-muted-foreground">{hero.countdownLabel}</p>
              <div className={cn("transition-opacity", mounted ? "opacity-100" : "opacity-40")}>
                <Countdown value={getCountdown(peak.nextChange, t)} labels={labels} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                <span>{watch.windowProgress}</span>
                <span className="font-mono tabular-nums">
                  {mounted &&
                    `${pad2(Math.floor(elapsed / 3600))}:${pad2(Math.floor((elapsed % 3600) / 60))}:${pad2(elapsed % 60)} ${hero.sinceLastChange}`}
                </span>
              </div>
              <Progress value={mounted ? pct(peak.lastChange, peak.nextChange, t) : 0} />
            </div>
          </CardContent>
          {!peakDocumented && (
            <CardFooter>
              <p className="text-xs leading-relaxed text-muted-foreground">{watch.peakNote}</p>
            </CardFooter>
          )}
        </Card>
      )}

      {state.latestChange && (
        <LatestChange
          deal={state.latestChange}
          dates={dates[state.latestChange.id]}
          lang={lang}
          title={watch.latestChange}
          common={common}
        />
      )}
    </div>
  );
}
