import { CONTACT_EMAIL } from "@/lib/site";

/**
 * The contact address as a mailto link, fenced off from Cloudflare's Email Obfuscation, which would
 * otherwise rewrite it into a /cdn-cgi/l/email-protection link that crawlers report as a 404.
 */
function EmailLink() {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<!--email_off--><a href="mailto:${CONTACT_EMAIL}" class="font-medium text-foreground underline underline-offset-4">${CONTACT_EMAIL}</a><!--/email_off-->`,
      }}
    />
  );
}

/** Dictionary text with each `{email}` placeholder rendered as the contact link. */
export function ContactText({ text }: { text: string }) {
  return text.split("{email}").flatMap((part, i) => (i ? [<EmailLink key={i} />, part] : [part]));
}
