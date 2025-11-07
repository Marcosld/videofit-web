import { StoreButton } from "@/components/store-button";

export const StoreButtons = () => (
  <div className="flex flex-row gap-4">
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
);
