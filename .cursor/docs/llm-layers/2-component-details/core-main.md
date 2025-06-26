# Core System

## Overview

Core business logic for interacting with Gemini API. Handles requests, responses, context management, and prompt engineering.

## Component Summary

**Total Components**: 11

## Key Components

### core

- `turn` - [View Details](../3-implementation-reference/core/src/core/turn.md)
- `tokenLimits` - [View Details](../3-implementation-reference/core/src/core/tokenLimits.md)
- `prompts` - [View Details](../3-implementation-reference/core/src/core/prompts.md)
- `nonInteractiveToolExecutor` - [View Details](../3-implementation-reference/core/src/core/nonInteractiveToolExecutor.md)
- `modelCheck` - [View Details](../3-implementation-reference/core/src/core/modelCheck.md)
- `logger` - [View Details](../3-implementation-reference/core/src/core/logger.md)
- `geminiRequest` - [View Details](../3-implementation-reference/core/src/core/geminiRequest.md)
- `geminiChat` - [View Details](../3-implementation-reference/core/src/core/geminiChat.md)
- `coreToolScheduler` - [View Details](../3-implementation-reference/core/src/core/coreToolScheduler.md)
- `contentGenerator` - [View Details](../3-implementation-reference/core/src/core/contentGenerator.md)
- ... and 1 more

## Architecture Patterns

## Key Dependencies

- `@google/genai`
- `google-auth-library`

## Integration Points

- **Gemini API**: Direct integration with Google AI services
- **Tool System**: Invokes tools based on model requests
- **Telemetry**: Reports metrics and usage data
