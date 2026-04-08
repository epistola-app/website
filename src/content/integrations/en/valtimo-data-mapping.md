---
title: "Data Mapping"
description: "How to map case and process data to Epistola template fields using value resolvers."
plugin: "valtimo"
sortOrder: 4
---

## Overview

Data mapping connects values from Valtimo (case data, process variables) to the fields expected by an Epistola template's data contract.

## Value resolvers

The plugin supports several resolver prefixes:

| Prefix | Source | Example |
|---|---|---|
| `doc:` | Case document data | `doc:applicant.firstName` |
| `pv:` | Process variables | `pv:requestDate` |
| `case:` | Case-level properties | `case:assignee` |
| `template:` | Template metadata | `template:name` |

## Simple mapping

Map individual fields with a flat key-value structure:

```yaml
applicantName: "doc:applicant.firstName"
requestDate: "pv:requestDate"
caseNumber: "case:caseId"
```

## Nested objects

Map complex structures using nested keys:

```yaml
applicantAddress:
  street: "doc:applicant.address.street"
  city: "doc:applicant.address.city"
  postalCode: "doc:applicant.address.postalCode"
```

## Array mapping with field renaming

Map arrays from the source with optional field renaming:

```yaml
activities:
  _source: "doc:activities"
  type: "type"
  estimatedCost: "cost"
```

The `_source` key identifies the source array. Other keys define the fields to extract from each item, with optional renaming (left = output name, right = source field name).

## Combining resolvers

You can mix resolvers in a single mapping — pull some values from case data and others from process variables:

```yaml
applicantName: "doc:applicant.firstName"
handlerName: "pv:currentHandler"
generatedAt: "pv:generationTimestamp"
items:
  _source: "doc:orderItems"
  description: "description"
  amount: "totalAmount"
```
