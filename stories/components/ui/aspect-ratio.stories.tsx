import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const meta = {
  title: "Components/UI/Aspect Ratio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays content within a desired ratio. Built with Radix UI Aspect Ratio primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ratio: {
      control: { type: "number" },
      description: "The desired ratio (e.g., 16/9, 4/3, 1/1)",
    },
  },
  args: {
    ratio: 16 / 9,
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default 16:9 ratio
export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="size-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

// Square 1:1 ratio
export const Square: Story = {
  args: {
    ratio: 1 / 1,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&dpr=2&q=80"
          alt="Photo by Minh Pham"
          className="size-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

// Portrait 3:4 ratio
export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&dpr=2&q=80"
          alt="Photo by Ivana Cajina"
          className="size-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

// Ultrawide 21:9 ratio
export const Ultrawide: Story = {
  args: {
    ratio: 21 / 9,
  },
  render: (args) => (
    <div className="w-[600px]">
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&dpr=2&q=80"
          alt="Photo by David Marcu"
          className="size-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

// Classic 4:3 ratio
export const Classic: Story = {
  args: {
    ratio: 4 / 3,
  },
  render: (args) => (
    <div className="w-[400px]">
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&dpr=2&q=80"
          alt="Photo by Luca Bravo"
          className="size-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

// With custom content
export const WithCustomContent: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <div className="flex size-full items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-600">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold">16:9 Aspect Ratio</h3>
            <p className="text-sm opacity-90">Custom content inside aspect ratio container</p>
          </div>
        </div>
      </AspectRatio>
    </div>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">16:9 (Widescreen)</h3>
        <div className="w-[400px]">
          <AspectRatio ratio={16 / 9}>
            <div className="bg-muted flex size-full items-center justify-center rounded-md">
              <span className="text-muted-foreground text-sm">16:9</span>
            </div>
          </AspectRatio>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">1:1 (Square)</h3>
        <div className="w-[300px]">
          <AspectRatio ratio={1 / 1}>
            <div className="bg-muted flex size-full items-center justify-center rounded-md">
              <span className="text-muted-foreground text-sm">1:1</span>
            </div>
          </AspectRatio>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">4:3 (Classic)</h3>
        <div className="w-[400px]">
          <AspectRatio ratio={4 / 3}>
            <div className="bg-muted flex size-full items-center justify-center rounded-md">
              <span className="text-muted-foreground text-sm">4:3</span>
            </div>
          </AspectRatio>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">3:4 (Portrait)</h3>
        <div className="w-[300px]">
          <AspectRatio ratio={3 / 4}>
            <div className="bg-muted flex size-full items-center justify-center rounded-md">
              <span className="text-muted-foreground text-sm">3:4</span>
            </div>
          </AspectRatio>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">21:9 (Ultrawide)</h3>
        <div className="w-[500px]">
          <AspectRatio ratio={21 / 9}>
            <div className="bg-muted flex size-full items-center justify-center rounded-md">
              <span className="text-muted-foreground text-sm">21:9</span>
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
