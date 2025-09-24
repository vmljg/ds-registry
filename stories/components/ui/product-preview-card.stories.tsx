import type { Meta, StoryObj } from "@storybook/react";
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
};
