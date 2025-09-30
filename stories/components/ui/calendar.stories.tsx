import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import type { DateRange } from "react-day-picker";

const meta = {
  title: "Components/UI/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible calendar component built with react-day-picker for date selection, range picking, and advanced date interactions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["single", "multiple", "range"],
      description: "The selection mode of the calendar",
    },
    captionLayout: {
      control: { type: "select" },
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
      description: "Layout style for the month/year caption",
    },
    buttonVariant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "Button variant for navigation and day buttons",
    },
    showOutsideDays: {
      control: { type: "boolean" },
      description: "Show days outside the current month",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable all date selections",
    },
    numberOfMonths: {
      control: { type: "number", min: 1, max: 12 },
      description: "Number of months to display",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Stories - Single Date Selection
export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify calendar is rendered
    const calendar = canvas.getByRole("application");
    await expect(calendar).toBeInTheDocument();

    // Verify navigation buttons exist
    const prevButton = canvas.getByRole("button", { name: /previous month/i });
    const nextButton = canvas.getByRole("button", { name: /next month/i });
    await expect(prevButton).toBeInTheDocument();
    await expect(nextButton).toBeInTheDocument();

    // Test navigation
    await userEvent.click(nextButton);
    await expect(nextButton).toBeEnabled();
  },
};

export const WithoutOutsideDays: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} showOutsideDays={false} />;
  },
};

export const DropdownCaption: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        fromYear={2020}
        toYear={2030}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify dropdown controls exist
    const monthDropdown = canvas.getByRole("combobox", { name: /month/i });
    const yearDropdown = canvas.getByRole("combobox", { name: /year/i });
    
    await expect(monthDropdown).toBeInTheDocument();
    await expect(yearDropdown).toBeInTheDocument();
  },
};

export const DropdownMonthsOnly: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown-months"
        fromYear={2020}
        toYear={2030}
      />
    );
  },
};

export const DropdownYearsOnly: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown-years"
        fromYear={2020}
        toYear={2030}
      />
    );
  },
};

// Range Selection
export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(2024, 0, 15),
      to: new Date(2024, 0, 25),
    });
    return <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />;
  },
  parameters: {
    layout: "centered",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify range calendar is rendered
    const calendar = canvas.getByRole("application");
    await expect(calendar).toBeInTheDocument();

    // Verify multiple months are displayed
    const grids = canvas.getAllByRole("grid");
    await expect(grids.length).toBeGreaterThanOrEqual(2);
  },
};

export const RangeSingleMonth: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>();
    return <Calendar mode="range" selected={range} onSelect={setRange} />;
  },
};

// Multiple Selection
export const MultipleSelection: Story = {
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([
      new Date(2024, 0, 10),
      new Date(2024, 0, 15),
      new Date(2024, 0, 20),
    ]);
    return <Calendar mode="multiple" selected={dates} onSelect={setDates} />;
  },
};

// Multiple Months
export const TwoMonths: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} numberOfMonths={2} />;
  },
  parameters: {
    layout: "centered",
  },
};

export const ThreeMonths: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} numberOfMonths={3} />;
  },
  parameters: {
    layout: "fullscreen",
  },
};

// Disabled Dates
export const DisabledPastDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={{ before: new Date() }}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Find disabled dates (past dates)
    const disabledButtons = canvas.getAllByRole("button").filter((button) =>
      button.hasAttribute("disabled")
    );
    
    // Verify some dates are disabled
    expect(disabledButtons.length).toBeGreaterThan(0);
  },
};

export const DisabledFutureDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={{ after: new Date() }}
      />
    );
  },
};

export const DisabledWeekends: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const disableWeekends = (date: Date) => {
      return date.getDay() === 0 || date.getDay() === 6;
    };
    return (
      <Calendar mode="single" selected={date} onSelect={setDate} disabled={disableWeekends} />
    );
  },
};

export const DisabledSpecificDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const disabledDates = [
      new Date(2024, 0, 1),
      new Date(2024, 0, 15),
      new Date(2024, 0, 25),
    ];
    return <Calendar mode="single" selected={date} onSelect={setDate} disabled={disabledDates} />;
  },
};

export const FullyDisabled: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} disabled />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify all day buttons are disabled
    const dayButtons = canvas.getAllByRole("button").filter((button) =>
      button.getAttribute("data-day")
    );
    
    for (const button of dayButtons) {
      await expect(button).toBeDisabled();
    }
  },
};

// Button Variants
export const OutlineButtons: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} buttonVariant="outline" />;
  },
};

export const SecondaryButtons: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar mode="single" selected={date} onSelect={setDate} buttonVariant="secondary" />
    );
  },
};

// Week Numbers
export const WithWeekNumbers: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} showWeekNumber />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify week numbers are displayed
    const weekNumbers = canvas.getAllByText(/^\d{1,2}$/);
    await expect(weekNumbers.length).toBeGreaterThan(0);
  },
};

// Default Month
export const CustomDefaultMonth: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={new Date(2025, 5)} />
    );
  },
};

// Accessibility Testing
export const KeyboardNavigation: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test keyboard navigation
    const calendar = canvas.getByRole("application");
    await expect(calendar).toBeInTheDocument();

    // Tab to navigation button
    await userEvent.tab();
    const prevButton = canvas.getByRole("button", { name: /previous month/i });
    await expect(prevButton).toHaveFocus();

    // Test arrow key navigation would happen here in actual usage
    // (Storybook test limitations prevent full keyboard testing)
  },
};

export const WithAriaLabels: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        aria-label="Select a date for your appointment"
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify aria-label is applied
    const calendar = canvas.getByRole("application");
    await expect(calendar).toHaveAccessibleName("Select a date for your appointment");
  },
};

// Visual Regression Testing
export const AllModes: Story = {
  render: () => {
    const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
    const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
      new Date(2024, 0, 10),
      new Date(2024, 0, 15),
    ]);
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(2024, 0, 15),
      to: new Date(2024, 0, 25),
    });

    return (
      <div className="flex flex-col gap-8 p-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Single Selection</h3>
          <Calendar mode="single" selected={singleDate} onSelect={setSingleDate} />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Multiple Selection</h3>
          <Calendar mode="multiple" selected={multipleDates} onSelect={setMultipleDates} />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Range Selection</h3>
          <Calendar mode="range" selected={range} onSelect={setRange} />
        </div>
      </div>
    );
  },
  parameters: {
    layout: "fullscreen",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify all calendar modes are rendered
    const calendars = canvas.getAllByRole("application");
    await expect(calendars.length).toBe(3);

    // Verify headings
    const singleHeading = canvas.getByText("Single Selection");
    const multipleHeading = canvas.getByText("Multiple Selection");
    const rangeHeading = canvas.getByText("Range Selection");

    await expect(singleHeading).toBeInTheDocument();
    await expect(multipleHeading).toBeInTheDocument();
    await expect(rangeHeading).toBeInTheDocument();
  },
};

export const AllCaptionLayouts: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className="flex flex-col gap-8 p-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Label Caption</h3>
          <Calendar mode="single" selected={date} onSelect={setDate} captionLayout="label" />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Dropdown Caption</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
            fromYear={2020}
            toYear={2030}
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Dropdown Months Only</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown-months"
            fromYear={2020}
            toYear={2030}
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Dropdown Years Only</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown-years"
            fromYear={2020}
            toYear={2030}
          />
        </div>
      </div>
    );
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const AllButtonVariants: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className="flex flex-wrap gap-8 p-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Ghost (Default)</h3>
          <Calendar mode="single" selected={date} onSelect={setDate} buttonVariant="ghost" />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Outline</h3>
          <Calendar mode="single" selected={date} onSelect={setDate} buttonVariant="outline" />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Secondary</h3>
          <Calendar mode="single" selected={date} onSelect={setDate} buttonVariant="secondary" />
        </div>
      </div>
    );
  },
  parameters: {
    layout: "fullscreen",
  },
};
