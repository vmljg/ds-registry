"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ProductPreviewCardProps {
  className?: string;
  /** Small category or eyebrow label above the title */
  category?: string;
  /** Main product title */
  title: string;
  /** Short marketing description */
  description?: string;
  /** Current price (e.g., 149.99) */
  price: number | string;
  /** Optional original price to show discount (e.g., 169.99) */
  originalPrice?: number | string;
  /** Currency symbol to prefix prices with */
  currency?: string; // default: $
  /** Image URL for the product */
  imageSrc: string;
  /** Accessible alternate text for the image */
  imageAlt?: string;
  /** Image width in pixels for layout stability */
  imageWidth?: number;
  /** Image height in pixels for layout stability */
  imageHeight?: number;
  /** Button label text */
  ctaLabel?: string; // default: Add to Cart
  /** Fired when CTA is clicked */
  onAddToCart?: () => void;
}

/**
 * ProductPreviewCard
 *
 * Mobile-first, accessible product preview following the Frontend Mentor challenge layout.
 * Uses existing UI primitives (`Card`, `Button`) and keeps content flexible via props.
 */
export function ProductPreviewCard({
  className,
  category,
  title,
  description,
  price,
  originalPrice,
  currency = "$",
  imageSrc,
  imageAlt = "",
  imageWidth = 600,
  imageHeight = 600,
  ctaLabel = "Add to Cart",
  onAddToCart,
}: ProductPreviewCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden max-w-[22rem] sm:max-w-none sm:grid sm:grid-cols-2 p-0 gap-0",
        className,
      )}
    >
      {/* Image first on mobile; left column on larger screens */}
      <figure className="bg-muted/20">
        {/* Using img instead of next/image to avoid remote domain config */}
        <img
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="h-64 w-full object-cover sm:h-full"
          loading="lazy"
        />
      </figure>

      {/* Content */}
      <section className="flex flex-col py-6">
        <CardHeader className="gap-2">
          {category ? (
            <CardDescription className="tracking-[0.2em] uppercase">{category}</CardDescription>
          ) : null}
          <CardTitle className="leading-tight">{title}</CardTitle>
          {description ? (
            <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
          ) : null}
        </CardHeader>

        <CardContent className="mt-auto">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-semibold">{currency}{price}</div>
            {originalPrice ? (
              <div className="text-muted-foreground line-through">{currency}{originalPrice}</div>
            ) : null}
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" onClick={onAddToCart} aria-label={ctaLabel}>
            {ctaLabel}
          </Button>
        </CardFooter>
      </section>
    </Card>
  );
}

export default ProductPreviewCard;
