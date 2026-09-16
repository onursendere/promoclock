import { CalendarClock, Flag, Rocket, ShoppingBag } from "lucide-react";
import { Fragment } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from "@/components/ui/item";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ToolLogo } from "@/components/site/ToolLogo";
import type { EventRecord } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import { localize, type ToolRecord } from "@/lib/deals";
import { formatDate } from "@/lib/time";

const icons = { deadline: Flag, launch: Rocket, sale: ShoppingBag, event: CalendarClock };
const DAY = 86_400_000;

export interface CalendarEntry extends EventRecord {
  href?: string;
}

export function CalendarMonths({
  months,
  tools,
  lang,
  now,
}: {
  months: { label: string; events: CalendarEntry[] }[];
  tools: Record<string, ToolRecord>;
  lang: Locale;
  now: number;
}) {
  const relative = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
  return (
    <div className="flex flex-col gap-6">
      {months.map((month) => (
        <Card key={month.label} className="shadow-xs">
          <CardHeader className="border-b">
            <CardTitle className="font-semibold capitalize">{month.label}</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <ItemGroup>
              {month.events.map((event, i) => {
                const Icon = icons[event.kind];
                const tool = event.tool ? tools[event.tool] : undefined;
                const title = localize(event.title, lang);
                return (
                  <Fragment key={event.id}>
                    {i > 0 && <ItemSeparator />}
                    <Item className="items-start">
                      <ItemMedia className="w-14 flex-col gap-0 rounded-md border bg-muted/50 py-1.5 text-center">
                        <span className="text-[10px] font-medium text-muted-foreground uppercase">
                          {formatDate(event.date, lang, { day: undefined, year: undefined, month: "short" })}
                        </span>
                        <span className="font-mono text-lg leading-tight font-semibold">{new Date(event.date).getUTCDate()}</span>
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle className="line-clamp-none">
                          {event.href ? (
                            <a href={event.href} className="hover:underline">
                              {title}
                            </a>
                          ) : (
                            title
                          )}
                        </ItemTitle>
                        {event.description && (
                          <ItemDescription className="line-clamp-none">{localize(event.description, lang)}</ItemDescription>
                        )}
                        {tool && (
                          <span className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                            <ToolLogo slug={tool.slug} name={tool.name} size="sm" className="size-5 rounded [&_svg]:size-3" />
                            {tool.name}
                          </span>
                        )}
                      </ItemContent>
                      <ItemActions>
                        <Badge variant="outline" className="gap-1.5">
                          <Icon aria-hidden="true" />
                          {relative.format(Math.round((event.date - now) / DAY), "day")}
                        </Badge>
                      </ItemActions>
                    </Item>
                  </Fragment>
                );
              })}
            </ItemGroup>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function PastEvents({ events, lang }: { events: CalendarEntry[]; lang: Locale }) {
  return (
    <Card className="gap-0 py-0 shadow-xs">
      <Table>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="w-32 pl-4 font-mono text-xs text-muted-foreground tabular-nums">
                {formatDate(event.date, lang)}
              </TableCell>
              <TableCell className="pr-4 whitespace-normal">
                {event.href ? (
                  <a href={event.href} className="hover:underline">
                    {localize(event.title, lang)}
                  </a>
                ) : (
                  localize(event.title, lang)
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
