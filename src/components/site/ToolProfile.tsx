import { ArrowRight, BadgeCheck, Check, ExternalLink, Tag } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { Locale } from "@/lib/i18n/config";
import { format, type HubDictionary } from "@/lib/i18n/dictionaries";
import type { ToolRecord } from "@/lib/deals";
import { sourceLabel, startingPriceLabel, type ToolProfile } from "@/lib/profiles";
import { formatDate } from "@/lib/time";

/**
 * Building blocks of a tool profile page (src/pages/[lang]/tools/[slug].astro). Section headings
 * live in the page; these render the content under them with shadcn/ui primitives only.
 */

const isoDay = (ms: number) => new Date(ms).toISOString().slice(0, 10);

/** Vendor, category, platforms, free plan, pricing from, last reviewed — two tables side by side from sm. */
export function ToolQuickFacts({ tool, profile, lang, hub }: { tool: ToolRecord; profile: ToolProfile; lang: Locale; hub: HubDictionary }) {
  const t = hub.toolPage;
  const price = startingPriceLabel(profile.pricing, lang, t);
  const groups = [
    [
      { label: t.vendor, value: tool.vendor },
      { label: t.category, value: hub.categories[tool.category] },
      {
        label: t.platforms,
        value: (
          <span className="flex flex-wrap gap-1.5">
            {profile.platforms.map((platform) => (
              <Badge key={platform} variant="outline">
                {t.platformNames[platform]}
              </Badge>
            ))}
          </span>
        ),
      },
    ],
    [
      { label: t.freePlan, value: profile.pricing.freePlan ? t.yes : t.no },
      { label: t.pricingFrom, value: price ?? <span className="text-muted-foreground">{t.notListed}</span> },
      { label: t.lastReviewed, value: <time dateTime={isoDay(profile.reviewedAt)}>{formatDate(profile.reviewedAt, lang)}</time> },
    ],
  ];

  return (
    <Card className="grid gap-0 py-1 sm:grid-cols-2 sm:gap-x-8 sm:px-2">
      {groups.map((rows, i) => (
        <Table key={i} className="table-fixed">
          <TableBody className={i === 0 ? "max-sm:[&_tr:last-child]:border-b" : undefined}>
            {rows.map((row) => (
              <TableRow key={row.label} className="hover:bg-transparent">
                <TableHead scope="row" className="h-auto w-32 py-2.5 pl-4 align-top font-normal whitespace-normal text-muted-foreground sm:w-36">
                  {row.label}
                </TableHead>
                <TableCell className="py-2.5 pr-4 align-top font-medium whitespace-normal">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ))}
    </Card>
  );
}

export function ToolBestFor({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Badge variant="outline" className="h-7 px-3 text-sm font-normal">
            {item}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

export function ToolFeatures({ features }: { features: ToolProfile["keyFeatures"] }) {
  return (
    <ItemGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <Item key={feature.name} role="listitem" variant="outline" className="h-full items-start bg-card">
          <ItemContent>
            <ItemTitle className="line-clamp-none">{feature.name}</ItemTitle>
            <ItemDescription className="line-clamp-none">{feature.description}</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  );
}

export function ToolUseCases({ items }: { items: string[] }) {
  return (
    <ul className="flex max-w-3xl flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ToolPricing({ profile, lang, hub }: { profile: ToolProfile; lang: Locale; hub: HubDictionary }) {
  const t = hub.toolPage;
  const price = startingPriceLabel(profile.pricing, lang, t);
  const { freeTrial, summary, asOf } = profile.pricing;
  return (
    <Card className="max-w-3xl">
      {(price || freeTrial) && (
        <CardHeader>
          {price && (
            <>
              <CardDescription>{t.pricingFrom}</CardDescription>
              <CardTitle className="text-2xl font-semibold tracking-tight tabular-nums">{price}</CardTitle>
            </>
          )}
          {freeTrial && (
            <CardAction>
              <Badge variant="secondary">{t.freeTrial}</Badge>
            </CardAction>
          )}
        </CardHeader>
      )}
      <CardContent className="flex flex-col gap-4">
        <p className="text-base leading-relaxed">{summary}</p>
        {profile.savingTips.length > 0 && (
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">{t.savingTips}</h3>
            <ul className="flex flex-col gap-2">
              {profile.savingTips.map((tip) => (
                <li key={tip} className="flex gap-2.5 leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="gap-1.5 text-xs text-muted-foreground">
        <BadgeCheck className="size-3.5 shrink-0 text-success" aria-hidden="true" />
        <span>{format(t.pricingAsOf, { date: formatDate(asOf, lang) })}</span>
      </CardFooter>
    </Card>
  );
}

/** Compact one-line empty state for "Current deals". */
export function ToolNoDeals({ message, href, label }: { message: string; href: string; label: string }) {
  return (
    <Alert role="note">
      <Tag />
      <AlertDescription className="flex flex-wrap items-center gap-x-2 gap-y-1 text-pretty">
        <span>{message}</span>
        <a href={href} className="inline-flex items-center gap-1 font-medium text-foreground">
          {label}
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>
      </AlertDescription>
    </Alert>
  );
}

export function ToolSources({ sources, reviewedAt, lang, hub }: { sources: string[]; reviewedAt: number; lang: Locale; hub: HubDictionary }) {
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col gap-2 text-sm">
        {sources.map((url) => {
          const { host, path } = sourceLabel(url);
          return (
            <li key={url} className="flex min-w-0">
              <a
                href={url}
                target="_blank"
                rel="noopener"
                className="group inline-flex min-w-0 items-center gap-1.5 underline-offset-4 hover:underline"
              >
                <span className="flex min-w-0">
                  <span className="shrink-0 font-medium">{host}</span>
                  {path && <span className="truncate text-muted-foreground group-hover:text-foreground">{path}</span>}
                </span>
                <ExternalLink className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <BadgeCheck className="size-3.5 shrink-0 text-success" aria-hidden="true" />
        <span>
          {format(hub.toolPage.reviewedOn, { date: formatDate(reviewedAt, lang) })}
        </span>
      </p>
    </div>
  );
}

/** Readable markdown body with shadcn typography (no plugin): foreground text, muted markers only. */
export const profileProse =
  "max-w-3xl text-base leading-relaxed [&>*:first-child]:mt-0 [&_h2]:mt-10 [&_h2]:scroll-m-20 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:font-semibold [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:ml-5 [&_ul]:list-disc [&_ol]:mt-3 [&_ol]:ml-5 [&_ol]:list-decimal [&_li]:mt-2 [&_li]:pl-1 [&_li::marker]:text-muted-foreground [&_strong]:font-semibold [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4";
