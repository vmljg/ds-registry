# VML Design System Guidelines

## Overview

The VML Design System is a comprehensive design language built on Next.js 15, Tailwind CSS 4.x, and shadcn/ui. It uses OKLCH color space for perceptually uniform colors and supports both light and dark modes.

---

## General Guidelines

### Layout Principles

- Use CSS Grid over Flexbox when possible for two-dimensional layouts
- Build mobile-first; use media queries for larger screens
- Prefer responsive layouts using Tailwind's container and spacing utilities
- Use logical CSS properties (`inline-start`/`inline-end`/`block-start`/`block-end`) instead of `left`/`right`/`top`/`bottom`
- Never use `!important`

### Component Architecture

- One export per file
- Use composition patterns for complex components
- Keep components small and focused on a single responsibility
- Put helper functions in separate utility files

### Code Style

- Use `const` by default; only use `let` when reassignment is necessary
- Prefer named functions over arrow functions for readability
- Use array methods (`map`, `filter`, `reduce`) over manual loops
- Prefer early returns over `else` statements

---

## Color System

The VML Design System uses OKLCH color space for consistent perceptual brightness across hues.

### Light Mode Tokens

| Token                      | Value                  | Usage                           |
| -------------------------- | ---------------------- | ------------------------------- |
| `--background`             | `oklch(1 0 0)`         | Page background (white)         |
| `--foreground`             | `oklch(0.2 0 0)`       | Primary text (near black)       |
| `--primary`                | `oklch(0.45 0.15 285)` | Brand purple - main actions     |
| `--primary-foreground`     | `oklch(1 0 0)`         | Text on primary (white)         |
| `--secondary`              | `oklch(0.75 0.15 240)` | Blue accent - secondary actions |
| `--secondary-foreground`   | `oklch(0.2 0 0)`       | Text on secondary               |
| `--accent`                 | `oklch(0.9 0.15 85)`   | Yellow/gold - highlights        |
| `--accent-foreground`      | `oklch(0.2 0 0)`       | Text on accent                  |
| `--muted`                  | `oklch(0.3 0 0)`       | Subdued elements                |
| `--muted-foreground`       | `oklch(0.6 0 0)`       | Secondary text                  |
| `--destructive`            | `oklch(0.65 0.2 25)`   | Error states, deletions         |
| `--destructive-foreground` | `oklch(1 0 0)`         | Text on destructive             |
| `--border`                 | `oklch(0.9 0 0)`       | Borders, dividers               |
| `--input`                  | `oklch(0.9 0 0)`       | Form input borders              |
| `--ring`                   | `oklch(0.45 0.15 285)` | Focus rings (matches primary)   |
| `--card`                   | `oklch(1 0 0)`         | Card backgrounds                |
| `--card-foreground`        | `oklch(0.2 0 0)`       | Card text                       |

### Dark Mode Tokens

| Token                | Value                  | Usage                                |
| -------------------- | ---------------------- | ------------------------------------ |
| `--background`       | `oklch(0.1 0 0)`       | Page background (near black)         |
| `--foreground`       | `oklch(0.95 0 0)`      | Primary text (near white)            |
| `--primary`          | `oklch(0.55 0.15 285)` | Brand purple (lighter for dark mode) |
| `--secondary`        | `oklch(0.8 0.15 240)`  | Blue accent (lighter for dark mode)  |
| `--muted`            | `oklch(0.25 0 0)`      | Subdued elements                     |
| `--muted-foreground` | `oklch(0.7 0 0)`       | Secondary text (lighter)             |
| `--destructive`      | `oklch(0.7 0.2 25)`    | Error states (lighter red)           |
| `--border`           | `oklch(0.25 0 0)`      | Borders (darker)                     |
| `--input`            | `oklch(0.25 0 0)`      | Input borders (darker)               |
| `--ring`             | `oklch(0.55 0.15 285)` | Focus rings (lighter)                |

### Chart Colors

| Token       | Light Mode             | Dark Mode              |
| ----------- | ---------------------- | ---------------------- |
| `--chart-1` | `oklch(0.75 0.15 240)` | `oklch(0.8 0.15 240)`  |
| `--chart-2` | `oklch(0.8 0.2 330)`   | `oklch(0.85 0.2 330)`  |
| `--chart-3` | `oklch(0.7 0.2 25)`    | `oklch(0.75 0.2 25)`   |
| `--chart-4` | `oklch(0.9 0.15 85)`   | `oklch(0.9 0.15 85)`   |
| `--chart-5` | `oklch(0.45 0.15 285)` | `oklch(0.55 0.15 285)` |

---

## Typography

### Font Families

| Variable       | Font       | Usage                                   |
| -------------- | ---------- | --------------------------------------- |
| `--font-sans`  | Geist Sans | Body text, UI elements, buttons         |
| `--font-serif` | Montserrat | Headlines, display text (used as serif) |
| `--font-mono`  | Geist Mono | Code, technical content                 |

### Type Scale

- **Base**: 16px (browser default)
- **Hero Title**: `text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl`
- **Section Title**: `text-2xl font-bold` or `text-3xl font-bold`
- **Body**: Default `text-base`
- **Small/Helper**: `text-sm`

### Typography Guidelines

- Use `font-medium` for button text and interactive elements
- Use `font-bold` for headlines and important text
- Use `tracking-tight` for large headlines to improve readability
- Line height defaults are handled by Tailwind

---

## Spacing & Layout

### Border Radius

| Token         | Value                                  |
| ------------- | -------------------------------------- |
| `--radius`    | `0.5rem` (8px)                         |
| `--radius-sm` | `calc(var(--radius) - 4px)` = 0.25rem  |
| `--radius-md` | `calc(var(--radius) - 2px)` = 0.375rem |
| `--radius-lg` | `0.5rem`                               |
| `--radius-xl` | `calc(var(--radius) + 4px)` = 0.75rem  |

### Spacing Scale

Use Tailwind's default spacing scale (0.25rem increments) with these common patterns:

- Component padding: `px-4 py-2` (buttons), `p-6` (cards)
- Section spacing: `py-12`, `py-16`, `py-24`
- Gap utilities: `gap-2`, `gap-4`, `gap-6`, `gap-8`

---

## Components

### Button

The Button component provides interactive actions with clear visual affordances.

**Variants:**

| Variant       | Class Pattern                                     | Usage                |
| ------------- | ------------------------------------------------- | -------------------- |
| `default`     | `bg-primary text-primary-foreground`              | Primary actions      |
| `secondary`   | `bg-secondary text-secondary-foreground`          | Secondary actions    |
| `outline`     | `border bg-background hover:bg-accent`            | Alternative actions  |
| `ghost`       | `hover:bg-accent hover:text-accent-foreground`    | Low-emphasis actions |
| `link`        | `text-primary underline-offset-4 hover:underline` | Navigation links     |
| `destructive` | `bg-destructive text-white`                       | Dangerous actions    |

**Sizes:**

- `default`: `h-9 px-4 py-2`
- `sm`: `h-8 px-3`
- `lg`: `h-10 px-6`
- `icon`: `size-9` (square, for icon-only buttons)

**Guidelines:**

- Use only one primary button per section/page
- Group related actions with secondary/outline variants
- Use `asChild` prop when wrapping buttons with `Link` components
- Include icons using the `has-[>svg]:px-3` auto-adjustment

### Card

Cards contain related content and actions about a single subject.

**Structure:**

- `Card`: Container with border and rounded corners
- `CardHeader`: Top section with title and description
- `CardTitle`: Semantic heading (h3 by default)
- `CardDescription`: Secondary text (muted foreground)
- `CardContent`: Main content area
- `CardFooter`: Bottom action area

**Guidelines:**

- Use consistent padding (`p-6`)
- Keep card content scannable
- Limit actions in footer to 1-2 items

### Form Elements

#### Input

- Use `border-input` for borders
- Include `focus-visible:ring-ring` for focus states
- Full width by default (`w-full`)

#### Select

- Use for 3+ options; prefer radio buttons or toggles for fewer
- Include placeholder text for unselected state

#### Checkbox

- Use for binary choices and multi-select lists
- Group related checkboxes with consistent spacing

#### Label

- Always associate with form controls
- Use `text-sm font-medium` styling

### Badge

Small status indicators and counts.

**Variants:**

- `default`: Primary background
- `secondary`: Secondary background
- `destructive`: Destructive background
- `outline`: Bordered, transparent background

### Avatar

User representation with image fallback.

**Sizes:**

- `xs`: `size-6`
- `sm`: `size-8`
- `default`: `size-10`
- `lg`: `size-16`

### Dialog

Modal dialogs for important content that interrupts the user.

**Guidelines:**

- Use for critical decisions or complex forms
- Include clear title and description
- Provide obvious close action
- Limit content to prevent scrolling

### Sonner (Toast)

Notification system for transient messages.

**Usage:**

- Success confirmations
- Error alerts
- Loading states
- Positioned top-right by default

---

## Layout Components

### Brand Header

Top navigation with logo, search, and user actions.

**Features:**

- Responsive mobile menu
- Avatar with dropdown
- Search input integration
- Notification badge support

### Brand Sidebar

Side navigation for dashboard layouts.

**Features:**

- Collapsible sections
- Active state indicators
- Badge counts for menu items
- Responsive mobile drawer

### Hero

Attention-grabbing section for landing pages.

**Structure:**

- Background image with overlay
- Badge for status/announcement
- Large headline (4xl-6xl)
- Supporting description
- Primary CTA button

---

## Accessibility Guidelines

### WCAG AA Compliance

- Maintain minimum 4.5:1 contrast ratio for text
- Use 3:1 for large text (18px+ or 14px+ bold)
- Ensure interactive elements are keyboard navigable
- Provide visible focus indicators (`ring` tokens)

### Focus Management

- Use `focus-visible` for keyboard-only focus styles
- Focus rings use `--ring` color (primary purple)
- Ensure logical tab order

### Semantic HTML

- Use appropriate landmark elements (`header`, `nav`, `main`, `footer`)
- Use heading hierarchy (h1 → h2 → h3) without skipping levels
- Include ARIA labels when semantic elements aren't sufficient

### Interactive Elements

- Buttons must be focusable and activatable via keyboard
- Form inputs require associated labels
- Error states must be announced to screen readers

---

## Patterns & Best Practices

### Form Validation

- Use React Hook Form with Zod schemas
- Display validation errors inline with inputs
- Use `aria-invalid` for error states
- Include helpful error messages

### Loading States

- Use `Skeleton` components for content loading
- Disable buttons during async operations
- Show inline spinners for button loading states

### Empty States

- Provide helpful messaging when no content exists
- Include CTA to create/add content when applicable
- Use consistent iconography

### Error Handling

- Use destructive colors for error messages
- Log errors appropriately
- Provide user-friendly error descriptions

---

## Theme Implementation

### CSS Variables

All tokens are defined in `globals.css` using:

```css
:root {
  /* Light mode tokens */
}
.dark {
  /* Dark mode tokens */
}
```

### Tailwind Integration

Tokens are mapped to Tailwind theme in `@theme inline`:

```css
--color-background: var(--background);
--color-primary: var(--primary);
/* etc. */
```

### Dark Mode Toggle

Use `dark` class on HTML element. System includes automatic dark mode detection and manual toggle support.

---

## shadcn/ui Integration

### Available Components

The registry includes these shadcn/ui primitives:

- **Layout**: Card, Table, Tabs, Accordion, Collapsible, Separator
- **Forms**: Input, Textarea, Select, Checkbox, Radio Group, Switch, Slider, Calendar
- **Overlays**: Dialog, Sheet, Drawer, Popover, Hover Card, Tooltip
- **Navigation**: Breadcrumb, Pagination, Menubar, Navigation Menu, Command
- **Feedback**: Alert, Progress, Skeleton, Sonner
- **Data**: Data Table, Chart
- **Media**: Avatar, Aspect Ratio, Carousel
- **Utilities**: Badge, Button, Label, Scroll Area, Resizable, Toggle Group

### Custom Components

Registry-specific components:

- `brand-header`: Application header
- `brand-sidebar`: Navigation sidebar
- `hero`: Landing page hero section
- `login`: Authentication form
- `logo`: Brand logo component
- `promo`: Promotional banner
- `product-grid`: Product listing grid
- `product-preview-card`: E-commerce product card

---

## Icons

Use Lucide React icons throughout the application:

- Import from `lucide-react`
- Default size is 16px (size-4)
- Icons inherit text color by default
- Use `size-4` class for consistent sizing

---

## File Organization

```
src/
├── app/                    # Next.js app routes
│   ├── (registry)/         # Registry pages
│   └── demo/               # Component demo pages
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── registry/           # Registry-specific components
│   └── [custom].tsx        # Project-specific components
├── layouts/                # Layout templates
├── hooks/                  # Custom React hooks
└── lib/                    # Utilities and helpers
```
