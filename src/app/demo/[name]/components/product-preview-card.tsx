import * as React from "react";
import { ProductPreviewCard } from "@/components/ui/product-preview-card";

// Registry export
// This object is consumed by `src/app/demo/[name]/index.tsx` to populate the registry UI.
export const productPreviewCard = {
  name: "product-preview-card",
  components: {
    Default: (
      <ProductPreviewCard
        category="Perfume"
        title="Gabrielle Essence Eau De Parfum"
        description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        price={149.99}
        originalPrice={169.99}
        currency="$"
        imageSrc="https://picsum.photos/seed/product-preview-card/600/600"
        imageAlt="Bottle of perfume on a beige background"
        imageWidth={600}
        imageHeight={600}
        ctaLabel="Add to Cart"
      />
    ),
    Headphones: (
      <ProductPreviewCard
        category="Headphones"
        title="ZX99 Wireless Headphones"
        description="High-fidelity sound with premium comfort and 30h battery life."
        price={299}
        currency="$"
        imageSrc="https://picsum.photos/seed/headphones/600/600"
        imageAlt="Black wireless headphones on a table"
        imageWidth={600}
        imageHeight={600}
        ctaLabel="Add to Cart"
      />
    ),
  },
};
