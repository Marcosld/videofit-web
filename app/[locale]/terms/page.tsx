import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function TermsOfServicePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("Terms");
  const sectionsT = await getTranslations("Terms.sections");

  const sections = [
    {
      title: sectionsT("useOfApp.title"),
      content: sectionsT("useOfApp.content"),
    },
    {
      title: sectionsT("userResponsibilities.title"),
      content: sectionsT("userResponsibilities.content"),
    },
    {
      title: sectionsT("intellectualProperty.title"),
      content: sectionsT("intellectualProperty.content"),
    },
    {
      title: sectionsT("disclaimerWarranties.title"),
      content: sectionsT("disclaimerWarranties.content"),
    },
    {
      title: sectionsT("limitationLiability.title"),
      content: sectionsT("limitationLiability.content"),
    },
    {
      title: sectionsT("modificationsService.title"),
      content: sectionsT("modificationsService.content"),
    },
    {
      title: sectionsT("termination.title"),
      content: sectionsT("termination.content"),
    },
    {
      title: sectionsT("governingLaw.title"),
      content: sectionsT("governingLaw.content"),
    },
    {
      title: sectionsT("contactUs.title"),
      content: sectionsT("contactUs.content"),
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 md:pt-56 pb-10 text-gray-800">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-1">{t("title")}</h1>
        <p className="text-sm text-gray-500">{t("lastUpdated")}</p>
        <p className="mt-4">{t("intro")}</p>
      </header>

      <section className="space-y-6">
        {sections.map((section, index) => (
          <article key={index}>
            <h2 className="text-xl font-semibold mb-1">{section.title}</h2>
            <p>{section.content}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
