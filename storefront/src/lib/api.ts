/**
 * API functions to fetch data from the Medusa backend.
 * These functions handle the connection to the backend and transform
 * the Medusa data format to our frontend Product interface.
 *
 * NOTE: These functions will throw errors if the backend is unavailable.
 * The app should handle these errors with appropriate error boundaries.
 */

import { MEDUSA_BACKEND_URL } from "./medusa";

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  priceFormatted: string;
  category: string;
  categorySlug: string;
  image: string;
  badge?: string;
  specs: Record<string, string>;
  features: string[];
  inStock: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  productCount: number;
}

// Custom error for backend unavailability
export class BackendUnavailableError extends Error {
  constructor(message: string = "Backend service is unavailable") {
    super(message);
    this.name = "BackendUnavailableError";
  }
}

/**
 * Transform Medusa product data to our frontend Product format
 */
function transformMedusaProduct(medusaProduct: any): Product {
  const variant = medusaProduct.variants?.[0];
  const price = variant?.prices?.find((p: any) => p.currency_code === "npr") || variant?.prices?.[0];
  const priceAmount = price?.amount || 0;

  // Get category from the product's categories
  const category = medusaProduct.categories?.[0];
  const categoryName = category?.name || "Uncategorized";
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");

  // Extract metadata specs
  const metadata = medusaProduct.metadata || {};
  const specs: Record<string, string> = {};

  // Map metadata keys to display names
  const metadataKeyMap: Record<string, string> = {
    battery_type: "Battery Type",
    capacity: "Capacity",
    output_power: "Output Power",
    cycle_life: "Cycle Life",
    charging: "Charging",
    ups: "UPS",
    weight: "Weight",
    warranty: "Warranty",
    voltage: "Voltage",
    communication: "Communication",
    compatible_inverters: "Compatible Inverters",
    expandable: "Expandable",
    max_current: "Max Current",
    rated_output: "Rated Output Power",
    solar_input: "Solar Input",
    dc_ac_ratio: "DC/AC Ratio",
    built_in_inverter: "Built-in Inverter",
    built_in_mppt: "Built-in MPPT",
    power: "Power",
    cell_type: "Cell Type",
    connector: "Connector",
    waterproof: "Waterproof",
    foldable: "Foldable",
  };

  for (const [key, value] of Object.entries(metadata)) {
    const displayKey = metadataKeyMap[key] || key;
    if (typeof value === "string") {
      specs[displayKey] = value;
    }
  }

  // Generate features from specs
  const features: string[] = [];
  if (specs["Battery Type"]) features.push(`${specs["Battery Type"]} battery technology`);
  if (specs["Capacity"]) features.push(`${specs["Capacity"]} storage capacity`);
  if (specs["Cycle Life"]) features.push(`${specs["Cycle Life"]} cycle battery life`);
  if (specs["Warranty"]) features.push(`${specs["Warranty"]} warranty`);
  if (specs["Output Power"]) features.push(`${specs["Output Power"]} output`);
  if (specs["Expandable"]) features.push(`Expandable: ${specs["Expandable"]}`);

  // Determine badge based on product handle or category
  let badge: string | undefined;
  if (medusaProduct.handle === "heroee-1") badge = "Best Seller";
  else if (medusaProduct.handle === "heroee-2") badge = "Popular";
  else if (medusaProduct.handle === "heroee-8") badge = "Professional";
  else if (medusaProduct.handle === "heroee-16") badge = "Premium";
  else if (medusaProduct.handle === "heroee-maxpower-8-aio") badge = "All-In-One";

  return {
    id: medusaProduct.id,
    handle: medusaProduct.handle,
    title: medusaProduct.title?.replace(/—.*$/, "").trim() || medusaProduct.handle,
    description: medusaProduct.description || "",
    price: priceAmount,
    currency: "NPR",
    priceFormatted: `NPR ${priceAmount.toLocaleString()}`,
    category: categoryName,
    categorySlug,
    image: medusaProduct.thumbnail || `/images/products/${medusaProduct.handle}.jpg`,
    badge,
    specs,
    features,
    inStock: variant?.inventory_quantity > 0 || true,
  };
}

/**
 * Fetch all products from the Medusa backend
 * @throws {BackendUnavailableError} When the backend is unavailable
 */
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${MEDUSA_BACKEND_URL}/store/products?limit=100`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new BackendUnavailableError(`Backend returned status ${response.status}`);
    }

    const data = await response.json();
    const medusaProducts = data.products || [];

    if (medusaProducts.length === 0) {
      throw new BackendUnavailableError("No products found in the backend database");
    }

    return medusaProducts.map(transformMedusaProduct);
  } catch (error) {
    if (error instanceof BackendUnavailableError) {
      throw error;
    }
    throw new BackendUnavailableError(
      error instanceof Error ? error.message : "Failed to connect to backend"
    );
  }
}

/**
 * Fetch a single product by handle from the Medusa backend
 * @throws {BackendUnavailableError} When the backend is unavailable
 */
export async function fetchProductByHandle(handle: string): Promise<Product | undefined> {
  try {
    const response = await fetch(`${MEDUSA_BACKEND_URL}/store/products?handle=${handle}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new BackendUnavailableError(`Backend returned status ${response.status}`);
    }

    const data = await response.json();
    const medusaProduct = data.products?.[0];

    if (!medusaProduct) {
      return undefined; // Product not found is not a backend error
    }

    return transformMedusaProduct(medusaProduct);
  } catch (error) {
    if (error instanceof BackendUnavailableError) {
      throw error;
    }
    throw new BackendUnavailableError(
      error instanceof Error ? error.message : "Failed to connect to backend"
    );
  }
}

/**
 * Fetch products by category
 * @throws {BackendUnavailableError} When the backend is unavailable
 */
export async function fetchProductsByCategory(categorySlug: string): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter((p) => p.categorySlug === categorySlug);
}

/**
 * Fetch all product categories from the Medusa backend
 * @throws {BackendUnavailableError} When the backend is unavailable
 */
export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${MEDUSA_BACKEND_URL}/store/product-categories`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new BackendUnavailableError(`Backend returned status ${response.status}`);
    }

    const data = await response.json();
    const medusaCategories = data.product_categories || [];

    // Fetch all products to count per category
    const products = await fetchProducts();

    return medusaCategories.map((cat: any) => {
      const slug = cat.name.toLowerCase().replace(/\s+/g, "-");
      const productCount = products.filter((p) => p.categorySlug === slug).length;

      return {
        name: cat.name,
        slug,
        description: cat.description || "",
        productCount,
      };
    });
  } catch (error) {
    if (error instanceof BackendUnavailableError) {
      throw error;
    }
    throw new BackendUnavailableError(
      error instanceof Error ? error.message : "Failed to connect to backend"
    );
  }
}

/**
 * Get product handles for static generation
 * Returns empty array - pages will be generated on-demand
 */
export function getStaticProductHandles(): string[] {
  return [];
}
