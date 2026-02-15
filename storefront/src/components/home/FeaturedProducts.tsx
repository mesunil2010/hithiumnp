"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Chip, Divider } from "@heroui/react";
import { ShoppingCart, ArrowRight, Battery, Check, Zap, Shield, RotateCcw, Tag } from "lucide-react";
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
    <div className="relative group h-full min-h-[580px] rounded-3xl overflow-hidden bg-[#0a0f1c] border border-white/[0.07]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hithium-primary/50 to-transparent" />
      {/* Single ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-hithium-primary/10 rounded-full blur-[100px]" />

      <div className="relative h-full p-8 lg:p-10 flex flex-col">
        {/* Badge row */}
        <div className="flex items-center justify-between mb-6">
          {product.badge && (
            <Chip
              size="sm"
              className="bg-hithium-primary/20 text-hithium-cyan border border-hithium-primary/30 font-semibold text-xs"
              startContent={<Tag className="w-3 h-3" />}
            >
              {product.badge}
            </Chip>
          )}
          <Chip
            size="sm"
            className="bg-white/[0.06] text-slate-400 border border-white/[0.08] text-xs ml-auto"
            startContent={<Zap className="w-3 h-3" />}
          >
            {product.category}
          </Chip>
        </div>

        {/* Product Image */}
        <div className="flex-1 flex items-center justify-center py-6">
          <div className="relative w-56 h-56 lg:w-72 lg:h-72 float-animation">
            {!imageError ? (
              <Image
                src={`/images/products/${product.handle}.jpg`}
                alt={product.title}
                fill
                className="object-contain drop-shadow-2xl"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  <Battery className="w-32 h-32 text-slate-700" />
                  <Zap className="w-10 h-10 text-hithium-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          <div>
            <h3 className="font-display font-black text-3xl lg:text-4xl text-white mb-2">
              {product.title}
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {product.description}
            </p>
          </div>

          {/* Key specs */}
          <div className="flex items-center gap-5 pt-1">
            <div className="flex items-center gap-2 text-slate-300">
              <RotateCcw className="w-4 h-4 text-hithium-primary" />
              <span className="text-sm font-medium">{product.specs["Cycle Life"]} cycles</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2 text-slate-300">
              <Shield className="w-4 h-4 text-hithium-primary" />
              <span className="text-sm font-medium">{product.specs.Warranty}</span>
            </div>
          </div>

          <Divider className="bg-white/[0.07]" />

          {/* Price & CTA */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 mb-1">Starting from</p>
              <p className="font-display text-3xl font-black text-white">
                {product.priceFormatted}
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                as={Link}
                href={`/product/${product.handle}`}
                size="md"
                className="font-semibold bg-white text-hithium-dark hover:bg-gray-100 transition-colors"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                View Details
              </Button>
              <Button
                isIconOnly
                size="md"
                className={`transition-all duration-200 ${
                  isAdding
                    ? "bg-hithium-primary"
                    : "bg-white/[0.08] hover:bg-hithium-primary border border-white/[0.12]"
                } text-white`}
                onClick={handleAddToCart}
                aria-label="Add to cart"
              >
                {isAdding ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Compact Product Card
function CompactProductCard({ product }: { product: Product }) {
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

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image area */}
      <div className="relative h-40 bg-gray-50 flex items-center justify-center overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-xs font-semibold bg-hithium-dark text-white">
            {product.badge}
          </span>
        )}
        <div className="relative w-24 h-24 group-hover:scale-105 transition-transform duration-300">
          {!imageError ? (
            <Image
              src={`/images/products/${product.handle}.jpg`}
              alt={product.title}
              fill
              className="object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Battery className="w-14 h-14 text-gray-300" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-hithium-primary font-semibold mb-1.5">{product.category}</p>
        <h4 className="font-display font-bold text-gray-900 mb-1 text-sm leading-tight group-hover:text-hithium-primary transition-colors">
          {product.title}
        </h4>
        <p className="text-xs text-gray-400 mb-4">{product.specs.Capacity || product.specs.Power}</p>

        <div className="flex items-center justify-between">
          <p className="font-display text-lg font-black text-gray-900">
            {product.priceFormatted}
          </p>
          <Button
            isIconOnly
            size="sm"
            className={`${
              isAdding
                ? "bg-hithium-primary"
                : "bg-gray-900 hover:bg-hithium-primary"
            } text-white transition-colors`}
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            {isAdding ? <Check className="w-3.5 h-3.5" /> : <ShoppingCart className="w-3.5 h-3.5" />}
          </Button>
        </div>
      </div>

      {/* Hover overlay */}
      <Link
        href={`/product/${product.handle}`}
        className="absolute inset-0 flex items-center justify-center bg-hithium-dark/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="flex items-center gap-2 text-white font-semibold text-sm">
          View Details <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </div>
  );
}

// Horizontal Product Card
function HorizontalProductCard({ product }: { product: Product }) {
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

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="flex">
        {/* Image */}
        <div className="relative w-36 flex-shrink-0 bg-gray-50 flex items-center justify-center">
          {product.badge && (
            <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full text-xs font-semibold bg-hithium-dark text-white">
              {product.badge}
            </span>
          )}
          <div className="relative w-18 h-18 group-hover:scale-105 transition-transform duration-300 p-4">
            {!imageError ? (
              <Image
                src={`/images/products/${product.handle}.jpg`}
                alt={product.title}
                width={72}
                height={72}
                className="object-contain w-full h-full"
                onError={() => setImageError(true)}
              />
            ) : (
              <Battery className="w-10 h-10 text-gray-300" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col justify-between min-h-[88px]">
          <div>
            <p className="text-xs text-hithium-primary font-semibold mb-0.5">{product.category}</p>
            <h4 className="font-display font-bold text-gray-900 group-hover:text-hithium-primary transition-colors text-sm leading-tight">
              {product.title}
            </h4>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="font-display font-black text-gray-900 text-base">
              {product.priceFormatted}
            </p>
            <Button
              isIconOnly
              size="sm"
              className={`${isAdding ? "bg-hithium-primary" : "bg-gray-900 hover:bg-hithium-primary"} text-white transition-colors`}
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              {isAdding ? <Check className="w-3.5 h-3.5" /> : <ShoppingCart className="w-3.5 h-3.5" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const featuredProduct = products.find((p) => p.badge === "Best Seller") || products[0];
  const otherProducts = products.filter((p) => p.id !== featuredProduct?.id).slice(0, 4);

  if (!featuredProduct) return null;

  return (
    <section className="section-padding bg-[#f8f7f4] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-hithium-primary/3 rounded-full blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Battery className="w-4 h-4 text-hithium-primary" />
              HeroEE Series
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900">
              LiFePO&#x2084; Energy{" "}
              <br className="hidden sm:block" />
              Storage Systems
            </h2>
            <p className="text-gray-500 max-w-xl mt-3 text-base leading-relaxed">
              Industry-leading 11,000+ cycle life. From portable 1 kWh units to
              expandable 16 kWh home storage — choose the right capacity for your needs.
            </p>
          </div>
          <Button
            as={Link}
            href="/products"
            variant="bordered"
            className="mt-6 lg:mt-0 font-semibold px-6 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
            endContent={<ArrowRight className="w-4 h-4" />}
          >
            View All Products
          </Button>
        </div>

        {/* Asymmetric Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Hero Product - 7 columns */}
          <div className="lg:col-span-7">
            <HeroProductCard product={featuredProduct} />
          </div>

          {/* Other Products - 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Top two compact cards */}
            <div className="grid grid-cols-2 gap-4">
              {otherProducts.slice(0, 2).map((product) => (
                <CompactProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Next two horizontal cards */}
            {otherProducts.slice(2, 4).map((product) => (
              <HorizontalProductCard key={product.id} product={product} />
            ))}

            {/* Warranty banner */}
            <div className="rounded-2xl bg-hithium-dark border border-white/[0.05] p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-hithium-primary/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-hithium-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white text-sm">10-Year Warranty</p>
                <p className="text-slate-500 text-xs">On all HeroEE products</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
