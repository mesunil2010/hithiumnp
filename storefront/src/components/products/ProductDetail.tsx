"use client";

import Link from "next/link";
import {
  Button,
  Chip,
  Breadcrumbs,
  BreadcrumbItem,
  Divider,
  Accordion,
  AccordionItem,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/react";
import {
  ShoppingCart,
  Zap,
  Shield,
  Truck,
  RotateCcw,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/api";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbItem>{product.title}</BreadcrumbItem>
      </Breadcrumbs>

      {/* Product layout */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        {/* Image */}
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center border border-gray-100">
            {product.badge && (
              <Chip
                className="absolute top-4 left-4 z-10 bg-hithium-primary text-white font-medium"
              >
                {product.badge}
              </Chip>
            )}
            <div className="text-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Zap className="w-12 h-12 text-hithium-accent" />
              </div>
              <p className="text-xl text-gray-500 font-semibold">
                {product.title}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {product.specs.Capacity || product.specs.Power}
              </p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          <Chip size="sm" variant="flat" className="mb-3 bg-hithium-dark/5 text-hithium-dark text-xs">
            {product.category}
          </Chip>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Price */}
          <div className="mb-6">
            <p className="font-display text-4xl font-bold text-hithium-primary">
              {product.priceFormatted}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Inclusive of all taxes. Free delivery in Kathmandu.
            </p>
          </div>

          {/* Stock */}
          <div className="flex items-center gap-2 mb-6">
            <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-200 rounded-xl">
              <Button
                isIconOnly
                variant="light"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <Button
              size="lg"
              className="flex-1 font-semibold bg-hithium-primary text-white hover:bg-hithium-accent"
              startContent={<ShoppingCart className="w-5 h-5" />}
              isDisabled={!product.inStock}
            >
              Add to Cart
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-5 h-5 text-hithium-primary" />
              <span>{product.specs.Warranty || 'Warranty'}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck className="w-5 h-5 text-hithium-primary" />
              <span>Free Delivery*</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <RotateCcw className="w-5 h-5 text-hithium-primary" />
              <span>{product.specs["Cycle Life"] ? `${product.specs["Cycle Life"]} Cycles` : 'Long Life'}</span>
            </div>
          </div>

          <Divider className="mb-6" />

          {/* Key features */}
          {product.features.length > 0 && (
            <div className="mb-6">
              <h3 className="font-display font-bold text-gray-900 mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.slice(0, 6).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-hithium-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Specifications & Details */}
      <div className="mb-16">
        <Accordion variant="bordered" selectionMode="multiple" defaultExpandedKeys={["specs"]}>
          <AccordionItem key="specs" title="Technical Specifications" className="font-display">
            <Table aria-label="Specifications" removeWrapper>
              <TableHeader>
                <TableColumn>SPECIFICATION</TableColumn>
                <TableColumn>VALUE</TableColumn>
              </TableHeader>
              <TableBody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell className="font-medium text-gray-700">{key}</TableCell>
                    <TableCell className="text-gray-600">{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionItem>

          <AccordionItem key="features" title="All Features" className="font-display">
            {product.features.length > 0 ? (
              <ul className="space-y-2 py-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-hithium-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 py-2">No additional features listed.</p>
            )}
          </AccordionItem>

          <AccordionItem key="shipping" title="Shipping & Warranty" className="font-display">
            <div className="space-y-3 py-2 text-sm text-gray-600">
              <p><strong>Kathmandu:</strong> Free delivery, 2-3 business days</p>
              <p><strong>Outside Kathmandu:</strong> NPR 1,500 flat rate, 5-7 business days</p>
              <p><strong>Warranty:</strong> {product.specs.Warranty || 'Standard'} manufacturer warranty through HiTHIUM Nepal</p>
              <p><strong>After-Sales:</strong> Local service & support available</p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rp) => (
              <Link
                key={rp.id}
                href={`/product/${rp.handle}`}
                className="block"
              >
                <div className="rounded-xl border border-gray-100 p-4 card-hover">
                  <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                    <Zap className="w-8 h-8 text-hithium-primary" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900">{rp.title}</h3>
                  <p className="text-hithium-primary font-bold mt-1">{rp.priceFormatted}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
