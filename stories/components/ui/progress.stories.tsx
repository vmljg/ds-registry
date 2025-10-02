import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const meta = {
  title: "Components/UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays an indicator showing the completion progress of a task. Built with Radix UI Progress primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 100 },
      description: "The progress value (0-100)",
    },
  },
  args: {
    value: 50,
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default progress
export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Progress {...args} />
    </div>
  ),
};

// Zero percent
export const ZeroPercent: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={0} />
    </div>
  ),
};

// Twenty-five percent
export const TwentyFivePercent: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={25} />
    </div>
  ),
};

// Fifty percent
export const FiftyPercent: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={50} />
    </div>
  ),
};

// Seventy-five percent
export const SeventyFivePercent: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={75} />
    </div>
  ),
};

// Complete
export const Complete: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={100} />
    </div>
  ),
};

// Animated progress
export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="w-[400px]">
        <Progress value={progress} />
      </div>
    );
  },
};

// Loading simulation
export const LoadingSimulation: Story = {
  render: () => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 10;
        });
      }, 500);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="w-[400px] space-y-2">
        <Progress value={progress} />
        <p className="text-muted-foreground text-center text-sm">{progress}%</p>
      </div>
    );
  },
};

// With label
export const WithLabel: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>Uploading...</span>
        <span className="text-muted-foreground">60%</span>
      </div>
      <Progress value={60} />
    </div>
  ),
};

// Different sizes
export const DifferentSizes: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Small</p>
        <Progress value={50} className="h-1" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Default</p>
        <Progress value={50} />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Large</p>
        <Progress value={50} className="h-4" />
      </div>
    </div>
  ),
};

// Multiple progress bars
export const MultipleProgressBars: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Task 1</span>
          <span className="text-muted-foreground">100%</span>
        </div>
        <Progress value={100} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Task 2</span>
          <span className="text-muted-foreground">75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Task 3</span>
          <span className="text-muted-foreground">45%</span>
        </div>
        <Progress value={45} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Task 4</span>
          <span className="text-muted-foreground">20%</span>
        </div>
        <Progress value={20} />
      </div>
    </div>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Progress Values</h3>
        <div className="w-[400px] space-y-4">
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">0%</p>
            <Progress value={0} />
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">25%</p>
            <Progress value={25} />
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">50%</p>
            <Progress value={50} />
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">75%</p>
            <Progress value={75} />
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">100%</p>
            <Progress value={100} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Sizes</h3>
        <div className="w-[400px] space-y-4">
          <Progress value={50} className="h-1" />
          <Progress value={50} />
          <Progress value={50} className="h-4" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Labels</h3>
        <div className="w-[400px] space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Loading</span>
              <span className="text-muted-foreground">60%</span>
            </div>
            <Progress value={60} />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
