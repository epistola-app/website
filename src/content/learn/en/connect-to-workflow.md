---
title: "Connect to a workflow"
description: "Link your Epistola template to a GZAC/Valtimo process — select a template, map case data, and configure variant selection."
videoUrl: ""
videoBrief: "30-second screen recording: in Valtimo, open a BPMN process, add a service task with the Epistola generate-document action. Select a template, configure variant selection (e.g. attribute-based with language=nl), and map case fields to template data fields using the mapping UI."
posterImage: ""
sandboxCheckpointId: ""
nextUnits:
  - slug: "handle-results"
    label: "Handle results and errors"
deepLinks:
  - label: "Valtimo Plugin Overview"
    url: "/en/learn/integrations/valtimo-overview"
  - label: "Document Generation Action"
    url: "/en/learn/integrations/valtimo-generate-action"
  - label: "Data Mapping"
    url: "/en/learn/integrations/valtimo-data-mapping"
tags:
  - getting-started
  - integration
sortOrder: 5
---

## Connecting Epistola to a workflow

With your template published and deployed, the next step is connecting it to a real business process. In GZAC/Valtimo, this means configuring a BPMN service task to generate documents from Epistola.

### Setting up the process link

In the Valtimo process editor, add a service task and select the **Epistola: Generate Document** action. You'll configure three things:

1. **Template** — which Epistola template to use
2. **Variant selection** — how to pick the right variant:
   - **Default** — always use the default variant
   - **Attribute-based** — match on attributes like language or brand (e.g., `language=nl` selects the Dutch variant)
   - **Explicit** — specify an exact variant ID
3. **Data mapping** — connect case data to the template's data contract

### Mapping case data

The mapping UI lets you connect values from the case to template fields:

- **Case document data** (`doc:`) — fields from the case document (e.g., `doc:applicant.name`)
- **Process variables** (`pv:`) — values stored in the running process
- **Case properties** (`case:`) — case-level metadata like assignee or case ID

You can map simple values, nested objects, and even arrays with field renaming.

### What happens next

When a case reaches this service task, the plugin sends a generation request to Epistola and stores the job ID. The process then waits for the result — which is what we'll cover next.
