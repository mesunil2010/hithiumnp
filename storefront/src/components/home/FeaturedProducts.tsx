"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import { ShoppingCart, ArrowRight, Battery, Check, Zap, Shield, RotateCcw } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/api";
import { useCart } from "@/lib/cart-context";

interface FeaturedProductsProps {
  products: Product[];
}

// Hero Product Card - Large featured card
function HeroProductCard({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product.handle, 1);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="relative group h-full min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-[#0f172a]">
      {/* Warm ambient glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-hithium-primary/20 rounded-full blur-[90px]" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-hithium-orange/15 rounded-full blur-[70px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative h-full p-8 lg:p-10 flex flex-col">
        {/* Top Badge */}
        <div className="flex items-center justify-between mb-6">
          <Chip
            size="lg"
            className="bg-hithium-orange text-white font-bold shadow-lg shadow-hithium-orange/25"
          >
            Featured Product
          </Chip>
          {product.badge && (
            <Chip
              size="sm"
              className="bg-white/10 text-white font-semibold border border-white/20"
            >
              {product.badge}
            </Chip>
          )}
        </div>

        {/* Product Image */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 float-animation">
            {!imageError ? (
              <Image
                src={`/images/products/${product.handle}.png`}
                alt={product.title}
                fill
                className="object-contain drop-shadow-2xl"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <Battery className="w-24 h-24 text-hithium-cyan mx-auto mb-4" />
                  <Zap className="w-8 h-8 text-hithium-orange mx-auto animate-pulse" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          <div>
            <Chip
              size="sm"
              variant="flat"
              className="bg-white/10 text-hithium-cyan text-xs font-semibold mb-3"
              startContent={<Zap className="w-3 h-3" />}
            >
              {product.category}
            </Chip>
            <h3 className="font-display font-black text-3xl lg:text-4xl text-white mb-2">
              {product.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Specs Row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-white/80">
              <RotateCcw className="w-5 h-5 text-hithium-cyan" />
              <span className="font-semibold">{product.specs["Cycle Life"]} cycles</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5 text-hithium-orange" />
              <span className="font-semibold">{product.specs.Warranty}</span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div>
              <p className="text-sm text-gray-500">Starting from</p>
              <p className="font-display text-4xl font-black text-white">
                {product.priceFormatted}
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                as={Link}
                href={`/product/${product.handle}`}
                size="lg"
                className="font-bold px-6 bg-white text-hithium-dark hover:bg-gray-50 transition-colors shadow-md"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                View Details
              </Button>
              <Button
                isIconOnly
                size="lg"
                className={`transition-all duration-300 ${
                  isAdding
                    ? "bg-green-500"
                    : "bg-hithium-orange hover:bg-orange-500 hover:scale-105"
                } text-white shadow-lg shadow-hithium-orange/25`}
                onClick={handleAddToCart}
              >
                {isAdding ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Compact Product Card
function CompactProductCard({ product, variant = "default" }: { product: Product; variant?: "default" | "horizontal" }) {
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

  const getBadgeStyle = (badge: string) => {
    const styles: Record<string, string> = {
      "Best Seller": "bg-gradient-to-r from-hithium-orange to-yellow-500",
      "Popular": "bg-gradient-to-r from-hithium-primary to-hithium-cyan",
      "Professional": "bg-gradient-to-r from-purple-500 to-pink-500",
      "Premium": "bg-gradient-to-r from-amber-500 to-orange-600",
    };
    return styles[badge] || "bg-gradient-to-r from-hithium-primary to-hithium-accent";
  };

  if (variant === "horizontal") {
    return (
      <div className="group relative bg-white rounded-2xl border border-gray-100 hover:border-hithium-primary/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="flex">
          {/* Image */}
          <div className="relative w-40 h-40 flex-shrink-0 bg-gradient-to-br from-gray-50 to-hithium-light/30 flex items-center justify-center">
            {product.badge && (
              <Chip
                size="sm"
                className={`absolute top-2 left-2 z-10 text-white font-bold text-xs ${getBadgeStyle(product.badge)}`}
              >
                {product.badge}
              </Chip>
            )}
            <div className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-500">
              {!imageError ? (
                <Image
                  src={`/images/products/${product.handle}.png`}
                  alt={product.title}
                  fill
                  className="object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                <Battery className="w-12 h-12 text-hithium-primary mx-auto" />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <p className="text-xs text-hithium-primary font-semibold mb-1">{product.category}</p>
              <h4 className="font-display font-bold text-gray-900 group-hover:text-hithium-primary transition-colors">
                {product.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">{product.specs.Capacity || product.specs.Power}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-display font-black text-lg text-hithium-primary">
                {product.priceFormatted}
              </p>
              <Button
                isIconOnly
                size="sm"
                className={`${isAdding ? "bg-green-500" : "bg-hithium-primary"} text-white`}
                onClick={handleAddToCart}
              >
                {isAdding ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 hover:border-hithium-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-hithium-light/30 flex items-center justify-center">
        {product.badge && (
          <Chip
            size="sm"
            className={`absolute top-3 left-3 z-10 text-white font-bold shadow-lg ${getBadgeStyle(product.badge)}`}
          >
            {product.badge}
          </Chip>
        )}
        <div className="relative w-28 h-28 group-hover:scale-110 transition-transform duration-500">
          {!imageError ? (
            <Image
              src={`/images/products/${product.handle}.png`}
              alt={product.title}
              fill
              className="object-contain drop-shadow-lg"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Battery className="w-16 h-16 text-hithium-primary" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <Chip
          size="sm"
          variant="flat"
          className="bg-hithium-light text-hithium-primary text-xs font-semibold mb-2"
        >
          {product.category}
        </Chip>
        <h4 className="font-display font-bold text-lg text-gray-900 mb-1 group-hover:text-hithium-primary transition-colors">
          {product.title}
        </h4>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <p className="font-display text-2xl font-black text-hithium-primary">
            {product.priceFormatted}
          </p>
          <Button
            isIconOnly
            className={`${isAdding ? "bg-green-500" : "bg-hithium-primary hover:bg-hithium-accent"} text-white shadow-md hover:scale-105 transition-transform`}
            onClick={handleAddToCart}
          >
            {isAdding ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* View Details Overlay */}
      <Link
        href={`/product/${product.handle}`}
        className="absolute inset-0 flex items-center justify-center bg-hithium-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="flex items-center gap-2 text-white font-bold">
          View Details <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </div>
  );
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  // Get the featured product (first one or best seller)
  const featuredProduct = products.find(p => p.badge === "Best Seller") || products[0];
  const otherProducts = products.filter(p => p.id !== featuredProduct?.id).slice(0, 4);

  if (!featuredProduct) return null;

  return (
    <section className="section-padding bg-hithium-gray relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-hithium-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-hithium-orange/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header - Left aligned */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hithium-primary/10 to-hithium-cyan/10 border border-hithium-primary/20 text-hithium-primary rounded-full px-5 py-2 text-sm font-bold mb-4">
              <Zap className="w-4 h-4" />
              Our Products
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900">
              HiTHIUM{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hithium-orange to-yellow-500">
                HeroEE
              </span>{" "}
              Series
            </h2>
            <p className="text-gray-500 max-w-xl mt-4 text-lg">
              Premium LiFePO&#x2084; energy storage systems with industry-leading 11,000+ cycle life.
            </p>
          </div>
          <Button
            as={Link}
            href="/products"
            variant="bordered"
            className="mt-6 lg:mt-0 font-bold px-6 border-2 border-hithium-primary text-hithium-primary hover:bg-hithium-primary hover:text-white transition-all"
            endContent={<ArrowRight className="w-4 h-4" />}
          >
            View All Products
          </Button>
        </div>

        {/* Asymmetric Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Hero Product - Takes 7 columns */}
          <div className="lg:col-span-7">
            <HeroProductCard product={featuredProduct} />
          </div>

          {/* Other Products - Takes 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Top two products in a grid */}
            <div className="grid grid-cols-2 gap-4">
              {otherProducts.slice(0, 2).map((product) => (
                <CompactProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Bottom two products as horizontal cards */}
            {otherProducts.slice(2, 4).map((product) => (
              <CompactProductCard key={product.id} product={product} variant="horizontal" />
            ))}

            {/* Quick Stats Banner */}
            <div className="bg-hithium-primary rounded-2xl p-6 text-white shadow-lg shadow-hithium-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">10-Year Warranty</p>
                    <p className="text-sm text-white/70">On all HeroEE products</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
