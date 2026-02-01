"use client";

import Link from "next/link";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { ShoppingCart, ArrowRight, Zap } from "lucide-react";
import { products } from "@/lib/data";

export function FeaturedProducts() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <Chip color="primary" variant="flat" className="mb-4">
            Our Products
          </Chip>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            HiTHIUM HeroEE Series
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From compact portable power stations to whole-home energy storage systems.
            All powered by premium LiFePO₄ cells with industry-leading cycle life.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="card-hover border border-gray-100"
              shadow="sm"
            >
              <CardBody className="p-0">
                {/* Image placeholder */}
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  {product.badge && (
                    <Chip
                      color="primary"
                      size="sm"
                      className="absolute top-3 left-3 z-10"
                    >
                      {product.badge}
                    </Chip>
                  )}
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-hithium-primary mx-auto mb-2" />
                    <p className="text-sm text-gray-500 font-medium">
                      {product.specs.Capacity || product.specs.Power}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Chip size="sm" variant="flat" color="secondary">
                      {product.category}
                    </Chip>
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {product.description}
                  </p>

                  {/* Key specs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs["Cycle Life"] && (
                      <Chip size="sm" variant="dot" color="success">
                        {product.specs["Cycle Life"]} cycles
                      </Chip>
                    )}
                    {product.specs.Warranty && (
                      <Chip size="sm" variant="dot" color="warning">
                        {product.specs.Warranty} warranty
                      </Chip>
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
                  color="primary"
                  variant="flat"
                  className="flex-1 font-semibold"
                  endContent={<ArrowRight className="w-4 h-4" />}
                >
                  View Details
                </Button>
                <Button
                  isIconOnly
                  color="primary"
                  variant="solid"
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
            color="primary"
            variant="bordered"
            size="lg"
            className="font-semibold px-8"
            endContent={<ArrowRight className="w-4 h-4" />}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
