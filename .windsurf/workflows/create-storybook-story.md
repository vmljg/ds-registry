---
description: Create Storybook Story
auto_execution_mode: 1
---

Create a Storybook story for a given shadcn/ui registry component by analyzing its TypeScript definition to automatically detect props and generate argTypes, controls, and Play functions for testing.

## Instructions:

1. Locate and import the component from the registry.json.
2. Read the component's TypeScript props interface to:

- Identify prop names, types, and default values.
- Determine appropriate Storybook controls (text, boolean, number, select, color, etc.).
- For union types (e.g., "default" | "outline"), create a select control with those options.

3. Write the story in TypeScript using Storybook CSF 3 format:

- Import `Meta` and `StoryObj` from @storybook/react.
- Import `userEvent` and `within` from @storybook/testing-library.
- Import `expect` from @storybook/jest for assertions.
- Define `Meta` with `title`, `component`, and `argTypes` (generated from props).
- Create:
- A **Default** story with minimal props.
- At least two variant stories showing different prop combinations.
- At least one **Interactive** story with a `play` function that tests user interactions.
- Use `args` to set default values for each story.

4. Add Play functions for testing interactions:

- Use `play` functions to simulate user interactions like clicks, typing, hover, and focus.
- Use `within(canvasElement)` to scope queries to the component being tested.
- Include `userEvent` actions like `userEvent.click()`, `userEvent.type()`, `userEvent.hover()`.
- Add assertions with `expect()` to verify expected behavior (e.g., state changes, callbacks).
- Test accessibility features where applicable (keyboard navigation, ARIA attributes).

5. Add inline comments explaining key parts of the code and test scenarios.
6. Ensure the story is self-contained and runnable without external dependencies beyond registry, Storybook, and testing libraries.

### Example Input:

@[src/components/ui/button.tsx]

### Example Output:

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
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
    onClick: { action: "clicked" },
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

// Interactive story with play function for testing user interactions
export const Interactive: Story = {
  args: {
    children: "Interactive Button",
    variant: "default",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Find the button by its accessible role
    const button = canvas.getByRole("button", { name: /interactive button/i });

    // Test that button is visible and enabled
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();

    // Simulate user click interaction
    await userEvent.click(button);

    // Verify onClick callback was called (if using action)
    expect(args.onClick).toHaveBeenCalled();
  },
};

// Test disabled state interactions
export const DisabledInteraction: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    // Test that disabled button cannot be clicked
    expect(button).toBeDisabled();

    // Attempt to click should not trigger any action
    await userEvent.click(button);
    // Button should remain disabled after click attempt
    expect(button).toBeDisabled();
  },
};

// Test keyboard interactions
export const KeyboardInteraction: Story = {
  args: {
    children: "Keyboard Button",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    // Test focus behavior
    await userEvent.tab(); // Focus on button
    expect(button).toHaveFocus();

    // Test Enter key activation
    await userEvent.keyboard("{Enter}");
    expect(args.onClick).toHaveBeenCalled();

    // Test Space key activation
    await userEvent.keyboard(" ");
    expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};
```

Your task:

Generate the Storybook story for the shadcn/ui component described in the following (or aforementioned) prompt. Ask me which component specifically, if it is unclear.

First, read its TypeScript props definition. Then, create the argTypes, stories, and Play functions automatically based on that definition. Include comprehensive interaction testing that covers:

Basic user interactions (click, hover, focus)
Edge cases (disabled states, error states)
Keyboard accessibility
State changes and callbacks
Component-specific behaviors
