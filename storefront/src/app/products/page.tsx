import React from "react";
import ProductsClient from "@/components/products/ProductsClient";
import { fetchProducts, fetchCategories } from "@/lib/api";

export default async function Page() {
  // Fetch products and categories from the backend
  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);

  return (
    <React.Suspense
      fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">Loading...</div>}
    >
      <ProductsClient products={products} categories={categories} />
    </React.Suspense>
  );
}
