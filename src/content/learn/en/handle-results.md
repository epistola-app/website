---
title: "Handle results and errors"
summary: "How the workflow handles completed documents, failed generations, and fallback behavior."
videoUrl: ""
videoBrief: "25-second screen recording: show a running process in Valtimo waiting at the message catch event. The document completes, the process moves forward to the download step. Then show a second scenario where generation fails — the process takes the error boundary path."
posterImage: ""
sandboxCheckpointId: ""
nextUnits:
  - slug: "use-in-case"
    label: "Use documents in a case"
deepLinks:
  - label: "Async Patterns & BPMN"
    url: "/en/learn/integrations/valtimo-async-patterns"
  - label: "Valtimo Plugin Overview"
    url: "/en/learn/integrations/valtimo-overview"
tags:
  - getting-started
  - integration
sortOrder: 6
---

## Handling generation results

Document generation is asynchronous — the process doesn't block while waiting for a PDF. Instead, it uses a message-based pattern to stay responsive.

### The async flow

After the generate-document action fires, the process reaches a **message catch event** and waits. Behind the scenes:

1. Epistola generates the document
2. The Valtimo plugin's batch poller checks for completed jobs (every 30 seconds by default)
3. When the job completes, the plugin correlates the BPMN message
4. The process continues to the next step

### Downloading the result

After the message arrives, a **download-document** service task retrieves the completed PDF. The document is then available in the case for viewing, sending, or archiving.

### Error handling

If generation fails, the message is still correlated but with an error status. You can handle this with:

- **Boundary events** on the message catch — route to an error-handling path
- **Conditional gateways** after download — check the status and branch accordingly
- **Retry logic** — resubmit the generation request

### Fallback behavior

For critical documents, design your process with a fallback: if automated generation fails, route the task to a case worker who can generate manually or use an alternative template.
