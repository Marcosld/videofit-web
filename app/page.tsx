import { FeatureList } from "@/components/feature-list";
import { Hero } from "@/components/hero";

// TODO: All translations. Store images with translations.

// TODO: Better to put a list of features
// TODO: Contact and privacy policy links in footer
// TODO: QR to download app

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      {/* <FeatureList /> */}
    </main>
  );
}
