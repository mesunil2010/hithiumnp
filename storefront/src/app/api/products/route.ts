import { NextResponse } from "next/server";
import { fetchProducts, fetchCategories } from "@/lib/api";

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
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
