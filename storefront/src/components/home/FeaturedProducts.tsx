"use client";

import Link from "next/link";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { ShoppingCart, ArrowRight, Battery } from "lucide-react";
import { products } from "@/lib/data";

export function FeaturedProducts() {
  return (
    <section className="section-padding bg-hithium-gray">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-hithium-light text-hithium-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Our Products
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            HiTHIUM <span className="text-hithium-orange">HeroEE</span> Series
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From compact portable power stations to whole-home energy storage systems.
            All powered by premium LiFePO&#x2084; cells with industry-leading cycle life.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="card-hover bg-white border border-gray-100"
              shadow="sm"
            >
              <CardBody className="p-0">
                {/* Image placeholder */}
                <div className="relative h-56 bg-gradient-to-br from-hithium-light to-white flex items-center justify-center">
                  {product.badge && (
                    <Chip
                      size="sm"
                      className="absolute top-3 left-3 z-10 bg-hithium-primary text-white font-medium"
                    >
                      {product.badge}
                    </Chip>
                  )}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-white border border-hithium-primary/10 flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <Battery className="w-8 h-8 text-hithium-primary" />
                    </div>
                    <p className="text-sm text-gray-400 font-medium">
                      {product.specs.Capacity || product.specs.Power}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Chip size="sm" variant="flat" className="bg-gray-100 text-gray-600 text-xs">
                      {product.category}
                    </Chip>
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                    {product.description}
                  </p>

                  {/* Key specs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs["Cycle Life"] && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-hithium-light text-hithium-primary text-xs font-medium">
                        {product.specs["Cycle Life"]} cycles
                      </span>
                    )}
                    {product.specs.Warranty && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-hithium-orange/10 text-hithium-orange text-xs font-medium">
                        {product.specs.Warranty} warranty
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <p className="font-display text-2xl font-bold text-hithium-primary">
                    {product.priceFormatted}
                  </p>
                </div>
              </CardBody>

              <CardFooter className="pt-0 px-5 pb-5 gap-2">
                <Button
                  as={Link}
                  href={`/product/${product.handle}`}
                  variant="flat"
                  className="flex-1 font-semibold bg-hithium-light text-hithium-primary hover:bg-hithium-primary/15"
                  endContent={<ArrowRight className="w-4 h-4" />}
                >
                  View Details
                </Button>
                <Button
                  isIconOnly
                  className="bg-hithium-primary text-white"
                  aria-label="Add to cart"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button
            as={Link}
            href="/products"
            variant="bordered"
            size="lg"
            className="font-semibold px-8 border-hithium-primary text-hithium-primary hover:bg-hithium-primary hover:text-white"
            endContent={<ArrowRight className="w-4 h-4" />}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
