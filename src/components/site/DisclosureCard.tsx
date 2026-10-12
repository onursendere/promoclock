import { Card, CardContent } from "@/components/ui/card";
import { ContactText } from "@/components/site/ContactText";

export function DisclosureCard({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Card className="shadow-xs">
      <CardContent className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
        {paragraphs.map((p) => (
          <p key={p}>
            <ContactText text={p} />
          </p>
        ))}
      </CardContent>
    </Card>
  );
}
