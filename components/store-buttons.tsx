import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
};

const StoreButton = ({ href, imageSrc, imageAlt, width, height }: Props) => (
  <a
    className="flex rounded-xl hover:scale-105 transition-transform shadow-lg shadow-gray-800/60 active:scale-95"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className="rounded-lg hover:scale-105 transition-transform"
      src={imageSrc}
      alt={imageAlt}
      width={width}
      height={height}
      priority
    />
  </a>
);

export const StoreButtons = () => {
  const locale = useLocale();
  const t = useTranslations("StoreButtons");

  return (
    <div className="flex flex-row gap-4">
      <StoreButton
        href="https://apps.apple.com/app/id6749822592"
        imageSrc={`/${locale}/download-ios.svg`}
        imageAlt={t("iosAlt")}
        width={180}
        height={60}
      />
      <StoreButton
        href="https://play.google.com/store/apps/details?id=com.marcosld.cameratimer"
        imageSrc={`/${locale}/download-google.png`}
        imageAlt={t("androidAlt")}
        width={200}
        height={60}
      />
    </div>
  );
};
