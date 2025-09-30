import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

// Card component story with comprehensive examples
const meta: Meta<typeof Card> = {
  title: "Components/UI/Card",
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
          <Button size="sm">Action</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content area of the card. It can contain any type of content including
          text, images, forms, or other components.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button className="ml-auto">Save</Button>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify card structure elements are rendered
    const cardTitle = canvas.getByText("Card Title");
    const cardDescription = canvas.getByText(/provides additional context/i);
    const actionButton = canvas.getByRole("button", { name: /action/i });
    const cancelButton = canvas.getByRole("button", { name: /cancel/i });
    const saveButton = canvas.getByRole("button", { name: /save/i });
    
    await expect(cardTitle).toBeInTheDocument();
    await expect(cardDescription).toBeInTheDocument();
    await expect(actionButton).toBeInTheDocument();
    await expect(cancelButton).toBeInTheDocument();
    await expect(saveButton).toBeInTheDocument();
    
    // Test button interactions
    await userEvent.click(actionButton);
    await userEvent.click(saveButton);
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify header and content are rendered
    const title = canvas.getByText("Simple Card");
    const description = canvas.getByText(/A card with just header/i);
    const content = canvas.getByText(/Main content goes here/i);
    
    await expect(title).toBeInTheDocument();
    await expect(description).toBeInTheDocument();
    await expect(content).toBeInTheDocument();
  },
};

// Card with action button in header
export const WithHeaderAction: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account settings and preferences.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon" aria-label="More options">
            <MoreVertical className="size-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Email notifications</span>
            <input type="checkbox" defaultChecked aria-label="Email notifications" />
          </div>
          <div className="flex items-center justify-between">
            <span>Push notifications</span>
            <input type="checkbox" aria-label="Push notifications" />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify card elements
    const title = canvas.getByText("Settings");
    const moreButton = canvas.getByRole("button", { name: /more options/i });
    const emailCheckbox = canvas.getByLabelText(/email notifications/i);
    const pushCheckbox = canvas.getByLabelText(/push notifications/i);
    
    await expect(title).toBeInTheDocument();
    await expect(moreButton).toBeInTheDocument();
    
    // Test checkbox interactions
    await expect(emailCheckbox).toBeChecked();
    await expect(pushCheckbox).not.toBeChecked();
    
    await userEvent.click(pushCheckbox);
    await expect(pushCheckbox).toBeChecked();
    
    // Test action button hover
    await userEvent.hover(moreButton);
  },
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
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive" className="ml-auto">
          Delete
        </Button>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify card elements
    const title = canvas.getByText("Confirm Action");
    const cancelButton = canvas.getByRole("button", { name: /cancel/i });
    const deleteButton = canvas.getByRole("button", { name: /delete/i });
    
    await expect(title).toBeInTheDocument();
    await expect(cancelButton).toBeInTheDocument();
    await expect(deleteButton).toBeInTheDocument();
    
    // Test button focus and interactions
    await userEvent.tab();
    await expect(cancelButton).toHaveFocus();
    
    await userEvent.tab();
    await expect(deleteButton).toHaveFocus();
    
    // Test click on cancel button
    await userEvent.click(cancelButton);
  },
};

// Minimal card with just content
export const ContentOnly: Story = {
  render: () => (
    <Card className="w-64 p-4">
      <p className="text-center">A minimal card with just content and custom padding.</p>
    </Card>
  ),
};

// Card with custom styling
export const CustomStyling: Story = {
  render: () => (
    <Card className="border-primary bg-primary/5 w-80 border-2 border-dashed">
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
