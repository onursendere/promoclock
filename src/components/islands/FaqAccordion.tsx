import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/**
 * Answers stay in the static HTML (forceMount) so they remain indexable. The trigger's Radix header
 * is already an <h3>, so the question goes in as plain text (a heading inside a button is invalid).
 */
export default function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={item.question} value={`q-${i}`}>
          <AccordionTrigger className="py-4 text-left text-base font-semibold">{item.question}</AccordionTrigger>
          <AccordionContent forceMount className="pb-4 text-base leading-relaxed text-muted-foreground in-data-[state=closed]:hidden">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
