"use client";

import { richFormatter } from "@/utils/rich-formatter";
import classNames from "classnames";
import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import * as React from "react";
import style from "./feature-list.module.css";
import { IconCheck } from "./icon-check";

type FeatureCardProps = {
  title: React.ReactNode;
  points: React.ReactNode[];
  index: number;
  onActive: (index: number) => void;
};

const FeatureCard = ({ title, points, index, onActive }: FeatureCardProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    margin: "-20% 0px -20% 0px",
  });

  React.useEffect(() => {
    if (isInView) {
      onActive(index);
    }
  }, [isInView, index, onActive]);

  return (
    <div
      ref={ref}
      data-text
      className="flex flex-col gap-9 2xl:gap-12 justify-center"
    >
      <motion.h2
        className="text-3xl font-bold text-gray-800 translate-z-0" // Added translate-z-0 to fix blur issue on Mobile
        initial={{ filter: "blur(10px)" }}
        whileInView={{ filter: "blur(0px)" }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <ul>
        {points.map((point, index) => (
          <motion.li
            key={index}
            className="mt-1 2xl:mt-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12 + 0.6 }}
            viewport={{ once: true }}
          >
            <IconCheck className="w-6 h-6 fill-gray-800 inline-block mr-2" />
            {point}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

type FeatureScreenshotProps = {
  imageSrc: string;
  imageAlt: string;
  active: boolean;
  containerScrollYProgress: MotionValue<number>;
};

const FeatureScreenshot = ({
  imageSrc,
  imageAlt,
  active,
  containerScrollYProgress,
}: FeatureScreenshotProps) => {
  const imageRef = React.useRef(null);
  const locale = useLocale();
  const { scrollYProgress: imageScrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });
  const [useTransformParams, setUseTransformParams] = React.useState<
    [MotionValue<number>, number[], number[]]
  >([containerScrollYProgress, [0, 1], [-2, 2]]);
  const rotate = useTransform<number, number>(...useTransformParams);
  const scale = useTransform(
    imageScrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95],
  );

  React.useEffect(() => {
    if (!window.matchMedia("(min-width: 48rem)").matches) {
      setUseTransformParams([imageScrollYProgress, [0, 0.5], [-5, 0]]);
    }
  }, [imageScrollYProgress]);

  return (
    <motion.div
      className={classNames(
        "flex justify-center items-center pb-10 md:pb-0 pt-6 md:pt-0 md:sticky md:top-0 md:col-start-1 md:row-start-1 hover:z-10 active:z-10",
        style.featureScreenshot,
      )}
      initial={{
        opacity: "var(--initial-opacity)",
        display: "var(--initial-display)",
      }}
      animate={{
        opacity: active ? "var(--final-opacity)" : "var(--initial-opacity)",
        display: active ? "var(--final-display)" : "var(--initial-display)",
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-center items-center hover:scale-105 active:scale-105 transition-transform"
        style={{ rotate, scale }}
      >
        <div className="absolute w-[290px] h-[600px] rounded-[3rem] shadow-2xl/100" />
        <Image
          ref={imageRef}
          className="grow max-w-xs"
          src={`/${locale}/${imageSrc}`}
          alt={imageAlt}
          width={320}
          height={630}
          loading="eager"
        />
      </motion.div>
    </motion.div>
  );
};

export const FeatureList = () => {
  const containerRef = React.useRef(null);
  const t = useTranslations("FeatureList");
  const [activeIndex, setActiveIndex] = React.useState(0);

  const features = [
    {
      title: t.rich("recording.title", richFormatter),
      points: [
        t.rich("recording.points.customTimers", richFormatter),
        t.rich("recording.points.audioCountdowns", richFormatter),
        t.rich("recording.points.cleanInterface", richFormatter),
        t.rich("recording.points.instantSave", richFormatter),
      ],
      renderImage: (active: boolean) => (
        <FeatureScreenshot
          imageSrc="app-front-lever.png"
          imageAlt={t("recording.imageAlt")}
          active={active}
          containerScrollYProgress={scrollYProgress}
        />
      ),
    },
    {
      title: t.rich("reviewing.title", richFormatter),
      points: [
        t.rich("reviewing.points.instantReplay", richFormatter),
        t.rich("reviewing.points.noWastedStorage", richFormatter),
        t.rich("reviewing.points.perfectTechnique", richFormatter),
        t.rich("reviewing.points.frameByFrame", richFormatter),
      ],
      renderImage: (active: boolean) => (
        <FeatureScreenshot
          imageSrc="app-player.png"
          imageAlt={t("reviewing.imageAlt")}
          active={active}
          containerScrollYProgress={scrollYProgress}
        />
      ),
    },
    {
      title: t.rich("tracking.title", richFormatter),
      points: [
        t.rich("tracking.points.calendarView", richFormatter),
        t.rich("tracking.points.findByDate", richFormatter),
        t.rich("tracking.points.confidenceGrow", richFormatter),
        t.rich("tracking.points.trackJourney", richFormatter),
      ],
      renderImage: (active: boolean) => (
        <div className="relative md:sticky md:top-0 md:col-start-1 md:row-start-1 flex items-center justify-center max-w-xs ml-auto mr-auto md:max-w-full">
          <div className="absolute inset-0 flex items-center justify-center -ml-10 xl:-ml-32">
            <FeatureScreenshot
              imageSrc="app-year-calendar.png"
              imageAlt={t("tracking.imageAlt2")}
              active={active}
              containerScrollYProgress={scrollYProgress}
            />
          </div>
          <div className="ml-10 xl:ml-32">
            <FeatureScreenshot
              imageSrc="app-filter.png"
              imageAlt={t("tracking.imageAlt")}
              active={active}
              containerScrollYProgress={scrollYProgress}
            />
          </div>
        </div>
      ),
    },
    {
      title: t.rich("customization.title", richFormatter),
      points: [
        t.rich("customization.points.flexibleSettings", richFormatter),
        t.rich("customization.points.switchSettings", richFormatter),
        t.rich("customization.points.adFreeExperience", richFormatter),
        t.rich("customization.points.regularUpdates", richFormatter),
      ],
      renderImage: (active: boolean) => (
        <FeatureScreenshot
          imageSrc="app-config.png"
          imageAlt={t("customization.imageAlt")}
          active={active}
          containerScrollYProgress={scrollYProgress}
        />
      ),
    },
  ];

  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div className="max-w-7xl m-auto px-7">
      <section
        ref={containerRef}
        className={"md:grid md:grid-cols-2 min-h-screen"}
      >
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="md:min-h-screen flex justify-center items-center col-start-2 snap-center pt-10 md:pt-0">
              <FeatureCard
                title={feature.title}
                points={feature.points}
                index={index}
                onActive={setActiveIndex}
              />
            </div>

            {feature.renderImage(activeIndex === index)}
          </React.Fragment>
        ))}
      </section>
    </div>
  );
};
