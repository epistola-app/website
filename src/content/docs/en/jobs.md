---
title: "Jobs"
description: "Job lifecycle, status tracking, cancellation, and batch items."
section: "generation"
sortOrder: 12
---

## Jobs

Every document generation request creates a job. Jobs track the lifecycle of rendering from request to completion.

### Job lifecycle

| State | Description |
|---|---|
| **Pending** | Job created, queued for processing |
| **Processing** | Template is being rendered with the provided data |
| **Completed** | Document is ready for download |
| **Failed** | Rendering failed (validation error, engine error, etc.) |
| **Cancelled** | Job was cancelled before completion |

### Status tracking

Jobs expose a status endpoint that returns the current state, progress (for batch jobs), and any error details. Consumers can:

- **Poll** the status endpoint periodically
- **Subscribe** to webhook notifications for state changes

### Cancellation

Jobs can be cancelled while in the Pending or Processing state. Cancelled jobs release their resources and stop further processing. Already-completed batch items remain available for download.

### Batch items

In a batch job, each data payload is tracked as a separate batch item with its own lifecycle:

- Items process independently and can complete in any order
- Failed items don't block other items in the batch
- The parent job tracks overall progress as a percentage of completed items
