# Design System Registry

Based on [Vercel's Next.js Registry Starter Template](https://github.com/vercel/registry-starter)

## Setup

- `pnpm` is required (even when not used as the package manager): https://pnpm.io/installation
- Customize [AGENTS.MD](https://agents.md/) to describe the overall project.
- Add MCP servers to your IDE
  - Figma: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server
  - shadcn/ui: https://ui.shadcn.com/docs/mcp
  - Vercel: https://vercel.com/docs/mcp/vercel-mcp#vs-code-with-copilot

## Customize

- Apply DS tokens to shadcn/ui and Tailwind themes
- Customize Figma DS: https://ui.shadcn.com/docs/figma

## AI First-Steps

Try the following prompts to get started. Include the workflow name trigger in the prompts.

<details>
<summary>Weather Widget (Gherkin)</summary>

_**PAR**: 5 user prompts_

<blockquote>
<h3>Feature: Weather Widget Display</h3>

<ul>
  <li><strong>As a user,</strong>
    <ul>
      <li>I want to see the current weather conditions for a specified location,</li>
      <li>So that I can quickly get weather information.</li>
    </ul>
  </li>
</ul>

<h4>Scenario: Displaying weather for a default location</h4>
<ul>
  <li><strong>Given</strong> I am on the homepage</li>
  <li><strong>And</strong> the weather widget is displayed</li>
  <li><strong>Then</strong> I should see the current temperature</li>
  <li><strong>And</strong> I should see the current weather condition (e.g., "Sunny", "Cloudy")</li>
  <li><strong>And</strong> I should see the location (e.g., "London, UK")</li>
  <li><strong>And</strong> I should see an icon representing the weather condition</li>
</ul>

<h4>Scenario: Displaying weather for a user-specified location</h4>
<ul>
  <li><strong>Given</strong> I am on the homepage</li>
  <li><strong>And</strong> the weather widget is displayed</li>
  <li><strong>When</strong> I enter "New York" into the location input field</li>
  <li><strong>And</strong> I click the "Search" button</li>
  <li><strong>Then</strong> I should see the current temperature for "New York"</li>
  <li><strong>And</strong> I should see the current weather condition for "New York"</li>
  <li><strong>And</strong> I should see "New York, US" as the location</li>
  <li><strong>And</strong> I should see an icon representing the weather condition for "New York"</li>
</ul>

<h4>Scenario: Handling invalid location input</h4>
<ul>
  <li><strong>Given</strong> I am on the homepage</li>
  <li><strong>And</strong> the weather widget is displayed</li>
  <li><strong>When</strong> I enter "asdfghjkl" into the location input field</li>
  <li><strong>And</strong> I click the "Search" button</li>
  <li><strong>Then</strong> I should see an error message indicating "Location not found"</li>
  <li><strong>And</strong> the weather information should remain unchanged or display a default state</li>
</ul>

<h4>Scenario: Displaying loading state</h4>
<ul>
  <li><strong>Given</strong> I am on the homepage</li>
  <li><strong>And</strong> the weather widget is displayed</li>
  <li><strong>When</strong> I enter "Paris" into the location input field</li>
  <li><strong>And</strong> I click the "Search" button</li>
  <li><strong>Then</strong> I should see a "Loading..." indicator</li>
  <li><strong>And</strong> after a short delay, I should see the weather information for "Paris"</li>
</ul>

<h4>Scenario: Displaying weather for a location with no specific country</h4>
<ul>
  <li><strong>Given</strong> I am on the homepage</li>
  <li><strong>And</strong> the weather widget is displayed</li>
  <li><strong>When</strong> I enter "Tokyo" into the location input field</li>
  <li><strong>And</strong> I click the "Search" button</li>
  <li><strong>Then</strong> I should see the current temperature for "Tokyo"</li>
  <li><strong>And</strong> I should see the current weather condition for "Tokyo"</li>
  <li><strong>And</strong> I should see "Tokyo, JP" as the location</li>
  <li><strong>And</strong> I should see an icon representing the weather condition for "Tokyo"</li>
</ul>

<h4>Scenario: Displaying temperature in different units</h4>
<ul>
  <li><strong>Given</strong> I am on the homepage</li>
  <li><strong>And</strong> the weather widget is displayed</li>
  <li><strong>And</strong> the current temperature is displayed in Celsius</li>
  <li><strong>When</strong> I click the "Toggle Units" button</li>
  <li><strong>Then</strong> I should see the current temperature displayed in Fahrenheit</li>
  <li><strong>When</strong> I click the "Toggle Units" button again</li>
  <li><strong>Then</strong> I should see the current temperature displayed in Celsius</li>
</ul>

<h4>Scenario: Refreshing weather data</h4>
<ul>
  <li><strong>Given</strong> I am on the homepage</li>
  <li><strong>And</strong> the weather widget is displayed</li>
  <li><strong>And</strong> the weather data was last updated at [timestamp]</li>
  <li><strong>When</strong> I click the "Refresh" button</li>
  <li><strong>Then</strong> the weather data should be updated to the current conditions</li>
  <li><strong>And</strong> the "last updated" timestamp should reflect the new update time</li>
</ul>

  [/ask-clarifying-questions](.windsurf/workflows/ask-clarifying-questions.md) [/create-component](.windsurf/workflows/create-component.md)
  </blockquote>

  ### Optional:
  When a Figma design is available:

  > [/reference-figma](.windsurf/workflows/reference-figma.md): `https://www.figma.com/design/...?node-id=...`
</details>

---

## Deploy Your Own

You can deploy your own version of the Next.js Registry Starter to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fregistry-starter&project-name=my-registry&repository-name=my-registry&demo-title=Registry%20Starter&demo-description=Registry%20Starter%20is%20a%20free%2C%20open-source%20template%20built%20with%20Next.js%20and%20Shadcn%2Fui%20Registry%20to%20accelerate%20your%20AI-Native%20Design%20System.&demo-url=https%3A%2F%2Fregistry-starter.vercel.app&demo-image=%2F%2Fregistry-starter.vercel.app%2Fpreview.png)

## Open in v0

[![Open in v0](https://registry-starter.vercel.app/open-in-v0.svg)](https://v0.dev/chat/api/open?title=Dashboard+Kit&prompt=These+are+existing+design+system+styles+and+files.+Please+utilize+them+alongside+base+components+to+build.&url=https%3A%2F%2Fregistry-starter.vercel.app%2Fr%2Fdashboard.json)

This registry application also exposes `Open in v0` buttons for each component. Once this application is deployed, the
`Open in v0` button redirects to [`v0.dev`](https://v0.dev) with a prepopulated prompt and a URL pointing back to this
registry's `/r/${component_name}.json` endpoint. This endpoint will provide v0 the necessary file information, content,
and metadata to start your v0 chat with your component, theme, and other related code.

These `/r/${component_name}.json` files are generated using `shadcn/ui` during the `build` and `dev` based on the
repository's [`registry.json`](./registry.json). For more information, refer to the
[documentation](https://ui.shadcn.com/docs/registry/registry-json).

## Theming

To use a custom theme for all the components, all you need to do is modify the CSS tokens in
[`globals.css`](./src/app/globals.css). More information on these practices can be found
on [ui.shadcn.com/docs](https://ui.shadcn.com/docs).

#### Fonts

To use custom fonts, you can either use [
`next/font/google`](https://nextjs.org/docs/pages/getting-started/fonts#google-fonts) or the 
[`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) CSS rule in your 
[`globals.css`](./src/app/globals.css).

```css
@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW5rygbi49c.woff2') format('woff2'),
    url('https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW5rygbj49c.woff') format('woff');
}
```

If you use `@font-face`, ensure you modify [`globals.css`](src/app/globals.css) tailwind configuration to map 
your custom font variables to Tailwind fonts. Refer to this
[Tailwind documentation](https://tailwindcss.com/docs/font-family#customizing-your-theme)

## MCP

To use this registry with MCP, you must also edit [`registry.json`](./registry.json)'s first
`registry-item` named `theme`. This `registry:theme` item not only contains the tailwind configuration, but it also
contains your design tokens / CSS variables.

The `shadcn/ui` CLI's MCP command will use the entire `registy.json` file, so it must be put in the `/public` folder
with all of your `registry:item`s. This will enable you to use your registry in tools like Cursor & Windsurf.

## Authentication

To protect your registry, you must first protect your `registry.json` and all `registry:item` JSON files.  
This is made possible with an environment variable and basic Next.js Middleware.

1. Create new `REGISTRY_AUTH_TOKEN`. For example, you can generate one:

    ```bash
    node -e "console.log(crypto.randomBytes(32).toString('base64url'))"
    ```

2. Add new `middleware.ts` file to protect `/r/:path` routes

    ```ts
    // src/middleware.ts
    import { NextResponse } from "next/server";
    import type { NextRequest } from "next/server";
    
    export const config = { matcher: "/r/:path*" };
    
    export function middleware(request: NextRequest) {
      const token = request.nextUrl.searchParams.get("token");
    
      if (token == null || token !== process.env.REGISTRY_AUTH_TOKEN) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
    
      return NextResponse.next();
    }
    
    ```

When using `Open in v0`, the v0 platform will use the `token` search parameter to authenticate with your Registry:

```ts
const v0Url = `https://v0.dev/chat/api/open?url=https%3A%2F%2Fregistry-starter.vercel.app%2Fr%2Faccordion.json&token=${process.env.REGISTRY_AUTH_TOKEN}`
```

> [!NOTE]  
> This method only protects the `/r/:path` routes, this does NOT protect the Registry's UI / component previews. If you
> choose to protect the UI / component preview, you must ensure the `registry.json` and all `registry:item`s are 
> publicly accessible or protected using the `token` search parameter. This ensures v0 and other AI Tools have access to
> use the registry
    

## Running locally

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000).

## File Structure

`app/(registry)` routes contains the registry pages.

`app/demo` routes contains various UI primitives, Components, or Blocks (based on `registry.json`)

`@/components` contains all components used in the registry

`@/components/ui` contains all `shadcn/ui` UI Primitives used in the registry

`@/components/registry` contains all components for this Registry Starter application

`@/hooks` contains all React hooks

`@/lib` contains all business logic & utils

`@/layouts` contains all v0 layouts used in `registry.json`
