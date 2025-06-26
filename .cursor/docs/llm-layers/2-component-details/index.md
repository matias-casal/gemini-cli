# Gemini CLI Architecture Documentation

High-level architectural overview of the gemini-cli system, organized by functional modules.

## System Overview

Gemini CLI is built as a monorepo with two main packages:

- **@google/gemini-cli**: Terminal interface and user interaction layer
- **@google/gemini-cli-core**: Core business logic and API integration

## Architecture Diagrams

Visual representations of system architecture:

- [Architecture Overview](./diagrams/architecture-overview.md)
- [Data Flow](./diagrams/data-flow.md)
- [Package Dependencies](./diagrams/package-dependencies.md)
- [Tools Ecosystem](./diagrams/tools-ecosystem.md)
- [CLI Components](./diagrams/cli-components.md)

## Module Documentation

### CLI Package (@google/gemini-cli)

| Module                                  | Description                    | Components |
| --------------------------------------- | ------------------------------ | ---------- |
| [CLI Core Components](./cli-core.md)    | Entry points and orchestration | 5          |
| [UI Components](./cli-components.md)    | Terminal UI components         | 40         |
| [React Hooks](./cli-hooks.md)           | State and effect management    | 22         |
| [Configuration System](./cli-config.md) | Settings and authentication    | 5          |

### Core Package (@google/gemini-cli-core)

| Module                          | Description                | Components |
| ------------------------------- | -------------------------- | ---------- |
| [Core System](./core-main.md)   | API client and prompts     | 11         |
| [Tools System](./core-tools.md) | File, shell, and web tools | 17         |
| [Services](./core-services.md)  | Cross-cutting services     | 2          |
| [Utilities](./core-utils.md)    | Common utilities           | 20         |

## Design Principles

1. **Separation of Concerns**: Clear boundary between UI and business logic
2. **Extensibility**: Plugin architecture for tools and integrations
3. **Type Safety**: Full TypeScript coverage with strict typing
4. **User Control**: Explicit approval for all system modifications
5. **Performance**: Streaming responses and efficient file handling

## Key Technologies

- **Runtime**: Node.js 18+ with ES modules
- **UI Framework**: React with Ink for terminal rendering
- **Language**: TypeScript with strict mode
- **Testing**: Vitest for unit and integration tests
- **Build**: ESBuild for fast bundling
