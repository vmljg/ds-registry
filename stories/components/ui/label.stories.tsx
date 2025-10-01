import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const meta = {
  title: "Components/UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Renders an accessible label associated with controls. Built with Radix UI Label primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: {
      control: { type: "text" },
      description: "The id of the element the label is associated with",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default label
export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  ),
};

// With checkbox
export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

// With radio group
export const WithRadioGroup: Story = {
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
};

// Required field
export const RequiredField: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="username">
        Username <span className="text-destructive">*</span>
      </Label>
      <Input id="username" placeholder="Enter username" required />
    </div>
  ),
};

// With description
export const WithDescription: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" placeholder="Enter password" />
      <p className="text-muted-foreground text-sm">Must be at least 8 characters.</p>
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="disabled-input" className="opacity-50">
        Disabled Field
      </Label>
      <Input id="disabled-input" placeholder="Disabled" disabled />
    </div>
  ),
};

// Multiple labels
export const MultipleLabels: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="first-name">First Name</Label>
        <Input id="first-name" placeholder="John" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="last-name">Last Name</Label>
        <Input id="last-name" placeholder="Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-multi">Email</Label>
        <Input type="email" id="email-multi" placeholder="john@example.com" />
      </div>
    </div>
  ),
};

// Form layout
export const FormLayout: Story = {
  render: () => (
    <form className="w-full max-w-sm space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email-form">Email</Label>
        <Input type="email" id="email-form" placeholder="Enter your email" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Input id="message" placeholder="Your message" />
      </div>
    </form>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Input</h3>
        <div className="space-y-2">
          <Label htmlFor="input-1">Label</Label>
          <Input id="input-1" placeholder="Input field" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Checkbox</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="check-1" />
          <Label htmlFor="check-1">Checkbox label</Label>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Radio</h3>
        <RadioGroup defaultValue="r1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="r1" id="r1" />
            <Label htmlFor="r1">Radio One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="r2" id="r2" />
            <Label htmlFor="r2">Radio Two</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Required Field</h3>
        <div className="space-y-2">
          <Label htmlFor="req-1">
            Required <span className="text-destructive">*</span>
          </Label>
          <Input id="req-1" placeholder="Required field" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled</h3>
        <div className="space-y-2">
          <Label htmlFor="dis-1" className="opacity-50">
            Disabled
          </Label>
          <Input id="dis-1" placeholder="Disabled" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
