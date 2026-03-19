// Translation helper for Epistola website
// Uses Astro's built-in i18n routing + simple JSON translations

import nav from "./translations/nav.json";
import footer from "./translations/footer.json";
import hero from "./translations/hero.json";
import common from "./translations/common.json";
import howItWorks from "./translations/howItWorks.json";
import whyUs from "./translations/whyUs.json";
import everythingYouNeed from "./translations/everythingYouNeed.json";
import join from "./translations/join.json";
import mailSubscribe from "./translations/mailSubscribe.json";
import builtFor from "./translations/builtFor.json";
import faqs from "./translations/faqs.json";
import docopsArchitecture from "./translations/docopsArchitecture.json";
import testimonials from "./translations/testimonials.json";
import introVideo from "./translations/introVideo.json";
import trustedBy from "./translations/trustedBy.json";
import transformYourBusiness from "./translations/transformYourBusiness.json";
import integrationsOverview from "./translations/integrationsOverview.json";
import features from "./translations/features.json";
import pricing from "./translations/pricing.json";
import integrations from "./translations/integrations.json";

// Type-safe translation sections
const translations = {
  nav,
  footer,
  hero,
  common,
  howItWorks,
  whyUs,
  everythingYouNeed,
  join,
  mailSubscribe,
  builtFor,
  faqs,
  docopsArchitecture,
  testimonials,
  introVideo,
  trustedBy,
  transformYourBusiness,
  integrationsOverview,
  features,
  pricing,
  integrations,
} as const;

export type Locale = "en" | "nl";
export type TranslationSection = keyof typeof translations;

/**
 * Get translations for a specific section and locale
 */
export function getTranslations<T extends TranslationSection>(
  section: T,
  locale: Locale
): (typeof translations)[T]["en"] {
  const sectionData = translations[section];
  return sectionData[locale] || sectionData["en"];
}

/**
 * Helper to use in Astro components
 * Usage: const { t, locale } = useTranslations(Astro);
 */
export function useTranslations(Astro: { currentLocale?: string }) {
  const locale = (Astro.currentLocale || "en") as Locale;

  return {
    t: <T extends TranslationSection>(section: T) =>
      getTranslations(section, locale),
    locale,
  };
}

/**
 * Get relative URL for a different locale
 * Preserves current path when switching languages
 */
export function getLocaleUrl(
  currentPath: string,
  targetLocale: Locale
): string {
  // Remove existing locale prefix if present
  const pathWithoutLocale = currentPath.replace(/^\/(en|nl)(\/|$)/, "/");

  // Add target locale prefix (except for default 'en')
  if (targetLocale === "en") {
    return pathWithoutLocale || "/";
  }

  return `/${targetLocale}${pathWithoutLocale}`;
}
