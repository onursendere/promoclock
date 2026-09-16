import { ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ToolLogo } from "@/components/site/ToolLogo";
import type { Locale } from "@/lib/i18n/config";
import { format, type HubDictionary } from "@/lib/i18n/dictionaries";
import { goPath, localize, type ToolRecord } from "@/lib/deals";
import { localePath } from "@/lib/seo";

export function ToolHero({ tool, lang, hub, liveCount }: { tool: ToolRecord; lang: Locale; hub: HubDictionary; liveCount: number }) {
  return (
    <div className="border-b bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath(lang)}>PromoClock</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath(lang, "tools")}>{hub.nav.tools}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{tool.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <ToolLogo slug={tool.slug} name={tool.name} size="lg" />
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{hub.categories[tool.category]}</Badge>
              <Badge variant="outline">{tool.vendor}</Badge>
              {liveCount > 0 && (
                <Badge variant="outline" className="gap-1.5 text-success">
                  <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
                  {format(hub.tools.liveDeals, { count: liveCount })}
                </Badge>
              )}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{tool.name}</h1>
            <p className="max-w-2xl text-lg text-pretty text-muted-foreground">{localize(tool.tagline, lang)}</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:flex-col sm:items-stretch">
            <Button asChild>
              <a href={goPath(tool.slug)} target="_blank" rel={tool.affiliate ? "sponsored noopener" : "noopener"}>
                {format(hub.common.visit, { name: tool.name })}
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
            {tool.slug === "claude" && (
              <Button variant="outline" asChild>
                <a href={localePath(lang)}>
                  <Clock data-icon="inline-start" />
                  {hub.claudeWatch.badge}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
