import { NextResponse } from "next/server";
import { fetchProducts, fetchCategories, BackendUnavailableError } from "@/lib/api";

export async function GET() {
  try {
    const [products, categories] = await Promise.all([
      fetchProducts(),
      fetchCategories(),
    ]);

    return NextResponse.json({
      products,
      categories,
    });
  } catch (error) {
    console.error("Error fetching products:", error);

    const isBackendError = error instanceof BackendUnavailableError;
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error: isBackendError
          ? "Backend service is unavailable. Please try again later."
          : "Failed to fetch products",
        details: message,
      },
      { status: isBackendError ? 503 : 500 }
    );
  }
}
