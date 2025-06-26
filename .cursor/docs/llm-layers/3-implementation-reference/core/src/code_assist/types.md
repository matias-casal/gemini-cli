# types

**File**: `packages/core/src/code_assist/types.ts`
**Package**: Core

## Summary

- **Total Exports**: 14
- **Interfaces**: 11
- **Types**: 3
- **Functions**: 0
- **Classes**: 0

## Interfaces

### `ClientMetadata`

#### Properties

| Property        | Type                       | Optional |
| --------------- | -------------------------- | -------- |
| `ideType`       | `ClientMetadataIdeType`    | Yes      |
| `ideVersion`    | `string`                   | Yes      |
| `pluginVersion` | `string`                   | Yes      |
| `platform`      | `ClientMetadataPlatform`   | Yes      |
| `updateChannel` | `string`                   | Yes      |
| `duetProject`   | `string`                   | Yes      |
| `pluginType`    | `ClientMetadataPluginType` | Yes      |
| `ideName`       | `string`                   | Yes      |

### `LoadCodeAssistRequest`

#### Properties

| Property                  | Type             | Optional |
| ------------------------- | ---------------- | -------- |
| `cloudaicompanionProject` | `string`         | Yes      |
| `metadata`                | `ClientMetadata` | No       |

### `LoadCodeAssistResponse`

#### Properties

| Property                  | Type              | Optional |
| ------------------------- | ----------------- | -------- | --- |
| `currentTier`             | `GeminiUserTier   | null`    | Yes |
| `allowedTiers`            | `GeminiUserTier[] | null`    | Yes |
| `ineligibleTiers`         | `IneligibleTier[] | null`    | Yes |
| `cloudaicompanionProject` | `string           | null`    | Yes |

### `GeminiUserTier`

#### Properties

| Property                             | Type            | Optional |
| ------------------------------------ | --------------- | -------- | --- |
| `id`                                 | `UserTierId`    | No       |
| `name`                               | `string`        | No       |
| `description`                        | `string`        | No       |
| `userDefinedCloudaicompanionProject` | `boolean        | null`    | Yes |
| `isDefault`                          | `boolean`       | Yes      |
| `privacyNotice`                      | `PrivacyNotice` | Yes      |
| `hasAcceptedTos`                     | `boolean`       | Yes      |
| `hasOnboardedPreviously`             | `boolean`       | Yes      |

### `IneligibleTier`

#### Properties

| Property        | Type                       | Optional |
| --------------- | -------------------------- | -------- |
| `reasonCode`    | `IneligibleTierReasonCode` | No       |
| `reasonMessage` | `string`                   | No       |
| `tierId`        | `UserTierId`               | No       |
| `tierName`      | `string`                   | No       |

### `PrivacyNotice`

#### Properties

| Property     | Type      | Optional |
| ------------ | --------- | -------- |
| `showNotice` | `boolean` | No       |
| `noticeText` | `string`  | Yes      |

### `OnboardUserRequest`

#### Properties

| Property                  | Type            | Optional   |
| ------------------------- | --------------- | ---------- | --- |
| `tierId`                  | `string         | undefined` | No  |
| `cloudaicompanionProject` | `string         | undefined` | No  |
| `metadata`                | `ClientMetadata | undefined` | No  |

### `LongrunningOperationResponse`

#### Properties

| Property   | Type                  | Optional |
| ---------- | --------------------- | -------- |
| `name`     | `string`              | No       |
| `done`     | `boolean`             | Yes      |
| `response` | `OnboardUserResponse` | Yes      |

### `OnboardUserResponse`

#### Properties

| Property                  | Type     | Optional |
| ------------------------- | -------- | -------- |
| `cloudaicompanionProject` | `object` | Yes      |

### `OnboardUserStatus`

#### Properties

| Property         | Type                    | Optional   |
| ---------------- | ----------------------- | ---------- | --- |
| `statusCode`     | `OnboardUserStatusCode` | No         |
| `displayMessage` | `string`                | No         |
| `helpLink`       | `HelpLinkUrl            | undefined` | No  |

### `HelpLinkUrl`

#### Properties

| Property      | Type     | Optional |
| ------------- | -------- | -------- |
| `description` | `string` | No       |
| `url`         | `string` | No       |

## Type Aliases

### `ClientMetadataIdeType`

```typescript
type ClientMetadataIdeType = any | any | any | any | any | any;
```

### `ClientMetadataPlatform`

```typescript
type ClientMetadataPlatform = any | any | any | any | any | any;
```

### `ClientMetadataPluginType`

```typescript
type ClientMetadataPluginType = any | any | any | any | any;
```

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/code_assist/types.js';
```
