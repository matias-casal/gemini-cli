# Package Dependencies

```mermaid
graph LR
    subgraph "@google/gemini-cli"
        CLI[CLI Package]
    end

    subgraph "@google/gemini-cli-core"
        Core[Core Package]
    end

    subgraph "UI Dependencies"
        React[react]
        Ink[ink]
        InkUI[ink-text-input<br/>ink-select-input<br/>ink-spinner]
    end

    subgraph "Core Dependencies"
        GenAI[@google/genai]
        MCP[@modelcontextprotocol/sdk]
        Auth[google-auth-library]
    end

    subgraph "Shared Dependencies"
        TS[typescript]
        Glob[glob]
        Diff[diff]
    end

    CLI --> Core
    CLI --> React
    CLI --> Ink
    CLI --> InkUI
    CLI --> TS
    CLI --> Glob
    CLI --> Diff

    Core --> GenAI
    Core --> MCP
    Core --> Auth
    Core --> TS
    Core --> Glob
    Core --> Diff

    style CLI fill:#90EE90,stroke:#333,stroke-width:2px
    style Core fill:#87CEEB,stroke:#333,stroke-width:2px
```
