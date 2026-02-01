import React from "react";
import ProductsClient from "@/components/products/ProductsClient";

export default function Page() {
  return (
    <React.Suspense
      fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">Loading...</div>}
    >
      <ProductsClient />
    </React.Suspense>
  );
}
