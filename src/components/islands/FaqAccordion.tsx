import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/** Answers stay in the static HTML (forceMount) so they remain indexable. */
export default function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={item.question} value={`q-${i}`}>
          <AccordionTrigger className="text-left text-base">
            <h3>{item.question}</h3>
          </AccordionTrigger>
          <AccordionContent forceMount className="text-muted-foreground in-data-[state=closed]:hidden">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
