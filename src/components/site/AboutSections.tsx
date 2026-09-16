import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSections({ sections }: { sections: { title: string; body: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      {sections.map((section) => (
        <Card key={section.title} className="shadow-xs">
          <CardHeader>
            <CardTitle className="font-semibold">
              <h2>{section.title}</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="leading-relaxed text-muted-foreground">{section.body}</CardContent>
        </Card>
      ))}
    </div>
  );
}
