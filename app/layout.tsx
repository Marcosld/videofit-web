import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "VideoFit: Workout video timer app, gym video log & workout tracker for calisthenics, handstands, yoga and weightlifting",
  description:
    "Film yourself, check your form and track your progress with VideoFit. We include a video timer with countdown for your holds and a calendar to track your workouts over time. Instant video playback so you can review your form right after your set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-amber-50" lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
