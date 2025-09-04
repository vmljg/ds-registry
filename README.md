# Design System Registry

###### Based on [Vercel's Next.js Registry Starter Template](https://github.com/vercel/registry-starter)

> [This is not a component library. __It is how you build your component library.__](https://ui.shadcn.com/docs#:~:text=This%20is%20not%20a%20component%20library.%20It%20is%20how%20you%20build%20your%20component%20library.)

## Setup

### Required
- `pnpm` is required (even when not used as the package manager): https://pnpm.io/installation
- [Windsurf](https://windsurf.com/) or [VS Code](https://code.visualstudio.com/)

### Recommended
- Add MCP servers to your IDE
  - Figma: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server
  - shadcn/ui: https://ui.shadcn.com/docs/mcp
  - Vercel: https://vercel.com/docs/mcp/vercel-mcp#vs-code-with-copilot

## Customize

- Customize [AGENTS.MD](https://agents.md/) to describe the overall project.
- Apply DS tokens to shadcn/ui and Tailwind themes
- Customize Figma DS: https://ui.shadcn.com/docs/figma

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

### Test Prompts

Try the following prompts to get started. Include the workflow name trigger in the prompts.

<details>
<summary>Weather Widget</summary>

_**PAR**: 5 user prompts_\
Examples: [Claude 3.7 Sonnet](https://github.com/vmljg/ds-registry/blob/demo/weather-widget-claude/.windsurf/trajectories/weather-widget/claude-3.7-sonnet.md) ❌ (Failed) | [GPT-5 (low reasoning)](https://github.com/vmljg/ds-registry/blob/demo/weather-widget-gpt-5-low-reasoning/.windsurf/trajectories/weather-widget/gpt-5-low-reasoning.md) ✅ (Passed)

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
> - **Given** the application loads comments and replies from "data.json" on first load
> 
> #### Scenario: Create a new comment
> - **Given** I am on the comments section page
> - **When** I enter text into the comment input field
> - **And** I click the "Post" button
> - **Then** my new comment should appear in the comments list
> 
> #### Scenario: Read existing comments
> - **Given** I am on the comments section page
> - **Then** I should see all existing comments and replies from "data.json"
> 
> #### Scenario: Update an existing comment
> - **Given** I am viewing my own comment
> - **When** I click the "Edit" button
> - **And** I change the comment text
> - **And** I click the "Update" button
> - **Then** the comment should display the updated text
> 
> #### Scenario: Delete a comment
> - **Given** I am viewing my own comment
> - **When** I click the "Delete" button
> - **And** I confirm the deletion
> - **Then** the comment should be removed from the comments list
> 
> #### Scenario: Reply to a comment
> - **Given** I am viewing a comment
> - **When** I click the "Reply" button
> - **And** I enter my reply text
> - **And** I click the "Post Reply" button
> - **Then** my reply should appear nested under the comment
> 
> #### Scenario: Upvote a comment
> - **Given** I am viewing a comment
> - **When** I click the "Upvote" button
> - **Then** the comment's score should increase by 1
> 
> #### Scenario: Downvote a comment
> - **Given** I am viewing a comment
> - **When** I click the "Downvote" button
> - **Then** the comment's score should decrease by 1
> 
> #### Scenario: Responsive layout
> - **Given** I am viewing the app on different screen sizes
> - **Then** the layout should adjust to display optimally for that device
> 
> #### Scenario: Hover states
> - **Given** I hover over any interactive element
> - **Then** I should see the hover state styling as per the design
> 
> #### Scenario: Persist state in localStorage (Bonus)
> - **Given** I have added, updated, or deleted comments
> - **When** I refresh the browser
> - **Then** my changes should persist using localStorage
> 
> #### Scenario: Full-stack CRUD (Bonus)
> - **Given** I am using the full-stack version of the app
> - **When** I create, read, update, or delete comments
> - **Then** the changes should be saved and retrieved from the server
>
> [/ask-clarifying-questions](.windsurf/workflows/ask-clarifying-questions.md) [/create-component](.windsurf/workflows/create-component.md)
</details>