import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { routing } from "@/i18n/routing";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";

//TODO: Why thumbnail does not appear on google ??

const montserrat = Montserrat({
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html className="bg-amber-50" lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
