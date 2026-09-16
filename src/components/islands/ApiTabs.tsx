import { Copy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  title: string;
  description: string;
  copyLabel: string;
  copiedLabel: string;
  snippets: { id: string; label: string; code: string }[];
  links: { href: string; label: string }[];
}

/** Copy buttons are handled by src/scripts/live.ts via [data-copy]. */
export default function ApiTabs({ title, description, copyLabel, copiedLabel, snippets, links }: Props) {
  return (
    <Card className="shadow-xs">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Terminal className="size-4" aria-hidden="true" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={snippets[0]?.id}>
          <TabsList>
            {snippets.map((s) => (
              <TabsTrigger key={s.id} value={s.id}>
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {snippets.map((s) => (
            <TabsContent key={s.id} value={s.id} className="relative">
              <pre className="overflow-x-auto rounded-lg border bg-muted/50 p-4 pr-24 font-mono text-xs leading-relaxed">
                <code>{s.code}</code>
              </pre>
              <Button
                variant="outline"
                size="xs"
                className="absolute top-2.5 right-2.5 bg-background"
                data-copy={s.code}
                data-copied-label={copiedLabel}
              >
                <Copy data-icon="inline-start" />
                <span data-copy-label>{copyLabel}</span>
              </Button>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((link) => (
            <Button key={link.href} variant="secondary" size="sm" asChild className="font-mono">
              <a href={link.href} target="_blank" rel="noopener">
                GET {link.label}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
