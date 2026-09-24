import { ArrowUpRight, BadgeCheck, Check, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { DealFacts, DealTimer, isLimitNews } from "@/components/site/DealCard";
import { ToolLogo } from "@/components/site/ToolLogo";
import type { Locale } from "@/lib/i18n/config";
import { format, type HubDictionary } from "@/lib/i18n/dictionaries";
import { dealHref, localize, type DealRecord, type ToolRecord } from "@/lib/deals";
import { dealPath, toolPath } from "@/lib/seo";
import { formatDate } from "@/lib/time";

export function DealKeyFacts({ deal, tool, lang, hub, now }: { deal: DealRecord; tool: ToolRecord; lang: Locale; hub: HubDictionary; now: number }) {
  const { common } = hub;
  const cta = dealHref(deal, tool);
  return (
    <Card className="shadow-xs">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <a href={toolPath(lang, tool.slug)} className="flex items-center gap-2 font-medium hover:underline">
            <ToolLogo slug={tool.slug} name={tool.name} size="sm" />
            {tool.name}
          </a>
          <Badge variant="secondary">{hub.kinds[deal.kind]}</Badge>
          <DealTimer deal={deal} hub={hub} now={now} lang={lang} />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <DealFacts deal={deal} lang={lang} hub={hub} />
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-muted-foreground">
          <BadgeCheck className="size-3.5 shrink-0 text-success" aria-hidden="true" />
          <span>
            {common.verified} {formatDate(deal.verifiedAt, lang)}
          </span>
          <span aria-hidden="true">·</span>
          <a href={deal.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground hover:underline">
            {deal.sourceLabel}
            <ExternalLink className="size-3" aria-hidden="true" />
          </a>
        </p>
        {!isLimitNews(deal) && (
          <Button asChild>
            <a href={cta.href} target="_blank" rel={cta.sponsored ? "sponsored noopener" : "noopener"}>
              {common.getDeal}
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export function DealSteps({ deal, lang, hub }: { deal: DealRecord; lang: Locale; hub: HubDictionary }) {
  if (!deal.steps?.length) return null;
  return (
    <Card className="shadow-xs">
      <CardHeader>
        <CardTitle className="font-semibold">
          <h2>{hub.common.howToClaim}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="flex flex-col gap-3">
          {deal.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <span className="pt-0.5">{localize(step, lang)}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

export function DealTerms({ deal, lang, hub }: { deal: DealRecord; lang: Locale; hub: HubDictionary }) {
  if (!deal.terms?.length) return null;
  return (
    <Card className="shadow-xs">
      <CardHeader>
        <CardTitle className="font-semibold">
          <h2>{hub.common.goodToKnow}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2.5">
          {deal.terms.map((term, i) => (
            <li key={i} className="flex gap-2.5">
              <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              <span>{localize(term, lang)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function RelatedDeals({ deals, tools, lang, hub }: { deals: DealRecord[]; tools: Record<string, ToolRecord>; lang: Locale; hub: HubDictionary }) {
  if (!deals.length) return null;
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-medium text-muted-foreground">{hub.common.related}</h2>
      <ItemGroup className="gap-2">
        {deals.map((deal) => {
          const tool = tools[deal.tool];
          return (
            <Item key={deal.id} variant="outline" size="sm" asChild className="bg-card hover:bg-muted/50">
              <a href={dealPath(lang, deal.id)}>
                {tool && (
                  <ItemMedia>
                    <ToolLogo slug={tool.slug} name={tool.name} size="sm" />
                  </ItemMedia>
                )}
                <ItemContent className="min-w-0">
                  <ItemTitle className="line-clamp-1">{localize(deal.headline, lang)}</ItemTitle>
                  <ItemDescription className="line-clamp-1">{localize(deal.value, lang)}</ItemDescription>
                </ItemContent>
              </a>
            </Item>
          );
        })}
      </ItemGroup>
    </div>
  );
}

/** Q&A generated only from structured, sourced fields — never invented. */
export function dealFaq(deal: DealRecord, tool: ToolRecord, lang: Locale, hub: HubDictionary, now: number, status: string) {
  const t = hub.dealPage;
  const date = formatDate(now, lang);
  const items: { question: string; answer: string }[] = [];
  if (isLimitNews(deal)) {
    items.push({ question: t.qChange, answer: localize(deal.summary, lang) });
    items.push({ question: t.qWho, answer: localize(deal.audience, lang) });
    items.push({ question: t.qWhen, answer: format(t.aWhen, { date: formatDate(deal.startsAt, lang) }) });
  } else {
    const end = deal.endsAt ? formatDate(deal.endsAt, lang) : "";
    const availability =
      status === "upcoming"
        ? format(t.aUpcoming, { start: formatDate(deal.startsAt, lang) })
        : status === "ended" || status === "past"
          ? format(t.aEnded, { end })
          : deal.endsAt
            ? format(t.aLive, { date, end })
            : format(t.aOngoing, { date });
    items.push({ question: t.qAvailable, answer: availability });
    items.push({
      question: t.qWho,
      answer: localize(deal.audience, lang),
    });
    if (deal.steps?.length) {
      items.push({ question: t.qHow, answer: deal.steps.map((s, i) => `${i + 1}. ${localize(s, lang)}`).join(" ") });
    }
  }
  items.push({ question: t.qSource, answer: format(t.aSource, { source: `${deal.sourceLabel} (${deal.sourceUrl})`, date: formatDate(deal.verifiedAt, lang) }) });
  return items.map((item) => ({ ...item, question: item.question.replace("{tool}", tool.name) }));
}
