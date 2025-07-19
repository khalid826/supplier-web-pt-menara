/**
 * assets.ts
 *
 * Asset management utilities for handling image paths and fallbacks.
 * Provides consistent asset paths and error handling.
 */

// Asset path constants
export const ASSET_PATHS = {
  // Company logos
  LOGO: '/icon.png',
  LOGO_INVERSE: '/logo-inverse.png',
  
  // Placeholders
  PLACEHOLDER: '/placeholders/placeholder.jpg',
  PLACEHOLDER_LOGO: '/placeholders/placeholder-logo.png',
  PLACEHOLDER_USER: '/placeholders/placeholder-user.jpg',
  
  // Client logos
  CLIENTS: {
    PLNE: '/brands/clients/logo-plne.png',
    APCAE: '/brands/clients/logo-APCAE.png',
    RAYA: '/brands/clients/logo-RAYA.png',
  },
  
  // Product brand logos
  PRODUCTS: {
    CLARKE: '/brands/products/product-logo-clarke.png',
    CUMMINS: '/brands/products/product-logo-cummins.png',
    FLUKE: '/brands/products/product-logo-fluke.png',
    RITTAL: '/brands/products/product-logo-rittal.png',
    SCHNEIDER: '/brands/products/product-logo-schneider.png',
    SIKA: '/brands/products/product-logo-sika.jpg',
  }
} as const;

/**
 * Handle image error with fallback
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallback: string = ASSET_PATHS.PLACEHOLDER
): void {
  const target = event.target as HTMLImageElement;
  target.src = fallback;
  target.alt = target.alt + ' (fallback)';
} 