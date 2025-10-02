---
trigger: glob
globs: stories/**/*.mdx
---

# Storybook MDX Code Style

This rule defines the code style and best practices for writing Storybook MDX documentation files.

## Core Principles

1. **Prefer Markdown over HTML**: Use native Markdown syntax instead of HTML elements whenever possible
2. **Use Storybook Doc Blocks**: Leverage built-in Storybook Doc Block components for common documentation patterns
3. **Create Custom React Components**: Build reusable React components for complex or repeated presentation patterns
4. **Semantic Structure**: Use proper heading hierarchy and semantic Markdown elements

## Markdown Syntax

### DO: Use Markdown

```mdx
# Main Title

## Section Heading

### Subsection

- List item 1
- List item 2

**Bold text** and _italic text_

[Link text](https://example.com)

> Blockquote for callouts

\`\`\`tsx
// Code block with syntax highlighting
const example = "code";
\`\`\`
```

### DON'T: Use HTML

```mdx
<!-- ❌ Avoid this -->

<h1>Main Title</h1>
<h2>Section Heading</h2>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
<strong>Bold text</strong>
<a href="https://example.com">Link text</a>
```

## Storybook Doc Blocks

### Available Doc Blocks

Always import and use Storybook's built-in Doc Block components from `@storybook/blocks`:

```mdx
import {
  Meta,
  Title,
  Description,
  Primary,
  Controls,
  Stories,
  Canvas,
  Source,
  ArgTypes,
  ColorPalette,
  ColorItem,
  Typeset,
  IconGallery,
  IconItem,
  Markdown,
  Unstyled,
} from "@storybook/blocks";

;
```

### Common Doc Blocks Usage

#### Meta (Required)

```mdx
import { Meta } from "@storybook/blocks";

<Meta title="Category/Page Name" />
```

#### Canvas & Source

For displaying component examples with code:

```mdx
import { Canvas, Source } from "@storybook/blocks";

<Canvas>
  <YourComponent />
</Canvas>

<Source language="tsx" code={`<YourComponent prop="value" />`} />
```

#### ColorPalette & ColorItem

For displaying color tokens:

```mdx
import { ColorPalette, ColorItem } from "@storybook/blocks";

<ColorPalette>
  <ColorItem
    title="Primary"
    subtitle="Main brand color"
    colors={{
      Light: "oklch(0.45 0.15 285)",
      Dark: "oklch(0.55 0.15 285)",
    }}
  />
</ColorPalette>
```

#### Typeset

For displaying typography scales:

```mdx
import { Typeset } from "@storybook/blocks";

<Typeset
  fontFamily="var(--font-sans)"
  fontSizes={[12, 14, 16, 20, 24, 32, 40, 48]}
  fontWeight={400}
  sampleText="The quick brown fox jumps over the lazy dog"
/>
```

#### IconGallery & IconItem

For displaying icon sets:

```mdx
import { IconGallery, IconItem } from "@storybook/blocks";

<IconGallery>
  <IconItem name="check">
    <CheckIcon />
  </IconItem>
  <IconItem name="close">
    <CloseIcon />
  </IconItem>
</IconGallery>
```

## Custom React Components

When Doc Blocks don't meet your needs, create custom React components for reusable presentation patterns.

### When to Create Custom Components

- **Repeated patterns**: If you're writing the same HTML/JSX structure multiple times
- **Complex layouts**: Grid layouts, comparison tables, or multi-column displays
- **Interactive elements**: Tabs, accordions, or other stateful UI
- **Specialized visualizations**: Custom color swatches, token displays, or design-specific presentations

### Component Location

Create custom Storybook components in:

```
/stories/components/
  ColorSwatch.tsx
  TokenDisplay.tsx
  ComparisonGrid.tsx
```

### Example: Custom Color Swatch Component

Instead of repeating HTML:

```mdx
<!-- ❌ DON'T: Repeat HTML structures -->
<div className="grid gap-6 my-8">
  <div className="space-y-3">
    <div>
      <h3 className="font-semibold mb-2">Background</h3>
      <p className="text-sm text-muted-foreground mb-3">Default page background</p>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <div className="text-xs font-medium text-muted-foreground">Light Mode</div>
        <div className="w-full h-20 rounded-lg border" style={{ backgroundColor: 'oklch(1 0 0)' }} />
        <code className="text-xs block">oklch(1 0 0)</code>
      </div>
      <!-- ... more repetition ... -->
    </div>
  </div>
</div>
```

Create a reusable component:

```tsx
// stories/components/ColorTokenDisplay.tsx
interface ColorTokenDisplayProps {
  name: string;
  description: string;
  lightValue: string;
  darkValue: string;
}

export function ColorTokenDisplay({
  name,
  description,
  lightValue,
  darkValue,
}: ColorTokenDisplayProps) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="mb-2 font-semibold">{name}</h3>
        <p className="text-muted-foreground mb-3 text-sm">{description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-muted-foreground text-xs font-medium">Light Mode</div>
          <div className="h-20 w-full rounded-lg border" style={{ backgroundColor: lightValue }} />
          <code className="block text-xs">{lightValue}</code>
        </div>
        <div className="space-y-2">
          <div className="text-muted-foreground text-xs font-medium">Dark Mode</div>
          <div className="h-20 w-full rounded-lg border" style={{ backgroundColor: darkValue }} />
          <code className="block text-xs">{darkValue}</code>
        </div>
      </div>
    </div>
  );
}
```

Then use it in MDX:

```mdx
<!-- ✅ DO: Use custom component -->

import { ColorTokenDisplay } from "../components/ColorTokenDisplay";

<div className="my-8 grid gap-6">
  <ColorTokenDisplay
    name="Background"
    description="Default page background"
    lightValue="oklch(1 0 0)"
    darkValue="oklch(0.1 0 0)"
  />

  <ColorTokenDisplay
    name="Foreground"
    description="Default text color"
    lightValue="oklch(0.2 0 0)"
    darkValue="oklch(0.95 0 0)"
  />
</div>
```

## File Structure

### MDX File Template

```mdx
import { Meta } from "@storybook/blocks";
import { CustomComponent } from "../components/CustomComponent";

<Meta title="Category/Page Name" />

# Page Title

Brief introduction using Markdown.

## Section Heading

Content using Markdown syntax with **bold** and _italic_ text.

### Subsection

- List item 1
- List item 2

<CustomComponent prop="value" />

## Code Examples

\`\`\`tsx
// Use fenced code blocks for syntax highlighting
const example = "code";
\`\`\`
```

## Styling Guidelines

### Minimal Inline Styles

Only use inline styles when absolutely necessary (e.g., dynamic color values):

```mdx
<!-- ✅ Acceptable: Dynamic color values -->

<div style={{ backgroundColor: colorValue }} />

<!-- ❌ Avoid: Static styling -->

<div style={{ padding: "1rem", margin: "2rem" }} />
```

### Prefer Tailwind Classes

When styling is needed, use Tailwind CSS utility classes:

```mdx
<div className="grid gap-6 my-8">
  <div className="space-y-3">
    <!-- Content -->
  </div>
</div>
```

### Wrapper Divs

Minimal wrapper divs are acceptable for layout when Markdown doesn't suffice:

```mdx
<!-- ✅ Acceptable: Layout wrapper -->
<div className="grid grid-cols-2 gap-4">
  <!-- Content -->
</div>
```

## Accessibility

1. **Proper heading hierarchy**: Use `#`, `##`, `###` in order
2. **Descriptive link text**: Use meaningful text, not "click here"
3. **Alt text for images**: Always include descriptive alt text
4. **Semantic HTML**: When HTML is necessary, use semantic elements

## Examples

### Good MDX File

```mdx
import { Meta, ColorPalette, ColorItem } from "@storybook/blocks";
import { TokenDisplay } from "../components/TokenDisplay";

<Meta title="Design Tokens/Colors" />

# Color Tokens

All color tokens used in the design system, defined using OKLCH color space for better perceptual uniformity.

## Base Colors

Foundation colors for backgrounds and text throughout the application.

<ColorPalette>
  <ColorItem
    title="Background"
    subtitle="Default page background"
    colors={{
      Light: "oklch(1 0 0)",
      Dark: "oklch(0.1 0 0)",
    }}
  />
</ColorPalette>

## Usage

Colors can be accessed using Tailwind classes:

\`\`\`tsx

<div className="bg-primary text-primary-foreground">Primary button</div>
\`\`\`

Or via CSS variables:

\`\`\`css
.custom-element {
background-color: var(--color-primary);
}
\`\`\`
```

## Summary

1. ✅ **DO** use Markdown syntax for all standard content
2. ✅ **DO** use Storybook Doc Block components when available
3. ✅ **DO** create custom React components for reusable patterns
4. ✅ **DO** use Tailwind classes for styling
5. ❌ **DON'T** write raw HTML when Markdown suffices
6. ❌ **DON'T** repeat complex HTML/JSX structures
7. ❌ **DON'T** use inline styles except for dynamic values
8. ❌ **DON'T** skip proper heading hierarchy
