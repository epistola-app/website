---
title: "Configuratie"
description: "Hoe je de Valtimo Epistola-plugin configureert — verbindingsinstellingen, API-sleutels en optionele parameters."
plugin: "valtimo"
videoUrl: ""
videoBrief: "20-second screen recording: walk through the plugin configuration dialog in Valtimo — enter the Epistola base URL, paste the API key, set the tenant ID, save."
sortOrder: 2
---

## Pluginconfiguratie

De plugin vereist drie instellingen om verbinding te maken met een Epistola-instantie:

| Instelling | Beschrijving |
|---|---|
| **Base URL** | Het Epistola API-endpoint (bijv. `https://epistola.example.com/api`) |
| **API Key** | Authenticatiesleutel voor de Epistola REST API (opgeslagen als Valtimo-secret) |
| **Tenant ID** | De Epistola tenant-slug waartegen gewerkt wordt |

Deze worden geconfigureerd via de Valtimo-pluginbeheerinterface.

## Optionele instellingen

| Instelling | Beschrijving | Standaard |
|---|---|---|
| **Standaard Environment ID** | Overschrijf welke omgevingsversies worden gebruikt voor generatie | _(geen — gebruikt Epistola-standaard)_ |
| **Template Sync Ingeschakeld** | Synchroniseer automatisch templates van het classpath bij het opstarten | `false` |

## Beveiliging

De API-sleutel wordt opgeslagen via Valtimo's secretbeheer — deze wordt nooit zichtbaar in configuratie-exports of logs.

## Volgende stappen

- [Documentgeneratieactie](/nl/integrations/valtimo-generate-action) — configureer de belangrijkste BPMN-actie
