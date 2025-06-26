# editCorrector

**File**: `packages/core/src/utils/editCorrector.ts`
**Package**: Core

## Summary

- **Total Exports**: 10
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 9
- **Classes**: 0

## Interfaces

### `CorrectedEditResult`

#### Properties

| Property      | Type                  | Optional |
| ------------- | --------------------- | -------- |
| `params`      | `CorrectedEditParams` | No       |
| `occurrences` | `number`              | No       |

## Functions

### `ensureCorrectEdit`

```typescript
async function ensureCorrectEdit(
  currentContent: string,
  originalParams: EditToolParams,
  client: GeminiClient,
  abortSignal: AbortSignal,
): Promise;
```

#### Parameters

| Name             | Type             | Optional | Description |
| ---------------- | ---------------- | -------- | ----------- |
| `currentContent` | `string`         | No       | -           |
| `originalParams` | `EditToolParams` | No       | -           |
| `client`         | `GeminiClient`   | No       | -           |
| `abortSignal`    | `AbortSignal`    | No       | -           |

**Returns**: `Promise`

### `ensureCorrectFileContent`

```typescript
async function ensureCorrectFileContent(
  content: string,
  client: GeminiClient,
  abortSignal: AbortSignal,
): Promise;
```

#### Parameters

| Name          | Type           | Optional | Description |
| ------------- | -------------- | -------- | ----------- |
| `content`     | `string`       | No       | -           |
| `client`      | `GeminiClient` | No       | -           |
| `abortSignal` | `AbortSignal`  | No       | -           |

**Returns**: `Promise`

### `correctOldStringMismatch`

```typescript
async function correctOldStringMismatch(
  geminiClient: GeminiClient,
  fileContent: string,
  problematicSnippet: string,
  abortSignal: AbortSignal,
): Promise;
```

#### Parameters

| Name                 | Type           | Optional | Description |
| -------------------- | -------------- | -------- | ----------- |
| `geminiClient`       | `GeminiClient` | No       | -           |
| `fileContent`        | `string`       | No       | -           |
| `problematicSnippet` | `string`       | No       | -           |
| `abortSignal`        | `AbortSignal`  | No       | -           |

**Returns**: `Promise`

### `correctNewString`

```typescript
async function correctNewString(
  geminiClient: GeminiClient,
  originalOldString: string,
  correctedOldString: string,
  originalNewString: string,
  abortSignal: AbortSignal,
): Promise;
```

#### Parameters

| Name                 | Type           | Optional | Description |
| -------------------- | -------------- | -------- | ----------- |
| `geminiClient`       | `GeminiClient` | No       | -           |
| `originalOldString`  | `string`       | No       | -           |
| `correctedOldString` | `string`       | No       | -           |
| `originalNewString`  | `string`       | No       | -           |
| `abortSignal`        | `AbortSignal`  | No       | -           |

**Returns**: `Promise`

### `correctNewStringEscaping`

```typescript
async function correctNewStringEscaping(
  geminiClient: GeminiClient,
  oldString: string,
  potentiallyProblematicNewString: string,
  abortSignal: AbortSignal,
): Promise;
```

#### Parameters

| Name                              | Type           | Optional | Description |
| --------------------------------- | -------------- | -------- | ----------- |
| `geminiClient`                    | `GeminiClient` | No       | -           |
| `oldString`                       | `string`       | No       | -           |
| `potentiallyProblematicNewString` | `string`       | No       | -           |
| `abortSignal`                     | `AbortSignal`  | No       | -           |

**Returns**: `Promise`

### `correctStringEscaping`

```typescript
async function correctStringEscaping(
  potentiallyProblematicString: string,
  client: GeminiClient,
  abortSignal: AbortSignal,
): Promise;
```

#### Parameters

| Name                           | Type           | Optional | Description |
| ------------------------------ | -------------- | -------- | ----------- |
| `potentiallyProblematicString` | `string`       | No       | -           |
| `client`                       | `GeminiClient` | No       | -           |
| `abortSignal`                  | `AbortSignal`  | No       | -           |

**Returns**: `Promise`

### `unescapeStringForGeminiBug`

```typescript
function unescapeStringForGeminiBug(inputString: string): string;
```

#### Parameters

| Name          | Type     | Optional | Description |
| ------------- | -------- | -------- | ----------- |
| `inputString` | `string` | No       | -           |

**Returns**: `string`

### `countOccurrences`

```typescript
function countOccurrences(str: string, substr: string): number;
```

#### Parameters

| Name     | Type     | Optional | Description |
| -------- | -------- | -------- | ----------- |
| `str`    | `string` | No       | -           |
| `substr` | `string` | No       | -           |

**Returns**: `number`

### `resetEditCorrectorCaches_TEST_ONLY`

```typescript
function resetEditCorrectorCaches_TEST_ONLY(): any;
```

**Returns**: `any`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/editCorrector.js';
```
