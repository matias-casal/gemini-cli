# CLI Core Components

## Overview

Main entry points and core CLI functionality. Handles application initialization, command processing, and top-level orchestration.

## Component Summary

**Total Components**: 5

## Key Components

### src

- `nonInteractiveCli` - [View Details](../3-implementation-reference/cli/src/nonInteractiveCli.md)
- `gemini` - [View Details](../3-implementation-reference/cli/src/gemini.md)

### ui

- `types` - [View Details](../3-implementation-reference/cli/src/ui/types.md)
- `colors` - [View Details](../3-implementation-reference/cli/src/ui/colors.md)
- `App` - [View Details](../3-implementation-reference/cli/src/ui/App.md)

## Architecture Patterns

- **Entry Point Pattern**: Single entry through index.ts
- **Component Composition**: App.tsx orchestrates all UI components
- **Context Providers**: Global state management via React contexts

## Key Dependencies

- `react`
- `ink`
- `@google/gemini-cli-core`

## Integration Points

- **Core Package**: Uses @google/gemini-cli-core for all API operations
- **Configuration**: Reads from config system for auth and settings
- **Extension API**: Exposes hooks for VS Code integration
