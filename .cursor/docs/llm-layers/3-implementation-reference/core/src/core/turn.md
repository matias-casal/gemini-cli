# turn

**File**: `packages/core/src/core/turn.ts`
**Package**: Core

## Summary

- **Total Exports**: 19
- **Interfaces**: 7
- **Types**: 11
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `ServerTool`

#### Properties

| Property | Type                  | Optional |
| -------- | --------------------- | -------- |
| `name`   | `string`              | No       |
| `schema` | `FunctionDeclaration` | No       |

### `StructuredError`

#### Properties

| Property  | Type     | Optional |
| --------- | -------- | -------- |
| `message` | `string` | No       |
| `status`  | `number` | Yes      |

### `GeminiErrorEventValue`

#### Properties

| Property | Type              | Optional |
| -------- | ----------------- | -------- |
| `error`  | `StructuredError` | No       |

### `ToolCallRequestInfo`

#### Properties

| Property            | Type      | Optional |
| ------------------- | --------- | -------- |
| `callId`            | `string`  | No       |
| `name`              | `string`  | No       |
| `args`              | `Record`  | No       |
| `isClientInitiated` | `boolean` | No       |

### `ToolCallResponseInfo`

#### Properties

| Property        | Type               | Optional   |
| --------------- | ------------------ | ---------- | --- |
| `callId`        | `string`           | No         |
| `responseParts` | `PartListUnion`    | No         |
| `resultDisplay` | `ToolResultDisplay | undefined` | No  |
| `error`         | `Error             | undefined` | No  |

### `ServerToolCallConfirmationDetails`

#### Properties

| Property  | Type                          | Optional |
| --------- | ----------------------------- | -------- |
| `request` | `ToolCallRequestInfo`         | No       |
| `details` | `ToolCallConfirmationDetails` | No       |

### `ChatCompressionInfo`

#### Properties

| Property             | Type     | Optional |
| -------------------- | -------- | -------- |
| `originalTokenCount` | `number` | No       |
| `newTokenCount`      | `number` | No       |

## Type Aliases

### `ThoughtSummary`

```typescript
type ThoughtSummary = object;
```

### `ServerGeminiContentEvent`

```typescript
type ServerGeminiContentEvent = object;
```

### `ServerGeminiThoughtEvent`

```typescript
type ServerGeminiThoughtEvent = object;
```

### `ServerGeminiToolCallRequestEvent`

```typescript
type ServerGeminiToolCallRequestEvent = object;
```

### `ServerGeminiToolCallResponseEvent`

```typescript
type ServerGeminiToolCallResponseEvent = object;
```

### `ServerGeminiToolCallConfirmationEvent`

```typescript
type ServerGeminiToolCallConfirmationEvent = object;
```

### `ServerGeminiUserCancelledEvent`

```typescript
type ServerGeminiUserCancelledEvent = object;
```

### `ServerGeminiErrorEvent`

```typescript
type ServerGeminiErrorEvent = object;
```

### `ServerGeminiChatCompressedEvent`

```typescript
type ServerGeminiChatCompressedEvent = object;
```

### `ServerGeminiUsageMetadataEvent`

```typescript
type ServerGeminiUsageMetadataEvent = object;
```

### `ServerGeminiStreamEvent`

```typescript
type ServerGeminiStreamEvent =
  | ServerGeminiContentEvent
  | ServerGeminiToolCallRequestEvent
  | ServerGeminiToolCallResponseEvent
  | ServerGeminiToolCallConfirmationEvent
  | ServerGeminiUserCancelledEvent
  | ServerGeminiErrorEvent
  | ServerGeminiChatCompressedEvent
  | ServerGeminiUsageMetadataEvent
  | ServerGeminiThoughtEvent;
```

## Classes

### `Turn`

#### Properties

| Name                | Static | Readonly |
| ------------------- | ------ | -------- |
| `pendingToolCalls`  | No     | Yes      |
| `debugResponses`    | No     | No       |
| `lastUsageMetadata` | No     | No       |

#### Methods

##### `constructor(unknown: any)`

##### `async run(req: PartListUnion, signal: AbortSignal)`

##### `handlePendingFunctionCall(fnCall: FunctionCall)`

##### `getDebugResponses()`

##### `getUsageMetadata()`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/core/turn.js';
```
