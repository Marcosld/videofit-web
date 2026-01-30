import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function PrivacyPage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("Privacy");
  const sectionsT = await getTranslations("Privacy.sections");

  const sectionContent = (key: Parameters<typeof sectionsT.rich>[0]) => {
    return sectionsT.rich(key, {
      strong: (chunks) => <strong>{chunks}</strong>,
      br: () => <br />,
    });
  };

  const sections = [
    {
      title: sectionsT("informationWeCollect.title"),
      content: sectionContent("informationWeCollect.content"),
    },
    {
      title: sectionsT("devicePermissions.title"),
      content: sectionContent("devicePermissions.content"),
    },
    {
      title: sectionsT("useOfInformation.title"),
      content: sectionContent("useOfInformation.content"),
    },
    {
      title: sectionsT("thirdPartyServices.title"),
      content: sectionContent("thirdPartyServices.content"),
    },
    {
      title: sectionsT("legalBasis.title"),
      content: sectionContent("legalBasis.content"),
    },
    {
      title: sectionsT("dataSecurity.title"),
      content: sectionContent("dataSecurity.content"),
    },
    {
      title: sectionsT("childrensPrivacy.title"),
      content: sectionContent("childrensPrivacy.content"),
    },
    {
      title: sectionsT("youRights.title"),
      content: sectionContent("youRights.content"),
    },
    {
      title: sectionsT("changesToPolicy.title"),
      content: sectionContent("changesToPolicy.content"),
    },
    {
      title: sectionsT("contactUs.title"),
      content: sectionContent("contactUs.content"),
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
