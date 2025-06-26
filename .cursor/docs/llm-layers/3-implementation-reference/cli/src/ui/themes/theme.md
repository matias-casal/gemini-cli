# theme

**File**: `packages/cli/src/ui/themes/theme.ts`
**Package**: CLI

## Summary

- **Total Exports**: 6
- **Interfaces**: 1
- **Types**: 4
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `ColorsTheme`

#### Properties

| Property         | Type        | Optional |
| ---------------- | ----------- | -------- |
| `type`           | `ThemeType` | No       |
| `Background`     | `string`    | No       |
| `Foreground`     | `string`    | No       |
| `LightBlue`      | `string`    | No       |
| `AccentBlue`     | `string`    | No       |
| `AccentPurple`   | `string`    | No       |
| `AccentCyan`     | `string`    | No       |
| `AccentGreen`    | `string`    | No       |
| `AccentYellow`   | `string`    | No       |
| `AccentRed`      | `string`    | No       |
| `Comment`        | `string`    | No       |
| `Gray`           | `string`    | No       |
| `GradientColors` | `string[]`  | Yes      |

## Type Aliases

### `ThemeType`

```typescript
type ThemeType = any | any | any;
```

### `lightTheme`

```typescript
type lightTheme = undefined;
```

### `darkTheme`

```typescript
type darkTheme = undefined;
```

### `ansiTheme`

```typescript
type ansiTheme = undefined;
```

## Classes

### `Theme`

#### Properties

| Name                | Static | Readonly |
| ------------------- | ------ | -------- |
| `defaultColor`      | No     | Yes      |
| `_colorMap`         | No     | Yes      |
| `cssNameToHexMap`   | Yes    | Yes      |
| `inkSupportedNames` | Yes    | Yes      |

#### Methods

##### `constructor(unknown: any, unknown: any, rawMappings: Record, unknown: any)`

##### `getInkColor(hljsClass: string)`

##### `static _resolveColor(colorValue: string)`

##### `_buildColorMap(hljsTheme: Record)`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/themes/theme.js';
```
