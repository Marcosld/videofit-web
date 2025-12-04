import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { StoreButtons } from "./store-buttons";
import { WordsPullUp } from "./words-pull-up";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="flex justify-center bg-radial-[at_25%_50%] from-amber-50 via-pink-200 to-amber-50 snap-center">
      <section className="pt-20 2xl:pt-10 pb-6 px-8 max-w-7xl md:grid md:grid-cols-2 min-h-screen overflow-y-hidden">
        <div className="flex flex-col justify-center text-center items-center md:text-left md:items-start">
          <div className="mt-8 xl:mt-16">
            <h1 className="text-4xl font-bold text-pink-600">
              <WordsPullUp>{t("mainTitle")}</WordsPullUp>
            </h1>
            <motion.h2
              className="mt-4 xl:mt-8 font-semibold text-gray-800 text-xl hidden md:block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {t("subtitle")}
            </motion.h2>
            <motion.p
              className="mt-6 xl:mt-12 text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {t("description")}
            </motion.p>
          </div>
          <motion.div
            className="mt-12 xl:mt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <StoreButtons />
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center items-center mt-12 md:mt-0"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Image
            className="max-w-xs"
            src="/app-handstand.png"
            alt={t("imageAlt")}
            width={320}
            height={630}
            preload
            loading="eager"
          />
        </motion.div>
      </section>
    </div>
  );
};
