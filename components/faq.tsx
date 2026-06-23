import { useTranslations } from "next-intl";

export const Faq = () => {
  const t = useTranslations("Faq");
  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <section className="w-full max-w-3xl mx-auto px-7 py-20 md:py-28 snap-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        {t("title")}
      </h2>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="group rounded-2xl bg-white/60 shadow-md shadow-gray-800/10 p-5 open:bg-white/80 transition-colors"
          >
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800">
              {item.question}
              <span className="ml-4 text-pink-600 text-2xl leading-none transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};
