export const DOCS_SECTIONS = ["core-concepts", "editor", "generation", "platform"] as const;
export type DocsSection = (typeof DOCS_SECTIONS)[number];
