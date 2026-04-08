---
title: "Jobs"
description: "Job lifecycle from PENDING to COMPLETED, per-item batch tracking, filtering, and cancellation."
section: "generation"
sortOrder: 15
---

## Jobs

Every document generation request creates a job. Jobs track the full lifecycle of rendering from request to completion.

### Job lifecycle

Jobs move through these states:

| State | Description |
|---|---|
| **PENDING** | Job created, queued for processing |
| **IN_PROGRESS** | Template is being rendered with the provided data |
| **COMPLETED** | Document is ready for download |
| **FAILED** | Rendering failed (validation error, engine error, etc.) |
| **CANCELLED** | Job was cancelled before completion |

### Batch item tracking

In a batch job, each data payload is tracked as a separate item with its own lifecycle. Items process independently — a failed item does not block other items in the batch.

### Filtering

Jobs can be filtered by:

- **Status** — Show only completed, failed, in-progress, or cancelled jobs
- **Date range** — Narrow results to a specific time period

### Cancellation

Jobs in the PENDING or IN_PROGRESS state can be cancelled. Cancellation stops further processing and releases resources. Already-completed batch items remain available for download.

### Job retention

Jobs follow configurable retention and cleanup policies. Completed jobs and their documents are retained for a defined period before automatic cleanup.

### In the UI

The recent jobs table in the generation history dashboard displays jobs with color-coded status badges: green for completed, blue for in-progress, red for failed, and yellow for cancelled.
