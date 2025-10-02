import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A control that allows the user to toggle between checked and not checked. Built with Radix UI Checkbox primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "The controlled checked state of the checkbox",
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "The checked state of the checkbox when it is initially rendered",
    },
    disabled: {
      control: { type: "boolean" },
      description: "When true, prevents the user from interacting with the checkbox",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default checkbox
export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");

    // Verify checkbox is rendered and unchecked
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).not.toBeChecked();

    // Click to check
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();

    // Click to uncheck
    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();
  },
};

// Checked state
export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Checked by default</Label>
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled" className="text-muted-foreground">
        Disabled checkbox
      </Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");

    // Verify checkbox is disabled
    await expect(checkbox).toBeDisabled();
  },
};

// Disabled and checked
export const DisabledChecked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled-checked" disabled defaultChecked />
      <Label htmlFor="disabled-checked" className="text-muted-foreground">
        Disabled and checked
      </Label>
    </div>
  ),
};

// With description
export const WithDescription: Story = {
  render: () => (
    <div className="flex items-start space-x-2">
      <Checkbox id="marketing" className="mt-1" />
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

// Multiple checkboxes
export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" defaultChecked />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </div>
  ),
};

// Form example
export const FormExample: Story = {
  render: () => (
    <form className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="notifications" defaultChecked />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter">Subscribe to newsletter</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="updates" />
          <Label htmlFor="updates">Receive product updates</Label>
        </div>
      </div>
    </form>
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
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">Unchecked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checked-variant" defaultChecked />
            <Label htmlFor="checked-variant">Checked</Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-unchecked" disabled />
            <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
              Disabled
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked-variant" disabled defaultChecked />
            <Label htmlFor="disabled-checked-variant" className="text-muted-foreground">
              Disabled Checked
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Description</h3>
        <div className="flex items-start space-x-2">
          <Checkbox id="with-desc" className="mt-1" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="with-desc">Accept terms</Label>
            <p className="text-muted-foreground text-sm">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Multiple Options</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="multi1" defaultChecked />
            <Label htmlFor="multi1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="multi2" />
            <Label htmlFor="multi2">Option 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="multi3" />
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
