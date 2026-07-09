import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getTranslation } from "@/i18n/translations";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { VideoSection } from "@/components/VideoSection";
import { LocationSection } from "@/components/LocationSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = getTranslation(locale);

  return (
    <>
      <JsonLd locale={locale} description={t.meta.description} />
      <Header locale={locale as Locale} t={t} />
      <main>
        <Hero t={t} />
        <Stats t={t} locale={locale as Locale} />
        <About t={t} />
        <Features t={t} />
        <Gallery t={t} />
        <VideoSection t={t} />
        <LocationSection t={t} />
        <ContactForm t={t} locale={locale as Locale} />
      </main>
      <Footer t={t} />
    </>
  );
}
