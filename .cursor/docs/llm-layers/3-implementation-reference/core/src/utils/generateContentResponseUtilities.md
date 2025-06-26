# generateContentResponseUtilities

**File**: `packages/core/src/utils/generateContentResponseUtilities.ts`
**Package**: Core

## Summary

- **Total Exports**: 8
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 8
- **Classes**: 0

## Functions

### `getResponseText`

```typescript
function getResponseText(response: GenerateContentResponse): string | undefined;
```

#### Parameters

| Name       | Type                      | Optional | Description |
| ---------- | ------------------------- | -------- | ----------- |
| `response` | `GenerateContentResponse` | No       | -           |

**Returns**: `string | undefined`

### `getResponseTextFromParts`

```typescript
function getResponseTextFromParts(parts: Part[]): string | undefined;
```

#### Parameters

| Name    | Type     | Optional | Description |
| ------- | -------- | -------- | ----------- |
| `parts` | `Part[]` | No       | -           |

**Returns**: `string | undefined`

### `getFunctionCalls`

```typescript
function getFunctionCalls(
  response: GenerateContentResponse,
): FunctionCall[] | undefined;
```

#### Parameters

| Name       | Type                      | Optional | Description |
| ---------- | ------------------------- | -------- | ----------- |
| `response` | `GenerateContentResponse` | No       | -           |

**Returns**: `FunctionCall[] | undefined`

### `getFunctionCallsFromParts`

```typescript
function getFunctionCallsFromParts(parts: Part[]): FunctionCall[] | undefined;
```

#### Parameters

| Name    | Type     | Optional | Description |
| ------- | -------- | -------- | ----------- |
| `parts` | `Part[]` | No       | -           |

**Returns**: `FunctionCall[] | undefined`

### `getFunctionCallsAsJson`

```typescript
function getFunctionCallsAsJson(
  response: GenerateContentResponse,
): string | undefined;
```

#### Parameters

| Name       | Type                      | Optional | Description |
| ---------- | ------------------------- | -------- | ----------- |
| `response` | `GenerateContentResponse` | No       | -           |

**Returns**: `string | undefined`

### `getFunctionCallsFromPartsAsJson`

```typescript
function getFunctionCallsFromPartsAsJson(parts: Part[]): string | undefined;
```

#### Parameters

| Name    | Type     | Optional | Description |
| ------- | -------- | -------- | ----------- |
| `parts` | `Part[]` | No       | -           |

**Returns**: `string | undefined`

### `getStructuredResponse`

```typescript
function getStructuredResponse(
  response: GenerateContentResponse,
): string | undefined;
```

#### Parameters

| Name       | Type                      | Optional | Description |
| ---------- | ------------------------- | -------- | ----------- |
| `response` | `GenerateContentResponse` | No       | -           |

**Returns**: `string | undefined`

### `getStructuredResponseFromParts`

```typescript
function getStructuredResponseFromParts(parts: Part[]): string | undefined;
```

#### Parameters

| Name    | Type     | Optional | Description |
| ------- | -------- | -------- | ----------- |
| `parts` | `Part[]` | No       | -           |

**Returns**: `string | undefined`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/generateContentResponseUtilities.js';
```
