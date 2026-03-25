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
import about from "./translations/about.json";
import contact from "./translations/contact.json";
import contactForm from "./translations/contactForm.json";
import demo from "./translations/demo.json";
import docs from "./translations/docs.json";
import privacy from "./translations/privacy.json";
import terms from "./translations/terms.json";
import security from "./translations/security.json";
import architectureFlow from "./translations/architectureFlow.json";

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
  about,
  contact,
  contactForm,
  demo,
  docs,
  privacy,
  terms,
  security,
  architectureFlow,
} as const;

export type Locale = "en" | "nl";
export type TranslationSection = keyof typeof translations;

const localizedPagePaths = [
  "/",
  "/about",
  "/blog",
  "/contact",
  "/demo",
  "/docs",
  "/features",
  "/integrations",
  "/privacy",
  "/pricing",
  "/security",
  "/terms",
] as const;

/**
 * Get translations for a specific section and locale
 */
export function getTranslations<T extends TranslationSection>(
  section: T,
  locale: Locale,
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
    t: <T extends TranslationSection>(section: T) => getTranslations(section, locale),
    locale,
  };
}

/**
 * Get relative URL for a different locale
 * Preserves current path when switching languages
 */
export function getLocaleUrl(currentPath: string, targetLocale: Locale): string {
  // Remove existing locale prefix if present
  const pathWithoutLocale = currentPath.replace(/^\/(en|nl)(\/|$)/, "/");

  // Add target locale prefix (except for default 'en')
  if (targetLocale === "en") {
    return pathWithoutLocale || "/";
  }

  return `/${targetLocale}${pathWithoutLocale}`;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === "en") {
    return path;
  }

  if (!localizedPagePaths.includes(path as (typeof localizedPagePaths)[number])) {
    return path;
  }

  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
