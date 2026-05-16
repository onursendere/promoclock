import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

interface JsonLdProps {
  dict: Dictionary;
  lang: Locale;
}

export default function JsonLd({ dict, lang }: JsonLdProps) {
  const baseUrl = "https://promoclock.co";

  const author = {
    "@type": "Person",
    name: "Onur Şendere",
    url: "https://x.com/onursendere",
    sameAs: [
      "https://x.com/onursendere",
      "https://github.com/onursendere",
      "https://www.linkedin.com/in/onursendere/",
    ],
  };

  const publisher = {
    "@type": "Organization",
    name: "Digiwings",
    url: "https://digiwings.co.uk",
  };

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PromoClock",
    description: dict.meta.description,
    url: `${baseUrl}/${lang}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    inLanguage: lang,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author,
    publisher,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to check if Claude peak hours are active right now",
    description: dict.howItWorks.subtitle,
    step: dict.howItWorks.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
    </>
  );
}
