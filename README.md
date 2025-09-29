# Design System Registry

###### Based on [Vercel's Next.js Registry Starter Template](https://github.com/vercel/registry-starter)

> [This is not a component library. **It is how you build your component library.**](https://ui.shadcn.com/docs#:~:text=This%20is%20not%20a%20component%20library.%20It%20is%20how%20you%20build%20your%20component%20library.)

## Setup

### Required

- [Bun](https://bun.sh)
- [Windsurf](https://windsurf.com/) or [VS Code](https://code.visualstudio.com/)

### Recommended

- Add MCP servers to your IDE
  - [Figma](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server)
  - [shadcn/ui](https://ui.shadcn.com/docs/mcp)
  - [Vercel](https://vercel.com/docs/mcp/vercel-mcp#vs-code-with-copilot)
  - [Fetch](https://modelcontextprotocol.io/servers/fetch) — generic HTTP fetch MCP server

## Customize

- Customize [AGENTS.MD](https://agents.md/) to describe the overall project.
- Apply DS tokens to shadcn/ui and Tailwind themes
- Customize [Figma DS](https://ui.shadcn.com/docs/figma)

## Contributing

Please read the contribution guidelines and branching strategy in [CONTRIBUTING.md](CONTRIBUTING.md).

## Code Style

Refer to the modular style guide at [docs/style/README.md](docs/style/README.md).

MUST highlights:

- Use semantic HTML elements (e.g., `article`, `header`, `section`, `footer`, `h1–h6`, `p`, `nav`, `figure/figcaption`).
- Include `width` and `height` on `<img>` to prevent layout shifts; add `loading="lazy"` for below-the-fold images.

### Formatting (Prettier)

Run Prettier manually using the provided scripts:

```bash
# Check formatting (no writes)
bun run lint

# Write formatting changes to files
bun run format

# Alternative write alias
bun run lint:fix

# If you prefer npx/bunx directly
bunx prettier --write .
```

Tip: In VS Code, enable “Format on Save” and select “Prettier” as the default formatter.

## AI First-Steps

### Onboarding Workflows

Run one of the following workflows in your IDE to get started as a designer or developer.

#### Windsurf

> Recommended models: `Claude 3.7 Sonnet`, `GPT-5 (low reasoning)`

- [/designer-onboarding](.windsurf/workflows/designer-onboarding.md)
- [/developer-onboarding](.windsurf/workflows/developer-onboarding.md)

#### VS Code

- [/designer-onboarding](.github/prompts/designer-onboarding.prompt.md)
- [/developer-onboarding](.github/prompts/developer-onboarding.prompt.md)

## All Windsurf Workflows and Rules

Below is a reference list of all available Windsurf workflows and rules in this repository.

### Workflows (`.windsurf/workflows/`)

- **/ask-clarifying-questions**
  - Summary: Ask clarifying questions to improve output quality when instructions are vague or ambiguous.
  - When to use: Any time requirements are unclear, incomplete, or could be interpreted in multiple ways.
  - File: `.windsurf/workflows/ask-clarifying-questions.md`

- **/create-block**
  - Summary: Create a new block (a Next.js page under `src/app/demo/[name]/blocks`) using only components from this registry.
  - When to use: When you need to compose a demo page showcasing registry components with proper layout and semantics.
  - File: `.windsurf/workflows/create-block.md`

- **/create-component**
  - Summary: Create a new reusable UI component following mobile-first, accessibility, and styling rules.
  - When to use: When introducing a new UI primitive or composite component to the registry.
  - File: `.windsurf/workflows/create-component.md`
  - Example: Run `/create-component` with a prompt like: "Create a `Badge` component in `src/components/ui/badge.tsx` with variants: `default | secondary | destructive`; props: `variant`, `children`; add stories under `stories/components/ui/badge.stories.tsx` and a demo in `app/demo/badge/components`."

- **/create-storybook-story**
  - Summary: Generate Storybook stories by analyzing a component’s TypeScript props to build argTypes and controls.
  - When to use: When adding or updating Storybook stories for a registry component.
  - File: `.windsurf/workflows/create-storybook-story.md`

- **/designer-onboarding**
  - Summary: Sets up the project for designers, validates theme variables, and aligns CSS vars with the registry.
  - When to use: First-time design setup or when updating design tokens/fonts across the app.
  - File: `.windsurf/workflows/designer-onboarding.md`

- **/developer-onboarding**
  - Summary: Developer setup including environment, dependency installation, dev server start, and codebase overview.
  - When to use: First-time development setup or onboarding a new developer.
  - File: `.windsurf/workflows/developer-onboarding.md`

- **/fix-it**
  - Summary: Plan and resolve errors/issues; validate againspt docs and verify changes via Playwright on localhost.
  - When to use: When bugs or CI failures occur and you need a structured remediation plan.
  - File: `.windsurf/workflows/fix-it.md`

- **/reference-figma**
  - Summary: Use Figma Dev Mode as a source of truth for design details and align tokens/naming with the codebase.
  - When to use: When implementing or updating components/styles to match Figma designs.
  - File: `.windsurf/workflows/reference-figma.md`

### Rules (`.windsurf/rules/`)

- **code-style** (trigger: always_on)
  - Summary: Comprehensive code style and engineering guidelines used across the project.
  - When to use: Always; these guidelines apply to all code and documentation.
  - File: `.windsurf/rules/code-style.md`

- **no-cheating** (trigger: manual)
  - Summary: Enforces complete, production-ready code with tests, docs, and secure practices.
  - When to use: Before finalizing significant code output or deliverables.
  - File: `.windsurf/rules/no-cheating.md`

- **placeholders** (trigger: model_decision)
  - Summary: Provides rules for placeholders (images/icons) and forbids mock API data.
  - When to use: When temporary visual assets or filler content are needed during development.
  - File: `.windsurf/rules/placeholders.md`

- **set-par** (trigger: manual)
  - Summary: Establishes an attempt limit and guidance for stopping to reassess when limits are reached.
  - When to use: To control iteration count and prompt for direction on complex tasks.
  - File: `.windsurf/rules/set-par.md`

- **shadcn-nextjs** (trigger: always_on)
  - Summary: Project conventions for Next.js + shadcn/ui ergonomics, styling, and architecture.
  - When to use: Always; applies to patterns, components, and project structure.
  - File: `.windsurf/rules/shadcn-nextjs.md`

- **typescript** (trigger: glob: `src/**/*.ts`)
  - Summary: TypeScript-specific style and structure rules for code under `src/`.
  - When to use: When editing or creating TypeScript files in `src/`.
  - File: `.windsurf/rules/typescript.md`

### Storybook

- **Start**: `bun run storybook`
- **Stop**: Press `Ctrl + C` in the terminal running Storybook
- **Served at**: http://localhost:6006 (Storybook will choose a different port if 6006 is in use; see terminal output for the exact URL.)
- **Stories location**: `stories/` directory (e.g., `stories/components/ui/*.stories.tsx`).
  - Supported patterns typically include `**/*.stories.@(tsx|mdx)`.
