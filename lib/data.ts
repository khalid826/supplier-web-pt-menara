/**
 * data.ts
 *
 * Data service layer for fetching and validating application data.
 * Provides type-safe access to JSON data files.
 */

import clients from '../data/clients.json';
import products from '../data/products.json';
import contact from '../data/contact.json';
import type { Client } from '@/types/client';
import type { ProductCategory } from '@/types/product';
import type { ContactInfo } from '@/types/contact';

// Type assertions for JSON imports
const typedClients = clients as Client[];
const typedProducts = products as ProductCategory[];
const typedContact = contact as ContactInfo;

/**
 * Get all clients
 */
export function getClients(): Client[] {
  return typedClients;
}

/**
 * Get all product categories
 */
export function getProductCategories(): ProductCategory[] {
  return typedProducts;
}

/**
 * Get contact information
 */
export function getContactInfo(): ContactInfo {
  return typedContact;
} 