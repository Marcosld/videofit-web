import { StoreButton } from "@/components/store-button";
import Image from "next/image";

export const Hero = () => (
  <div className="flex justify-center bg-radial-[at_25%_50%] from-amber-50 via-pink-200 to-amber-50">
    <section className="py-12 px-8 max-w-6xl md:grid md:grid-cols-2 min-h-screen">
      <div className="flex flex-col justify-center text-center items-center md:text-left md:items-start">
        <div className="flex gap-4 justify-center items-center">
          <Image
            src="/app-icon.png"
            alt="App logo"
            width={48}
            height={48}
            className="rounded-xl"
            priority
          />
          <h1 className="text-3xl font-bold text-slate-800">VideoFit</h1>
        </div>
        {/* TODO: Text writing animation. Perhaps change phrase colors */}
        <div className="mt-8 xl:mt-16">
          <h1 className="text-4xl font-bold text-pink-600">
            Record yourself. Check your form. Track your progress.
          </h1>
          <p className="mt-4 xl:mt-8 font-semibold text-gray-800 text-xl">
            There is nothing like seeing yourself in action to improve in a
            sports discipline.
          </p>
          <p className="mt-6 xl:mt-12 text-gray-600 text-lg">
            VideoFit is a free workout video recorder and tracker for iOS and
            Android. Whether you train calisthenics, yoga, weightlifting or any
            other discipline, VideoFit will help you improve your form and
            technique.
          </p>
        </div>
        <div className="mt-12 xl:mt-24 flex flex-row gap-4">
          <StoreButton
            href="https://apps.apple.com/app/id6749822592"
            imageSrc="/download-ios-en.svg"
            imageAlt="Download on the App Store"
            width={180}
            height={60}
          />
          <StoreButton
            href="https://play.google.com/store/apps/details?id=com.marcosld.cameratimer"
            imageSrc="/download-google-en.png"
            imageAlt="Download on Google Play"
            width={200}
            height={60}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-12 md:mt-0">
        <Image
          className="max-w-xs"
          src="/app-handstand.png"
          alt="App screenshot"
          width={720}
          height={1280}
          priority
        />
      </div>
    </section>
  </div>
);
