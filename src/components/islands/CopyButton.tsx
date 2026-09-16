import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  text: string;
  label: string;
  copiedLabel: string;
  className?: string;
}

export default function CopyButton({ text, label, copiedLabel, className }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked — nothing to do.
    }
  };

  return (
    <Button variant="outline" size="icon-sm" onClick={copy} aria-label={copied ? copiedLabel : label} className={className}>
      {copied ? <Check /> : <Copy />}
    </Button>
  );
}
