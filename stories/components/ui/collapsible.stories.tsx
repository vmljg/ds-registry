import type { Meta, StoryObj } from "@storybook/react";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const meta = {
  title: "Components/UI/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An interactive component which expands/collapses a panel. Built with Radix UI Collapsible primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "The controlled open state of the collapsible",
    },
    defaultOpen: {
      control: { type: "boolean" },
      description: "The open state of the collapsible when it is initially rendered",
    },
    disabled: {
      control: { type: "boolean" },
      description: "When true, prevents the user from interacting with the collapsible",
    },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default collapsible
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="size-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

// Default open
export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Open by default</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm">Visible content</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">Collapsible content 1</div>
        <div className="rounded-md border px-4 py-2 text-sm">Collapsible content 2</div>
        <div className="rounded-md border px-4 py-2 text-sm">Collapsible content 3</div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <Collapsible disabled className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-muted-foreground text-sm font-semibold">Disabled collapsible</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" disabled>
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm">Always visible content</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">Hidden content</div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

// With custom trigger
export const CustomTrigger: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            <span>Click to {isOpen ? "collapse" : "expand"}</span>
            <ChevronsUpDown className="size-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border p-4">
            <p className="text-sm">
              This is the collapsible content. It can contain any elements you want.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

// Nested content
export const NestedContent: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Settings</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="space-y-2 rounded-md border p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Notifications</span>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Privacy</span>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Security</span>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default (Closed)</h3>
        <Collapsible className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Collapsible Section</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="size-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">Visible content</div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 text-sm">Hidden content</div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default Open</h3>
        <Collapsible defaultOpen className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Open Section</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="size-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">Visible content</div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 text-sm">Expanded content</div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled</h3>
        <Collapsible disabled className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-muted-foreground text-sm font-semibold">Disabled</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" disabled>
                <ChevronsUpDown className="size-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">Content</div>
        </Collapsible>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
