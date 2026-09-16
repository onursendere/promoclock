import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Countdown, { type CountdownTone } from "@/components/islands/Countdown";
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
  dealsHref: string;
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

function Elapsed({ since, now, label, tone }: { since: number; now: number; label: string; tone: CountdownTone }) {
  const s = Math.max(0, Math.floor((now - since) / 1000));
  return (
    <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
      <span className={cn("font-mono text-sm font-semibold tabular-nums", tone === "destructive" ? "text-destructive" : "text-success")}>
        {pad2(Math.floor(s / 3600))}:{pad2(Math.floor((s % 3600) / 60))}:{pad2(s % 60)}
      </span>
      <span>{label}</span>
    </p>
  );
}

function ChangeCard({
  deal,
  dates,
  lang,
  title,
  common,
  kinds,
}: {
  deal: DealRecord;
  dates?: DealDates;
  lang: Locale;
  title: string;
  common: HubDictionary["common"];
  kinds: HubDictionary["kinds"];
}) {
  return (
    <Card className="mx-auto w-full max-w-xl text-left">
      <CardContent className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">{title}</span>
          <Badge variant="secondary">{kinds[deal.kind]}</Badge>
          {dates && <time className="ml-auto text-xs text-muted-foreground">{dates.starts}</time>}
        </div>
        <p className="font-heading text-lg leading-snug font-semibold">{localize(deal.title, lang)}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{localize(deal.summary, lang)}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {deal.scope && <span className="font-medium text-secondary-foreground">{localize(deal.scope, lang)}</span>}
          <a
            href={deal.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            {common.source}: {deal.sourceLabel}
            <ExternalLink className="size-3" aria-hidden="true" />
          </a>
          {dates && (
            <span>
              {common.verified} {dates.verified}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ClaudeWatch(props: Props) {
  const { lang, hero, watch, common, kinds, deals, dates, buildTime, peakEnabled, peakDocumented, dealsHref } = props;
  const now = useNow();
  const mounted = now !== null;
  const t = now ?? buildTime;

  const state = getClaudeHeroState(deals, t, peakEnabled);
  const peak = getPeakStatus(t);
  const peakTone: CountdownTone = peak.isPeak ? "destructive" : "success";
  const digitLabels = { days: hero.days, hours: hero.hours, minutes: hero.minutes, seconds: hero.seconds };
  const timezone = mounted ? Intl.DateTimeFormat().resolvedOptions().timeZone : "";
  const localTime = mounted
    ? new Date(t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })
    : "";

  const badge = (() => {
    if (state.mode === "promo") return { text: watch.livePromo, tone: "bg-success" };
    if (state.mode === "peak") {
      if (!mounted) return { text: hero.badge, tone: "bg-muted-foreground" };
      return { text: `${hero.badge} — ${peak.isPeak ? "ON" : "OFF"}`, tone: peak.isPeak ? "bg-destructive" : "bg-success" };
    }
    return { text: watch.badge, tone: "bg-primary" };
  })();

  return (
    <div className="mx-auto w-full max-w-3xl text-center">
      <div
        className={cn(
          "relative mb-3 inline-flex items-center gap-2.5 overflow-hidden rounded-full px-5 py-2.5 text-sm font-bold tracking-wide text-white sm:text-base dark:text-background",
          badge.tone,
        )}
      >
        <span className="pc-shimmer pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />
        <span className={cn("relative size-2.5 rounded-full bg-current", mounted && "animate-pulse")} aria-hidden="true" />
        <span className="relative">{badge.text}</span>
      </div>

      {state.mode === "promo" && state.promo && (
        <>
          <h1 className="mb-4 px-2 text-3xl leading-[1.1] tracking-tight text-success sm:text-5xl md:text-6xl">
            {localize(state.promo.title, lang)}
          </h1>
          <p className="mx-auto mb-4 max-w-2xl px-2 text-sm leading-relaxed font-medium text-secondary-foreground sm:text-lg">
            {localize(state.promo.summary, lang)}
          </p>
          {state.promo.scope && <Badge variant="outline" className="mb-6">{localize(state.promo.scope, lang)}</Badge>}
          {state.promo.endsAt !== undefined && (
            <div className="mb-4">
              <p className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">{watch.promoEndsIn}</p>
              <Countdown value={getCountdown(state.promo.endsAt, t)} labels={digitLabels} tone="success" />
            </div>
          )}
          <p className="mb-6 text-xs text-muted-foreground">
            <a href={state.promo.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {common.source}: {state.promo.sourceLabel}
            </a>
            {dates[state.promo.id] && ` · ${common.verified} ${dates[state.promo.id].verified}`}
          </p>
          {peakEnabled && mounted && (
            <p className="mb-6 text-sm text-muted-foreground">
              {watch.peakPanelTitle}:{" "}
              <strong className={peak.isPeak ? "text-destructive" : "text-success"}>
                {peak.isPeak ? hero.promotionInactive : hero.promotionActive}
              </strong>
            </p>
          )}
        </>
      )}

      {state.mode === "peak" && (
        <>
          <h1
            className={cn(
              "mb-4 px-2 text-3xl leading-[1.1] tracking-tight transition-colors sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl",
              !mounted ? "text-foreground/30" : peak.isPeak ? "text-destructive" : "text-success",
            )}
            aria-live="polite"
          >
            {mounted ? (peak.isPeak ? hero.promotionInactive : hero.promotionActive) : hero.badge}
          </h1>
          <p className="mx-auto mb-4 min-h-[3lh] max-w-2xl px-2 text-sm leading-relaxed font-medium text-secondary-foreground sm:mb-6 sm:min-h-[2lh] sm:text-lg">
            {mounted ? (peak.isPeak ? hero.inactiveSubtitle : hero.activeSubtitle) : " "}
          </p>
          <div className="mb-4 flex min-h-5 flex-col items-center justify-center gap-1 px-2 text-sm text-muted-foreground sm:mb-6 sm:flex-row sm:gap-4">
            {mounted && (
              <>
                <span>
                  <span className="font-semibold text-secondary-foreground">{hero.yourTimezone}:</span> {timezone}
                </span>
                <span className="hidden text-border sm:inline" aria-hidden="true">|</span>
                <span>
                  <span className="font-semibold text-secondary-foreground">{hero.yourLocalTime}:</span>{" "}
                  <time className="tabular-nums">{localTime}</time>
                </span>
              </>
            )}
          </div>
          <p className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase sm:mb-5">{hero.countdownLabel}</p>
          <div className={cn("transition-opacity", mounted ? "opacity-100" : "opacity-0")}>
            <Countdown value={getCountdown(peak.nextChange, t)} labels={digitLabels} tone={peakTone} />
          </div>
          <div className="mt-4 min-h-5 sm:mt-5">
            {mounted && <Elapsed since={peak.lastChange} now={t} label={hero.sinceLastChange} tone={peakTone} />}
          </div>
          {!peakDocumented && <p className="mx-auto mt-3 max-w-xl px-2 text-xs leading-relaxed text-muted-foreground">{watch.peakNote}</p>}
        </>
      )}

      {state.mode === "policy" && state.latestChange && (
        <h1 className="mb-6 px-2 text-3xl leading-[1.1] tracking-tight sm:text-5xl">{localize(state.latestChange.title, lang)}</h1>
      )}

      {state.latestChange && (
        <div className="mt-8">
          <ChangeCard
            deal={state.latestChange}
            dates={dates[state.latestChange.id]}
            lang={lang}
            title={watch.latestChange}
            common={common}
            kinds={kinds}
          />
        </div>
      )}

      <a
        href={dealsHref}
        className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        {watch.seeAllDeals}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </div>
  );
}
