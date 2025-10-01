import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const meta = {
  title: "Components/UI/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Extends the Dialog component to display content that complements the main content of the screen. Built with Radix UI Dialog primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "The controlled open state of the sheet",
    },
  },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default sheet (right side)
export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// Left side
export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Navigate through the application.</SheetDescription>
        </SheetHeader>
        <div className="space-y-2 py-4">
          <Button variant="ghost" className="w-full justify-start">
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            About
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Services
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Contact
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

// Top side
export const TopSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          <SheetDescription>You have a new message.</SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm">This is a notification from the top of the screen.</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

// Bottom side
export const BottomSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Cookie Settings</SheetTitle>
          <SheetDescription>Manage your cookie preferences.</SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm">
            We use cookies to improve your experience. You can customize your preferences below.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Accept All</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// Simple content
export const SimpleContent: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Information</SheetTitle>
          <SheetDescription>Here is some important information.</SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm">
            This sheet contains simple text content without any form elements.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

// With form
export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add User</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New User</SheetTitle>
          <SheetDescription>Enter the user details below.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button type="submit">Add User</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// Settings example
export const SettingsExample: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Settings</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>Configure your application preferences.</SheetDescription>
        </SheetHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Appearance</h4>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Theme
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Font Size
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Notifications</h4>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Email
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Push
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Right (Default)</h3>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Right</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Right Sheet</SheetTitle>
              <SheetDescription>Content from the right</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Left</h3>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Left</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Left Sheet</SheetTitle>
              <SheetDescription>Content from the left</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Top</h3>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Top</Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Top Sheet</SheetTitle>
              <SheetDescription>Content from the top</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Bottom</h3>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Bottom Sheet</SheetTitle>
              <SheetDescription>Content from the bottom</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
