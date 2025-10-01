import type { Meta, StoryObj } from "@storybook/react";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const meta = {
  title: "Components/UI/Command",
  component: Command,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Fast, composable, unstyled command menu for React. Built with cmdk library for keyboard navigation and filtering.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default command menu
export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 size-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 size-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 size-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 size-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 size-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 size-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// With shortcuts
export const WithShortcuts: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <span>New File</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Open File</span>
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Save</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Save As</span>
            <CommandShortcut>⇧⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// Simple menu
export const SimpleMenu: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem>Apple</CommandItem>
          <CommandItem>Banana</CommandItem>
          <CommandItem>Cherry</CommandItem>
          <CommandItem>Date</CommandItem>
          <CommandItem>Elderberry</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// Multiple groups
export const MultipleGroups: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type to search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Files">
          <CommandItem>Document.pdf</CommandItem>
          <CommandItem>Image.png</CommandItem>
          <CommandItem>Video.mp4</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Folders">
          <CommandItem>Downloads</CommandItem>
          <CommandItem>Documents</CommandItem>
          <CommandItem>Pictures</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>Create New</CommandItem>
          <CommandItem>Upload</CommandItem>
          <CommandItem>Delete</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Tools">
          <CommandItem>
            <Calculator className="mr-2 size-4" />
            <span>Calculator</span>
          </CommandItem>
          <CommandItem>
            <Calendar className="mr-2 size-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 size-4" />
            <span>Payments</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 size-4" />
            <span>Settings</span>
          </CommandItem>
          <CommandItem>
            <User className="mr-2 size-4" />
            <span>Profile</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Item 1</CommandItem>
              <CommandItem>Item 2</CommandItem>
              <CommandItem>Item 3</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Shortcuts</h3>
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandGroup>
              <CommandItem>
                <span>Action 1</span>
                <CommandShortcut>⌘1</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Action 2</span>
                <CommandShortcut>⌘2</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Icons</h3>
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandGroup>
              <CommandItem>
                <Calendar className="mr-2 size-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 size-4" />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
