"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Breadcrumbs,
  BreadcrumbItem,
  Divider,
  RadioGroup,
  Radio,
} from "@heroui/react";
import {
  Lock,
  CreditCard,
  Truck,
  ShoppingBag,
  CheckCircle,
  ArrowLeft,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/api";

const provinces = [
  "Bagmati",
  "Gandaki",
  "Koshi",
  "Lumbini",
  "Madhesh",
  "Karnali",
  "Sudurpashchim",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  postalCode: string;
  shippingMethod: string;
  paymentMethod: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address1: "",
  address2: "",
  city: "",
  province: "",
  postalCode: "",
  shippingMethod: "standard",
  paymentMethod: "cod",
};

export default function CheckoutPage() {
  const { items: cartItems, clearCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Failed to load products");
        setProducts(data.products || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to connect to server");
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  const getProduct = (id: string) =>
    products.find((p) => p.handle === id || p.id === id);

  const subtotal = useMemo(
    () =>
      cartItems.reduce((sum, item) => {
        const product = getProduct(item.productId);
        return sum + (product ? product.price * item.quantity : 0);
      }, 0),
    [cartItems, products]
  );

  const shippingCost = formData.shippingMethod === "nationwide" ? 1500 : 500;
  const total = subtotal + shippingCost;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Enter a valid email";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.address1.trim()) errors.address1 = "Address is required";
    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.province) errors.province = "Province is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const orderItems = cartItems
        .map((item) => {
          const product = getProduct(item.productId);
          if (!product) return null;
          return {
            productId: product.id,
            handle: product.handle,
            title: product.title,
            price: product.price,
            priceFormatted: product.priceFormatted,
            quantity: item.quantity,
          };
        })
        .filter(Boolean);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
          },
          shipping: {
            address1: formData.address1,
            address2: formData.address2,
            city: formData.city,
            province: formData.province,
            postalCode: formData.postalCode,
            countryCode: "np",
          },
          shippingMethod: formData.shippingMethod,
          paymentMethod: formData.paymentMethod,
          items: orderItems,
          subtotal,
          shippingCost,
          total,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to place order");
      }

      setOrderId(data.orderId || data.id || "ORD-" + Date.now());
      setOrderPlaced(true);
      clearCart();
    } catch (err) {
      setFormErrors({
        submit: err instanceof Error ? err.message : "Failed to place order. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading state
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

  // Error loading products
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-gray-900 mb-2">
            Service Unavailable
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button
            color="primary"
            startContent={<RefreshCw className="w-4 h-4" />}
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  // Empty cart
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="font-display text-2xl font-bold text-gray-900 mb-2">
          Your cart is empty
        </h1>
        <p className="text-gray-600 mb-6">
          Add some products to your cart before checking out.
        </p>
        <Button as={Link} href="/products" color="primary" size="lg" className="font-semibold">
          Browse Products
        </Button>
      </div>
    );
  }

  // Order confirmation
  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600 mb-2">
          Thank you for your order, {formData.firstName}!
        </p>
        {orderId && (
          <p className="text-sm text-gray-500 mb-6">
            Order ID: <span className="font-mono font-semibold">{orderId}</span>
          </p>
        )}
        <Card className="border border-gray-100 text-left mb-8" shadow="sm">
          <CardBody className="p-6">
            <h3 className="font-display font-bold text-gray-900 mb-3">
              What happens next?
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>1. You will receive an order confirmation email at <strong>{formData.email}</strong></li>
              <li>2. Our team will process your order within 24 hours</li>
              <li>3. You will receive delivery updates via SMS/email</li>
              {formData.paymentMethod === "cod" && (
                <li>4. Please keep the exact amount ready for Cash on Delivery</li>
              )}
              {formData.paymentMethod === "bank" && (
                <li>4. Please complete the bank transfer to confirm your order. Details will be sent to your email.</li>
              )}
            </ul>
          </CardBody>
        </Card>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button as={Link} href="/products" color="primary" className="font-semibold">
            Continue Shopping
          </Button>
          <Button as={Link} href="/" variant="bordered" className="font-semibold">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/cart">Cart</BreadcrumbItem>
        <BreadcrumbItem>Checkout</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex items-center gap-3 mb-8">
        <Button
          as={Link}
          href="/cart"
          isIconOnly
          variant="light"
          size="sm"
          aria-label="Back to cart"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="font-display text-3xl font-bold text-gray-900">
          Checkout
        </h1>
      </div>

      {formErrors.submit && (
        <Card className="border border-red-200 bg-red-50 mb-6" shadow="none">
          <CardBody className="p-4 flex flex-row items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
            <p className="text-sm text-red-700">{formErrors.submit}</p>
          </CardBody>
        </Card>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact */}
          <Card className="border border-gray-100" shadow="sm">
            <CardBody className="p-6">
              <h2 className="font-display text-lg font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  placeholder="Enter first name"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired
                  value={formData.firstName}
                  onValueChange={(v) => updateField("firstName", v)}
                  isInvalid={!!formErrors.firstName}
                  errorMessage={formErrors.firstName}
                />
                <Input
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired
                  value={formData.lastName}
                  onValueChange={(v) => updateField("lastName", v)}
                  isInvalid={!!formErrors.lastName}
                  errorMessage={formErrors.lastName}
                />
                <Input
                  label="Email"
                  placeholder="your@email.com"
                  type="email"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired
                  value={formData.email}
                  onValueChange={(v) => updateField("email", v)}
                  isInvalid={!!formErrors.email}
                  errorMessage={formErrors.email}
                />
                <Input
                  label="Phone"
                  placeholder="+977 98XXXXXXXX"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired
                  value={formData.phone}
                  onValueChange={(v) => updateField("phone", v)}
                  isInvalid={!!formErrors.phone}
                  errorMessage={formErrors.phone}
                />
              </div>
            </CardBody>
          </Card>

          {/* Shipping Address */}
          <Card className="border border-gray-100" shadow="sm">
            <CardBody className="p-6">
              <h2 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-hithium-primary" />
                Shipping Address
              </h2>
              <div className="space-y-4">
                <Input
                  label="Address Line 1"
                  placeholder="House number, street, area"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired
                  value={formData.address1}
                  onValueChange={(v) => updateField("address1", v)}
                  isInvalid={!!formErrors.address1}
                  errorMessage={formErrors.address1}
                />
                <Input
                  label="Address Line 2"
                  placeholder="Landmark, ward (optional)"
                  variant="bordered"
                  labelPlacement="outside"
                  value={formData.address2}
                  onValueChange={(v) => updateField("address2", v)}
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="City"
                    placeholder="City"
                    variant="bordered"
                    labelPlacement="outside"
                    isRequired
                    value={formData.city}
                    onValueChange={(v) => updateField("city", v)}
                    isInvalid={!!formErrors.city}
                    errorMessage={formErrors.city}
                  />
                  <Select
                    label="Province"
                    placeholder="Select province"
                    variant="bordered"
                    labelPlacement="outside"
                    isRequired
                    selectedKeys={formData.province ? [formData.province] : []}
                    onSelectionChange={(keys) => {
                      const selected = Array.from(keys)[0] as string;
                      if (selected) updateField("province", selected);
                    }}
                    isInvalid={!!formErrors.province}
                    errorMessage={formErrors.province}
                  >
                    {provinces.map((p) => (
                      <SelectItem key={p}>{p}</SelectItem>
                    ))}
                  </Select>
                </div>
                <Input
                  label="Postal Code"
                  placeholder="44600"
                  variant="bordered"
                  labelPlacement="outside"
                  value={formData.postalCode}
                  onValueChange={(v) => updateField("postalCode", v)}
                />
              </div>
            </CardBody>
          </Card>

          {/* Shipping Method */}
          <Card className="border border-gray-100" shadow="sm">
            <CardBody className="p-6">
              <h2 className="font-display text-lg font-bold text-gray-900 mb-4">
                Shipping Method
              </h2>
              <RadioGroup
                value={formData.shippingMethod}
                onValueChange={(v) => updateField("shippingMethod", v)}
              >
                <Radio
                  value="standard"
                  description="2-3 business days within Kathmandu Valley"
                >
                  Standard Delivery (Kathmandu) — NPR 500
                </Radio>
                <Radio
                  value="nationwide"
                  description="5-7 business days across Nepal"
                >
                  Nationwide Delivery — NPR 1,500
                </Radio>
              </RadioGroup>
            </CardBody>
          </Card>

          {/* Payment */}
          <Card className="border border-gray-100" shadow="sm">
            <CardBody className="p-6">
              <h2 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-hithium-primary" />
                Payment Method
              </h2>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(v) => updateField("paymentMethod", v)}
              >
                <Radio
                  value="cod"
                  description="Pay when you receive the product"
                >
                  Cash on Delivery
                </Radio>
                <Radio
                  value="esewa"
                  description="Pay via eSewa mobile wallet"
                >
                  eSewa
                </Radio>
                <Radio
                  value="khalti"
                  description="Pay via Khalti digital wallet"
                >
                  Khalti
                </Radio>
                <Radio
                  value="bank"
                  description="Direct bank transfer"
                >
                  Bank Transfer
                </Radio>
              </RadioGroup>
            </CardBody>
          </Card>
        </div>

        {/* Order summary sidebar */}
        <div>
          <Card className="border border-gray-100 sticky top-24" shadow="sm">
            <CardBody className="p-6">
              <h2 className="font-display text-lg font-bold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm mb-4">
                {cartItems.map((item) => {
                  const product = getProduct(item.productId);
                  if (!product) return null;
                  return (
                    <div key={item.productId} className="flex justify-between">
                      <span className="text-gray-600">
                        {product.title} x {item.quantity}
                      </span>
                      <span className="font-medium">
                        NPR {(product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Divider className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>NPR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>NPR {shippingCost.toLocaleString()}</span>
                </div>
              </div>

              <Divider className="my-4" />

              <div className="flex justify-between mb-6">
                <span className="font-display font-bold">Total</span>
                <span className="font-display text-xl font-bold text-hithium-primary">
                  NPR {total.toLocaleString()}
                </span>
              </div>

              <Button
                color="primary"
                size="lg"
                className="w-full font-semibold"
                startContent={!isSubmitting && <Lock className="w-4 h-4" />}
                onClick={handlePlaceOrder}
                isLoading={isSubmitting}
                isDisabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Place Order"}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-3">
                By placing this order, you agree to our{" "}
                <a href="/terms" className="text-hithium-primary underline">
                  Terms & Conditions
                </a>
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
