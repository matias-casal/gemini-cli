# textUtils

**File**: `packages/cli/src/ui/utils/textUtils.ts`
**Package**: CLI

## Summary

- **Total Exports**: 5
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 5
- **Classes**: 0

## Functions

### `getAsciiArtWidth`

```typescript
function getAsciiArtWidth(asciiArt: string): number;
```

#### Parameters

| Name       | Type     | Optional | Description |
| ---------- | -------- | -------- | ----------- |
| `asciiArt` | `string` | No       | -           |

**Returns**: `number`

### `isBinary`

```typescript
function isBinary(data: Buffer | null | undefined, sampleSize: any): boolean;
```

#### Parameters

| Name         | Type    | Optional | Description |
| ------------ | ------- | -------- | ----------- | --- | --- |
| `data`       | `Buffer | null     | undefined`  | No  | -   |
| `sampleSize` | `any`   | No       | -           |

**Returns**: `boolean`

### `toCodePoints`

```typescript
function toCodePoints(str: string): string[];
```

#### Parameters

| Name  | Type     | Optional | Description |
| ----- | -------- | -------- | ----------- |
| `str` | `string` | No       | -           |

**Returns**: `string[]`

### `cpLen`

```typescript
function cpLen(str: string): number;
```

#### Parameters

| Name  | Type     | Optional | Description |
| ----- | -------- | -------- | ----------- |
| `str` | `string` | No       | -           |

**Returns**: `number`

### `cpSlice`

```typescript
function cpSlice(str: string, start: number, end?: number): string;
```

#### Parameters

| Name    | Type     | Optional | Description |
| ------- | -------- | -------- | ----------- |
| `str`   | `string` | No       | -           |
| `start` | `number` | No       | -           |
| `end`   | `number` | Yes      | -           |

**Returns**: `string`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/utils/textUtils.js';
```
