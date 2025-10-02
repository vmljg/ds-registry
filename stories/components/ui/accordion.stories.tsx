import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const meta = {
  title: "Components/UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A vertically stacked set of interactive headings that each reveal a section of content. Built with Radix UI Accordion primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["single", "multiple"],
      description: "Determines whether one or multiple items can be opened at the same time",
    },
    collapsible: {
      control: { type: "boolean" },
      description:
        "When type is 'single', allows closing content when clicking trigger for an open item",
    },
    disabled: {
      control: { type: "boolean" },
      description: "When true, prevents the user from interacting with the accordion",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default single accordion
export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and includes full keyboard navigation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that can be customized with Tailwind CSS.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It uses CSS animations for smooth expand and collapse transitions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify accordion items are rendered
    const trigger1 = canvas.getByText(/is it accessible/i);
    await expect(trigger1).toBeInTheDocument();

    // Test opening an accordion item
    await userEvent.click(trigger1);

    // Verify content is visible after click
    const content1 = canvas.getByText(/yes. it adheres to the wai-aria/i);
    await expect(content1).toBeVisible();
  },
};

// Multiple items can be open
export const Multiple: Story = {
  args: {
    type: "multiple",
  },
  render: (args) => (
    <Accordion {...args} className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>Content for section 3</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Single with default open
export const DefaultOpen: Story = {
  args: {
    type: "single",
    defaultValue: "item-2",
  },
  render: (args) => (
    <Accordion {...args} className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>First item content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Item (Default Open)</AccordionTrigger>
        <AccordionContent>This item is open by default</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Item</AccordionTrigger>
        <AccordionContent>Third item content</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Disabled state
export const Disabled: Story = {
  args: {
    type: "single",
    disabled: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Disabled Accordion</AccordionTrigger>
        <AccordionContent>This content cannot be accessed</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Another Disabled Item</AccordionTrigger>
        <AccordionContent>This is also disabled</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Single (Collapsible)</h3>
        <Accordion type="single" collapsible className="w-[450px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Multiple</h3>
        <Accordion type="multiple" className="w-[450px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled</h3>
        <Accordion type="single" disabled className="w-[450px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Disabled Item</AccordionTrigger>
            <AccordionContent>Cannot be opened</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
