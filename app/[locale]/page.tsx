import { Faq } from "@/components/faq";
import { FeatureList } from "@/components/feature-list";
import { Hero } from "@/components/hero";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

const baseUrl = "https://www.videofit.app";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const tFaq = await getTranslations("Faq");
  const faqItems = tFaq.raw("items") as { question: string; answer: string }[];

  const tJsonLd = await getTranslations("JsonLd");
  const featureList = tJsonLd.raw("featureList") as string[];

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "VideoFit",
    operatingSystem: "iOS, Android",
    applicationCategory: "HealthApplication",
    url: `${baseUrl}/${locale}`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <FeatureList />
      <Faq />
    </main>
  );
}
