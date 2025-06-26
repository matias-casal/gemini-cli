# nextSpeakerChecker

**File**: `packages/core/src/utils/nextSpeakerChecker.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 1
- **Classes**: 0

## Interfaces

### `NextSpeakerResponse`

#### Properties

| Property       | Type     | Optional |
| -------------- | -------- | -------- | --- |
| `reasoning`    | `string` | No       |
| `next_speaker` | `any     | any`     | No  |

## Functions

### `checkNextSpeaker`

```typescript
async function checkNextSpeaker(
  chat: GeminiChat,
  geminiClient: GeminiClient,
  abortSignal: AbortSignal,
): Promise;
```

#### Parameters

| Name           | Type           | Optional | Description |
| -------------- | -------------- | -------- | ----------- |
| `chat`         | `GeminiChat`   | No       | -           |
| `geminiClient` | `GeminiClient` | No       | -           |
| `abortSignal`  | `AbortSignal`  | No       | -           |

**Returns**: `Promise`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/nextSpeakerChecker.js';
```
