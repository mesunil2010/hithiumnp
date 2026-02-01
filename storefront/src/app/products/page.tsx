"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Select,
  SelectItem,
  Input,
  Breadcrumbs,
  BreadcrumbItem,
} from "@heroui/react";
import { ShoppingCart, ArrowRight, Zap, Search, SlidersHorizontal } from "lucide-react";
import { products, categories } from "@/lib/data";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.categorySlug === selectedCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Products</BreadcrumbItem>
      </Breadcrumbs>

      {/* Page header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          HiTHIUM Products
        </h1>
        <p className="text-gray-600">
          Browse our complete range of energy storage solutions and accessories.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onValueChange={setSearchQuery}
          startContent={<Search className="w-4 h-4 text-gray-400" />}
          className="sm:max-w-xs"
          variant="bordered"
        />

        <div className="flex gap-2 flex-wrap">
          <Chip
            color={selectedCategory === "all" ? "primary" : "default"}
            variant={selectedCategory === "all" ? "solid" : "bordered"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory("all")}
          >
            All ({products.length})
          </Chip>
          {categories.map((cat) => (
            <Chip
              key={cat.slug}
              color={selectedCategory === cat.slug ? "primary" : "default"}
              variant={selectedCategory === cat.slug ? "solid" : "bordered"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(cat.slug)}
            >
              {cat.name} ({cat.productCount})
            </Chip>
          ))}
        </div>

        <Select
          label="Sort by"
          selectedKeys={[sortBy]}
          onChange={(e) => setSortBy(e.target.value)}
          className="sm:max-w-[180px] ml-auto"
          variant="bordered"
          size="sm"
        >
          <SelectItem key="default">Default</SelectItem>
          <SelectItem key="price-low">Price: Low to High</SelectItem>
          <SelectItem key="price-high">Price: High to Low</SelectItem>
        </Select>
      </div>

      {/* Product grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <Zap className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No products found.</p>
          <Button
            color="primary"
            variant="light"
            className="mt-4"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="card-hover border border-gray-100"
              shadow="sm"
            >
              <CardBody className="p-0">
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

                <div className="p-5">
                  <Chip size="sm" variant="flat" color="secondary" className="mb-2">
                    {product.category}
                  </Chip>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {product.description}
                  </p>
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
      )}
    </div>
  );
}
