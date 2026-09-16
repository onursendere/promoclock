import { Card, CardContent } from "@/components/ui/card";

export function DisclosureCard({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Card className="shadow-xs">
      <CardContent className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </CardContent>
    </Card>
  );
}
