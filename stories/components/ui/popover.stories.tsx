import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const meta = {
  title: "Components/UI/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays rich content in a portal, triggered by a button. Built with Radix UI Popover primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "The controlled open state of the popover",
    },
    defaultOpen: {
      control: { type: "boolean" },
      description: "The open state of the popover when it is initially rendered",
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default popover
export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// Simple text popover
export const SimpleText: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Click me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Popover Title</h4>
          <p className="text-muted-foreground text-sm">
            This is a simple popover with text content.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// With form
export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Settings</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Settings</h4>
            <p className="text-muted-foreground text-sm">Configure your preferences.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="john@example.com" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// Custom width
export const CustomWidth: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Wide popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Wide Content</h4>
          <p className="text-muted-foreground text-sm">
            This popover has a custom width to accommodate more content. You can adjust the width
            using Tailwind CSS classes.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// Different alignments
export const Alignments: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Start</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <p className="text-sm">Aligned to start</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Center</Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <p className="text-sm">Aligned to center</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">End</Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <p className="text-sm">Aligned to end</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

// With actions
export const WithActions: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Confirmation</h4>
            <p className="text-muted-foreground text-sm">Are you sure you want to proceed?</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
              Confirm
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// Inline trigger
export const InlineTrigger: Story = {
  render: () => (
    <div className="text-sm">
      Click{" "}
      <Popover>
        <PopoverTrigger className="underline cursor-pointer">here</PopoverTrigger>
        <PopoverContent>
          <p className="text-sm">Additional information appears in this popover.</p>
        </PopoverContent>
      </Popover>{" "}
      to see more details.
    </div>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Title</h4>
              <p className="text-muted-foreground text-sm">Content goes here</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Form</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Form</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="grid gap-2">
              <Label htmlFor="input1">Input</Label>
              <Input id="input1" className="h-8" />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Actions</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Actions</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="grid gap-4">
              <p className="text-sm">Confirm action?</p>
              <div className="flex gap-2">
                <Button size="sm">Yes</Button>
                <Button size="sm" variant="outline">
                  No
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
