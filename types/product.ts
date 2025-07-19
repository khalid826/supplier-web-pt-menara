/**
 * product.ts
 *
 * TypeScript interface for product data structure.
 * Used in: product-related components, data/products.json, and anywhere product typing is needed.
 */
export interface Product {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  products: Product[];
} 