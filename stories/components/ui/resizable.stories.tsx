import type { Meta, StoryObj } from "@storybook/react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const meta = {
  title: "Components/UI/Resizable",
  component: ResizablePanelGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Accessible resizable panel groups and layouts with keyboard support. Built with react-resizable-panels.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The direction of the panel group",
    },
  },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default horizontal layout
export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

// With handle
export const WithHandle: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

// Vertical layout
export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup direction="vertical" className="min-h-[400px] max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

// Three panels
export const ThreePanels: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Three</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

// Nested panels
export const NestedPanels: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[400px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Header</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

// With min/max sizes
export const WithConstraints: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Min: 20% Max: 40%</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Flexible</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

// Complex layout
export const ComplexLayout: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[400px] max-w-2xl rounded-lg border"
    >
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Header</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Main Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Horizontal</h3>
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[150px] max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Left</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Right</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Handle</h3>
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[150px] max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Left</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Right</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Vertical</h3>
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[300px] max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Top</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Bottom</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Three Panels</h3>
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[150px] max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={33}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">1</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={34}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">2</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={33}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">3</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
