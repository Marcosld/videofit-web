import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="absolute w-full flex justify-center items-center">
    <Link
      href="/"
      className="flex gap-4 justify-center md:justify-start pt-6 px-8 2xl:pt-12 items-center w-full max-w-6xl"
    >
      <Image
        src="/app-icon.png"
        alt="App logo"
        width={64}
        height={64}
        className="rounded-xl max-w-12 md:max-w-16"
        preload
        loading="eager"
      />
      <h1 className="text-3xl font-bold text-slate-800">VideoFit</h1>
      <Image
        className="hidden md:flex ml-10"
        src="/website-qrcode.png"
        alt="QR code to website"
        width={120}
        height={120}
        preload
        loading="eager"
      />
    </Link>
  </header>
);
