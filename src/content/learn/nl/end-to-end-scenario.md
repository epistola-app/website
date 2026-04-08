---
title: "Van begin tot eind"
summary: "Een complete doorloop: van een vergunningaanvraag van een burger tot het gegenereerde document in de inbox."
videoUrl: ""
videoBrief: "45-second screen recording showing the full flow: a permit application arrives in GZAC, a case worker opens it, reviews the data, the process triggers document generation via Epistola, the PDF appears in the case documents tab, the worker previews it and sends it. End with the citizen receiving the document."
posterImage: ""
sandboxCheckpointId: ""
nextUnits:
  - slug: "welcome"
    label: "Terug naar het begin"
  - slug: "create-template"
    label: "Maak je eigen template"
deepLinks:
  - label: "Valtimo Plugin Overzicht"
    url: "/nl/learn/integrations/valtimo-overview"
  - label: "Templates"
    url: "/nl/learn/suite/templates"
  - label: "Documentgeneratie"
    url: "/nl/learn/suite/document-generation"
tags:
  - getting-started
  - integration
sortOrder: 8
---

## Een vergunningaanvraag, van begin tot eind

Laten we alles in actie zien. Een burger dient een vergunningaanvraag in en de gemeente verwerkt deze — van intake tot het uiteindelijke document in de inbox van de burger.

### 1. Aanvraag komt binnen

Een burger dient een vergunningaanvraag in via het portaal van de gemeente. GZAC maakt een nieuwe zaak aan met de gegevens van de aanvrager: naam, adres, projectdetails, aangevraagd vergunningtype.

### 2. Medewerker beoordeelt

Een medewerker opent de zaak in Valtimo. Ze zien de aanvraagdetails, verifiëren de informatie en keuren de vergunning goed. Het proces gaat door naar de documentgeneratiestap.

### 3. Document wordt gegenereerd

Het BPMN-proces bereikt de Epistola-servicetaak. De plugin:

- Selecteert het vergunningtemplate
- Kiest de Nederlandse variant op basis van het `taal=nl`-attribuut
- Mapt de zaakgegevens (naam aanvrager, adres, vergunningdetails) naar de templatevelden
- Dient het generatieverzoek in

Binnen enkele seconden is de PDF gereed.

### 4. Medewerker controleert en verstuurt

Het gegenereerde vergunningdocument verschijnt in het documententabblad van de zaak. De medewerker:

- Bekijkt het PDF-voorbeeld om de inhoud te verifiëren
- Bevestigt dat alles klopt
- Het proces gaat verder naar de notificatiestap, die het document naar de burger verstuurt

### 5. Burger ontvangt het document

De burger ontvangt het vergunningdocument — professioneel opgemaakt, met de juiste gegevens, gegenereerd vanuit een versiebeheerd template.

### Het totaalplaatje

Dit scenario toont hoe Epistola en GZAC/Valtimo samenwerken:

- **Templates** definiëren de documentstructuur en opmaak
- **Varianten** handelen verschillende talen en formaten automatisch af
- **Omgevingen** zorgen dat de juiste templateversie wordt gebruikt in productie
- **De plugin** verbindt het zaakproces met documentgeneratie
- **Het resultaat** is een betrouwbare, auditeerbare documentverzendpijplijn

Klaar om je eigen template te bouwen? Ga terug naar het begin en maak je eerste template.
