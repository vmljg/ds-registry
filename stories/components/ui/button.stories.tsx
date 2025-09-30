import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component built with Radix UI and class-variance-authority for consistent styling and behavior.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "The visual style variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    asChild: {
      control: { type: "boolean" },
      description: "Change the default rendered element for the one passed as a child",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Stories
export const Default: Story = {
  args: {
    variant: "default",
    children: "Default Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /default button/i });
    
    // Verify button is rendered
    await expect(button).toBeInTheDocument();
    
    // Verify button is clickable
    await userEvent.click(button);
    await expect(button).toBeEnabled();
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete Account",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /delete account/i });
    
    // Verify destructive button is rendered
    await expect(button).toBeInTheDocument();
    
    // Test click interaction
    await userEvent.click(button);
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /outline button/i });
    
    // Verify button renders with outline variant
    await expect(button).toBeInTheDocument();
    await userEvent.hover(button);
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

// Size Variants
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: "🔍",
  },
};

// State Stories
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /disabled button/i });
    
    // Verify button is disabled
    await expect(button).toBeInTheDocument();
    await expect(button).toBeDisabled();
  },
};

export const DisabledDestructive: Story = {
  args: {
    variant: "destructive",
    disabled: true,
    children: "Disabled Destructive",
  },
};

// Interactive Stories for Testing
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          className="size-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Item
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <svg
          className="size-4 animate-spin"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Loading...
      </>
    ),
  },
};

// Accessibility Testing Stories
export const WithAriaLabel: Story = {
  args: {
    "aria-label": "Close dialog",
    variant: "ghost",
    size: "icon",
    children: "×",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /close dialog/i });
    
    // Verify aria-label is correctly applied
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAccessibleName("Close dialog");
    
    // Test keyboard interaction
    await userEvent.tab();
    await expect(button).toHaveFocus();
  },
};

export const WithAriaDescribedBy: Story = {
  args: {
    "aria-describedby": "button-description",
    children: "Submit Form",
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div>
        <Story />
        <p id="button-description" className="text-muted-foreground mt-2 text-sm">
          This will submit the form and cannot be undone
        </p>
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /submit form/i });
    const description = canvas.getByText(/this will submit the form/i);
    
    // Verify aria-describedby connection
    await expect(button).toBeInTheDocument();
    await expect(description).toBeInTheDocument();
    await expect(button).toHaveAttribute("aria-describedby", "button-description");
  },
};

// Visual Regression Testing
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default Sizes</h3>
        <div className="flex gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🔍</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">All Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled States</h3>
        <div className="flex flex-wrap gap-2">
          <Button disabled>Default</Button>
          <Button variant="destructive" disabled>
            Destructive
          </Button>
          <Button variant="outline" disabled>
            Outline
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify all size variants are rendered
    const smallButton = canvas.getByRole("button", { name: /small/i });
    const defaultButton = canvas.getByRole("button", { name: /^default$/i });
    const largeButton = canvas.getByRole("button", { name: /large/i });
    
    await expect(smallButton).toBeInTheDocument();
    await expect(defaultButton).toBeInTheDocument();
    await expect(largeButton).toBeInTheDocument();
    
    // Verify all style variants are rendered
    const destructiveButton = canvas.getByRole("button", { name: /destructive/i });
    const outlineButton = canvas.getByRole("button", { name: /outline/i });
    const secondaryButton = canvas.getByRole("button", { name: /secondary/i });
    
    await expect(destructiveButton).toBeInTheDocument();
    await expect(outlineButton).toBeInTheDocument();
    await expect(secondaryButton).toBeInTheDocument();
    
    // Test interaction on enabled button
    await userEvent.click(smallButton);
    await expect(smallButton).toBeEnabled();
  },
};
