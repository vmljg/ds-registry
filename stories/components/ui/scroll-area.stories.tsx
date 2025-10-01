import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "Components/UI/Scroll Area",
  component: ScrollArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Augments native scroll functionality for custom, cross-browser styling. Built with Radix UI Scroll Area primitive.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

// Default vertical scroll
export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
};

// Horizontal scroll
export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <figure key={i} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <div className="bg-muted flex h-[150px] w-[150px] items-center justify-center">
                <span className="text-muted-foreground">Image {i + 1}</span>
              </div>
            </div>
            <figcaption className="text-muted-foreground pt-2 text-xs">Photo {i + 1}</figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

// Both scrollbars
export const BothScrollbars: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[400px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Content Grid</h4>
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="bg-muted flex h-20 w-20 items-center justify-center rounded-md">
              <span className="text-sm">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

// Long text content
export const LongText: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
      <h4 className="mb-4 text-sm leading-none font-medium">Terms and Conditions</h4>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="mt-4 text-sm">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="mt-4 text-sm">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </p>
      <p className="mt-4 text-sm">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
    </ScrollArea>
  ),
};

// List with items
export const ListItems: Story = {
  render: () => (
    <ScrollArea className="h-72 w-64 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Notifications</h4>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="mb-4 last:mb-0">
            <div className="text-sm font-medium">Notification {i + 1}</div>
            <p className="text-muted-foreground text-sm">This is a sample notification message.</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

// Compact list
export const CompactList: Story = {
  render: () => (
    <ScrollArea className="h-48 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Items</h4>
        <div className="space-y-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="text-sm">
              Item {i + 1}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

// Visual regression testing
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Vertical Scroll</h3>
        <ScrollArea className="h-48 w-48 rounded-md border">
          <div className="p-4">
            {tags.slice(0, 20).map((tag) => (
              <React.Fragment key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Horizontal Scroll</h3>
        <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
          <div className="flex w-max space-x-4 p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="bg-muted flex h-20 w-20 items-center justify-center rounded-md"
              >
                <span className="text-sm">{i + 1}</span>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Long Text</h3>
        <ScrollArea className="h-48 w-[350px] rounded-md border p-4">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4 text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
        </ScrollArea>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
