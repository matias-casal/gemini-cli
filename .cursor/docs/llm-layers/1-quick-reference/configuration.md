# Configuration Guide

## Configuration File

Location: `~/.gemini/config.json`

## Available Options

### Core Settings

```json
{
  "model": "gemini-1.5-flash",
  "temperature": 0.7,
  "topK": 40,
  "topP": 0.95,
  "maxOutputTokens": 8192
}
```

### UI Settings

```json
{
  "theme": "default",
  "showStats": true,
  "showLineNumbers": true,
  "syntaxHighlighting": true
}
```

### Available Themes

- `default` - Default color scheme
- `default-light` - Light variant
- `dracula` - Dracula theme
- `github` - GitHub style
- `atom-one-dark` - Atom One Dark
- `ansi` - Classic ANSI colors

### Tool Settings

```json
{
  "autoApprove": false,
  "requireConfirmation": true,
  "maxFileSize": 1048576,
  "allowedPaths": ["./src", "./tests"]
}
```

### Authentication

```json
{
  "authType": "oauth",
  "tokenCache": true
}
```

## Environment Variables

| Variable            | Description                  | Default          |
| ------------------- | ---------------------------- | ---------------- |
| `GEMINI_API_KEY`    | API key (if not using OAuth) | -                |
| `GEMINI_MODEL`      | Override model selection     | gemini-1.5-flash |
| `GEMINI_CONFIG_DIR` | Config directory             | ~/.gemini        |
| `NO_COLOR`          | Disable colors               | false            |

## Command Line Options

```bash
gemini [options] [prompt]
```

### Options

- `--model <model>` - Select model
- `--theme <theme>` - Set theme
- `--no-stats` - Hide statistics
- `--auto-approve` - Auto-approve tools (use with caution!)
- `--config <path>` - Use custom config file
- `--version` - Show version
- `--help` - Show help

## VS Code Extension Settings

When using with VS Code extension:

```json
{
  "gemini.enabled": true,
  "gemini.contextFiles": ["README.md", "package.json"],
  "gemini.includeWorkspace": true
}
```
