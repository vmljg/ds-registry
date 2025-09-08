import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Card component story with comprehensive examples
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the card",
    },
    children: {
      control: "text",
      description: "Content to display inside the card",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Default card with basic content
export const Default: Story = {
  args: {
    children: "This is a basic card with minimal content.",
  },
};

// Complete card structure with all components
export const Complete: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a description that provides additional context about the card content.
        </CardDescription>
        <CardAction>
          <button className="rounded bg-primary px-3 py-1 text-primary-foreground text-sm">
            Action
          </button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content area of the card. It can contain any type of content
          including text, images, forms, or other components.
        </p>
      </CardContent>
      <CardFooter>
        <button className="rounded border px-4 py-2 text-sm">Cancel</button>
        <button className="ml-auto rounded bg-primary px-4 py-2 text-primary-foreground text-sm">
          Save
        </button>
      </CardFooter>
    </Card>
  ),
};

// Card with header and content only
export const HeaderAndContent: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
        <CardDescription>A card with just header and content.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>Main content goes here.</p>
          <p className="text-muted-foreground text-sm">
            Additional information or details can be included in the content area.
          </p>
        </div>
      </CardContent>
    </Card>
  ),
};

// Card with action button in header
export const WithHeaderAction: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account settings and preferences.</CardDescription>
        <CardAction>
          <button className="rounded-full p-2 hover:bg-muted">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Email notifications</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span>Push notifications</span>
            <input type="checkbox" />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

// Card with footer actions
export const WithFooter: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Confirm Action</CardTitle>
        <CardDescription>
          Are you sure you want to proceed with this action? This cannot be undone.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This will permanently delete the selected items and cannot be recovered.
        </p>
      </CardContent>
      <CardFooter>
        <button className="rounded border px-4 py-2 text-sm hover:bg-muted">
          Cancel
        </button>
        <button className="ml-auto rounded bg-destructive px-4 py-2 text-destructive-foreground text-sm hover:bg-destructive/90">
          Delete
        </button>
      </CardFooter>
    </Card>
  ),
};

// Minimal card with just content
export const ContentOnly: Story = {
  render: () => (
    <Card className="w-64 p-4">
      <p className="text-center">
        A minimal card with just content and custom padding.
      </p>
    </Card>
  ),
};

// Card with custom styling
export const CustomStyling: Story = {
  render: () => (
    <Card className="w-80 border-2 border-dashed border-primary bg-primary/5">
      <CardHeader>
        <CardTitle className="text-primary">Custom Styled Card</CardTitle>
        <CardDescription>
          This card demonstrates custom styling with different border and background.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          The card components accept className props to customize their appearance.
        </p>
      </CardContent>
    </Card>
  ),
};
