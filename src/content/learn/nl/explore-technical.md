---
title: "Technische architectuur"
summary: "Begrijp hoe Epistola is gebouwd — van de editor tot de render-engine."
videoUrl: ""
posterImage: ""
nextUnits:
  - slug: "welcome"
    label: "Terug naar start"
  - slug: "create-template"
    label: "Maak een template"
deepLinks:
  - label: "API-overzicht"
    url: "/nl/learn/suite/api-overview"
  - label: "Multi-tenancy"
    url: "/nl/learn/suite/multi-tenancy"
  - label: "Rendering"
    url: "/nl/learn/suite/rendering"
tags:
  - technical
sortOrder: 5
---

## Architectuuroverzicht

Epistola volgt een DocOps-architectuur: een enkele lane van template-authoring tot documentlevering, met duidelijke grenzen tussen componenten.

### De stack

- **Epistola Suite** — Kotlin 2 + Spring Boot 4 monorepo met Thymeleaf server-side rendering en HTMX voor interactiviteit
- **Template-editor** — Lit + ProseMirror webcomponents voor rijke template-editing
- **Render-engine** — iText voor PDF-generatie met 50–200ms rendertijden
- **API-laag** — OpenAPI 3.1 specificatie met gegenereerde server stubs en clientbibliotheken

### Belangrijke ontwerpbeslissingen

#### Contract-first API

De OpenAPI-specificatie in `epistola-contract` is de enige bron van waarheid. Server stubs en clientbibliotheken worden ervan gegenereerd, wat perfecte afstemming garandeert tussen API-consumenten en -aanbieders.

#### Onveranderlijke templateversies

Zodra een templateversie is gepubliceerd, is deze vergrendeld. De themasnapshot en schemahash worden bevroren zodat elk renderverzoek kan worden gereproduceerd — zelfs jaren later.

#### Multi-tenant als standaard

Templates, thema's en configuraties zijn scoped per tenant. Keycloak handelt authenticatie af en elke tenant krijgt geïsoleerde data zonder aparte deployments.

### Deployment

Epistola wordt geleverd als Docker-containers met Helm-charts voor Kubernetes-deployment. Health probes, metrics en gestructureerde logging zijn ingebouwd, zodat het natuurlijk past in uw bestaande platforminfrastructuur.

### Open source

De volledige stack is open source. U kunt self-hosten met volledige controle over uw data, of de managed service gebruiken voor hands-off operatie.
