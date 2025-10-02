import type { Meta, StoryObj } from "@storybook/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const meta = {
  title: "Components/UI/Toggle Group",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A set of two-state buttons that can be toggled on or off. Built with Radix UI Toggle Group primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["single", "multiple"],
      description: "Determines whether a single or multiple items can be pressed at a time",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "outline"],
      description: "The visual style variant of the toggle group",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
      description: "The size of the toggle group",
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default single toggle group
export const Default: Story = {
  render: () => (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

// Multiple selection
export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

// Outline variant
export const Outline: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Align justify">
        <AlignJustify className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

// Small size
export const Small: Story = {
  render: () => (
    <ToggleGroup type="single" size="sm">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

// Large size
export const Large: Story = {
  render: () => (
    <ToggleGroup type="single" size="lg">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

// Disabled item
export const DisabledItem: Story = {
  render: () => (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic" disabled>
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

// With default value
export const WithDefaultValue: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

// Text alignment
export const TextAlignment: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="left">
        <AlignLeft className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify">
        <AlignJustify className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <ToggleGroup type="single">
          <ToggleGroupItem value="bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Outline</h3>
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="left">
            <AlignLeft className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center">
            <AlignCenter className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right">
            <AlignRight className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Sizes</h3>
        <div className="space-y-2">
          <ToggleGroup type="single" size="sm">
            <ToggleGroupItem value="bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="default">
            <ToggleGroupItem value="bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="lg">
            <ToggleGroupItem value="bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Multiple Selection</h3>
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Disabled Item</h3>
        <ToggleGroup type="single">
          <ToggleGroupItem value="bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" disabled>
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
