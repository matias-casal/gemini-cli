# UI Components

## Overview

React components built with Ink for terminal UI. Includes input handling, message display, dialogs, and visual feedback elements.

## Component Summary

**Total Components**: 40

## Key Components

### components

- `UpdateNotification` - [View Details](../3-implementation-reference/cli/src/ui/components/UpdateNotification.md)
- `Tips` - [View Details](../3-implementation-reference/cli/src/ui/components/Tips.md)
- `ThemeDialog` - [View Details](../3-implementation-reference/cli/src/ui/components/ThemeDialog.md)
- `SuggestionsDisplay` - [View Details](../3-implementation-reference/cli/src/ui/components/SuggestionsDisplay.md)
- `StatsDisplay` - [View Details](../3-implementation-reference/cli/src/ui/components/StatsDisplay.md)
- `Stats` - [View Details](../3-implementation-reference/cli/src/ui/components/Stats.md)
- `ShowMoreLines` - [View Details](../3-implementation-reference/cli/src/ui/components/ShowMoreLines.md)
- `ShellModeIndicator` - [View Details](../3-implementation-reference/cli/src/ui/components/ShellModeIndicator.md)
- `SessionSummaryDisplay` - [View Details](../3-implementation-reference/cli/src/ui/components/SessionSummaryDisplay.md)
- `MemoryUsageDisplay` - [View Details](../3-implementation-reference/cli/src/ui/components/MemoryUsageDisplay.md)
- ... and 16 more

### shared

- `text-buffer` - [View Details](../3-implementation-reference/cli/src/ui/components/shared/text-buffer.md)
- `RadioButtonSelect` - [View Details](../3-implementation-reference/cli/src/ui/components/shared/RadioButtonSelect.md)
- `MaxSizedBox` - [View Details](../3-implementation-reference/cli/src/ui/components/shared/MaxSizedBox.md)

### messages

- `UserShellMessage` - [View Details](../3-implementation-reference/cli/src/ui/components/messages/UserShellMessage.md)
- `UserMessage` - [View Details](../3-implementation-reference/cli/src/ui/components/messages/UserMessage.md)
- `ToolMessage` - [View Details](../3-implementation-reference/cli/src/ui/components/messages/ToolMessage.md)
- `ToolGroupMessage` - [View Details](../3-implementation-reference/cli/src/ui/components/messages/ToolGroupMessage.md)
- `ToolConfirmationMessage` - [View Details](../3-implementation-reference/cli/src/ui/components/messages/ToolConfirmationMessage.md)
- `InfoMessage` - [View Details](../3-implementation-reference/cli/src/ui/components/messages/InfoMessage.md)
- `GeminiMessageContent` - [View Details](../3-implementation-reference/cli/src/ui/components/messages/GeminiMessageContent.md)
- `GeminiMessage` - [View Details](../3-implementation-reference/cli/src/ui/components/messages/GeminiMessage.md)
- `ErrorMessage` - [View Details](../3-implementation-reference/cli/src/ui/components/messages/ErrorMessage.md)
- `DiffRenderer` - [View Details](../3-implementation-reference/cli/src/ui/components/messages/DiffRenderer.md)
- ... and 1 more

## Architecture Patterns

- **Functional Components**: All components use React hooks
- **Ink UI Library**: Terminal-specific UI components
- **Composition over Inheritance**: Small, focused components

## Key Dependencies

- `ink`
- `ink-text-input`
- `ink-select-input`
- `ink-spinner`

## Integration Points
