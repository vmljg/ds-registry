import type { Meta, StoryObj } from "@storybook/react";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const meta = {
  title: "Components/UI/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A two-state button that can be either on or off. Built with Radix UI Toggle primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outline"],
      description: "The visual style variant of the toggle",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
      description: "The size of the toggle",
    },
    disabled: {
      control: { type: "boolean" },
      description: "When true, prevents the user from interacting with the toggle",
    },
  },
  args: {
    variant: "default",
    size: "default",
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default toggle
export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Bold className="size-4" />
    </Toggle>
  ),
};

// With text
export const WithText: Story = {
  render: () => <Toggle aria-label="Toggle italic">Italic</Toggle>,
};

// Outline variant
export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic className="size-4" />
    </Toggle>
  ),
};

// Small size
export const Small: Story = {
  render: () => (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic className="size-4" />
    </Toggle>
  ),
};

// Large size
export const Large: Story = {
  render: () => (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic className="size-4" />
    </Toggle>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <Toggle disabled aria-label="Toggle italic">
      <Italic className="size-4" />
    </Toggle>
  ),
};

// With text and icon
export const WithTextAndIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Italic className="mr-2 size-4" />
      Italic
    </Toggle>
  ),
};

// Multiple toggles
export const MultipleToggles: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toggle aria-label="Toggle bold">
        <Bold className="size-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="size-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="size-4" />
      </Toggle>
    </div>
  ),
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <div className="flex gap-2">
          <Toggle aria-label="Toggle bold">
            <Bold className="size-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="size-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="size-4" />
          </Toggle>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Outline</h3>
        <div className="flex gap-2">
          <Toggle variant="outline" aria-label="Toggle bold">
            <Bold className="size-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="size-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle underline">
            <Underline className="size-4" />
          </Toggle>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Sizes</h3>
        <div className="flex items-center gap-2">
          <Toggle size="sm" aria-label="Toggle small">
            <Bold className="size-4" />
          </Toggle>
          <Toggle size="default" aria-label="Toggle default">
            <Bold className="size-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle large">
            <Bold className="size-4" />
          </Toggle>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Text</h3>
        <div className="flex gap-2">
          <Toggle aria-label="Toggle bold">
            <Bold className="mr-2 size-4" />
            Bold
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="mr-2 size-4" />
            Italic
          </Toggle>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled</h3>
        <Toggle disabled aria-label="Toggle disabled">
          <Bold className="size-4" />
        </Toggle>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
