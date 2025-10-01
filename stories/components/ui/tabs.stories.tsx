import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const meta = {
  title: "Components/UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time. Built with Radix UI Tabs primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "text" },
      description: "The value of the tab that should be active when initially rendered",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default tabs
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-muted-foreground text-sm">
          Make changes to your account here. Click save when you're done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-muted-foreground text-sm">
          Change your password here. After saving, you'll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

// With cards
export const WithCards: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

// Three tabs
export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-muted-foreground text-sm">Overview content goes here.</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p className="text-muted-foreground text-sm">Analytics content goes here.</p>
      </TabsContent>
      <TabsContent value="reports">
        <p className="text-muted-foreground text-sm">Reports content goes here.</p>
      </TabsContent>
    </Tabs>
  ),
};

// Disabled tab
export const DisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Available</TabsTrigger>
        <TabsTrigger value="tab2" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="tab3">Available</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-muted-foreground text-sm">First tab content.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-muted-foreground text-sm">Second tab content (disabled).</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-muted-foreground text-sm">Third tab content.</p>
      </TabsContent>
    </Tabs>
  ),
};

// Full width tabs
export const FullWidth: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-muted-foreground text-sm">Content for tab 1.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-muted-foreground text-sm">Content for tab 2.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-muted-foreground text-sm">Content for tab 3.</p>
      </TabsContent>
    </Tabs>
  ),
};

// Many tabs
export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
        <TabsTrigger value="tab5">Tab 5</TabsTrigger>
        <TabsTrigger value="tab6">Tab 6</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-muted-foreground text-sm">Content 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-muted-foreground text-sm">Content 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-muted-foreground text-sm">Content 3</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p className="text-muted-foreground text-sm">Content 4</p>
      </TabsContent>
      <TabsContent value="tab5">
        <p className="text-muted-foreground text-sm">Content 5</p>
      </TabsContent>
      <TabsContent value="tab6">
        <p className="text-muted-foreground text-sm">Content 6</p>
      </TabsContent>
    </Tabs>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <Tabs defaultValue="tab1" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-muted-foreground text-sm">Content 1</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="text-muted-foreground text-sm">Content 2</p>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Three Tabs</h3>
        <Tabs defaultValue="tab1" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-muted-foreground text-sm">Content 1</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="text-muted-foreground text-sm">Content 2</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="text-muted-foreground text-sm">Content 3</p>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Full Width</h3>
        <Tabs defaultValue="tab1" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-muted-foreground text-sm">Content 1</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="text-muted-foreground text-sm">Content 2</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="text-muted-foreground text-sm">Content 3</p>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Disabled</h3>
        <Tabs defaultValue="tab1" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="tab1">Active</TabsTrigger>
            <TabsTrigger value="tab2" disabled>
              Disabled
            </TabsTrigger>
            <TabsTrigger value="tab3">Active</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-muted-foreground text-sm">Content 1</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="text-muted-foreground text-sm">Content 3</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
