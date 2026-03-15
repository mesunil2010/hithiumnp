/**
 * API functions to fetch data from the Medusa backend.
 * These functions handle the connection to the backend and transform
 * the Medusa data format to our frontend Product interface.
 *
 * NOTE: These functions will throw errors if the backend is unavailable.
 * The app should handle these errors with appropriate error boundaries.
 */

import { MEDUSA_BACKEND_URL, PUBLISHABLE_KEY } from "./medusa";

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
  variants?: any[]; // Keep original variants for potential future use
}

/**
 * Merge API product with static pricing data as fallback
 */
function enrichProductWithPricing(apiProduct: Product): Product {

  const variant = apiProduct.variants?.[0];
  
  // Get price from calculated_price (correct source)
  const priceAmount = variant?.calculated_price?.calculated_amount ?? 0;

  // Ensure price formatting is correct
  if (priceAmount > 0 && !apiProduct.priceFormatted) {
    apiProduct.price = priceAmount;
    apiProduct.priceFormatted = `${apiProduct.currency} ${priceAmount.toLocaleString()}`;
  }

  return apiProduct;
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
 * Fetch the first region ID from Medusa (needed for pricing context)
 */
let cachedRegionId: string | null = null;
async function getRegionId(): Promise<string | null> {
  if (cachedRegionId) return cachedRegionId;
  try {
    const response = await fetch(`${MEDUSA_BACKEND_URL}/store/regions`, {
      headers: {
        "x-publishable-api-key": PUBLISHABLE_KEY || "",
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 },
    });
    if (!response.ok) return null;
    const data = await response.json();
    cachedRegionId = data.regions?.[0]?.id || null;
    return cachedRegionId;
  } catch {
    return null;
  }
}

/**
 * Transform Medusa product data to our frontend Product format
 */
function transformMedusaProduct(medusaProduct: any): Product {
  const variant = medusaProduct.variants?.[0];
  // Medusa v2: calculated_price is returned when currency_code/region_id is passed
  // Fall back to raw prices array if calculated_price is not present
  const calculatedPrice = variant?.calculated_price?.calculated_amount;
  const rawPrice = variant?.prices?.find((p: any) => p.currency_code === "npr")?.amount
    || variant?.prices?.[0]?.amount;
  const priceAmount = calculatedPrice ?? rawPrice ?? 0;

  // Get category from the product's categories
  const category = medusaProduct.categories?.[0];
  const categoryName = category?.name || "Uncategorized";
  const categorySlug = category?.handle || categoryName.toLowerCase().replace(/\s+/g, "-");

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

  // Rewrite image URL so the Next.js server (inside Docker) can reach the backend.
  // Thumbnails are stored as http://localhost:9000/... but inside Docker the backend
  // is reachable at MEDUSA_BACKEND_URL (e.g. http://backend:9000).
  let imageUrl = medusaProduct.thumbnail || `/images/products/${medusaProduct.handle}.jpg`;
  if (imageUrl.startsWith("http://localhost:9000")) {
    imageUrl = imageUrl.replace("http://localhost:9000", MEDUSA_BACKEND_URL);
  }

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
    image: imageUrl,
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
    const regionId = await getRegionId();
    const params = new URLSearchParams({ limit: "100", fields: "*categories" });
    if (regionId) params.set("region_id", regionId);

    const response = await fetch(`${MEDUSA_BACKEND_URL}/store/products?${params}`, {
      headers: {
        "Content-Type": "application/json",
        "x-publishable-api-key": PUBLISHABLE_KEY || "",
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error("Failed to fetch products from backend:", response.status, response.statusText);
      throw new BackendUnavailableError(`Backend returned status ${response.status}`);
    }

    const data = await response.json();
    const medusaProducts = data.products || [];

    if (medusaProducts.length === 0) {
      throw new BackendUnavailableError("No products found in the backend database");
    }

    return medusaProducts.map(transformMedusaProduct).map(enrichProductWithPricing);
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
    const regionId = await getRegionId();
    const params = new URLSearchParams({ handle, fields: "*categories" });
    if (regionId) params.set("region_id", regionId);

    const response = await fetch(`${MEDUSA_BACKEND_URL}/store/products?${params}`, {
      headers: {
        "x-publishable-api-key": PUBLISHABLE_KEY || "",
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

    return enrichProductWithPricing(transformMedusaProduct(medusaProduct));
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
        "x-publishable-api-key": PUBLISHABLE_KEY || "",
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
      const slug = cat.handle || cat.name.toLowerCase().replace(/\s+/g, "-");
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
