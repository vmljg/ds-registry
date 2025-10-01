import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";
import { Check, X, AlertCircle } from "lucide-react";

const meta = {
  title: "Components/UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a badge or a component that looks like a badge. Useful for labels, tags, and status indicators.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "destructive", "outline"],
      description: "The visual style variant of the badge",
    },
    asChild: {
      control: { type: "boolean" },
      description: "Change the default rendered element for the one passed as a child",
    },
  },
  args: {
    variant: "default",
    children: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default badge
export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

// Destructive variant
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

// Outline variant
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

// Badge with icon
export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge>
        <Check className="size-3" />
        Success
      </Badge>
      <Badge variant="destructive">
        <X className="size-3" />
        Error
      </Badge>
      <Badge variant="secondary">
        <AlertCircle className="size-3" />
        Warning
      </Badge>
    </div>
  ),
};

// Badge as link
export const AsLink: Story = {
  render: () => (
    <Badge asChild>
      <a href="#" className="cursor-pointer">
        Clickable Badge
      </a>
    </Badge>
  ),
};

// Status badges
export const StatusBadges: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="destructive">Inactive</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  ),
};

// Badge sizes (using custom classes)
export const CustomSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge className="text-[10px] px-1.5 py-0">Small</Badge>
      <Badge>Default</Badge>
      <Badge className="text-sm px-3 py-1">Large</Badge>
    </div>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>
            <Check className="size-3" />
            Success
          </Badge>
          <Badge variant="destructive">
            <X className="size-3" />
            Error
          </Badge>
          <Badge variant="secondary">
            <AlertCircle className="size-3" />
            Warning
          </Badge>
          <Badge variant="outline">
            <Check className="size-3" />
            Verified
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Status Indicators</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Active</Badge>
          <Badge variant="secondary">Pending</Badge>
          <Badge variant="destructive">Inactive</Badge>
          <Badge variant="outline">Draft</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Custom Sizes</h3>
        <div className="flex items-center gap-2">
          <Badge className="text-[10px] px-1.5 py-0">XS</Badge>
          <Badge className="text-xs">SM</Badge>
          <Badge>MD</Badge>
          <Badge className="text-sm px-3 py-1">LG</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">As Links</h3>
        <div className="flex flex-wrap gap-2">
          <Badge asChild>
            <a href="#" className="cursor-pointer">
              Link Badge
            </a>
          </Badge>
          <Badge variant="secondary" asChild>
            <a href="#" className="cursor-pointer">
              Secondary Link
            </a>
          </Badge>
          <Badge variant="outline" asChild>
            <a href="#" className="cursor-pointer">
              Outline Link
            </a>
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
