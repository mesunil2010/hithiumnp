"use client";

import {
  Button,
  Card,
  CardBody,
  Input,
  Tabs,
  Tab,
  Breadcrumbs,
  BreadcrumbItem,
  Divider,
  Chip,
} from "@heroui/react";
import { User, Package, MapPin, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";

function LoginForm() {
  return (
    <Card className="max-w-md mx-auto border border-gray-100" shadow="sm">
      <CardBody className="p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-hithium-light flex items-center justify-center mx-auto mb-3">
            <LogIn className="w-7 h-7 text-hithium-primary" />
          </div>
          <h2 className="font-display text-xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Sign in to manage your orders and account
          </p>
        </div>
        <form className="space-y-4">
          <Input
            label="Email"
            placeholder="your@email.com"
            type="email"
            variant="bordered"
            isRequired
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="bordered"
            isRequired
          />
          <Button
            type="submit"
            color="primary"
            size="lg"
            className="w-full font-semibold"
          >
            Sign In
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}

function RegisterForm() {
  return (
    <Card className="max-w-md mx-auto border border-gray-100" shadow="sm">
      <CardBody className="p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-hithium-light flex items-center justify-center mx-auto mb-3">
            <UserPlus className="w-7 h-7 text-hithium-primary" />
          </div>
          <h2 className="font-display text-xl font-bold text-gray-900">
            Create Account
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Register to track orders, save addresses, and more
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="First name"
              variant="bordered"
              isRequired
            />
            <Input
              label="Last Name"
              placeholder="Last name"
              variant="bordered"
              isRequired
            />
          </div>
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
          <Input
            label="Password"
            placeholder="Create a password"
            type="password"
            variant="bordered"
            isRequired
          />
          <Input
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            variant="bordered"
            isRequired
          />
          <Button
            type="submit"
            color="primary"
            size="lg"
            className="w-full font-semibold"
          >
            Create Account
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}

function AccountDashboard() {
  return (
    <div className="space-y-6">
      {/* Profile */}
      <Card className="border border-gray-100" shadow="sm">
        <CardBody className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-hithium-light flex items-center justify-center">
              <User className="w-6 h-6 text-hithium-primary" />
            </div>
            <div>
              <h2 className="font-display font-bold text-gray-900">
                Demo User
              </h2>
              <p className="text-sm text-gray-600">demo@hithiumbd.com</p>
            </div>
          </div>
          <Divider className="mb-4" />
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              label="First Name"
              defaultValue="Demo"
              variant="bordered"
            />
            <Input
              label="Last Name"
              defaultValue="User"
              variant="bordered"
            />
            <Input
              label="Email"
              defaultValue="demo@hithiumbd.com"
              variant="bordered"
            />
            <Input
              label="Phone"
              defaultValue="+880 1700-000000"
              variant="bordered"
            />
          </div>
          <Button color="primary" className="mt-4 font-semibold">
            Update Profile
          </Button>
        </CardBody>
      </Card>

      {/* Orders */}
      <Card className="border border-gray-100" shadow="sm">
        <CardBody className="p-6">
          <h2 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-hithium-primary" />
            Recent Orders
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div>
                <p className="font-semibold text-gray-900">#ORD-2026-001</p>
                <p className="text-sm text-gray-600">HeroEE 2 (2kWh)</p>
              </div>
              <div className="text-right">
                <Chip color="success" size="sm" variant="flat">
                  Delivered
                </Chip>
                <p className="text-sm text-gray-500 mt-1">৳78,800</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div>
                <p className="font-semibold text-gray-900">#ORD-2026-002</p>
                <p className="text-sm text-gray-600">
                  HeroEE 8 (8kWh) + 200W Solar Panel
                </p>
              </div>
              <div className="text-right">
                <Chip color="warning" size="sm" variant="flat">
                  In Transit
                </Chip>
                <p className="text-sm text-gray-500 mt-1">৳188,950</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Addresses */}
      <Card className="border border-gray-100" shadow="sm">
        <CardBody className="p-6">
          <h2 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-hithium-primary" />
            Saved Addresses
          </h2>
          <div className="p-3 rounded-lg border border-gray-200">
            <p className="font-semibold text-gray-900">Home</p>
            <p className="text-sm text-gray-600">
              House 12, Road 5, Dhanmondi, Dhaka 1205
            </p>
          </div>
          <Button
            variant="bordered"
            className="mt-3"
            startContent={<MapPin className="w-4 h-4" />}
          >
            Add New Address
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default function AccountPage() {
  const [isLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>My Account</BreadcrumbItem>
        </Breadcrumbs>
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-8">
          My Account
        </h1>
        <AccountDashboard />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Account</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
        My Account
      </h1>

      <Tabs
        aria-label="Account tabs"
        variant="bordered"
        classNames={{ tabList: "mx-auto", base: "flex justify-center" }}
      >
        <Tab key="login" title="Sign In">
          <div className="pt-6">
            <LoginForm />
          </div>
        </Tab>
        <Tab key="register" title="Create Account">
          <div className="pt-6">
            <RegisterForm />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
