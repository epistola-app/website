---
title: "Valtimo Plugin Overview"
description: "What the Valtimo Epistola plugin is and how it connects GZAC/Valtimo to Epistola."
plugin: "valtimo"
videoUrl: ""
videoBrief: "30-second screen recording: show a case in Valtimo, trigger document generation, the document appearing in the case — the full workflow integration at a glance."
sortOrder: 1
---

## What is the Valtimo Epistola Plugin?

The Valtimo Epistola Plugin connects [Valtimo](https://www.valtimo.nl/) (GZAC) case management to Epistola document generation. It lets process designers add document generation directly into BPMN workflows — no custom code required.

## What it provides

The plugin adds three BPMN service task actions to Valtimo:

- **Generate Document** — submit an async document generation request to Epistola
- **Check Job Status** — poll the status of a generation job
- **Download Document** — retrieve the completed PDF

These actions can be composed in any BPMN process to generate documents at the right point in a case workflow.

## How it works

1. A process designer configures the plugin with the Epistola API endpoint and credentials
2. BPMN service tasks use the plugin actions to trigger generation
3. Case data is mapped to template fields using value resolvers
4. Documents are generated asynchronously and correlated back to the waiting process
5. The completed document can be downloaded, stored, or forwarded

## Related documentation

- [Configuration](/en/learn/integrations/valtimo-configuration) — set up the plugin connection
- [Document Generation Action](/en/learn/integrations/valtimo-generate-action) — configure the main BPMN action
- [Data Mapping](/en/learn/integrations/valtimo-data-mapping) — map case data to template fields
- [Async Patterns & BPMN](/en/learn/integrations/valtimo-async-patterns) — recommended process patterns
