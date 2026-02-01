/**
 * Static product data for the storefront.
 * In production, this is fetched from the Medusa backend.
 * This serves as fallback data and for SSG/preview.
 */

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

export const products: Product[] = [
  {
    id: "heroee-1",
    handle: "heroee-1",
    title: "HiTHIUM HeroEE 1",
    description:
      "1kWh Portable Power Station — Eco-friendly energy backup with LiFePO₄ battery (10,000+ cycles). 200W pure sine wave output, solar + AC charging, and built-in UPS functionality.",
    price: 29900,
    currency: "BDT",
    priceFormatted: "৳29,900",
    category: "Portable Power Stations",
    categorySlug: "portable-power-stations",
    image: "/images/products/heroee-1.jpg",
    badge: "Best Seller",
    specs: {
      "Battery Type": "LiFePO₄ (LFP)",
      Capacity: "1000Wh (1kWh)",
      "Output Power": "200W Pure Sine Wave",
      "Cycle Life": "10,000+",
      Charging: "Solar + AC",
      UPS: "Built-in",
      Weight: "12kg",
      Warranty: "5 Years",
    },
    features: [
      "LiFePO₄ battery with 10,000+ cycle life",
      "200W pure sine wave AC output",
      "Dual charging: Solar + AC",
      "Built-in UPS functionality",
      "Compact & portable (12kg)",
      "LED display with battery status",
      "Multiple output ports (AC, USB-A, USB-C, 12V DC)",
      "5-year warranty",
    ],
    inStock: true,
  },
  {
    id: "heroee-2",
    handle: "heroee-2",
    title: "HiTHIUM HeroEE 2",
    description:
      "2kWh Home Backup System — 1000W output with premium LiFePO₄ 314Ah cells and 11,000 cycle life. Perfect for home backup during load shedding.",
    price: 78800,
    currency: "BDT",
    priceFormatted: "৳78,800",
    category: "Portable Power Stations",
    categorySlug: "portable-power-stations",
    image: "/images/products/heroee-2.jpg",
    badge: "Popular",
    specs: {
      "Battery Type": "LiFePO₄ (LFP) 314Ah Cells",
      Capacity: "2048Wh (2kWh)",
      "Output Power": "1000W",
      "Cycle Life": "11,000",
      Charging: "Solar + AC",
      UPS: "Built-in",
      Warranty: "5 Years",
    },
    features: [
      "Premium LiFePO₄ 314Ah cells",
      "1000W pure sine wave output",
      "11,000 cycle battery life",
      "Home backup during load shedding",
      "Solar + AC dual charging",
      "Built-in UPS for seamless switchover",
      "LCD display with real-time monitoring",
      "5-year comprehensive warranty",
    ],
    inStock: true,
  },
  {
    id: "heroee-8",
    handle: "heroee-8",
    title: "HiTHIUM HeroEE 8",
    description:
      "8kWh Energy Storage System — High-performance LiFePO₄ system for residential and commercial use. Intelligent BMS with CAN/RS485/RS232 communication, compatible with Victron, Deye, SMA, GoodWe.",
    price: 165000,
    currency: "BDT",
    priceFormatted: "৳165,000",
    category: "Energy Storage Systems",
    categorySlug: "energy-storage-systems",
    image: "/images/products/heroee-8.jpg",
    badge: "Professional",
    specs: {
      "Battery Type": "LiFePO₄ (LFP)",
      Capacity: "8192Wh (8kWh)",
      Voltage: "51.2V",
      "Cycle Life": "11,000+",
      Communication: "CAN/RS485/RS232, WiFi/Bluetooth (optional)",
      "Compatible Inverters": "Victron, Deye, SMA, GoodWe",
      Expandable: "Up to 16 units (128kWh)",
      Warranty: "10 Years",
    },
    features: [
      "8kWh high-capacity LiFePO₄ battery",
      "51.2V system voltage",
      "11,000+ cycle life for decade-long service",
      "Intelligent BMS with comprehensive protection",
      "CAN/RS485/RS232 communication ports",
      "Optional WiFi/Bluetooth connectivity",
      "Compatible with major inverter brands",
      "Expandable up to 128kWh (16 units parallel)",
      "10-year warranty",
    ],
    inStock: true,
  },
  {
    id: "heroee-16",
    handle: "heroee-16",
    title: "HiTHIUM HeroEE 16",
    description:
      "16kWh LiFePO₄ Battery Pack — Premium energy storage with 314Ah cells, 200A max charge/discharge, expandable up to 256kWh. Designed for solar integration and reliable home/commercial storage.",
    price: 306000,
    currency: "BDT",
    priceFormatted: "৳306,000",
    category: "Energy Storage Systems",
    categorySlug: "energy-storage-systems",
    image: "/images/products/heroee-16.jpg",
    badge: "Premium",
    specs: {
      "Battery Type": "LiFePO₄ (LFP) 314Ah Cells",
      Capacity: "16076.8Wh (16kWh)",
      Voltage: "51.2V (43.2–56.8V range)",
      "Max Current": "200A charge/discharge",
      "Cycle Life": "11,000",
      Expandable: "Up to 16 units (256kWh)",
      Communication: "CAN/RS485/RS232",
      Warranty: "10 Years",
    },
    features: [
      "16kWh massive capacity with 314Ah cells",
      "200A max charge/discharge current",
      "51.2V nominal (43.2–56.8V range)",
      "11,000 cycle battery life",
      "Expandable up to 256kWh (16 units parallel)",
      "Intelligent BMS with cell balancing",
      "CAN/RS485/RS232 communication",
      "Designed for solar integration",
      "10-year warranty",
    ],
    inStock: true,
  },
  {
    id: "heroee-maxpower-8-aio",
    handle: "heroee-maxpower-8-aio",
    title: "HiTHIUM HeroEE MaxPower 8 AIO",
    description:
      "8kWh All-In-One Energy Storage System — Integrates inverter, battery, and MPPT in a single unit. 5kW rated output (38% above comparable 3.6kW units), up to 9kW solar input with 180% DC/AC ratio, and expandable to 128kWh.",
    price: 245000,
    currency: "BDT",
    priceFormatted: "৳245,000",
    category: "Energy Storage Systems",
    categorySlug: "energy-storage-systems",
    image: "/images/products/heroee-maxpower-8-aio.jpg",
    badge: "All-In-One",
    specs: {
      "Battery Type": "LiFePO₄ (LFP) 314Ah Cells",
      Capacity: "8038.4Wh (8kWh)",
      Voltage: "25.6V (8S1P)",
      "Rated Output Power": "5,000W (5kW)",
      "Solar Input": "Up to 9,000W (9kW)",
      "DC/AC Ratio": "180%",
      "Cycle Life": "11,000",
      "Built-in Inverter": "Yes (Pure Sine Wave)",
      "Built-in MPPT": "Yes",
      Expandable: "Up to 16 units (128kWh)",
      Warranty: "10 Years",
    },
    features: [
      "3-in-1 design: Inverter + Battery + MPPT in one unit",
      "5kW rated output — 38% above comparable 3.6kW systems",
      "180% DC/AC ratio — up to 9kW solar input",
      "Premium LiFePO₄ 314Ah cells (8S1P configuration)",
      "11,000 cycle battery life",
      "Expandable from 8kWh to 128kWh",
      "Easy installation — no separate inverter needed",
      "Maintenance-free modular design",
      "Supports 80% PV oversizing",
      "10-year warranty",
    ],
    inStock: true,
  },
  {
    id: "solar-200w",
    handle: "hithium-solar-200w",
    title: "HiTHIUM 200W Solar Panel",
    description:
      "200W Portable Solar Folding Panel (MD23-CS200E) — High-efficiency monocrystalline cells, foldable & lightweight, IP65 waterproof. Perfect for pairing with HeroEE power stations.",
    price: 23950,
    currency: "BDT",
    priceFormatted: "৳23,950",
    category: "Solar Accessories",
    categorySlug: "solar-accessories",
    image: "/images/products/solar-200w.jpg",
    specs: {
      Power: "200W",
      "Cell Type": "Monocrystalline",
      Connector: "MC4",
      Waterproof: "IP65",
      Foldable: "Yes",
      Warranty: "2 Years",
    },
    features: [
      "200W high-efficiency monocrystalline cells",
      "Foldable & portable design",
      "IP65 waterproof rating",
      "MC4 connectors for universal compatibility",
      "Adjustable kickstand for optimal angle",
      "Pairs perfectly with HeroEE power stations",
      "2-year warranty",
    ],
    inStock: true,
  },
];

export const categories = [
  {
    name: "Energy Storage Systems",
    slug: "energy-storage-systems",
    description: "Residential and commercial LiFePO₄ energy storage systems",
    productCount: 3,
  },
  {
    name: "Portable Power Stations",
    slug: "portable-power-stations",
    description: "Compact HiTHIUM HeroEE portable power solutions",
    productCount: 2,
  },
  {
    name: "Solar Accessories",
    slug: "solar-accessories",
    description: "Portable solar panels and charging accessories",
    productCount: 1,
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}
