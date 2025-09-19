# Design System Registry

###### Based on [Vercel's Next.js Registry Starter Template](https://github.com/vercel/registry-starter)

> [This is not a component library. **It is how you build your component library.**](https://ui.shadcn.com/docs#:~:text=This%20is%20not%20a%20component%20library.%20It%20is%20how%20you%20build%20your%20component%20library.)

## Setup

### Required

- [`pnpm`](https://pnpm.io/installation) is required (even when not used as the package manager).
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
  - Summary: Plan and resolve errors/issues; validate against docs and verify changes via Playwright on localhost.
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

- **Start**: `pnpm storybook`
- **Stop**: Press `Ctrl + C` in the terminal running Storybook
- **Served at**: http://localhost:6006 (Storybook will choose a different port if 6006 is in use; see terminal output for the exact URL.)
- **Stories location**: `stories/` directory (e.g., `stories/components/ui/*.stories.tsx`).
  - Supported patterns typically include `**/*.stories.@(tsx|mdx)`.
### Test Prompts

Try the following prompts to get started. Include the workflow name trigger in the prompts.

<details>
<summary>Weather Widget</summary>

_**PAR**: 5 user prompts_\
Examples: [Claude 3.7 Sonnet](https://github.com/vmljg/ds-registry/blob/demo/weather-widget-claude/.windsurf/trajectories/weather-widget/claude-3.7-sonnet.md) ❌ ([Failed](https://ds-registry-n1m6z4rxk-vmljg-f16eb6a3.vercel.app/registry/weather-widget)) | [GPT-5 (low reasoning)](https://github.com/vmljg/ds-registry/blob/demo/weather-widget-gpt-5-low-reasoning/.windsurf/trajectories/weather-widget/gpt-5-low-reasoning.md) ✅ ([Passed](https://ds-registry-orrr55cgq-vmljg-f16eb6a3.vercel.app/registry/weather-widget))

#### Gherkin Feature

> ### Feature: Weather Widget Display
>
> - **As a user,**
>   - I want to see the current weather conditions for a specified location,
>   - So that I can quickly get weather information.
>
> #### Scenario: Displaying weather for a default location
>
> - **Given** I am on the homepage
> - **And** the weather widget is displayed
> - **Then** I should see the current temperature
> - **And** I should see the current weather condition (e.g., "Sunny", "Cloudy")
> - **And** I should see the location (e.g., "London, UK")
> - **And** I should see an icon representing the weather condition
>
> #### Scenario: Displaying weather for a user-specified location
>
> - **Given** I am on the homepage
> - **And** the weather widget is displayed
> - **When** I enter "New York" into the location input field
> - **And** I click the "Search" button
> - **Then** I should see the current temperature for "New York"
> - **And** I should see the current weather condition for "New York"
> - **And** I should see "New York, US" as the location
> - **And** I should see an icon representing the weather condition for "New York"
>
> #### Scenario: Handling invalid location input
>
> - **Given** I am on the homepage
> - **And** the weather widget is displayed
> - **When** I enter "asdfghjkl" into the location input field
> - **And** I click the "Search" button
> - **Then** I should see an error message indicating "Location not found"
> - **And** the weather information should remain unchanged or display a default state
>
> #### Scenario: Displaying loading state
>
> - **Given** I am on the homepage
> - **And** the weather widget is displayed
> - **When** I enter "Paris" into the location input field
> - **And** I click the "Search" button
> - **Then** I should see a "Loading..." indicator
> - **And** after a short delay, I should see the weather information for "Paris"
>
> #### Scenario: Displaying weather for a location with no specific country
>
> - **Given** I am on the homepage
> - **And** the weather widget is displayed
> - **When** I enter "Tokyo" into the location input field
> - **And** I click the "Search" button
> - **Then** I should see the current temperature for "Tokyo"
> - **And** I should see the current weather condition for "Tokyo"
> - **And** I should see "Tokyo, JP" as the location
> - **And** I should see an icon representing the weather condition for "Tokyo"
>
> #### Scenario: Displaying temperature in different units
>
> - **Given** I am on the homepage
> - **And** the weather widget is displayed
> - **And** the current temperature is displayed in Celsius
> - **When** I click the "Toggle Units" button
> - **Then** I should see the current temperature displayed in Fahrenheit
> - **When** I click the "Toggle Units" button again
> - **Then** I should see the current temperature displayed in Celsius
>
> #### Scenario: Refreshing weather data
>
> - **Given** I am on the homepage
> - **And** the weather widget is displayed
> - **And** the weather data was last updated at [timestamp]
> - **When** I click the "Refresh" button
> - **Then** the weather data should be updated to the current conditions
> - **And** the "last updated" timestamp should reflect the new update time
>
> [/ask-clarifying-questions](.windsurf/workflows/ask-clarifying-questions.md) [/create-component](.windsurf/workflows/create-component.md)

### Optional:

When a Figma design is available:

> [/reference-figma](.windsurf/workflows/reference-figma.md): `https://www.figma.com/design/...?node-id=...`

</details>

<details>
<summary>Interactive Comments Section</summary>

_**PAR**: 10 user prompts_

> ### Feature: Interactive Comments Section
>
> - **As a user,**
>   - I want to interact with a comments section
>   - So that I can create, read, update, delete, and vote on comments and replies
>
> #### Background:
>
> - **Given** the application loads comments and replies from "data.json" on first load
>
> #### Scenario: Create a new comment
>
> - **Given** I am on the comments section page
> - **When** I enter text into the comment input field
> - **And** I click the "Post" button
> - **Then** my new comment should appear in the comments list
>
> #### Scenario: Read existing comments
>
> - **Given** I am on the comments section page
> - **Then** I should see all existing comments and replies from "data.json"
>
> #### Scenario: Update an existing comment
>
> - **Given** I am viewing my own comment
> - **When** I click the "Edit" button
> - **And** I change the comment text
> - **And** I click the "Update" button
> - **Then** the comment should display the updated text
>
> #### Scenario: Delete a comment
>
> - **Given** I am viewing my own comment
> - **When** I click the "Delete" button
> - **And** I confirm the deletion
> - **Then** the comment should be removed from the comments list
>
> #### Scenario: Reply to a comment
>
> - **Given** I am viewing a comment
> - **When** I click the "Reply" button
> - **And** I enter my reply text
> - **And** I click the "Post Reply" button
> - **Then** my reply should appear nested under the comment
>
> #### Scenario: Upvote a comment
>
> - **Given** I am viewing a comment
> - **When** I click the "Upvote" button
> - **Then** the comment's score should increase by 1
>
> #### Scenario: Downvote a comment
>
> - **Given** I am viewing a comment
> - **When** I click the "Downvote" button
> - **Then** the comment's score should decrease by 1
>
> #### Scenario: Responsive layout
>
> - **Given** I am viewing the app on different screen sizes
> - **Then** the layout should adjust to display optimally for that device
>
> #### Scenario: Hover states
>
> - **Given** I hover over any interactive element
> - **Then** I should see the hover state styling as per the design
>
> #### Scenario: Persist state in localStorage (Bonus)
>
> - **Given** I have added, updated, or deleted comments
> - **When** I refresh the browser
> - **Then** my changes should persist using localStorage
>
> #### Scenario: Full-stack CRUD (Bonus)
>
> - **Given** I am using the full-stack version of the app
> - **When** I create, read, update, or delete comments
> - **Then** the changes should be saved and retrieved from the server
>
> [/ask-clarifying-questions](.windsurf/workflows/ask-clarifying-questions.md) [/create-component](.windsurf/workflows/create-component.md)

</details>
