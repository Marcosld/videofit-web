"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { StoreButtons } from "./store-buttons";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="flex justify-center bg-radial-[at_25%_50%] from-amber-50 via-pink-200 to-amber-50">
      <section className="pt-20 2xl:pt-10 pb-6 px-8 max-w-6xl md:grid md:grid-cols-2 min-h-screen">
        <div className="flex flex-col justify-center text-center items-center md:text-left md:items-start">
          <div className="mt-8 xl:mt-16">
            <h1 className="text-4xl font-bold text-pink-600">
              {t("mainTitle")}
            </h1>
            <h2 className="mt-4 xl:mt-8 font-semibold text-gray-800 text-xl hidden md:block">
              {t("subtitle")}
            </h2>
            <p className="mt-6 xl:mt-12 text-gray-600 text-lg">
              {t("description")}
            </p>
          </div>
          <div className="mt-12 xl:mt-24">
            <StoreButtons />
          </div>
        </div>
        <div className="flex justify-center items-center mt-12 md:mt-0">
          <Image
            className="max-w-xs"
            src="/app-handstand.png"
            alt={t("imageAlt")}
            width={320}
            height={630}
            preload
            loading="eager"
          />
        </div>
      </section>
    </div>
  );
};
