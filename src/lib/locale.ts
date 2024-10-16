import "server-only";
import type { Locale } from "@/i18n.config";

const messages = {
  en: () => import("@/locale/en.json").then((module) => module.default),
  de: () => import("@/locale/ro.json").then((module) => module.default),
} as any;

export const getDictionary = async (locale: Locale) => messages[locale]();
