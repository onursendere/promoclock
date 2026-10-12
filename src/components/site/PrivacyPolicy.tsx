import { Cookie } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ContactText } from "@/components/site/ContactText";
import { STORAGE_INVENTORY } from "@/lib/consent";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { format } from "@/lib/i18n/format";

interface Props {
  t: Dictionary["hub"]["privacy"];
  consent: Dictionary["consent"];
  updated: string;
}

function ItemName({ names, kind }: { names: readonly string[]; kind: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      {names.map((name) => (
        <code key={name} className="font-mono text-xs break-all">
          {name}
        </code>
      ))}
      <Badge variant="outline">{kind}</Badge>
    </div>
  );
}

export function PrivacyPolicy({ t, consent, updated }: Props) {
  // Section bodies quote the banner's own button labels, so the two never drift apart.
  const labels = { accept: consent.accept, reject: consent.reject, settings: consent.settings };
  const groups = (["necessary", "analytics"] as const).map((category) => ({
    category,
    items: STORAGE_INVENTORY.filter((item) => item.category === category),
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{format(t.updated, { date: updated })}</p>
        {/* Opens the cookie banner (CookieConsent listens for [data-consent-open]). */}
        <Button type="button" variant="outline" data-consent-open>
          <Cookie data-icon="inline-start" />
          {t.manage}
        </Button>
      </div>

      {t.sections.map((section) => (
        <Card key={section.title} className="shadow-xs">
          <CardHeader>
            <CardTitle className="font-semibold">
              <h2>{section.title}</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="leading-relaxed text-muted-foreground">
            <ContactText text={format(section.body, labels)} />
          </CardContent>
        </Card>
      ))}

      <Card id="cookies" className="scroll-mt-20 shadow-xs">
        <CardHeader>
          <CardTitle className="font-semibold">
            <h2>{t.storageTitle}</h2>
          </CardTitle>
          <CardDescription className="leading-relaxed">{t.storageIntro}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {groups.map(({ category, items }) => (
            <section key={category} className="flex flex-col gap-2">
              <h3 className="font-medium">{t.categories[category]}</h3>
              {/* Phones get one block per item; three columns don't fit at 375px. */}
              <ul className="flex flex-col divide-y border-y sm:hidden">
                {items.map((item) => (
                  <li key={item.id} className="flex flex-col gap-1.5 py-3">
                    <ItemName names={item.names} kind={t.kinds[item.storage]} />
                    <p className="leading-relaxed text-muted-foreground hyphens-auto">{t.items[item.id].purpose}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.provider} · {t.columns.duration}: {t.items[item.id].duration}
                    </p>
                  </li>
                ))}
              </ul>
              <Table className="hidden table-fixed sm:table">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[32%]">{t.columns.name}</TableHead>
                    <TableHead>{t.columns.purpose}</TableHead>
                    <TableHead className="w-[22%]">{t.columns.duration}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="align-top whitespace-normal">
                        <div className="flex flex-col items-start gap-1">
                          <ItemName names={item.names} kind={t.kinds[item.storage]} />
                          <span className="text-xs text-muted-foreground">{item.provider}</span>
                        </div>
                      </TableCell>
                      <TableCell className="align-top whitespace-normal text-muted-foreground hyphens-auto">{t.items[item.id].purpose}</TableCell>
                      <TableCell className="align-top whitespace-normal text-muted-foreground hyphens-auto">{t.items[item.id].duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
