"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { ShoppingCart, ArrowRight, Battery, Check, Zap } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/api";
import { useCart } from "@/lib/cart-context";

interface FeaturedProductsProps {
  products: Product[];
}

function ProductCard({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product.handle, 1);
    setTimeout(() => setIsAdding(false), 1000);
  };

  // Get badge styles based on badge type
  const getBadgeStyle = (badge: string) => {
    const styles: Record<string, string> = {
      "Best Seller": "bg-gradient-to-r from-hithium-orange to-yellow-500",
      "Popular": "bg-gradient-to-r from-hithium-primary to-hithium-cyan",
      "Professional": "bg-gradient-to-r from-purple-500 to-pink-500",
      "Premium": "bg-gradient-to-r from-amber-500 to-orange-600",
    };
    return styles[badge] || "bg-gradient-to-r from-hithium-primary to-hithium-accent";
  };

  return (
    <Card className="energy-card group overflow-hidden" shadow="none">
      <CardBody className="p-0">
        {/* Image Area */}
        <div className="relative h-64 bg-gradient-to-br from-gray-50 via-white to-hithium-light/30 flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0F62FE 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Badge */}
          {product.badge && (
            <Chip
              size="sm"
              className={`absolute top-4 left-4 z-10 text-white font-bold shadow-lg ${getBadgeStyle(product.badge)}`}
            >
              {product.badge}
            </Chip>
          )}

          {/* Product Image */}
          <div className="relative w-40 h-40 group-hover:scale-110 transition-transform duration-500">
            {!imageError ? (
              <Image
                src={`/images/products/${product.handle}.png`}
                alt={product.title}
                fill
                className="object-contain drop-shadow-xl"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-hithium-primary/10 to-hithium-cyan/10 border border-hithium-primary/20 flex items-center justify-center mb-3 group-hover:border-hithium-primary/40 transition-colors">
                  <Battery className="w-10 h-10 text-hithium-primary" />
                </div>
                <p className="text-sm font-bold text-hithium-primary">
                  {product.specs.Capacity || product.specs.Power}
                </p>
              </div>
            )}
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-hithium-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="flex items-center gap-2 mb-3">
            <Chip
              size="sm"
              variant="flat"
              className="bg-hithium-light text-hithium-primary text-xs font-semibold"
              startContent={<Zap className="w-3 h-3" />}
            >
              {product.category}
            </Chip>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl text-gray-900 mb-2 group-hover:text-hithium-primary transition-colors">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
            {product.description}
          </p>

          {/* Specs */}
          <div className="flex flex-wrap gap-2 mb-5">
            {product.specs["Cycle Life"] && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-hithium-primary/10 to-hithium-cyan/10 text-hithium-primary text-xs font-bold border border-hithium-primary/20">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {product.specs["Cycle Life"]} cycles
              </span>
            )}
            {product.specs.Warranty && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-hithium-orange/10 to-yellow-500/10 text-hithium-orange text-xs font-bold border border-hithium-orange/20">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                {product.specs.Warranty}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <p className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-hithium-primary to-hithium-cyan">
              {product.priceFormatted}
            </p>
            <span className="text-xs text-gray-400 font-medium">incl. VAT</span>
          </div>
        </div>
      </CardBody>

      <CardFooter className="pt-0 px-6 pb-6 gap-3">
        <Button
          as={Link}
          href={`/product/${product.handle}`}
          variant="flat"
          className="flex-1 font-bold bg-gradient-to-r from-hithium-light to-hithium-primary/10 text-hithium-primary hover:from-hithium-primary/20 hover:to-hithium-cyan/20 border border-hithium-primary/20 hover:border-hithium-primary/40 transition-all duration-300"
          endContent={<ArrowRight className="w-4 h-4" />}
        >
          View Details
        </Button>
        <Button
          isIconOnly
          className={`transition-all duration-300 ${
            isAdding
              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30"
              : "bg-gradient-to-r from-hithium-primary to-hithium-cyan text-white shadow-lg shadow-hithium-primary/30 hover:shadow-xl hover:shadow-hithium-primary/40 hover:scale-105"
          }`}
          aria-label="Add to cart"
          onClick={handleAddToCart}
        >
          {isAdding ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="section-padding bg-hithium-gray relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-hithium-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-hithium-orange/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hithium-primary/10 to-hithium-cyan/10 border border-hithium-primary/20 text-hithium-primary rounded-full px-5 py-2 text-sm font-bold mb-6">
            <Zap className="w-4 h-4" />
            Our Products
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 mb-5">
            HiTHIUM{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hithium-orange to-yellow-500">
              HeroEE
            </span>{" "}
            Series
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From compact portable power stations to whole-home energy storage systems.
            All powered by premium <span className="text-hithium-primary font-semibold">LiFePO&#x2084;</span> cells
            with industry-leading cycle life.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Button
            as={Link}
            href="/products"
            size="lg"
            className="font-bold px-10 py-6 bg-gradient-to-r from-hithium-primary to-hithium-cyan text-white shadow-xl shadow-hithium-primary/25 hover:shadow-2xl hover:shadow-hithium-primary/35 hover:scale-105 transition-all duration-300"
            endContent={<ArrowRight className="w-5 h-5" />}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
