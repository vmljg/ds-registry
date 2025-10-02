import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

const meta = {
  title: "Components/UI/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An opinionated toast component for React. Built with Sonner library for beautiful notifications.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default toast
export const Default: Story = {
  render: () => (
    <div>
      <Button onClick={() => toast("Event has been created")}>Show Toast</Button>
      <Toaster />
    </div>
  ),
};

// Success toast
export const Success: Story = {
  render: () => (
    <div>
      <Button onClick={() => toast.success("Successfully saved!")}>Show Success</Button>
      <Toaster />
    </div>
  ),
};

// Error toast
export const Error: Story = {
  render: () => (
    <div>
      <Button onClick={() => toast.error("Something went wrong!")}>Show Error</Button>
      <Toaster />
    </div>
  ),
};

// Warning toast
export const Warning: Story = {
  render: () => (
    <div>
      <Button onClick={() => toast.warning("Please check your input")}>Show Warning</Button>
      <Toaster />
    </div>
  ),
};

// Info toast
export const Info: Story = {
  render: () => (
    <div>
      <Button onClick={() => toast.info("New update available")}>Show Info</Button>
      <Toaster />
    </div>
  ),
};

// With description
export const WithDescription: Story = {
  render: () => (
    <div>
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  ),
};

// With action
export const WithAction: Story = {
  render: () => (
    <div>
      <Button
        onClick={() =>
          toast("Event has been created", {
            action: {
              label: "Undo",
              onClick: () => toast("Undo clicked"),
            },
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  ),
};

// Promise toast
export const Promise: Story = {
  render: () => (
    <div>
      <Button
        onClick={() => {
          const promise = () =>
            new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));

          toast.promise(promise, {
            loading: "Loading...",
            success: (data: any) => {
              return `${data.name} toast has been added`;
            },
            error: "Error",
          });
        }}
      >
        Show Promise
      </Button>
      <Toaster />
    </div>
  ),
};

// Loading toast
export const Loading: Story = {
  render: () => (
    <div>
      <Button onClick={() => toast.loading("Loading...")}>Show Loading</Button>
      <Toaster />
    </div>
  ),
};

// Custom duration
export const CustomDuration: Story = {
  render: () => (
    <div>
      <Button onClick={() => toast("This will stay for 10 seconds", { duration: 10000 })}>
        Show Toast (10s)
      </Button>
      <Toaster />
    </div>
  ),
};

// Multiple toasts
export const MultipleToasts: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button onClick={() => toast("First toast")}>Toast 1</Button>
      <Button onClick={() => toast.success("Second toast")}>Toast 2</Button>
      <Button onClick={() => toast.error("Third toast")}>Toast 3</Button>
      <Toaster />
    </div>
  ),
};

// Rich content
export const RichContent: Story = {
  render: () => (
    <div>
      <Button
        onClick={() =>
          toast("Event Created", {
            description: "Your event has been successfully created and saved.",
            action: {
              label: "View",
              onClick: () => console.log("View clicked"),
            },
          })
        }
      >
        Show Rich Toast
      </Button>
      <Toaster />
    </div>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Toast Types</h3>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => toast("Default toast")}>Default</Button>
          <Button onClick={() => toast.success("Success!")}>Success</Button>
          <Button onClick={() => toast.error("Error!")}>Error</Button>
          <Button onClick={() => toast.warning("Warning!")}>Warning</Button>
          <Button onClick={() => toast.info("Info!")}>Info</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Description</h3>
        <Button
          onClick={() =>
            toast("Event created", {
              description: "Your event has been saved",
            })
          }
        >
          Show Description
        </Button>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Action</h3>
        <Button
          onClick={() =>
            toast("File deleted", {
              action: {
                label: "Undo",
                onClick: () => toast("Undone"),
              },
            })
          }
        >
          Show Action
        </Button>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Loading</h3>
        <Button onClick={() => toast.loading("Loading...")}>Show Loading</Button>
      </div>

      <Toaster />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
