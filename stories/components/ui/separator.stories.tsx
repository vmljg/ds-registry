import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "Components/UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Visually or semantically separates content. Built with Radix UI Separator primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the separator",
    },
    decorative: {
      control: { type: "boolean" },
      description: "Whether or not the component is purely decorative",
    },
  },
  args: {
    orientation: "horizontal",
    decorative: true,
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default horizontal separator
export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div>
        <h4 className="text-sm font-medium">Section 1</h4>
        <p className="text-sm text-muted-foreground">Content for the first section.</p>
      </div>
      <Separator />
      <div>
        <h4 className="text-sm font-medium">Section 2</h4>
        <p className="text-sm text-muted-foreground">Content for the second section.</p>
      </div>
    </div>
  ),
};

// Vertical separator
export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div className="text-sm">Item 1</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Item 2</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Item 3</div>
    </div>
  ),
};

// In a list
export const InList: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

// Navigation example
export const Navigation: Story = {
  render: () => (
    <div className="flex items-center space-x-4 text-sm">
      <a href="#" className="hover:underline">
        Home
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="hover:underline">
        About
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="hover:underline">
        Contact
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="hover:underline">
        Blog
      </a>
    </div>
  ),
};

// Content sections
export const ContentSections: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Introduction</h3>
        <p className="text-sm text-muted-foreground mt-2">
          This is the introduction section with some content.
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-semibold">Features</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Here are the main features of the product.
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p className="text-sm text-muted-foreground mt-2">Final thoughts and summary.</p>
      </div>
    </div>
  ),
};

// Toolbar example
export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <button className="px-3 py-1 text-sm hover:bg-accent rounded">Bold</button>
      <button className="px-3 py-1 text-sm hover:bg-accent rounded">Italic</button>
      <button className="px-3 py-1 text-sm hover:bg-accent rounded">Underline</button>
      <Separator orientation="vertical" className="h-6" />
      <button className="px-3 py-1 text-sm hover:bg-accent rounded">Left</button>
      <button className="px-3 py-1 text-sm hover:bg-accent rounded">Center</button>
      <button className="px-3 py-1 text-sm hover:bg-accent rounded">Right</button>
    </div>
  ),
};

// Card sections
export const CardSections: Story = {
  render: () => (
    <div className="w-full max-w-sm rounded-lg border p-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Account Settings</h4>
        <p className="text-sm text-muted-foreground">Manage your account preferences.</p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Email notifications</span>
          <span className="text-muted-foreground">Enabled</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span>Two-factor auth</span>
          <span className="text-muted-foreground">Disabled</span>
        </div>
      </div>
    </div>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Horizontal</h3>
        <div className="w-full max-w-md space-y-4">
          <div className="text-sm">Content above</div>
          <Separator />
          <div className="text-sm">Content below</div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Vertical</h3>
        <div className="flex h-12 items-center space-x-4">
          <div className="text-sm">Left</div>
          <Separator orientation="vertical" />
          <div className="text-sm">Middle</div>
          <Separator orientation="vertical" />
          <div className="text-sm">Right</div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">In Navigation</h3>
        <div className="flex items-center space-x-4 text-sm">
          <span>Link 1</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Link 2</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Link 3</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Content Sections</h3>
        <div className="w-full max-w-md space-y-4">
          <div>
            <h4 className="text-sm font-medium">Section 1</h4>
            <p className="text-sm text-muted-foreground">Content here</p>
          </div>
          <Separator />
          <div>
            <h4 className="text-sm font-medium">Section 2</h4>
            <p className="text-sm text-muted-foreground">More content</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
