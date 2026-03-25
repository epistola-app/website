import en, { type TranslationKey } from "./locales/en";
import nl from "./locales/nl";

export const LOCALES = ["nl", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "nl";

const translations: Record<Locale, Record<string, string>> = { nl, en };

export type { TranslationKey };

export function t(
  locale: Locale,
  key: TranslationKey,
  params?: Record<string, string>,
): string {
  let value =
    translations[locale]?.[key] ??
    translations[DEFAULT_LOCALE]?.[key] ??
    key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replaceAll(`{${k}}`, v);
    }
  }
  return value;
}

export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "nl" ? "en" : "nl";
}

export function localeToHtmlLang(locale: Locale): string {
  return locale;
}

export function localeToOgLocale(locale: Locale): string {
  return locale === "nl" ? "nl_NL" : "en_US";
}

export function getStaticLocalePaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}
