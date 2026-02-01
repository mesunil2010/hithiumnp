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
import { useState } from "react";
import { products } from "@/lib/data";

interface CartItem {
  productId: string;
  quantity: number;
}

export default function CartPage() {
  // Demo cart with first two products
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { productId: "heroee-1", quantity: 1 },
    { productId: "hithium-solar-200w", quantity: 2 },
  ]);

  const getProduct = (id: string) => products.find((p) => p.handle === id);

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (productId: string) => {
    setCartItems((items) => items.filter((i) => i.productId !== productId));
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const product = getProduct(item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const shipping = subtotal > 100000 ? 0 : 500;
  const total = subtotal + shipping;

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
        Shopping Cart ({cartItems.length} items)
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
                            onClick={() => updateQuantity(item.productId, -1)}
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
                            onClick={() => updateQuantity(item.productId, 1)}
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
                          onClick={() => removeItem(item.productId)}
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
                    ৳{subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? "Free" : `৳${shipping.toLocaleString()}`}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-green-600">
                    Free shipping on orders over ৳100,000
                  </p>
                )}
              </div>

              <Divider className="my-4" />

              <div className="flex justify-between mb-6">
                <span className="font-display font-bold text-gray-900">
                  Total
                </span>
                <span className="font-display text-xl font-bold text-hithium-primary">
                  ৳{total.toLocaleString()}
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
