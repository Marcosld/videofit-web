import Image from "next/image";
import { IconCheck } from "./icon-check";

type FeatureCardProps = {
  active?: boolean;
  title: React.ReactNode;
  points: React.ReactNode[];
  imageSrc?: string;
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

const TitleHighlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-pink-600/60 px-1 rounded">{children}</span>
);

const PointHighlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-pink-600 font-bold">{children}</span>
);

const content = [
  {
    title: (
      <>
        <TitleHighlight>Record yourself</TitleHighlight> while training — like a
        pro.
      </>
    ),
    points: [
      <>
        <PointHighlight>Set custom timers</PointHighlight> for each exercise and
        recording with zero hassle
      </>,
      <>
        Get <PointHighlight>audio countdowns</PointHighlight> for every
        isometric hold
      </>,
      <>
        A clean, intuitive interface — just tap <b>record</b> and crush your
        set!
      </>,
      <>
        All your videos are <PointHighlight>instantly saved</PointHighlight> to
        your gallery
      </>,
    ],
  },
  {
    title: <>Instantly review your form</>,
    points: [
      <>
        Replay your set <PointHighlight>the moment you finish</PointHighlight>
      </>,
      <>
        Keep your best takes, ditch the rest — <b>no wasted storage</b>
      </>,
      <>
        Scrub through your video to{" "}
        <PointHighlight>perfect your technique</PointHighlight>
      </>,
      <>
        Use a long press for <b>frame-by-frame precision</b>
      </>,
    ],
  },
  {
    title: <>Track your progress over time</>,
    points: [
      <>
        See every session in a{" "}
        <PointHighlight>beautiful calendar view</PointHighlight>
      </>,
      <>
        Find any recording by date — <b>instantly</b>
      </>,
      <>
        Watch your form evolve and your{" "}
        <PointHighlight>confidence grow</PointHighlight>
      </>,
      <>
        Stay inspired by <b>tracking your journey</b> to mastery
      </>,
    ],
  },
  {
    title: <>Fully customizable</>,
    points: [
      <>
        Tailor the app to your needs with{" "}
        <PointHighlight>flexible settings</PointHighlight>
      </>,
      <>
        Quickly <b>switch timer settings</b> from the recording screen
      </>,
      <>
        Enjoy a <PointHighlight>clean, ad-free experience</PointHighlight>{" "}
        focused on your training
      </>,
      <>
        Regular updates with <b>new features</b> based on user feedback
      </>,
    ],
  },
];

const images = [
  "/app-front-lever.png",
  "/app-jump.png",
  "/app-calendar.png",
  "/app-settings.png",
];

export const FeatureList = () => {
  return (
    <div className="flex flex-col max-w-6xl m-auto px-8">
      {content.map(({ title, points }, index) => (
        <section
          key={index}
          className="pt-10 md:grid md:grid-cols-2 odd:*:data-text:col-start-2 *:row-start-1"
        >
          <FeatureCard key={index} title={title} points={points} />
          <div className="flex justify-center items-center pt-6 md:pt-0">
            <Image
              className="grow max-w-xs hover:scale-105 transition-transform"
              src={images[index]}
              alt="App screenshot"
              width={320}
              height={630}
            />
          </div>
        </section>
      ))}
    </div>
  );
};
