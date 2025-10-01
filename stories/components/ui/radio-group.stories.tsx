import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const meta = {
  title: "Components/UI/Radio Group",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time. Built with Radix UI Radio Group primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "text" },
      description: "The value of the radio item that should be checked when initially rendered",
    },
    disabled: {
      control: { type: "boolean" },
      description: "When true, prevents the user from interacting with radio items",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default radio group
export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify radio buttons are rendered
    const radio1 = canvas.getByRole("radio", { name: /option one/i });
    const radio2 = canvas.getByRole("radio", { name: /option two/i });

    await expect(radio1).toBeInTheDocument();
    await expect(radio2).toBeInTheDocument();

    // Verify first option is checked by default
    await expect(radio1).toBeChecked();
    await expect(radio2).not.toBeChecked();

    // Click second option
    await userEvent.click(radio2);
    await expect(radio2).toBeChecked();
    await expect(radio1).not.toBeChecked();
  },
};

// With descriptions
export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r1">Default</Label>
          <p className="text-muted-foreground text-sm">The default spacing option.</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r2">Comfortable</Label>
          <p className="text-muted-foreground text-sm">More space between elements.</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r3">Compact</Label>
          <p className="text-muted-foreground text-sm">Less space between elements.</p>
        </div>
      </div>
    </RadioGroup>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-1" />
        <Label htmlFor="disabled-1" className="text-muted-foreground">
          Option One (Disabled)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="disabled-2" />
        <Label htmlFor="disabled-2" className="text-muted-foreground">
          Option Two (Disabled)
        </Label>
      </div>
    </RadioGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio1 = canvas.getByRole("radio", { name: /option one/i });

    // Verify radio is disabled
    await expect(radio1).toBeDisabled();
  },
};

// Individual disabled item
export const IndividualDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="ind-1" />
        <Label htmlFor="ind-1">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="ind-2" disabled />
        <Label htmlFor="ind-2" className="text-muted-foreground">
          Option Two (Disabled)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="ind-3" />
        <Label htmlFor="ind-3">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

// Form example
export const FormExample: Story = {
  render: () => (
    <form className="space-y-6">
      <div className="space-y-3">
        <Label className="text-base">Notify me about...</Label>
        <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All new messages</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mentions" id="mentions" />
            <Label htmlFor="mentions">Direct messages and mentions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="none" />
            <Label htmlFor="none">Nothing</Label>
          </div>
        </RadioGroup>
      </div>
    </form>
  ),
};

// Multiple groups
export const MultipleGroups: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-3">
        <Label className="text-base">Size</Label>
        <RadioGroup defaultValue="medium">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small" id="size-small" />
            <Label htmlFor="size-small">Small</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="size-medium" />
            <Label htmlFor="size-medium">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large" id="size-large" />
            <Label htmlFor="size-large">Large</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <Label className="text-base">Color</Label>
        <RadioGroup defaultValue="blue">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="red" id="color-red" />
            <Label htmlFor="color-red">Red</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="blue" id="color-blue" />
            <Label htmlFor="color-blue">Blue</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="green" id="color-green" />
            <Label htmlFor="color-green">Green</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};

// Horizontal layout
export const HorizontalLayout: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" className="flex space-x-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="h1" />
        <Label htmlFor="h1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="h2" />
        <Label htmlFor="h2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="h3" />
        <Label htmlFor="h3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="v1" />
            <Label htmlFor="v1">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="v2" />
            <Label htmlFor="v2">Option Two</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Descriptions</h3>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="v3" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="v3">Comfortable</Label>
              <p className="text-muted-foreground text-sm">More space</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="v4" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="v4">Compact</Label>
              <p className="text-muted-foreground text-sm">Less space</p>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled</h3>
        <RadioGroup defaultValue="option-one" disabled>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="v5" />
            <Label htmlFor="v5">Disabled Option</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Horizontal</h3>
        <RadioGroup defaultValue="option-one" className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="v6" />
            <Label htmlFor="v6">One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="v7" />
            <Label htmlFor="v7">Two</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
