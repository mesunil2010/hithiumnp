/**
 * API functions to fetch data from the Medusa backend.
 * These functions handle the connection to the backend and transform
 * the Medusa data format to our frontend Product interface.
 */

import { medusa, MEDUSA_BACKEND_URL } from "./medusa";
import { Product, products as staticProducts, categories as staticCategories } from "./data";

// Re-export types
export type { Product };

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
      console.warn("Failed to fetch products from backend, using static data");
      return staticProducts;
    }

    const data = await response.json();
    const medusaProducts = data.products || [];

    if (medusaProducts.length === 0) {
      console.warn("No products returned from backend, using static data");
      return staticProducts;
    }

    return medusaProducts.map(transformMedusaProduct);
  } catch (error) {
    console.warn("Error fetching products from backend:", error);
    return staticProducts;
  }
}

/**
 * Fetch a single product by handle from the Medusa backend
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
      console.warn(`Failed to fetch product ${handle} from backend, using static data`);
      return staticProducts.find((p) => p.handle === handle);
    }

    const data = await response.json();
    const medusaProduct = data.products?.[0];

    if (!medusaProduct) {
      console.warn(`Product ${handle} not found in backend, checking static data`);
      return staticProducts.find((p) => p.handle === handle);
    }

    return transformMedusaProduct(medusaProduct);
  } catch (error) {
    console.warn(`Error fetching product ${handle}:`, error);
    return staticProducts.find((p) => p.handle === handle);
  }
}

/**
 * Fetch products by category
 */
export async function fetchProductsByCategory(categorySlug: string): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter((p) => p.categorySlug === categorySlug);
}

/**
 * Fetch all product categories from the Medusa backend
 */
export async function fetchCategories() {
  try {
    const response = await fetch(`${MEDUSA_BACKEND_URL}/store/product-categories`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      console.warn("Failed to fetch categories from backend, using static data");
      return staticCategories;
    }

    const data = await response.json();
    const medusaCategories = data.product_categories || [];

    if (medusaCategories.length === 0) {
      return staticCategories;
    }

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
    console.warn("Error fetching categories from backend:", error);
    return staticCategories;
  }
}

/**
 * Get product handles for static generation
 * Uses static data to ensure all product pages are generated
 */
export function getStaticProductHandles(): string[] {
  return staticProducts.map((p) => p.handle);
}

/**
 * Get static product data - useful for fallback and SSG
 */
export function getStaticProducts(): Product[] {
  return staticProducts;
}

/**
 * Get static categories
 */
export function getStaticCategories() {
  return staticCategories;
}
