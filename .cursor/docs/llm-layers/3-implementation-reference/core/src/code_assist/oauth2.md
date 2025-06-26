# oauth2

**File**: `packages/core/src/code_assist/oauth2.ts`
**Package**: Core

## Summary

- **Total Exports**: 4
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 3
- **Classes**: 0

## Interfaces

### `OauthWebLogin`

#### Properties

| Property               | Type      | Optional |
| ---------------------- | --------- | -------- |
| `authUrl`              | `string`  | No       |
| `loginCompletePromise` | `Promise` | No       |

## Functions

### `getOauthClient`

```typescript
async function getOauthClient(): Promise;
```

**Returns**: `Promise`

### `getAvailablePort`

```typescript
function getAvailablePort(): Promise;
```

**Returns**: `Promise`

### `clearCachedCredentialFile`

```typescript
async function clearCachedCredentialFile(): any;
```

**Returns**: `any`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/code_assist/oauth2.js';
```
