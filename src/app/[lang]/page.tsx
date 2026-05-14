import { getDictionary } from "@/lib/i18n/get-dictionary";
import { i18n, type Locale } from "@/lib/i18n/config";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Eligibility from "@/components/Eligibility";
import FAQ from "@/components/FAQ";
import PromotionHistory from "@/components/PromotionHistory";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import BuyMeCoffeeFloat from "@/components/BuyMeCoffeeFloat";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <JsonLd dict={dict} lang={lang} />
      <Header dict={dict} lang={lang} />
      <main>
        <HeroSection dict={dict} />
        <Eligibility dict={dict} />
        <FAQ dict={dict} />
        <PromotionHistory dict={dict} />
      </main>
      <Footer dict={dict} />
      <BuyMeCoffeeFloat />
    </>
  );
}
