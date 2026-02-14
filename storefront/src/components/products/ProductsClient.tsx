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
import { ShoppingCart, ArrowRight, Zap, Search, Check } from "lucide-react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/lib/api";
import { useCart } from "@/lib/cart-context";

interface Category {
  name: string;
  slug: string;
  description: string;
  productCount: number;
}

interface ProductsClientProps {
  products: Product[];
  categories: Category[];
}

function ProductCard({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product.handle, 1);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Card
      className="card-hover border border-gray-100"
      shadow="sm"
    >
      <CardBody className="p-0">
        <div className="relative h-56 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
          {product.badge && (
            <Chip
              size="sm"
              className="absolute top-3 left-3 z-10 bg-hithium-primary text-white font-medium"
            >
              {product.badge}
            </Chip>
          )}
          <div className="text-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mx-auto mb-2 shadow-lg">
              <Zap className="w-7 h-7 text-hithium-accent" />
            </div>
            <p className="text-sm text-gray-500 font-medium">
              {product.specs.Capacity || product.specs.Power}
            </p>
          </div>
        </div>

        <div className="p-5">
          <Chip size="sm" variant="flat" className="mb-2 bg-hithium-dark/5 text-hithium-dark text-xs">
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
          variant="flat"
          className="flex-1 font-semibold bg-hithium-primary/10 text-hithium-primary hover:bg-hithium-primary/15"
          endContent={<ArrowRight className="w-4 h-4" />}
        >
          View Details
        </Button>
        <Button
          isIconOnly
          className={isAdding ? "bg-green-500 text-white" : "bg-hithium-orange text-white hover:bg-orange-500"}
          aria-label="Add to cart"
          onClick={handleAddToCart}
        >
          {isAdding ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ProductsClient({ products, categories }: ProductsClientProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get("category") || "all";

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
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Products</BreadcrumbItem>
      </Breadcrumbs>

      <div className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          HiTHIUM Products
        </h1>
        <p className="text-gray-600">
          Browse our complete range of energy storage solutions and accessories.
        </p>
      </div>

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
          placeholder="Sort by"
          selectedKeys={[sortBy]}
          onChange={(e) => setSortBy(e.target.value)}
          className="sm:max-w-[180px] ml-auto"
          variant="bordered"
          size="md"
          aria-label="Sort products"
        >
          <SelectItem key="default">Default</SelectItem>
          <SelectItem key="price-low">Price: Low to High</SelectItem>
          <SelectItem key="price-high">Price: High to Low</SelectItem>
        </Select>
      </div>

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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
