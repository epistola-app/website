---
title: "Waarom Epistola geen workflow bevat"
description: "Documentgeneratie en workflow zijn verschillende verantwoordelijkheden. Hier is waarom we ze bewust gescheiden houden — en waarom dat beter is voor u."
date: 2026-03-25
author: "Epistola Team"
tags: ["architectuur", "workflow", "integratie"]
---

## Doe één ding, doe het goed

Epistola genereert documenten. Het routeert ze niet, keurt ze niet goed en beslist niet wat er daarna gebeurt. Dat is de taak van uw workflowengine — en met goede reden.

## Workflow is bedrijfsspecifiek

Elke organisatie handelt processen anders af. Een bezwaarprocedure bij de ene gemeente ziet er heel anders uit dan dezelfde procedure bij een andere. Workflowlogica is inherent specifiek voor uw context, uw regels, uw uitzonderingen.

Workflow bundelen in een documentgenerator dwingt u in generieke patronen die nooit helemaal passen. Erger nog, het verspreidt uw proceslogica over meerdere systemen — de goedkeuring leeft hier, de notificatie daar, het document ergens anders.

## Hoge cohesie telt

Wanneer alle stappen van één proces samenleven in één systeem — uw zaakafhandelsysteem — zijn ze makkelijker te begrijpen, onderhouden en wijzigen. Uw BPMN-model is de enige bron van waarheid, niet een lappendeken van leveranciers.

Epistola integreert met systemen zoals GZAC via schone API's. Uw workflowengine roept Epistola aan wanneer een document nodig is, en Epistola levert het. Geen overlap, geen lock-in, geen verborgen proceslogica.

## Het resultaat

- **Uw processen blijven van u.** Wijzig workflow zonder documentgeneratie aan te raken.
- **Minder bewegende delen.** Eén systeem voor workflow, één voor documenten.
- **Makkelijker te begrijpen.** Als iets kapotgaat, weet u waar u moet kijken.

*Wilt u zien hoe de integratie werkt? Bekijk de architectuurflow op onze [homepage](/).*
