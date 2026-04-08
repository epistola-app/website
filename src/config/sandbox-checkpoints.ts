export const sandboxCheckpoints: Record<string, { url: string; label: string }> = {
  "blank-workspace": {
    url: "https://demo.epistola.app/",
    label: "Open blank workspace",
  },
  "template-created": {
    url: "https://demo.epistola.app/?state=template",
    label: "Open with template",
  },
  "workflow-created": {
    url: "https://demo.epistola.app/?state=workflow",
    label: "Continue with workflow",
  },
  "document-generated": {
    url: "https://demo.epistola.app/?state=document",
    label: "View generated document",
  },
};
