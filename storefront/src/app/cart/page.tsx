"use client";

import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  Breadcrumbs,
  BreadcrumbItem,
  Divider,
} from "@heroui/react";
import {
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { useState, useEffect } from "react";
import type { Product } from "@/lib/api";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items: cartItems, updateQuantity, removeFromCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products on mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);

      // Fetch products from API
      try {
        const response = await fetch("/api/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products || []);
        } else {
          // Fallback to static data
          const { products: staticProducts } = await import("@/lib/data");
          setProducts(staticProducts);
        }
      } catch {
        // Fallback to static data
        const { products: staticProducts } = await import("@/lib/data");
        setProducts(staticProducts);
      }

      setIsLoading(false);
    };

    loadData();
  }, []);

  const getProduct = (id: string) => products.find((p) => p.handle === id || p.id === id);

  const subtotal = cartItems.reduce((sum, item) => {
    const product = getProduct(item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const shipping = subtotal > 100000 ? 0 : 500;
  const total = subtotal + shipping;

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="font-display text-2xl font-bold text-gray-900 mb-2">
          Your cart is empty
        </h1>
        <p className="text-gray-600 mb-6">
          Browse our energy storage products and add items to your cart.
        </p>
        <Button
          as={Link}
          href="/products"
          color="primary"
          size="lg"
          className="font-semibold"
        >
          Browse Products
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Cart</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className="font-display text-3xl font-bold text-gray-900 mb-8">
        Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => {
            const product = getProduct(item.productId);
            if (!product) return null;

            return (
              <Card key={item.productId} className="border border-gray-100" shadow="sm">
                <CardBody className="p-4 sm:p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                      <ShoppingCart className="w-8 h-8 text-hithium-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/product/${product.handle}`}
                        className="font-display font-bold text-gray-900 hover:text-hithium-primary transition-colors line-clamp-1"
                      >
                        {product.title}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">
                        {product.category}
                      </p>
                      <p className="font-bold text-hithium-primary mt-2">
                        {product.priceFormatted}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <Button
                            isIconOnly
                            variant="light"
                            size="sm"
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            aria-label="Decrease"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            isIconOnly
                            variant="light"
                            size="sm"
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            aria-label="Increase"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <Button
                          isIconOnly
                          variant="light"
                          color="danger"
                          size="sm"
                          onClick={() => removeFromCart(item.productId)}
                          aria-label="Remove"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Order summary */}
        <div>
          <Card className="border border-gray-100 sticky top-24" shadow="sm">
            <CardBody className="p-6">
              <h2 className="font-display text-lg font-bold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">
                    NPR {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? "Free" : `NPR ${shipping.toLocaleString()}`}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-green-600">
                    Free shipping on orders over NPR 100,000
                  </p>
                )}
              </div>

              <Divider className="my-4" />

              <div className="flex justify-between mb-6">
                <span className="font-display font-bold text-gray-900">
                  Total
                </span>
                <span className="font-display text-xl font-bold text-hithium-primary">
                  NPR {total.toLocaleString()}
                </span>
              </div>

              <Button
                as={Link}
                href="/checkout"
                color="primary"
                size="lg"
                className="w-full font-semibold"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Proceed to Checkout
              </Button>

              <Button
                as={Link}
                href="/products"
                variant="light"
                className="w-full mt-2"
              >
                Continue Shopping
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
