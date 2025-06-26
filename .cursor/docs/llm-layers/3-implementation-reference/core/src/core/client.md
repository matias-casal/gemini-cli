# client

**File**: `packages/core/src/core/client.ts`
**Package**: Core

## Summary

- **Total Exports**: 1
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Classes

### `GeminiClient`

#### Properties

| Name                    | Static | Readonly |
| ----------------------- | ------ | -------- |
| `chat`                  | No     | No       |
| `contentGenerator`      | No     | No       |
| `model`                 | No     | No       |
| `embeddingModel`        | No     | No       |
| `generateContentConfig` | No     | No       |
| `MAX_TURNS`             | No     | Yes      |

#### Methods

##### `constructor(unknown: any)`

##### `async initialize(contentGeneratorConfig: ContentGeneratorConfig)`

##### `getContentGenerator()`

##### `async addHistory(content: Content)`

##### `getChat()`

##### `async getHistory()`

##### `async setHistory(history: Content[])`

##### `async resetChat()`

##### `async getEnvironment()`

##### `async startChat(extraHistory: Content[])`

##### `async sendMessageStream(request: PartListUnion, signal: AbortSignal, turns: any)`

##### `async generateJson(contents: Content[], schema: SchemaUnion, abortSignal: AbortSignal, model: any, config: any)`

##### `async generateContent(contents: Content[], generationConfig: GenerateContentConfig, abortSignal: AbortSignal)`

##### `async generateEmbedding(texts: string[])`

##### `async tryCompressChat(force: any)`

##### `async handleFlashFallback(authType: string)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/core/client.js';
```
