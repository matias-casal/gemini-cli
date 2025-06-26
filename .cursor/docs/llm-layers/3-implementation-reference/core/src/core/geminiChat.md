# geminiChat

**File**: `packages/core/src/core/geminiChat.ts`
**Package**: Core

## Summary

- **Total Exports**: 1
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Classes

### `GeminiChat`

#### Properties

| Name          | Static | Readonly |
| ------------- | ------ | -------- |
| `sendPromise` | No     | No       |

#### Methods

##### `constructor(unknown: any, unknown: any, unknown: any, unknown: any, unknown: any)`

##### `_getRequestTextFromContents(contents: Content[])`

##### `async _logApiRequest(contents: Content[], model: string)`

##### `async _logApiResponse(durationMs: number, usageMetadata: GenerateContentResponseUsageMetadata, responseText: string)`

##### `_logApiError(durationMs: number, error: unknown)`

##### `async handleFlashFallback(authType: string)`

##### `async sendMessage(params: SendMessageParameters)`

##### `async sendMessageStream(params: SendMessageParameters)`

##### `getHistory(curated: any)`

##### `clearHistory()`

##### `addHistory(content: Content)`

##### `setHistory(history: Content[])`

##### `getFinalUsageMetadata(chunks: GenerateContentResponse[])`

##### `async processStreamResponse(streamResponse: AsyncGenerator, inputContent: Content, startTime: number)`

##### `recordHistory(userInput: Content, modelOutput: Content[], automaticFunctionCallingHistory: Content[])`

##### `isTextContent(content: Content | undefined)`

##### `isThoughtContent(content: Content | undefined)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/core/geminiChat.js';
```
