import { z } from "zod";

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  brand: z.string(),
  stock: z.number(),
  image: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;

export async function getProducts(): Promise<Product[]> {
  try {
    // During build time, return mock data instead of making HTTP request
    if (typeof window === 'undefined' && !process.env.NETLIFY_DEV) {
      // Return mock data for build time
      const mockData = [
        {
          "id": 1,
          "name": "Smartphone X23",
          "price": 699.99,
          "description": "The latest flagship smartphone with a stunning display and advanced camera features.",
          "category": "Electronics",
          "brand": "Brand A",
          "stock": 50,
          "image": "https://picsum.photos/seed/smartphone/400/400"
        },
        {
          "id": 2,
          "name": "Wireless Headphones Pro",
          "price": 199.99,
          "description": "Premium noise-cancelling wireless headphones with superior sound quality.",
          "category": "Electronics",
          "brand": "Brand B",
          "stock": 25,
          "image": "https://picsum.photos/seed/headphones/400/400"
        },
        {
          "id": 3,
          "name": "Coffee Maker Deluxe",
          "price": 149.99,
          "description": "Programmable coffee maker with built-in grinder and thermal carafe.",
          "category": "Home & Garden",
          "brand": "Brand C",
          "stock": 15,
          "image": "https://picsum.photos/seed/coffee/400/400"
        },
        {
          "id": 4,
          "name": "Running Shoes Elite",
          "price": 129.99,
          "description": "High-performance running shoes with advanced cushioning technology.",
          "category": "Sports & Outdoors",
          "brand": "Brand D",
          "stock": 40,
          "image": "https://picsum.photos/seed/shoes/400/400"
        },
        {
          "id": 5,
          "name": "Gaming Laptop Ultra",
          "price": 1299.99,
          "description": "Powerful gaming laptop with high-refresh display and RTX graphics.",
          "category": "Electronics",
          "brand": "Brand E",
          "stock": 8,
          "image": "https://picsum.photos/seed/laptop/400/400"
        },
        {
          "id": 6,
          "name": "Yoga Mat Premium",
          "price": 49.99,
          "description": "Non-slip premium yoga mat with superior grip and cushioning.",
          "category": "Sports & Outdoors",
          "brand": "Brand F",
          "stock": 60,
          "image": "https://picsum.photos/seed/yoga/400/400"
        }
      ];
      
      return z.array(ProductSchema).parse(mockData);
    }

    // For client-side and dev server, make the API call
    const baseUrl = process.env.NETLIFY_DEV ? 'http://localhost:8888' : '';
    const response = await fetch(`${baseUrl}/.netlify/functions/products`);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return z.array(ProductSchema).parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.issues);
    } else {
      console.error("Error fetching products:", error);
    }
    throw error;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const products = await getProducts();
    return Array.from(new Set(products.map((product) => product.category)));
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
