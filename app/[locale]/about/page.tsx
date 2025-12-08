import { richFormatter } from "@/utils/rich-formatter";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default async function PrivacyPage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("About");

  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 md:pt-56 pb-10 text-gray-800 flex">
      <header>
        <h1 className="text-3xl font-bold mb-10">
          {t.rich("title", richFormatter)}
        </h1>
        <Image
          src="/about-me.jpeg"
          alt={t("imageAlt")}
          width={2112}
          height={2112}
          className="max-h-80 max-w-80 rounded-full mb-10"
        />
        <p className="mt-4">{t.rich("intro", richFormatter)}</p>
      </header>
    </main>
  );
}
