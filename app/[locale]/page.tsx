import { FeatureList } from "@/components/feature-list";
import { Hero } from "@/components/hero";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

// TODO: Entering animations for text and stuff. Perhaps writing animation for main phrases.

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
