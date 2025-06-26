# Developer Guide

## Project Structure

```
gemini-cli/
├── packages/
│   ├── cli/          # Terminal interface
│   └── core/         # Business logic
├── docs/             # Documentation
├── scripts/          # Build scripts
└── integration-tests/ # E2E tests
```

## Development Setup

### Prerequisites

- Node.js 18+
- npm 8+
- TypeScript knowledge

### Installation

```bash
git clone https://github.com/google/gemini-cli.git
cd gemini-cli
npm install
npm run build
```

### Running Locally

```bash
npm run start
```

## Architecture Overview

### Two-Package Monorepo

1. **@google/gemini-cli**: UI layer with React + Ink
2. **@google/gemini-cli-core**: Core logic and API integration

### Key Components

#### CLI Package

- **App.tsx**: Main UI component
- **hooks/**: Custom React hooks for state management
- **components/**: UI components (input, messages, dialogs)
- **config/**: Authentication and settings

#### Core Package

- **client.ts**: Gemini API client
- **tools/**: Extensible tool system
- **prompts.ts**: Prompt engineering
- **services/**: File discovery, Git integration

## Adding a New Tool

1. Create tool file in `packages/core/src/tools/`
2. Implement the tool interface:

```typescript
export class MyTool extends BaseTool {
  name = 'my-tool';
  description = 'Does something useful';

  async execute(params: MyToolParams): Promise<ToolResult> {
    // Implementation
  }
}
```

3. Register in tool registry
4. Add tests

## Testing

### Unit Tests

```bash
npm test
```

### Integration Tests

```bash
npm run test:integration
```

## Code Statistics

- **Total Files**: 592
- **TypeScript Files**: 268
- **JavaScript Files**: 46
- **Documentation Files**: 236

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## Resources

- [Architecture Details](../2-component-details/index.md)
- [API Reference](../3-implementation-reference/index.md)
- [Contributing Guidelines](../../../CONTRIBUTING.md)
