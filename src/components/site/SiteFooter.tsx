import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/site/Logo";
import type { Locale } from "@/lib/i18n/config";
import type { UiDictionary } from "@/lib/i18n/dictionaries";
import { localePath } from "@/lib/seo";
import { AUTHOR } from "@/lib/site";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

/** "© 2026 PromoClock. Built by Onur Şendere." with the name linked to X, in any language. */
function Rights({ text }: { text: string }) {
  const [before, after] = text.split(AUTHOR.name);
  if (after === undefined) return <>{text}</>;
  return (
    <>
      {before}
      <a href={AUTHOR.x} target="_blank" rel="me noopener noreferrer" className="font-medium text-foreground underline-offset-4 hover:underline">
        {AUTHOR.name}
      </a>
      {after}
    </>
  );
}

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
        { label: "llms.txt", href: "/llms.txt" },
      ],
    },
    {
      title: AUTHOR.name,
      links: [
        { label: "X", href: AUTHOR.x },
        { label: "GitHub", href: AUTHOR.repo },
        { label: nav.about, href: localePath(lang, "about") },
        { label: "Digiwings", href: AUTHOR.agency },
        { label: common.disclosureLink, href: localePath(lang, "affiliate-disclosure") },
      ],
    },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-3 gap-x-4 gap-y-6 px-4 py-8 sm:gap-x-6 sm:px-6 sm:py-12 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-10">
        <div className="col-span-3 flex min-w-0 flex-col items-start gap-3 md:col-span-1 md:gap-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">{dict.footer.crafted}</p>
          <div className="flex max-w-full flex-col items-start gap-2">
            <p className="text-sm text-muted-foreground">{dict.footer.coffeeLead}</p>
            <Button variant="outline" size="sm" asChild className="max-w-full">
              <a href={AUTHOR.coffee} {...external}>
                <Coffee data-icon="inline-start" />
                <span className="truncate">{dict.footer.buymeacoffee}</span>
              </a>
            </Button>
          </div>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex min-w-0 flex-col gap-2 sm:gap-3">
            <p className="text-sm font-medium">{column.title}</p>
            <ul className="flex flex-col gap-1.5 sm:gap-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm break-words text-muted-foreground transition-colors hover:text-foreground"
                    {...(link.href.startsWith("http") ? external : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <Separator />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-1.5 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:gap-2 sm:px-6 sm:py-6">
        <p>{dict.footer.disclaimer}</p>
        <p className="shrink-0">
          <Rights text={dict.footer.rights} />
        </p>
      </div>
    </footer>
  );
}
