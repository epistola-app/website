---
title: Domain Models
description: Core domain entities and relationships
---

## Domain Entity Relationships

The Epistola Suite domain model centers around multi-tenant document templates with version control.

### Entity Hierarchy

```
Tenant
  └─ Environment (dev, staging, prod)
      ├─ Template
      │   └─ Variant (language/region)
      │       └─ Version (draft/published/archived)
      └─ Activation (links Version to Environment)
```

### Core Entities

#### Tenant
- Top-level isolation boundary
- Represents a customer or organization
- Has unique slug for URL routing

#### Environment
- Deployment target within a tenant
- Typical examples: development, staging, production
- Allows testing templates before production activation

#### Template
- Document template with JSON schema
- Defines data structure and validation rules
- Contains reusable document definitions

#### Variant
- Localization or branding variation of a template
- Same data model, different presentation
- Examples: en-US, de-DE, brand-specific styling

#### Version
- Immutable snapshot of a variant
- States: DRAFT → PUBLISHED → ARCHIVED
- Sequential version numbers per variant

#### Activation
- Links a specific Version to an Environment
- Only one active version per variant per environment
- Enables A/B testing and gradual rollouts

## Data Storage

All domain models use PostgreSQL with JDBI for data access:

- **JDBI**: SQL-first approach with Kotlin extensions
- **JSON Columns**: Complex data stored as JSONB
- **Transactions**: Managed by Spring `@Transactional`

<!-- See [Kotlin API Reference](/api/kotlin/index.html) for detailed model documentation. -->
