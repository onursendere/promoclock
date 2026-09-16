import { ArrowUpRight, Copy, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { ToolLogo } from "@/components/site/ToolLogo";
import type { Locale } from "@/lib/i18n/config";
import type { HubDictionary } from "@/lib/i18n/dictionaries";
import { dealHref, getDealStatus, localize, type DealRecord, type ToolRecord } from "@/lib/deals";
import { localePath } from "@/lib/seo";
import { getCountdown, pad2, formatDate } from "@/lib/time";
import { cn } from "@/lib/utils";

interface Props {
  deal: DealRecord;
  tool?: ToolRecord;
  lang: Locale;
  hub: HubDictionary;
  now: number;
  hideTool?: boolean;
}

/** Status pill; src/scripts/live.ts keeps the text and data-status current after load. */
export function DealTimer({ deal, hub, now }: { deal: DealRecord; hub: HubDictionary; now: number }) {
  const { common } = hub;
  const labels = {
    endsIn: common.endsIn,
    startsIn: common.startsIn,
    ended: common.ended,
    ongoing: common.ongoing,
    d: common.days,
    h: common.hours,
    m: common.minutes,
    s: common.seconds,
  };
  const status = getDealStatus(deal, now);
  const c = deal.endsAt !== undefined ? getCountdown(deal.endsAt, now) : undefined;
  const initial =
    status === "upcoming"
      ? common.startsIn
      : status === "ended" || status === "past"
        ? common.ended
        : !c
          ? common.ongoing
          : `${common.endsIn} ${c.days}${common.days} ${pad2(c.hours)}${common.hours}`;

  return (
    <Badge
      variant="outline"
      data-deal-timer
      data-status={status}
      data-starts={deal.startsAt}
      data-ends={deal.endsAt}
      data-ongoing={deal.ongoing ? "true" : "false"}
      data-labels={JSON.stringify(labels)}
      className="group/timer gap-1.5 font-mono tabular-nums data-[status=active]:text-success data-[status=ending-soon]:text-warning data-[status=upcoming]:text-info"
    >
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full bg-muted-foreground group-data-[status=active]/timer:bg-success group-data-[status=ending-soon]/timer:bg-warning group-data-[status=upcoming]/timer:bg-info"
      />
      <span data-timer-text>{initial}</span>
    </Badge>
  );
}

export function DealCard({ deal, tool, lang, hub, now, hideTool = false }: Props) {
  const { common, kinds } = hub;
  const cta = dealHref(deal, tool);
  const startKnown = deal.startKnown !== false;
  const dates = deal.endsAt
    ? startKnown
      ? `${formatDate(deal.startsAt, lang)} – ${formatDate(deal.endsAt, lang)}`
      : `→ ${formatDate(deal.endsAt, lang)}`
    : deal.ongoing || !startKnown
      ? undefined
      : formatDate(deal.startsAt, lang);

  return (
    <Card id={deal.id} data-deal-card data-kind={deal.kind} className="h-full scroll-mt-24">
      <CardHeader>
        {hideTool || !tool ? (
          <CardDescription>{kinds[deal.kind]}</CardDescription>
        ) : (
          <a href={localePath(lang, `tools/${tool.slug}`)} className="flex min-w-0 items-center gap-3 hover:underline">
            <ToolLogo slug={tool.slug} name={tool.name} size="sm" />
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium">{tool.name}</span>
              <span className="block truncate text-xs text-muted-foreground">{kinds[deal.kind]}</span>
            </span>
          </a>
        )}
        <CardAction>
          <DealTimer deal={deal} hub={hub} now={now} />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <CardTitle className="text-base leading-snug font-semibold">
          <h3>{localize(deal.title, lang)}</h3>
        </CardTitle>
        <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">{localize(deal.summary, lang)}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {deal.scope && <Badge variant="secondary">{localize(deal.scope, lang)}</Badge>}
          {deal.regions?.map((region) => (
            <Badge key={region} variant="outline">
              {region}
            </Badge>
          ))}
          {dates && (
            <Badge variant="outline" className="text-muted-foreground">
              {dates}
            </Badge>
          )}
        </div>
        {deal.code && (
          <InputGroup>
            <InputGroupAddon>{common.code}</InputGroupAddon>
            <InputGroupInput readOnly value={deal.code} className="font-mono font-semibold tracking-widest" aria-label={common.code} />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="xs" data-copy={deal.code} data-copied-label={common.copied}>
                <Copy />
                <span data-copy-label>{common.copy}</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        )}
      </CardContent>
      <CardFooter className="flex-wrap justify-between gap-3">
        <div className="flex min-w-0 flex-col text-xs text-muted-foreground">
          <a
            href={deal.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 truncate hover:text-foreground hover:underline"
          >
            {deal.sourceLabel}
            <ExternalLink className="size-3 shrink-0" aria-hidden="true" />
          </a>
          <span>
            {common.verified} {formatDate(deal.verifiedAt, lang)}
          </span>
        </div>
        <Button size="sm" asChild>
          <a href={cta.href} target="_blank" rel={cn("noopener", cta.sponsored && "sponsored")}>
            {common.getDeal}
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
