import { useTranslations } from "next-intl";
import Image from "next/image";
import { IconCheck } from "./icon-check";

type FeatureCardProps = {
  title: React.ReactNode;
  points: React.ReactNode[];
};

const FeatureCard = ({ title, points }: FeatureCardProps) => (
  <div data-text className="flex flex-col gap-9 justify-center">
    <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    <ul className="text-gray-600">
      {points.map((point, index) => (
        <li key={index} className="mt-1">
          <IconCheck className="w-6 h-6 fill-gray-800 inline-block mr-2" />
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const richTranslator = {
  highlight: (chunks: React.ReactNode) => (
    <span className="bg-pink-600/60 px-1 rounded">{chunks}</span>
  ),
  accent: (chunks: React.ReactNode) => (
    <span className="text-pink-600 font-bold">{chunks}</span>
  ),
  bold: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
};

const images = [
  "/app-front-lever.png",
  "/app-jump.png",
  "/app-calendar.png",
  "/app-settings.png",
];

export const FeatureList = () => {
  const t = useTranslations("FeatureList");

  const features = [
    {
      title: t.rich("recording.title", richTranslator),
      points: [
        t.rich("recording.points.customTimers", richTranslator),
        t.rich("recording.points.audioCountdowns", richTranslator),
        t.rich("recording.points.cleanInterface", richTranslator),
        t.rich("recording.points.instantSave", richTranslator),
      ],
    },
    {
      title: t.rich("reviewing.title", richTranslator),
      points: [
        t.rich("reviewing.points.instantReplay", richTranslator),
        t.rich("reviewing.points.noWastedStorage", richTranslator),
        t.rich("reviewing.points.perfectTechnique", richTranslator),
        t.rich("reviewing.points.frameByFrame", richTranslator),
      ],
    },
    {
      title: t.rich("tracking.title", richTranslator),
      points: [
        t.rich("tracking.points.calendarView", richTranslator),
        t.rich("tracking.points.findByDate", richTranslator),
        t.rich("tracking.points.confidenceGrow", richTranslator),
        t.rich("tracking.points.trackJourney", richTranslator),
      ],
    },
    {
      title: t.rich("customization.title", richTranslator),
      points: [
        t.rich("customization.points.flexibleSettings", richTranslator),
        t.rich("customization.points.switchSettings", richTranslator),
        t.rich("customization.points.adFreeExperience", richTranslator),
        t.rich("customization.points.regularUpdates", richTranslator),
      ],
    },
  ];

  const imageAlts = [
    t("recording.imageAlt"),
    t("reviewing.imageAlt"),
    t("tracking.imageAlt"),
    t("customization.imageAlt"),
  ];

  return (
    <div className="flex flex-col max-w-6xl m-auto px-8">
      {features.map((f, index) => (
        <section
          key={index}
          className="pt-10 md:grid md:grid-cols-2 odd:*:data-text:col-start-2 *:row-start-1"
        >
          <FeatureCard title={f.title} points={f.points} />
          <div className="flex justify-center items-center pt-6 md:pt-0">
            <Image
              className="grow max-w-xs hover:scale-105 transition-transform"
              src={images[index]}
              alt={imageAlts[index]}
              width={320}
              height={630}
            />
          </div>
        </section>
      ))}
    </div>
  );
};
