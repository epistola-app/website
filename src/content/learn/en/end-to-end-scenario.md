---
title: "End-to-end scenario"
summary: "A complete walkthrough: from a citizen's permit application to the generated document arriving in their inbox."
videoUrl: ""
videoBrief: "45-second screen recording showing the full flow: a permit application arrives in GZAC, a case worker opens it, reviews the data, the process triggers document generation via Epistola, the PDF appears in the case documents tab, the worker previews it and sends it. End with the citizen receiving the document."
posterImage: ""
sandboxCheckpointId: ""
nextUnits:
  - slug: "welcome"
    label: "Back to start"
  - slug: "create-template"
    label: "Create your own template"
deepLinks:
  - label: "Valtimo Plugin Overview"
    url: "/en/learn/integrations/valtimo-overview"
  - label: "Templates"
    url: "/en/learn/suite/templates"
  - label: "Document Generation"
    url: "/en/learn/suite/document-generation"
tags:
  - getting-started
  - integration
sortOrder: 8
---

## A permit application, start to finish

Let's see everything working together. A citizen submits a permit application, and the municipality processes it — from intake to the final document arriving in the citizen's inbox.

### 1. Application arrives

A citizen submits a permit application through the municipality's portal. GZAC creates a new case with the applicant's data: name, address, project details, requested permit type.

### 2. Case worker reviews

A case worker opens the case in Valtimo. They see the application details, verify the information, and approve the permit. The process moves to the document generation step.

### 3. Document is generated

The BPMN process hits the Epistola service task. The plugin:

- Selects the permit template
- Resolves the Dutch variant based on the `language=nl` attribute
- Maps the case data (applicant name, address, permit details) to the template fields
- Submits the generation request

Within seconds, the PDF is ready.

### 4. Worker previews and sends

The generated permit document appears in the case's documents tab. The case worker:

- Previews the PDF to verify the content
- Confirms it looks correct
- The process continues to the notification step, sending the document to the citizen

### 5. Citizen receives the document

The citizen receives their permit document — professionally formatted, with the correct data, generated from a version-controlled template.

### The full picture

This scenario demonstrates how Epistola and GZAC/Valtimo work together:

- **Templates** define the document structure and styling
- **Variants** handle different languages and formats automatically
- **Environments** ensure the right template version is used in production
- **The plugin** connects the case workflow to document generation
- **The result** is a reliable, auditable document delivery pipeline

Ready to build your own? Go back to the beginning and create your first template.
