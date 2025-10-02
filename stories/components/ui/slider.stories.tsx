import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const meta = {
  title: "Components/UI/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An input where the user selects a value from within a given range. Built with Radix UI Slider primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "object" },
      description: "The value of the slider when initially rendered",
    },
    min: {
      control: { type: "number" },
      description: "The minimum value",
    },
    max: {
      control: { type: "number" },
      description: "The maximum value",
    },
    step: {
      control: { type: "number" },
      description: "The stepping interval",
    },
    disabled: {
      control: { type: "boolean" },
      description: "When true, prevents the user from interacting with the slider",
    },
  },
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default slider
export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

// With label
export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState([50]);

    return (
      <div className="w-[300px] space-y-4">
        <div className="flex justify-between">
          <Label>Volume</Label>
          <span className="text-muted-foreground text-sm">{value[0]}%</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
    );
  },
};

// Range slider
export const Range: Story = {
  render: () => {
    const [value, setValue] = useState([25, 75]);

    return (
      <div className="w-[300px] space-y-4">
        <div className="flex justify-between">
          <Label>Price Range</Label>
          <span className="text-muted-foreground text-sm">
            ${value[0]} - ${value[1]}
          </span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
    );
  },
};

// With steps
export const WithSteps: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Label>Rating</Label>
      <Slider defaultValue={[3]} max={5} step={1} />
      <div className="text-muted-foreground flex justify-between text-xs">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
};

// Different sizes
export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="w-[200px]">
        <Label className="text-xs">Small</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div className="w-[300px]">
        <Label>Medium</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div className="w-[400px]">
        <Label>Large</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
    </div>
  ),
};

// Vertical orientation
export const Vertical: Story = {
  render: () => (
    <div className="h-[200px]">
      <Slider defaultValue={[50]} max={100} step={1} orientation="vertical" />
    </div>
  ),
};

// Custom range
export const CustomRange: Story = {
  render: () => {
    const [value, setValue] = useState([20]);

    return (
      <div className="w-[300px] space-y-4">
        <div className="flex justify-between">
          <Label>Temperature</Label>
          <span className="text-muted-foreground text-sm">{value[0]}°C</span>
        </div>
        <Slider value={value} onValueChange={setValue} min={-10} max={40} step={1} />
        <div className="text-muted-foreground flex justify-between text-xs">
          <span>-10°C</span>
          <span>40°C</span>
        </div>
      </div>
    );
  },
};

// Multiple sliders
export const MultipleSliders: Story = {
  render: () => {
    const [volume, setVolume] = useState([70]);
    const [brightness, setBrightness] = useState([50]);
    const [contrast, setContrast] = useState([60]);

    return (
      <div className="w-[300px] space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Volume</Label>
            <span className="text-muted-foreground text-sm">{volume[0]}%</span>
          </div>
          <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Brightness</Label>
            <span className="text-muted-foreground text-sm">{brightness[0]}%</span>
          </div>
          <Slider value={brightness} onValueChange={setBrightness} max={100} step={1} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Contrast</Label>
            <span className="text-muted-foreground text-sm">{contrast[0]}%</span>
          </div>
          <Slider value={contrast} onValueChange={setContrast} max={100} step={1} />
        </div>
      </div>
    );
  },
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <div className="w-[300px]">
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Label</h3>
        <div className="w-[300px] space-y-2">
          <div className="flex justify-between">
            <Label>Value</Label>
            <span className="text-muted-foreground text-sm">50%</span>
          </div>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Range</h3>
        <div className="w-[300px] space-y-2">
          <div className="flex justify-between">
            <Label>Range</Label>
            <span className="text-muted-foreground text-sm">25 - 75</span>
          </div>
          <Slider defaultValue={[25, 75]} max={100} step={1} />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled</h3>
        <div className="w-[300px]">
          <Slider defaultValue={[50]} max={100} step={1} disabled />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Vertical</h3>
        <div className="h-[150px]">
          <Slider defaultValue={[50]} max={100} step={1} orientation="vertical" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
