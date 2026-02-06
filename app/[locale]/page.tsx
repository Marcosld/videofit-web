import { FeatureList } from "@/components/feature-list";
import { Hero } from "@/components/hero";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VideoFit",
  url: "https://www.videofit.app/",
};

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <FeatureList />
    </main>
  );
}
