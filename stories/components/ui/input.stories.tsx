import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A text input component with support for various types and states. Includes validation styling and accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search", "date", "file"],
      description: "The type of input",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the input is disabled",
    },
  },
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default input
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/enter text/i);

    // Verify input is rendered
    await expect(input).toBeInTheDocument();

    // Test typing
    await userEvent.type(input, "Hello World");
    await expect(input).toHaveValue("Hello World");
  },
};

// With label
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

// With description
export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-2">Email</Label>
      <Input type="email" id="email-2" placeholder="Email" />
      <p className="text-muted-foreground text-sm">Enter your email address.</p>
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/disabled input/i);

    // Verify input is disabled
    await expect(input).toBeDisabled();
  },
};

// Password input
export const Password: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" placeholder="Enter password" />
    </div>
  ),
};

// Number input
export const Number: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="number">Age</Label>
      <Input type="number" id="number" placeholder="Enter age" />
    </div>
  ),
};

// Search input
export const Search: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="search">Search</Label>
      <Input type="search" id="search" placeholder="Search..." />
    </div>
  ),
};

// File input
export const File: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  ),
};

// With button
export const WithButton: Story = {
  render: () => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};

// Error state
export const ErrorState: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-error">Email</Label>
      <Input type="email" id="email-error" placeholder="Email" aria-invalid="true" />
      <p className="text-destructive text-sm">Please enter a valid email address.</p>
    </div>
  ),
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="space-y-2">
        <Label>Small</Label>
        <Input placeholder="Small input" className="h-8 text-xs" />
      </div>
      <div className="space-y-2">
        <Label>Default</Label>
        <Input placeholder="Default input" />
      </div>
      <div className="space-y-2">
        <Label>Large</Label>
        <Input placeholder="Large input" className="h-11" />
      </div>
    </div>
  ),
};

// Form example
export const FormExample: Story = {
  render: () => (
    <form className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-form">Email</Label>
        <Input id="email-form" type="email" placeholder="john@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Input id="message" placeholder="Your message" />
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <Input placeholder="Default input" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Label</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="input-label">Label</Label>
          <Input id="input-label" placeholder="Input with label" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled</h3>
        <Input placeholder="Disabled" disabled />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Error State</h3>
        <Input placeholder="Error state" aria-invalid="true" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Types</h3>
        <div className="grid gap-2">
          <Input type="text" placeholder="Text" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Number" />
          <Input type="search" placeholder="Search" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Button</h3>
        <div className="flex items-center space-x-2">
          <Input placeholder="Email" />
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
