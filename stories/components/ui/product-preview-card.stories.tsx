import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { ProductPreviewCard } from "@/components/ui/product-preview-card";

const meta: Meta<typeof ProductPreviewCard> = {
  title: "Components/UI/ProductPreviewCard",
  component: ProductPreviewCard,
  parameters: { layout: "centered" },
  argTypes: {
    className: { control: "text" },
    category: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    price: { control: "text" },
    originalPrice: { control: "text" },
    currency: { control: "text" },
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    imageWidth: { control: "number" },
    imageHeight: { control: "number" },
    ctaLabel: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ProductPreviewCard>;

const demoImage = "https://picsum.photos/seed/product-preview-card/600/600";

export const Default: Story = {
  args: {
    category: "Perfume",
    title: "Gabrielle Essence Eau De Parfum",
    description:
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    price: 149.99,
    originalPrice: 169.99,
    currency: "$",
    imageSrc: demoImage,
    imageAlt: "Bottle of perfume on a beige background",
    imageWidth: 600,
    imageHeight: 600,
    ctaLabel: "Add to Cart",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify product card elements are rendered
    const category = canvas.getByText(/perfume/i);
    const title = canvas.getByText(/gabrielle essence/i);
    const description = canvas.getByText(/floral, solar and voluptuous/i);
    const price = canvas.getByText(/149.99/i);
    const originalPrice = canvas.getByText(/169.99/i);
    const ctaButton = canvas.getByRole("button", { name: /add to cart/i });
    const image = canvas.getByRole("img", { name: /bottle of perfume/i });

    await expect(category).toBeInTheDocument();
    await expect(title).toBeInTheDocument();
    await expect(description).toBeInTheDocument();
    await expect(price).toBeInTheDocument();
    await expect(originalPrice).toBeInTheDocument();
    await expect(ctaButton).toBeInTheDocument();
    await expect(image).toBeInTheDocument();

    // Test button interaction
    await userEvent.hover(ctaButton);
    await userEvent.click(ctaButton);
  },
};

export const NoOriginalPrice: Story = {
  args: {
    category: "Headphones",
    title: "ZX99 Wireless Headphones",
    description: "High-fidelity sound with premium comfort and 30h battery life.",
    price: 299.0,
    currency: "$",
    imageSrc: "https://picsum.photos/seed/headphones/600/600",
    imageAlt: "Black wireless headphones on a table",
    imageWidth: 600,
    imageHeight: 600,
    ctaLabel: "Add to Cart",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify product elements
    const title = canvas.getByText(/zx99 wireless headphones/i);
    const price = canvas.getByText(/299/i);
    const ctaButton = canvas.getByRole("button", { name: /add to cart/i });

    await expect(title).toBeInTheDocument();
    await expect(price).toBeInTheDocument();
    await expect(ctaButton).toBeInTheDocument();

    // Verify no original price is shown (should only have one price element)
    const allPriceElements = canvas.getAllByText(/299/i);
    await expect(allPriceElements).toHaveLength(1);

    // Test interaction
    await userEvent.click(ctaButton);
  },
};

export const CustomCurrency: Story = {
  args: {
    category: "Coffee",
    title: "Single-Origin Beans",
    description: "Freshly roasted Ethiopian single-origin beans.",
    price: 18.5,
    originalPrice: 22,
    currency: "€",
    imageSrc: "https://picsum.photos/seed/coffee/600/600",
    imageAlt: "Bag of coffee beans",
    imageWidth: 600,
    imageHeight: 600,
    ctaLabel: "Add to Cart",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify product elements with custom currency
    const title = canvas.getByText(/single-origin beans/i);
    const price = canvas.getByText(/18.5/i);
    const originalPrice = canvas.getByText(/22/i);
    const ctaButton = canvas.getByRole("button", { name: /add to cart/i });
    const image = canvas.getByRole("img", { name: /bag of coffee beans/i });

    await expect(title).toBeInTheDocument();
    await expect(price).toBeInTheDocument();
    await expect(originalPrice).toBeInTheDocument();
    await expect(ctaButton).toBeInTheDocument();
    await expect(image).toBeInTheDocument();

    // Verify currency symbol is present
    const priceWithCurrency = canvas.getByText(/€/i);
    await expect(priceWithCurrency).toBeInTheDocument();

    // Test keyboard navigation and interaction
    await userEvent.tab();
    await expect(ctaButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
  },
};
