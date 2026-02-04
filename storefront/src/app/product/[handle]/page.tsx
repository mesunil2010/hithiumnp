import { notFound } from "next/navigation";
import { fetchProductByHandle, fetchProducts, getStaticProductHandles } from "@/lib/api";
import { ProductDetail } from "@/components/products/ProductDetail";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  // Use static handles for SSG to ensure all product pages are pre-rendered
  const handles = getStaticProductHandles();
  return handles.map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const product = await fetchProductByHandle(handle);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;

  // Fetch product and all products in parallel
  const [product, allProducts] = await Promise.all([
    fetchProductByHandle(handle),
    fetchProducts(),
  ]);

  if (!product) {
    notFound();
  }

  // Get related products from the same category
  const relatedProducts = allProducts.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  );

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
