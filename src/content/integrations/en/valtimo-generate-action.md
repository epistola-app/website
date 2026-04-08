---
title: "Document Generation Action"
description: "How to configure the generate-document BPMN service task action in Valtimo."
plugin: "valtimo"
videoUrl: ""
videoBrief: "30-second screen recording: configure a BPMN service task — select the Epistola generate-document action, pick a template, choose attribute-based variant selection, map a few case fields."
sortOrder: 3
---

## The Generate Document action

This is the primary plugin action. It submits an asynchronous document generation request to Epistola from a BPMN service task.

## Template selection

You can select the template to generate in three ways:

- **Explicit variant ID** — directly specify which variant to use
- **Attribute-based resolution** — provide attribute criteria (e.g., language=nl, brand=corporate) and let Epistola's resolution algorithm find the best matching variant
- **Default variant** — use the template's default variant

## Configuration fields

| Field | Required | Description |
|---|---|---|
| Template | Yes | The Epistola template to generate |
| Variant mode | Yes | How to select the variant (explicit, attributes, or default) |
| Data mapping | Yes | Map process/case data to template fields |
| Environment | No | Override the target environment |
| Result variable | Yes | Process variable to store the request ID |

## Data mapping

The data mapping connects case and process data to the template's data contract. See [Data Mapping](/en/learn/integrations/valtimo-data-mapping) for the full reference.

## What happens after submission

The action returns immediately with a request ID. The actual document generation happens asynchronously. Use a BPMN message catch event to wait for completion — see [Async Patterns](/en/learn/integrations/valtimo-async-patterns).
