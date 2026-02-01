import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyHithium } from "@/components/home/WhyHithium";
import { UseCases } from "@/components/home/UseCases";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <WhyHithium />
      <UseCases />
      <CTASection />
    </>
  );
}
