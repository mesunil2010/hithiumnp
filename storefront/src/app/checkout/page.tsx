"use client";

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
import { Lock, CreditCard, Truck } from "lucide-react";

const divisions = [
  "Dhaka",
  "Chittagong",
  "Rajshahi",
  "Khulna",
  "Sylhet",
  "Barisal",
  "Rangpur",
  "Mymensingh",
];

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/cart">Cart</BreadcrumbItem>
        <BreadcrumbItem>Checkout</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className="font-display text-3xl font-bold text-gray-900 mb-8">
        Checkout
      </h1>

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
                  isRequired
                />
                <Input
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="bordered"
                  isRequired
                />
                <Input
                  label="Email"
                  placeholder="your@email.com"
                  type="email"
                  variant="bordered"
                  isRequired
                />
                <Input
                  label="Phone"
                  placeholder="+880 1XXX-XXXXXX"
                  variant="bordered"
                  isRequired
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
                  placeholder="House/Road/Block"
                  variant="bordered"
                  isRequired
                />
                <Input
                  label="Address Line 2"
                  placeholder="Area, Landmark (optional)"
                  variant="bordered"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="City"
                    placeholder="City"
                    variant="bordered"
                    isRequired
                  />
                  <Select
                    label="Division"
                    placeholder="Select division"
                    variant="bordered"
                    isRequired
                  >
                    {divisions.map((d) => (
                      <SelectItem key={d.toLowerCase()}>{d}</SelectItem>
                    ))}
                  </Select>
                </div>
                <Input
                  label="Postal Code"
                  placeholder="1000"
                  variant="bordered"
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
              <RadioGroup defaultValue="standard-dhaka">
                <Radio
                  value="standard-dhaka"
                  description="2-3 business days within Dhaka"
                >
                  Standard Delivery (Dhaka) — ৳500
                </Radio>
                <Radio
                  value="nationwide"
                  description="5-7 business days across Nepal"
                >
                  Nationwide Delivery — ৳1,500
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
              <RadioGroup defaultValue="cod">
                <Radio
                  value="cod"
                  description="Pay when you receive the product"
                >
                  Cash on Delivery
                </Radio>
                <Radio
                  value="bkash"
                  description="Pay via bKash mobile payment"
                >
                  bKash
                </Radio>
                <Radio
                  value="nagad"
                  description="Pay via Nagad mobile payment"
                >
                  Nagad
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
                <div className="flex justify-between">
                  <span className="text-gray-600">HeroEE 1 (1kWh) x 1</span>
                  <span>৳29,900</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">200W Solar Panel x 2</span>
                  <span>৳47,900</span>
                </div>
              </div>

              <Divider className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>৳77,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>৳500</span>
                </div>
              </div>

              <Divider className="my-4" />

              <div className="flex justify-between mb-6">
                <span className="font-display font-bold">Total</span>
                <span className="font-display text-xl font-bold text-hithium-primary">
                  ৳78,300
                </span>
              </div>

              <Button
                color="primary"
                size="lg"
                className="w-full font-semibold"
                startContent={<Lock className="w-4 h-4" />}
              >
                Place Order
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
