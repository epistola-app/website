---
title: "Async Patterns & BPMN"
description: "Recommended BPMN patterns for asynchronous document generation with the Valtimo Epistola plugin."
plugin: "valtimo"
videoUrl: ""
videoBrief: "30-second screen recording: show a BPMN diagram with the recommended pattern. Run the process, watch it pause at the catch event, then continue when the document completes."
sortOrder: 5
---

## Why asynchronous?

Document generation is an I/O-heavy operation. Rather than blocking the BPMN process while waiting for a PDF, the plugin uses an async pattern: submit the request, then wait for a completion signal.

## Recommended BPMN pattern

The standard pattern uses three elements:

```
Service Task (Generate Document)
  → Message Catch Event (EpistolaDocumentGenerated)
  → Service Task (Download Document)
```

1. **Generate Document** — submits the request, stores the request ID
2. **Message Catch Event** — the process waits here until the document is ready
3. **Download Document** — retrieves the completed PDF as Base64

## How completion works

The plugin includes a centralized batch poller that:

- Runs on a configurable interval (default: 30 seconds)
- Queries all pending generation jobs across all waiting processes
- Groups requests by tenant for efficient API calls
- Correlates the BPMN message `EpistolaDocumentGenerated` when a job completes

This means individual processes don't need timers or polling loops — the plugin handles it centrally.

## Error handling

If a generation job fails, the message is still correlated but with an error status. Use a BPMN boundary event or a conditional gateway after the download step to handle failures gracefully.

## Scaling considerations

The batch poller is designed for hundreds of concurrent generation jobs. Under high load:

- Jobs are grouped by tenant to minimize API calls
- Failed jobs are tracked with error counters
- Partial failures don't block other jobs in the same batch

## Alternative patterns

For use cases that need immediate feedback (e.g., preview generation), consider using the synchronous preview endpoint directly rather than the async plugin actions.
