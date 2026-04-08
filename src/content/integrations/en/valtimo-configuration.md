---
title: "Configuration"
description: "How to configure the Valtimo Epistola plugin — connection settings, API keys, and optional parameters."
plugin: "valtimo"
videoUrl: ""
videoBrief: "20-second screen recording: walk through the plugin configuration dialog in Valtimo — enter the Epistola base URL, paste the API key, set the tenant ID, save."
sortOrder: 2
---

## Plugin configuration

The plugin requires three settings to connect to an Epistola instance:

| Setting | Description |
|---|---|
| **Base URL** | The Epistola API endpoint (e.g., `https://epistola.example.com/api`) |
| **API Key** | Authentication key for the Epistola REST API (stored as a Valtimo secret) |
| **Tenant ID** | The Epistola tenant slug to operate against |

These are configured through the Valtimo plugin management UI.

## Optional settings

| Setting | Description | Default |
|---|---|---|
| **Default Environment ID** | Override which environment's active versions are used for generation | _(none — uses Epistola default)_ |
| **Template Sync Enabled** | Automatically sync templates from the classpath on application startup | `false` |

## Security

The API key is stored using Valtimo's secret management — it is never exposed in configuration exports or logs.

## Next steps

- [Document Generation Action](/en/learn/integrations/valtimo-generate-action) — configure the main BPMN action
