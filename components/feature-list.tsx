import Image from "next/image";
import { IconCheck } from "./icon-check";

type FeatureCardProps = {
  active?: boolean;
  title: string;
  points: string[];
  imageSrc?: string;
};

const FeatureCard = ({ title, points }: FeatureCardProps) => (
  <div>
    <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    <ul className="mt-4 list-inside text-gray-600">
      {points.map((point, index) => (
        <li key={index} className="mt-1">
          <IconCheck className="w-6 h-6 fill-gray-800 inline-block mr-2" />
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const content = [
  {
    title: "Record yourself",
    points: [
      "Setup timers for your exercises and recordings",
      "Countdown audio cues for your isometrics holds",
      "Simple interface. Just hit record and go!",
      "All your recordings instantly saved to your phone's gallery",
    ],
  },
  {
    title: "Check your form",
    points: [
      "Instant playback of your recordings right after your set",
      "Scrub through your video to analyze your form. Hold for precise scrubbing.",
      "Make adjustments and record again to improve your technique",
    ],
  },
  {
    title: "Track your progress",
    points: [
      "Calendar view of all your recorded workouts",
      "Easily find previous recordings by date",
      "See how your form improves over time",
      "Stay motivated by tracking your journey",
    ],
  },
];

const images = ["/app-front-lever.png", "/app-jump.png", "/app-calendar.png"];

export const FeatureList = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10 px-8">
      {content.map(({ title, points }, index) => {
        const children = [
          <div
            key="text"
            className="flex flex-col px-8 py-4 gap-8 justify-center"
          >
            <FeatureCard key={index} title={title} points={points} />
          </div>,
          <div key="image" className="flex justify-center items-center">
            <Image
              className="grow max-w-2xs hover:scale-105 transition-transform"
              src={images[index]}
              alt="App screenshot"
              width={720}
              height={1080}
            />
          </div>,
        ];
        return (
          <section key={index} className="grid grid-cols-2 max-w-6xl">
            {index % 2 === 0 ? children : children.reverse()}
          </section>
        );
      })}
    </div>
  );
};
