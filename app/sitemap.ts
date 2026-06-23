import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

const baseUrl = "https://www.videofit.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/privacy", "/terms"];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((loc) => [loc, `${baseUrl}/${loc}${path}`]),
        ),
      },
    })),
  );
}
