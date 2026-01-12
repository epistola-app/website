---
title: System Overview
description: High-level architecture of Epistola Suite
---

## Architecture

Epistola Suite is a multi-module Spring Boot application with a React-based editor component.

### Technology Stack

- **Backend**: Spring Boot 4.0 + Kotlin 2.3 (JDK 25)
- **Frontend**: Thymeleaf + HTMX (server-rendered)
- **Editor**: Vite + TypeScript + React
- **Database**: PostgreSQL with JDBI
- **Build**: Gradle multi-module + pnpm workspaces

### Module Structure

```
epistola-suite/
├── apps/epistola/          # Main Spring Boot application
├── modules/
│   ├── api-spec/          # OpenAPI specification
│   ├── api-server/        # Generated API implementation
│   ├── api-client/        # Generated API client
│   ├── editor/            # Rich text editor (Vite/React)
│   └── vendor/            # Third-party integrations
```

### Architectural Patterns

- **CQRS/Mediator**: Commands and queries separated with mediator routing
- **Multi-tenancy**: Tenant isolation at database and application level
- **Version Control**: Documents support multiple versions with activation
- **Server-Side Rendering**: Primary UI uses Thymeleaf + HTMX

## Domain Models

Key domain entities:

- **Tenants**: Isolated customer environments
- **Environments**: Deployment targets (dev, staging, prod)
- **Templates**: Document templates with JSON schema
- **Variants**: Regional/language variations of templates
- **Versions**: Historical versions with draft/published/archived states
- **Activations**: Active version per environment

<!-- See [Kotlin API Documentation](/api/kotlin/index.html) for detailed domain model reference. -->

## API Architecture

The REST API is defined using OpenAPI 3.1 specification and code-generated:

- **Spec**: `/modules/api-spec/src/main/resources/openapi/`
- **Generated Server**: Kotlin Spring interfaces
- **Controller**: Implements generated interfaces, routes to mediator

See [REST API Documentation](/api) for endpoint details.

## Further Reading

- [Domain Models](/architecture/domain/) - Entity relationships
- [CQRS Pattern](/architecture/cqrs/) - Command/Query separation
- [Testing Guide](/guides/testing/) - Test architecture
