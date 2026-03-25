---
title: "Document-based vs. process-oriented working"
description: "Many organisations still work document-first. Here's how process-oriented (zaakgericht) working changes the role of documents — and where Epistola fits in."
date: 2026-03-25
author: "Epistola Team"
tags: ["zaakgericht-werken", "documents", "public-sector"]
---

## The old way: documents drive the process

In document-based working, the document *is* the process. A Word file gets created, emailed around, edited, printed, signed, scanned, and filed. The document carries the state — if you lose the file, you lose the process.

This works until it doesn't. Version confusion, lost attachments, unclear ownership, and no audit trail are the norm rather than the exception.

## The new way: the process drives the documents

In process-oriented (zaakgericht) working, the *case* is central. A zaak has a defined lifecycle, clear states, and structured data. Documents are outputs of that process — generated when needed, linked to the case, and stored in a standardised way via the Documenten API.

The document no longer carries the state. The process does.

## Where Epistola fits

Epistola is built for the process-oriented model. It doesn't store documents permanently or manage cases. Instead, it takes structured case data, renders a template, and hands the result back to your zaakafhandelsysteem.

- **Input:** case data + template from your workflow engine.
- **Output:** a generated PDF, stored temporarily and registered in the Documenten API.

Documents become a predictable, repeatable artefact of your process — not the process itself.

*Curious how this works in practice? See the [architecture flow](/) on our homepage.*
