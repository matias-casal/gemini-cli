# server

**File**: `packages/core/src/code_assist/server.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `HttpOptions`

#### Properties

| Property  | Type     | Optional |
| --------- | -------- | -------- |
| `headers` | `Record` | Yes      |

## Classes

### `CodeAssistServer`

#### Methods

##### `constructor(unknown: any, unknown: any, unknown: any)`

##### `async generateContentStream(req: GenerateContentParameters)`

##### `async generateContent(req: GenerateContentParameters)`

##### `async onboardUser(req: OnboardUserRequest)`

##### `async loadCodeAssist(req: LoadCodeAssistRequest)`

##### `async countTokens(req: CountTokensParameters)`

##### `async embedContent(_req: EmbedContentParameters)`

##### `async callEndpoint(method: string, req: any, signal: AbortSignal)`

##### `async streamEndpoint(method: string, req: any, signal: AbortSignal)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/code_assist/server.js';
```
