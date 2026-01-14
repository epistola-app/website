---
title: CQRS Pattern
description: Command Query Responsibility Segregation implementation
---

## CQRS Architecture

Epistola Suite uses the CQRS (Command Query Responsibility Segregation) pattern with a Mediator.

### Core Concepts

#### Commands
- **Purpose**: Mutate system state (create, update, delete)
- **Return**: The created/modified entity or confirmation
- **Example**: `CreateTenant`, `PublishVersion`, `DeleteTemplate`

#### Queries
- **Purpose**: Read data without side effects
- **Return**: View models or domain entities
- **Example**: `ListTenants`, `GetVersion`, `GetActiveVersion`

#### Mediator
- **Purpose**: Routes commands/queries to appropriate handlers
- **Implementation**: `SpringMediator` using Kotlin reflection
- **Benefit**: Loose coupling between controllers and handlers

### Flow Diagram

```
Controller
    ↓
Mediator.send(Command) / Mediator.query(Query)
    ↓
Handler Discovery (via Spring ApplicationContext)
    ↓
CommandHandler / QueryHandler
    ↓
Database Access (JDBI)
    ↓
Return Result
```

### Example: Creating a Tenant

#### 1. Command Definition

```kotlin
data class CreateTenant(val name: String) : Command<Tenant>
```

#### 2. Command Handler

```kotlin
@Component
class CreateTenantHandler(private val jdbi: Jdbi)
    : CommandHandler<CreateTenant, Tenant> {

    override fun handle(command: CreateTenant): Tenant {
        return jdbi.withHandle { handle ->
            // SQL insert logic
            // Return created Tenant
        }
    }
}
```

#### 3. Controller Usage

```kotlin
@RestController
class TenantController(private val mediator: Mediator) {

    @PostMapping("/tenants")
    fun createTenant(@RequestBody request: CreateTenantRequest): Tenant {
        return mediator.send(CreateTenant(name = request.name))
    }
}
```

### Benefits

1. **Separation of Concerns**: Read and write logic are separate
2. **Type Safety**: Kotlin's type system ensures correct handler routing
3. **Testability**: Handlers can be unit tested in isolation
4. **Scalability**: Commands and queries can be optimized independently

### Implementation Details

The mediator uses Spring's `ApplicationContext` to discover handlers at runtime:

```kotlin
class SpringMediator(private val context: ApplicationContext) : Mediator {
    override fun <R> send(command: Command<R>): R {
        val handlerType = // Resolve handler via reflection
        val handler = context.getBean(handlerType)
        return handler.handle(command)
    }
}
```

<!-- See [Kotlin API Reference](/api/kotlin/index.html) for complete mediator implementation. -->
