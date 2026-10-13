import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { format } from "@/lib/i18n/format";
import { CONSENT_STORED_ATTR, readConsent, setConsent, type ConsentRecord } from "@/lib/consent";

interface Props {
  text: Dictionary["consent"];
  policyHref: string;
}

/**
 * Cookie banner: shown until the visitor picks one of two equally weighted buttons — scrolling or
 * browsing on never counts as consent. Any [data-consent-open] element (the footer's "Cookie
 * preferences", the privacy page) reopens it.
 *
 * It renders open on the server, so a first-time visitor sees it at first paint rather than after
 * hydration (it was the page's late Largest Contentful Paint). BaseLayout's pre-paint script hides
 * it via html[data-consent-stored] when a choice is stored; on hydration the real check takes over.
 */
export default function CookieConsent({ text, policyHref }: Props) {
  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState<ConsentRecord | null>(null);
  const [status, setStatus] = useState("");
  const panel = useRef<HTMLElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const record = readConsent();
    setCurrent(record);
    if (record) setOpen(false);
    // No valid choice after all (e.g. malformed or from a future date): let the banner show.
    else document.documentElement.removeAttribute(CONSENT_STORED_ATTR);

    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as Element | null)?.closest?.<HTMLElement>("[data-consent-open]");
      if (!trigger) return;
      event.preventDefault();
      opener.current = trigger;
      setCurrent(readConsent());
      setStatus("");
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Once React has hidden the banner, the pre-paint attribute must not keep a reopened banner hidden.
  useEffect(() => {
    if (!open) document.documentElement.removeAttribute(CONSENT_STORED_ATTR);
  }, [open]);

  // Reopened from a link or button: move focus into the banner so keyboard and screen-reader users land on it.
  useEffect(() => {
    if (open && opener.current) panel.current?.focus();
  }, [open]);

  const choose = (analytics: boolean) => {
    setCurrent(setConsent(analytics));
    setOpen(false);
    setStatus(text.saved);
    opener.current?.focus();
    opener.current = null;
  };

  return (
    <>
      <p role="status" className="sr-only">
        {status}
      </p>
      {open && (
        <section
          ref={panel}
          data-consent-banner
          tabIndex={-1}
          aria-labelledby="consent-title"
          aria-describedby="consent-body"
          className="fixed inset-x-0 bottom-0 z-50 p-3 outline-none sm:right-auto sm:bottom-4 sm:left-4 sm:w-full sm:max-w-md sm:p-0"
        >
          <Card className="shadow-lg">
            <CardHeader>
              {/* Not a heading: the banner comes before the page's <h1> in the DOM and would break the outline. */}
              <CardTitle id="consent-title">{text.title}</CardTitle>
              <CardDescription id="consent-body" className="leading-relaxed">
                {text.body}{" "}
                <a href={policyHref} className="font-medium text-foreground underline underline-offset-4">
                  {text.policy}
                </a>
              </CardDescription>
            </CardHeader>
            {current && (
              <CardContent className="text-muted-foreground">
                {format(text.current, { choice: current.analytics ? text.currentAnalytics : text.currentNecessary })}
              </CardContent>
            )}
            <CardFooter className="grid grid-cols-2 gap-2">
              <Button size="lg" className="h-auto min-h-9 py-2 whitespace-normal" onClick={() => choose(false)}>
                {text.reject}
              </Button>
              <Button size="lg" className="h-auto min-h-9 py-2 whitespace-normal" onClick={() => choose(true)}>
                {text.accept}
              </Button>
            </CardFooter>
          </Card>
        </section>
      )}
    </>
  );
}
