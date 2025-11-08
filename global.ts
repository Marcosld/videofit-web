import { routing } from "@/i18n/routing";
import messagesEN from "./dictionaries/en.json";
import messagesES from "./dictionaries/es.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messagesEN | typeof messagesES;
  }
}
