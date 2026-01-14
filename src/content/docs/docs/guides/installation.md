---
title: Installation
description: Setting up Epistola Suite for development
---

## Prerequisites

- **JDK 25** (via mise: `mise install`)
- **Node.js 24** (via mise: `mise install`)
- **Docker** (for running tests)
- **pnpm** (installed automatically via corepack)
- **PostgreSQL** (for local development)

## Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/epistola-app/epistola-suite.git
cd epistola-suite
```

### 2. Install Dependencies

```bash
# Setup mise and install tooling
mise install

# Frontend dependencies
pnpm install

# Backend dependencies (Gradle wrapper handles this)
./gradlew build --refresh-dependencies
```

### 3. Build Application

```bash
# Build all modules
./gradlew build

# Build specific module
./gradlew :apps:epistola:build
```

### 4. Run Application

```bash
./gradlew :apps:epistola:bootRun
```

The application will be available at `http://localhost:4000`.

## Development Workflow

### Running Tests

```bash
# All tests (requires Docker)
./gradlew test

# With coverage report
./gradlew test koverHtmlReport
# Report at: build/reports/kover/html/index.html
```

### Code Formatting

```bash
# Check Kotlin formatting
./gradlew ktlintCheck

# Auto-fix Kotlin formatting
./gradlew ktlintFormat
```

### Frontend Development

```bash
# Build editor module
./gradlew :modules:editor:build

# Watch mode (in modules/editor/)
cd modules/editor
pnpm dev
```

## Documentation

### Generate Documentation

```bash
# Generate all docs (Dokka + OpenAPI)
./gradlew generateDocs

# Sync to documentation website
./gradlew syncDocs
```

## Next Steps

- Read the [Brand Guide](/guides/brandguide/) for UI patterns
- Explore the [REST API](/api)
- Review [Testing Guide](/guides/testing/)
- Understand [CQRS Architecture](/architecture/cqrs/)
