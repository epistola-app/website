// External URLs used throughout the application
export const URLS = {
  DEMO: "https://demo.epistola.app",
  VALTIMO_DEMO: "https://valtimo-demo.epistola.app",
  DOCS: "https://docs.epistola.app",
  GITHUB: "https://github.com/epistola-app",
  API: "https://api.epistola.app/v1/renders",
} as const;

// Get site URL from Astro config at runtime
function getSiteURL(): string {
  const site = import.meta.env.SITE;
  if (!site) {
    console.warn("[URL-helpers] import.meta.env.SITE is not defined. Using empty string as fallback.");
    return "";
  }
  return site;
}

// Email addresses
export const EMAILS = {
  HELLO: "mailto:hello@epistola.app",
  SECURITY: "mailto:security@epistola.app",
  PRIVACY: "mailto:privacy@epistola.app",
} as const;

// Site metadata and OpenGraph configuration
export const SITE = {
  NAME: "Epistola",
  DEFAULT_TITLE: "Epistola · Document Intelligence Platform",
  DEFAULT_DESCRIPTION:
    "Epistola helps operations teams author, govern, and deliver complex documents across every channel.",
  LOCALE: "en_US",
  THEME_COLOR: "#2563eb",
  DEFAULT_IMAGE: "/opengraph-splash.webp",
  AUTHOR: "Epistola Team",
  TWITTER_HANDLE: "@epistolaapp",
} as const;

// OpenGraph type definitions
export const OG_TYPES = {
  WEBSITE: "website",
  ARTICLE: "article",
  PROFILE: "profile",
} as const;

export type OpenGraphType = (typeof OG_TYPES)[keyof typeof OG_TYPES];

export interface OpenGraphProps {
  title?: string;
  description?: string;
  image?: string;
  type?: OpenGraphType;
  url?: string;
  article?: {
    author?: string;
    publishedTime?: Date;
    modifiedTime?: Date;
    section?: string;
    tags?: string[];
  };
}

export function prepareURL(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const sanitizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${sanitizedBase}${path}`;
}

export function getAbsoluteURL(path: string): string {
  const site = getSiteURL();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${site}${cleanPath}`;
}
