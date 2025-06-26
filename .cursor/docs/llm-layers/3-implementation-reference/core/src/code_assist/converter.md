# converter

**File**: `packages/core/src/code_assist/converter.ts`
**Package**: Core

## Summary

- **Total Exports**: 8
- **Interfaces**: 4
- **Types**: 0
- **Functions**: 4
- **Classes**: 0

## Interfaces

### `CAGenerateContentRequest`

#### Properties

| Property  | Type                           | Optional |
| --------- | ------------------------------ | -------- |
| `model`   | `string`                       | No       |
| `project` | `string`                       | Yes      |
| `request` | `VertexGenerateContentRequest` | No       |

### `CaGenerateContentResponse`

#### Properties

| Property   | Type                            | Optional |
| ---------- | ------------------------------- | -------- |
| `response` | `VertexGenerateContentResponse` | No       |

### `CaCountTokenRequest`

#### Properties

| Property  | Type                      | Optional |
| --------- | ------------------------- | -------- |
| `request` | `VertexCountTokenRequest` | No       |

### `CaCountTokenResponse`

#### Properties

| Property      | Type     | Optional |
| ------------- | -------- | -------- |
| `totalTokens` | `number` | No       |

## Functions

### `toCountTokenRequest`

```typescript
function toCountTokenRequest(req: CountTokensParameters): CaCountTokenRequest;
```

#### Parameters

| Name  | Type                    | Optional | Description |
| ----- | ----------------------- | -------- | ----------- |
| `req` | `CountTokensParameters` | No       | -           |

**Returns**: `CaCountTokenRequest`

### `fromCountTokenResponse`

```typescript
function fromCountTokenResponse(res: CaCountTokenResponse): CountTokensResponse;
```

#### Parameters

| Name  | Type                   | Optional | Description |
| ----- | ---------------------- | -------- | ----------- |
| `res` | `CaCountTokenResponse` | No       | -           |

**Returns**: `CountTokensResponse`

### `toGenerateContentRequest`

```typescript
function toGenerateContentRequest(
  req: GenerateContentParameters,
  project?: string,
): CAGenerateContentRequest;
```

#### Parameters

| Name      | Type                        | Optional | Description |
| --------- | --------------------------- | -------- | ----------- |
| `req`     | `GenerateContentParameters` | No       | -           |
| `project` | `string`                    | Yes      | -           |

**Returns**: `CAGenerateContentRequest`

### `fromGenerateContentResponse`

```typescript
function fromGenerateContentResponse(
  res: CaGenerateContentResponse,
): GenerateContentResponse;
```

#### Parameters

| Name  | Type                        | Optional | Description |
| ----- | --------------------------- | -------- | ----------- |
| `res` | `CaGenerateContentResponse` | No       | -           |

**Returns**: `GenerateContentResponse`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/code_assist/converter.js';
```
