import type { Handler } from "@netlify/functions";

// Mock product data matching the schema
const products = [
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

export const handler: Handler = async (event, context) => {
  // Handle CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.error("Error in products function:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};