import type { Meta, StoryObj } from "@storybook/react";
import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const meta = {
  title: "Components/UI/Hover Card",
  component: HoverCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "For sighted users to preview content available behind a link. Built with Radix UI Hover Card primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    openDelay: {
      control: { type: "number" },
      description: "The duration from when the mouse enters the trigger until the hover card opens",
    },
    closeDelay: {
      control: { type: "number" },
      description: "The duration from when the mouse leaves the trigger until the hover card closes",
    },
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default hover card
export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 size-4 opacity-70" />
              <span className="text-muted-foreground text-xs">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// Simple text
export const SimpleText: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Tooltip Content</h4>
          <p className="text-sm">This is a simple hover card with text content.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// With custom delay
export const CustomDelay: Story = {
  render: () => (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="link">Quick hover</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Fast Response</h4>
          <p className="text-sm">This hover card appears quickly with custom delays.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// User profile card
export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@shadcn</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm">Building UI components and design systems.</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 size-4 opacity-70" />
              <span className="text-muted-foreground text-xs">Joined March 2023</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// Inline text trigger
export const InlineText: Story = {
  render: () => (
    <div className="text-sm">
      Hover over{" "}
      <HoverCard>
        <HoverCardTrigger className="underline cursor-pointer">this link</HoverCardTrigger>
        <HoverCardContent>
          <p className="text-sm">Additional information appears here when you hover.</p>
        </HoverCardContent>
      </HoverCard>{" "}
      to see more details.
    </div>
  ),
};

// Rich content
export const RichContent: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Product Info</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Premium Plan</h4>
          <p className="text-sm">Get access to all premium features including:</p>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Unlimited projects</li>
            <li>Advanced analytics</li>
            <li>Priority support</li>
            <li>Custom integrations</li>
          </ul>
          <div className="pt-2">
            <span className="text-lg font-bold">$29/month</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// Multiple hover cards
export const MultipleCards: Story = {
  render: () => (
    <div className="flex gap-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@user1</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">User One</h4>
            <p className="text-sm">First user profile</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@user2</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">User Two</h4>
            <p className="text-sm">Second user profile</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@user3</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">User Three</h4>
            <p className="text-sm">Third user profile</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">The React Framework</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Simple Text</h3>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">Hover me</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">Simple hover card content</p>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Rich Content</h3>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Details</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Title</h4>
              <p className="text-sm">Description with more details</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
