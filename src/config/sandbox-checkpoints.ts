export const sandboxCheckpoints: Record<string, { url: string; label: string }> = {
  "blank-workspace": {
    url: "https://demo.epistola.app/",
    label: "Open blank workspace",
  },
  "template-created": {
    url: "https://demo.epistola.app/?state=template",
    label: "Open with template",
  },
  "editor-open": {
    url: "https://demo.epistola.app/?state=editor",
    label: "Open in editor",
  },
  "version-published": {
    url: "https://demo.epistola.app/?state=published",
    label: "View published version",
  },
  "document-generated": {
    url: "https://demo.epistola.app/?state=document",
    label: "View generated document",
  },
};
