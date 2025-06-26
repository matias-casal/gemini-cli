# contentGenerator

**File**: `packages/core/src/core/contentGenerator.ts`
**Package**: Core

## Summary

- **Total Exports**: 4
- **Interfaces**: 1
- **Types**: 1
- **Functions**: 2
- **Classes**: 0

## Interfaces

### `ContentGenerator`

#### Properties

_No properties defined_

## Type Aliases

### `ContentGeneratorConfig`

```typescript
type ContentGeneratorConfig = object;
```

## Functions

### `createContentGeneratorConfig`

```typescript
async function createContentGeneratorConfig(
  model: string | undefined,
  authType: AuthType | undefined,
  config?: object,
): Promise;
```

#### Parameters

| Name       | Type      | Optional   | Description |
| ---------- | --------- | ---------- | ----------- | --- |
| `model`    | `string   | undefined` | No          | -   |
| `authType` | `AuthType | undefined` | No          | -   |
| `config`   | `object`  | Yes        | -           |

**Returns**: `Promise`

### `createContentGenerator`

```typescript
async function createContentGenerator(config: ContentGeneratorConfig): Promise;
```

#### Parameters

| Name     | Type                     | Optional | Description |
| -------- | ------------------------ | -------- | ----------- |
| `config` | `ContentGeneratorConfig` | No       | -           |

**Returns**: `Promise`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/core/contentGenerator.js';
```
