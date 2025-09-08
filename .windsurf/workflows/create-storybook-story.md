---
description: Create Storybook Story
auto_execution_mode: 3
---

Create a Storybook story for a given shadcn/ui registry component by analyzing its TypeScript definition to automatically detect props and generate argTypes and controls.

## Instructions:

1. Locate and import the component from the registry.json.
2. Read the component’s TypeScript props interface to:

- Identify prop names, types, and default values.
- Determine appropriate Storybook controls (text, boolean, number, select, color, etc.).
- For union types (e.g., "default" | "outline"), create a select control with those options.

3. Write the story in TypeScript using Storybook CSF 3 format:

- Import `Meta` and `StoryObj` from @storybook/react.
- Define `Meta` with `title`, `component`, and `argTypes` (generated from props).
- Create:
  - A **Default** story with minimal props.
  - At least two variant stories showing different prop combinations.
- Use `args` to set default values for each story.

4. Add inline comments explaining key parts of the code.
5. Ensure the story is self-contained and runnable without external dependencies beyond registry and Storybook.

### Example Input:

@[src/components/ui/button.tsx]

### Example Output:

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

// Automatically generated argTypes from ButtonProps
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outline", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "default",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};
```

## Your task:

Generate the Storybook story for the shadcn/ui component described in the following (or aforementioned) prompt. Ask me which component specifically, if it is unclear.

First, read its TypeScript props definition.
Then, create the `argTypes` and stories automatically based on that definition.
