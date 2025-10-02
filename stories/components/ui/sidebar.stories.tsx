import type { Meta, StoryObj } from "@storybook/react";
import { Home, Inbox, Settings, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const meta = {
  title: "Components/UI/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A composable, themeable and customizable sidebar component. Built with Radix UI primitives.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default sidebar
export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="px-2 py-2">
              <h2 className="text-lg font-semibold">My App</h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Inbox />
                      <span>Inbox</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <User />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-4">
          <div className="mb-4 flex items-center gap-2">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold">Main Content</h1>
          </div>
          <p className="text-muted-foreground">Click the toggle button to show/hide the sidebar.</p>
        </main>
      </div>
    </SidebarProvider>
  ),
};

// With multiple groups
export const MultipleGroups: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="px-2 py-2">
              <h2 className="text-lg font-semibold">Dashboard</h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Inbox />
                      <span>Messages</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings />
                      <span>Preferences</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <User />
                      <span>Account</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-4">
          <div className="mb-4 flex items-center gap-2">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold">Content Area</h1>
          </div>
        </main>
      </div>
    </SidebarProvider>
  ),
};

// Collapsible sidebar
export const Collapsible: Story = {
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <div className="flex h-screen w-full">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="px-2 py-2">
              <h2 className="text-lg font-semibold">App</h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Home">
                      <Home />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Inbox">
                      <Inbox />
                      <span>Inbox</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Settings">
                      <Settings />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-4">
          <div className="mb-4 flex items-center gap-2">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold">Main Content</h1>
          </div>
          <p className="text-muted-foreground">
            The sidebar starts collapsed. Click the toggle to expand it.
          </p>
        </main>
      </div>
    </SidebarProvider>
  ),
};

// Right side
export const RightSide: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <main className="flex-1 p-4">
          <div className="mb-4 flex items-center justify-end gap-2">
            <h1 className="mr-auto text-2xl font-bold">Main Content</h1>
            <SidebarTrigger />
          </div>
          <p className="text-muted-foreground">Sidebar is on the right side.</p>
        </main>
        <Sidebar side="right">
          <SidebarHeader>
            <div className="px-2 py-2">
              <h2 className="text-lg font-semibold">Right Sidebar</h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </SidebarProvider>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default Sidebar</h3>
        <div className="overflow-hidden rounded-lg border" style={{ height: "400px" }}>
          <SidebarProvider>
            <div className="flex h-full w-full">
              <Sidebar>
                <SidebarHeader>
                  <div className="px-2 py-2">
                    <h2 className="text-lg font-semibold">App</h2>
                  </div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Home />
                            <span>Home</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Settings />
                            <span>Settings</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
              <main className="flex-1 p-4">
                <SidebarTrigger />
              </main>
            </div>
          </SidebarProvider>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
