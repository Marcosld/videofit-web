import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export const Header = () => {
  const locale = useLocale();
  const t = useTranslations("Header");

  return (
    <header className="absolute w-full flex justify-center items-center">
      <Link
        href="/"
        className="flex gap-4 justify-center md:justify-start pt-6 px-8 2xl:pt-12 items-center w-full max-w-7xl"
      >
        <Image
          src="/app-icon.png"
          alt={t("appLogoAlt")}
          width={64}
          height={64}
          className="rounded-xl max-w-12 md:max-w-16"
          preload
          loading="eager"
        />
        <h2 className="text-3xl font-bold text-slate-800">VideoFit</h2>
        <Image
          className="hidden md:flex ml-10"
          src={`/${locale}/website-qrcode.png`}
          alt={t("qrAlt")}
          width={120}
          height={120}
          preload
          loading="eager"
        />
      </Link>
    </header>
  );
};
