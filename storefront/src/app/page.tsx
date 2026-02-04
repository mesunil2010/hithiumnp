import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyHithium } from "@/components/home/WhyHithium";
import { UseCases } from "@/components/home/UseCases";
import { CTASection } from "@/components/home/CTASection";
import { fetchProducts } from "@/lib/api";

export default async function HomePage() {
  // Fetch products from the backend
  const products = await fetchProducts();

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={products} />
      <WhyHithium />
      <UseCases />
      <CTASection />
    </>
  );
}
