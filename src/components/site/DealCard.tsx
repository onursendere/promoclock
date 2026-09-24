import { ArrowUpRight, BadgeCheck, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { ToolLogo } from "@/components/site/ToolLogo";
import type { Locale } from "@/lib/i18n/config";
import type { HubDictionary } from "@/lib/i18n/dictionaries";
import { dealHref, localize, type DealRecord, type ToolRecord } from "@/lib/deals";
import { dealPath, toolPath } from "@/lib/seo";
import { formatDate } from "@/lib/time";
import { timerText, type TimerLabels } from "@/scripts/live";

export const isLimitNews = (deal: DealRecord) => deal.kind === "limit-change" || deal.kind === "limit-boost";

/** Time-left pill; src/scripts/live.ts keeps it current after load. */
export function DealTimer({ deal, hub, now, lang }: { deal: DealRecord; hub: HubDictionary; now: number; lang: Locale }) {
  const labels: TimerLabels = {
    lang,
    daysLeft: hub.common.daysLeft,
    hoursLeft: hub.common.hoursLeft,
    startsIn: hub.common.startsIn,
    ended: hub.common.ended,
    ongoing: hub.common.ongoing,
  };
  const { status, text } = timerText(deal, now, labels);
  return (
    <Badge
      variant="outline"
      data-deal-timer
      data-status={status}
      data-starts={deal.startsAt}
      data-ends={deal.endsAt}
      data-ongoing={deal.ongoing ? "true" : "false"}
      data-labels={JSON.stringify(labels)}
      className="group/timer gap-1.5 tabular-nums data-[status=active]:text-success data-[status=ending-soon]:text-warning data-[status=upcoming]:text-info"
    >
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full bg-muted-foreground group-data-[status=active]/timer:bg-success group-data-[status=ending-soon]/timer:bg-warning group-data-[status=upcoming]/timer:bg-info"
      />
      <span data-timer-text>{text}</span>
    </Badge>
  );
}

/** Offer · Ends/Started · Who, as a compact definition grid. */
export function DealFacts({ deal, lang, hub }: { deal: DealRecord; lang: Locale; hub: HubDictionary }) {
  const { common } = hub;
  const when = deal.endsAt
    ? { label: common.ends, value: formatDate(deal.endsAt, lang) }
    : deal.ongoing
      ? { label: common.ends, value: common.ongoing }
      : { label: common.started, value: formatDate(deal.startsAt, lang) };
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border text-sm">
      <div className="flex flex-col gap-0.5 bg-card px-3 py-2">
        <dt className="text-xs text-muted-foreground">{common.offer}</dt>
        <dd className="font-semibold">{localize(deal.value, lang)}</dd>
      </div>
      <div className="flex flex-col gap-0.5 bg-card px-3 py-2">
        <dt className="text-xs text-muted-foreground">{when.label}</dt>
        <dd className="font-semibold tabular-nums">{when.value}</dd>
      </div>
      <div className="col-span-2 flex flex-col gap-0.5 bg-card px-3 py-2">
        <dt className="text-xs text-muted-foreground">{common.who}</dt>
        <dd className="font-medium">{localize(deal.audience, lang)}</dd>
      </div>
    </dl>
  );
}

export function DealCard({
  deal,
  tool,
  lang,
  hub,
  now,
  hideTool = false,
}: {
  deal: DealRecord;
  tool?: ToolRecord;
  lang: Locale;
  hub: HubDictionary;
  now: number;
  hideTool?: boolean;
}) {
  const { common, kinds } = hub;
  const cta = dealHref(deal, tool);
  const details = dealPath(lang, deal.id);
  const news = isLimitNews(deal);

  return (
    <Card data-deal-card data-kind={deal.kind} className="h-full gap-4">
      <CardHeader>
        {hideTool || !tool ? (
          <Badge variant="secondary" className="w-fit">
            {kinds[deal.kind]}
          </Badge>
        ) : (
          <a href={toolPath(lang, tool.slug)} className="flex w-fit items-center gap-2.5 hover:underline">
            <ToolLogo slug={tool.slug} name={tool.name} size="sm" />
            <span className="text-sm font-medium">{tool.name}</span>
          </a>
        )}
        <CardAction>
          <DealTimer deal={deal} hub={hub} now={now} lang={lang} />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <CardTitle className="text-lg leading-snug font-semibold text-balance">
          <h3>
            <a href={details} className="hover:underline">
              {localize(deal.headline, lang)}
            </a>
          </h3>
        </CardTitle>
        <DealFacts deal={deal} lang={lang} hub={hub} />
        {deal.code && (
          <InputGroup>
            <InputGroupInput readOnly value={deal.code} className="font-mono font-semibold tracking-widest" aria-label={common.code} />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="xs" data-copy={deal.code} data-copied-label={common.copied}>
                <Copy />
                <span data-copy-label>{common.copy}</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        )}
        <p className="mt-auto flex items-center gap-1.5 text-xs text-muted-foreground">
          <BadgeCheck className="size-3.5 shrink-0 text-success" aria-hidden="true" />
          <span className="truncate">
            {common.verified} {formatDate(deal.verifiedAt, lang)} · {deal.sourceLabel}
          </span>
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        {news ? (
          <>
            <Button size="sm" asChild className="flex-1">
              <a href={details}>{common.details}</a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={deal.sourceUrl} target="_blank" rel="noopener noreferrer">
                {common.sources}
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
          </>
        ) : (
          <>
            <Button size="sm" asChild className="flex-1">
              <a href={cta.href} target="_blank" rel={cta.sponsored ? "sponsored noopener" : "noopener"}>
                {common.getDeal}
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={details}>{common.details}</a>
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
