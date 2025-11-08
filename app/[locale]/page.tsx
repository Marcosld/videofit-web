import { FeatureList } from "@/components/feature-list";
import { Hero } from "@/components/hero";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

// TODO: SEO improvements, meta tags, open graph, mobile app seo, twitter cards... https://dev.to/oikon/seo-and-i18n-implementation-guide-for-nextjs-app-router-dynamic-metadata-and-internationalization-3eol

// TODO: Entering animations for text and stuff. Perhaps writing animation for main phrases.

// TODO: 404 page !! Preserve header and footer

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <main className="flex flex-col">
      <Hero />
      <FeatureList />
    </main>
  );
}
