import type { Meta, StoryObj } from "@storybook/react";
import { Terminal, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const meta = {
  title: "Components/UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a callout for user attention. Useful for important messages, warnings, or informational content.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive"],
      description: "The visual style variant of the alert",
    },
  },
  args: {
    variant: "default",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default alert
export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Alert {...args} className="w-[450px]">
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
};

// Destructive variant
export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render: (args) => (
    <Alert {...args} className="w-[450px]">
      <AlertCircle />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  ),
};

// Without icon
export const WithoutIcon: Story = {
  render: () => (
    <Alert className="w-[450px]">
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>This is an alert without an icon.</AlertDescription>
    </Alert>
  ),
};

// Title only
export const TitleOnly: Story = {
  render: () => (
    <Alert className="w-[450px]">
      <Terminal />
      <AlertTitle>System Update Available</AlertTitle>
    </Alert>
  ),
};

// Description only
export const DescriptionOnly: Story = {
  render: () => (
    <Alert className="w-[450px]">
      <AlertCircle />
      <AlertDescription>
        Your account will be automatically logged out after 5 minutes of inactivity.
      </AlertDescription>
    </Alert>
  ),
};

// With long content
export const LongContent: Story = {
  render: () => (
    <Alert className="w-[450px]">
      <AlertCircle />
      <AlertTitle>Important Information</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </AlertDescription>
    </Alert>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default Variant</h3>
        <Alert className="w-[450px]">
          <Terminal />
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>This is a default alert with an icon.</AlertDescription>
        </Alert>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Destructive Variant</h3>
        <Alert variant="destructive" className="w-[450px]">
          <AlertCircle />
          <AlertTitle>Destructive Alert</AlertTitle>
          <AlertDescription>This is a destructive alert indicating an error.</AlertDescription>
        </Alert>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Without Icon</h3>
        <Alert className="w-[450px]">
          <AlertTitle>No Icon Alert</AlertTitle>
          <AlertDescription>This alert does not have an icon.</AlertDescription>
        </Alert>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Title Only</h3>
        <Alert className="w-[450px]">
          <Terminal />
          <AlertTitle>Title Only Alert</AlertTitle>
        </Alert>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Description Only</h3>
        <Alert className="w-[450px]">
          <AlertCircle />
          <AlertDescription>This alert only has a description.</AlertDescription>
        </Alert>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Long Content</h3>
        <Alert className="w-[450px]">
          <AlertCircle />
          <AlertTitle>Long Content Alert</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
