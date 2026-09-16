import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/site/Logo";
import type { Locale } from "@/lib/i18n/config";
import type { UiDictionary } from "@/lib/i18n/dictionaries";
import { localePath } from "@/lib/seo";
import { AUTHOR } from "@/lib/site";

export function SiteFooter({ lang, dict }: { lang: Locale; dict: UiDictionary }) {
  const { nav, common } = dict.hub;
  const columns = [
    {
      title: "PromoClock",
      links: [
        { label: nav.claude, href: localePath(lang) },
        { label: nav.deals, href: localePath(lang, "deals") },
        { label: nav.tools, href: localePath(lang, "tools") },
        { label: nav.calendar, href: localePath(lang, "calendar") },
      ],
    },
    {
      title: nav.api,
      links: [
        { label: "/api/status", href: "/api/status" },
        { label: "/api/deals", href: "/api/deals" },
        { label: "llms.txt", href: "/llms.txt" },
      ],
    },
    {
      title: "Onur Şendere",
      links: [
        { label: "GitHub", href: AUTHOR.repo },
        { label: "X", href: AUTHOR.x },
        { label: nav.about, href: localePath(lang, "about") },
        { label: "Digiwings", href: AUTHOR.agency },
        { label: common.disclosureLink, href: localePath(lang, "affiliate-disclosure") },
      ],
    },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-3 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="flex min-w-0 flex-col items-start gap-4 sm:col-span-3 md:col-span-1">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">{dict.footer.crafted}</p>
          <Button variant="outline" size="sm" asChild className="h-auto max-w-full py-2 text-left whitespace-normal">
            <a href={AUTHOR.coffee} target="_blank" rel="noopener noreferrer">
              <Coffee data-icon="inline-start" />
              {dict.footer.buymeacoffee}
            </a>
          </Button>
        </div>
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <p className="text-sm font-medium">{column.title}</p>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
        <p>{dict.footer.disclaimer}</p>
        <p className="shrink-0">{dict.footer.rights}</p>
      </div>
    </footer>
  );
}
