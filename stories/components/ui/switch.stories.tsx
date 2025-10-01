import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const meta = {
  title: "Components/UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A control that allows the user to toggle between checked and not checked. Built with Radix UI Switch primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "The controlled checked state of the switch",
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "The checked state of the switch when it is initially rendered",
    },
    disabled: {
      control: { type: "boolean" },
      description: "When true, prevents the user from interacting with the switch",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default switch
export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");

    // Verify switch is rendered and unchecked
    await expect(switchElement).toBeInTheDocument();
    await expect(switchElement).not.toBeChecked();

    // Click to check
    await userEvent.click(switchElement);
    await expect(switchElement).toBeChecked();

    // Click to uncheck
    await userEvent.click(switchElement);
    await expect(switchElement).not.toBeChecked();
  },
};

// Checked state
export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" defaultChecked />
      <Label htmlFor="notifications">Notifications</Label>
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled" disabled />
      <Label htmlFor="disabled" className="text-muted-foreground">
        Disabled
      </Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");

    // Verify switch is disabled
    await expect(switchElement).toBeDisabled();
  },
};

// Disabled and checked
export const DisabledChecked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-checked" disabled defaultChecked />
      <Label htmlFor="disabled-checked" className="text-muted-foreground">
        Disabled & Checked
      </Label>
    </div>
  ),
};

// With description
export const WithDescription: Story = {
  render: () => (
    <div className="flex items-start space-x-2">
      <Switch id="marketing" className="mt-1" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="marketing" className="cursor-pointer">
          Marketing emails
        </Label>
        <p className="text-muted-foreground text-sm">
          Receive emails about new products, features, and more.
        </p>
      </div>
    </div>
  ),
};

// Multiple switches
export const MultipleSwitch: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="option1" defaultChecked />
        <Label htmlFor="option1">Enable notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="option2" />
        <Label htmlFor="option2">Enable sound</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="option3" />
        <Label htmlFor="option3">Enable vibration</Label>
      </div>
    </div>
  ),
};

// Form example
export const FormExample: Story = {
  render: () => (
    <form className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Privacy Settings</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="profile-visible">Profile visible</Label>
            <Switch id="profile-visible" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="show-email">Show email</Label>
            <Switch id="show-email" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="allow-messages">Allow messages</Label>
            <Switch id="allow-messages" defaultChecked />
          </div>
        </div>
      </div>
    </form>
  ),
};

// Settings panel
export const SettingsPanel: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Notifications</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notif">Email notifications</Label>
              <p className="text-muted-foreground text-sm">Receive emails about your activity</p>
            </div>
            <Switch id="email-notif" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-notif">Push notifications</Label>
              <p className="text-muted-foreground text-sm">Receive push notifications</p>
            </div>
            <Switch id="push-notif" />
          </div>
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
        <h3 className="text-sm font-medium">States</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center space-x-2">
            <Switch id="unchecked" />
            <Label htmlFor="unchecked">Unchecked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="checked-variant" defaultChecked />
            <Label htmlFor="checked-variant">Checked</Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center space-x-2">
            <Switch id="disabled-unchecked" disabled />
            <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
              Disabled
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled-checked-variant" disabled defaultChecked />
            <Label htmlFor="disabled-checked-variant" className="text-muted-foreground">
              Disabled Checked
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Description</h3>
        <div className="flex items-start space-x-2">
          <Switch id="with-desc" className="mt-1" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="with-desc">Enable feature</Label>
            <p className="text-muted-foreground text-sm">
              This feature will enhance your experience.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Multiple Options</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Switch id="multi1" defaultChecked />
            <Label htmlFor="multi1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="multi2" />
            <Label htmlFor="multi2">Option 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="multi3" />
            <Label htmlFor="multi3">Option 3</Label>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
