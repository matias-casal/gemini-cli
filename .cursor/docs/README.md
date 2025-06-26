# Gemini CLI Documentation

This directory contains comprehensive documentation for the gemini-cli project, optimized for LLM consumption.

## Structure

```
.cursor/docs/
├── index.md              # Main entry point
├── metadata.json         # Documentation metadata
├── llm-layers/          # Multi-layer documentation
│   ├── 1-quick-reference/
│   ├── 2-component-details/
│   └── 3-implementation-reference/
├── generated/           # Generated artifacts
│   ├── tools/          # Tools documentation
│   └── structure.json  # Project structure
└── scripts/            # Generation scripts
```

## Usage

1. **For LLMs**: Start with `index.md` for navigation
2. **For Developers**: Run scripts in `scripts/` to regenerate
3. **For Browsing**: Each layer has its own index

## Regenerating Documentation

```bash
cd .cursor/docs/scripts
npm install
node init.js  # Run all generators
```

## Key Files

- `index.md` - Main navigation hub
- `metadata.json` - Machine-readable documentation structure
- `llm-layers/*/index.md` - Layer-specific navigation
- `generated/structure.json` - Complete file structure
