import { FeatureList } from "@/components/feature-list";
import { Hero } from "@/components/hero";

// TODO: All translations. Store images with translations. QR code... alts... app screenshots...

// TODO: SEO improvements, meta tags, open graph, mobile app seo, twitter cards...

// TODO: Entering animations for text and stuff. Perhaps writing animation for main phrases.

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <FeatureList />
    </main>
  );
}
