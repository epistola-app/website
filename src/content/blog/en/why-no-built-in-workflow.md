---
title: "Why Epistola doesn't include workflow"
description: "Document generation and workflow are different concerns. Here's why we deliberately keep them separate — and why that's better for you."
date: 2026-03-25
author: "Epistola Team"
tags: ["architecture", "workflow", "integration"]
---

## Do one thing, do it well

Epistola generates documents. It doesn't route them, approve them, or decide what happens next. That's your workflow engine's job — and for good reason.

## Workflow is business-specific

Every organisation handles processes differently. An objection procedure at one municipality looks nothing like the same procedure at another. Workflow logic is inherently specific to your context, your rules, your edge cases.

Bundling workflow into a document generator forces you into generic patterns that never quite fit. Worse, it scatters your process logic across multiple systems — the approval lives here, the notification there, the document somewhere else.

## High cohesion matters

When all the steps of a single process live together in one system — your zaakafhandelsysteem — they're easier to understand, maintain, and change. Your BPMN model is the single source of truth, not a patchwork across vendors.

Epistola integrates with systems like GZAC through clean APIs. Your workflow engine calls Epistola when a document is needed, and Epistola delivers it. No overlap, no lock-in, no hidden process logic.

## The result

- **Your processes stay yours.** Change workflow without touching document generation.
- **Fewer moving parts.** One system for workflow, one for documents.
- **Easier to reason about.** When something breaks, you know where to look.

*Want to see how the integration works? Check out the architecture flow on our [homepage](/).*
