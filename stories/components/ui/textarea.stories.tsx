import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const meta = {
  title: "Components/UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Displays a form textarea or a component that looks like a textarea.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the textarea is disabled",
    },
    rows: {
      control: { type: "number" },
      description: "Number of visible text lines",
    },
  },
  args: {
    placeholder: "Type your message here.",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default textarea
export const Default: Story = {
  args: {
    placeholder: "Type your message here.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText(/type your message/i);

    // Verify textarea is rendered
    await expect(textarea).toBeInTheDocument();

    // Test typing
    await userEvent.type(textarea, "Hello World");
    await expect(textarea).toHaveValue("Hello World");
  },
};

// With label
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
};

// With text
export const WithText: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="message-2">Your message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-muted-foreground text-sm">Your message will be copied to the support team.</p>
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled textarea",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText(/disabled textarea/i);

    // Verify textarea is disabled
    await expect(textarea).toBeDisabled();
  },
};

// With button
export const WithButton: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  ),
};

// Form example
export const FormExample: Story = {
  render: () => (
    <form className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Textarea id="name" placeholder="Enter your name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="feedback">Feedback</Label>
        <Textarea id="feedback" placeholder="Tell us what you think" />
        <p className="text-muted-foreground text-sm">We appreciate your feedback.</p>
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  ),
};

// With default value
export const WithDefaultValue: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea
        id="bio"
        defaultValue="I'm a software developer passionate about creating great user experiences."
      />
    </div>
  ),
};

// Character counter
export const CharacterCounter: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    const maxLength = 280;

    return (
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="tweet">Tweet</Label>
        <Textarea
          id="tweet"
          placeholder="What's happening?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
        />
        <p className="text-muted-foreground text-sm text-right">
          {value.length}/{maxLength}
        </p>
      </div>
    );
  },
};

// Error state
export const ErrorState: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="message-error">Message</Label>
      <Textarea id="message-error" placeholder="Type your message" aria-invalid="true" />
      <p className="text-destructive text-sm">This field is required.</p>
    </div>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <Textarea placeholder="Type here..." className="w-[300px]" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Label</h3>
        <div className="grid w-[300px] items-center gap-1.5">
          <Label htmlFor="textarea-label">Label</Label>
          <Textarea id="textarea-label" placeholder="Type here..." />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Description</h3>
        <div className="grid w-[300px] items-center gap-1.5">
          <Label htmlFor="textarea-desc">Message</Label>
          <Textarea id="textarea-desc" placeholder="Type here..." />
          <p className="text-muted-foreground text-sm">Helper text goes here</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled</h3>
        <Textarea placeholder="Disabled" disabled className="w-[300px]" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Error State</h3>
        <div className="grid w-[300px] items-center gap-1.5">
          <Label htmlFor="textarea-error">Message</Label>
          <Textarea id="textarea-error" placeholder="Type here..." aria-invalid="true" />
          <p className="text-destructive text-sm">Error message</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Button</h3>
        <div className="grid w-[300px] gap-2">
          <Textarea placeholder="Type here..." />
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
