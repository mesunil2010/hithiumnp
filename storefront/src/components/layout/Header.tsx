"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Badge,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import {
  ShoppingCart,
  User,
  Phone,
  ChevronDown,
  Zap,
  Battery,
  Sun,
  Menu,
} from "lucide-react";

const productCategories = [
  {
    name: "Energy Storage Systems",
    href: "/products?category=energy-storage-systems",
    icon: <Battery className="w-4 h-4" />,
    description: "8kWh & 16kWh LiFePO₄ systems",
  },
  {
    name: "Portable Power Stations",
    href: "/products?category=portable-power-stations",
    icon: <Zap className="w-4 h-4" />,
    description: "1kWh & 2kWh HeroEE units",
  },
  {
    name: "Solar Accessories",
    href: "/products?category=solar-accessories",
    icon: <Sun className="w-4 h-4" />,
    description: "Portable solar panels",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Support", href: "/support" },
  { name: "Watt Calculator", href: "/watt-calculator" },
  { name: "Become a Dealer", href: "/become-dealer" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-hithium-secondary text-white text-xs py-1.5 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p>
            Exclusive Distributor of HiTHIUM & HiTHIUM HeroEE in Bangladesh
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+8801XXXXXXXXX"
              className="flex items-center gap-1 hover:text-hithium-accent transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+880 1XXX-XXXXXX</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
        className="bg-white/95 backdrop-blur-md border-b border-gray-100"
        height="4rem"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg green-gradient flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-hithium-secondary leading-tight">
                  HiTHIUM
                </span>
                <span className="text-[10px] text-gray-500 leading-tight -mt-0.5">
                  Bangladesh
                </span>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop navigation */}
        <NavbarContent className="hidden sm:flex gap-1" justify="center">
          <NavbarItem>
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-hithium-primary px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>
          </NavbarItem>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="bg-transparent text-sm font-medium text-gray-700 hover:text-hithium-primary data-[hover=true]:bg-gray-50 px-3"
                  endContent={<ChevronDown className="w-3 h-3" />}
                  variant="light"
                >
                  Products
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="Product categories" className="w-64">
              <DropdownItem
                key="all"
                href="/products"
                description="Browse all HiTHIUM products"
              >
                All Products
              </DropdownItem>
              {productCategories.map((cat) => (
                <DropdownItem
                  key={cat.name}
                  href={cat.href}
                  description={cat.description}
                  startContent={cat.icon}
                >
                  {cat.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <NavbarItem>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-hithium-primary px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              About
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="/support"
              className="text-sm font-medium text-gray-700 hover:text-hithium-primary px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Support
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-hithium-primary px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Right side actions */}
        <NavbarContent justify="end" className="gap-2">
          <NavbarItem>
            <Link href="/account">
              <Button isIconOnly variant="light" aria-label="Account" size="sm">
                <User className="w-5 h-5 text-gray-600" />
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/cart">
              <Badge content="0" color="primary" size="sm" shape="circle">
                <Button
                  isIconOnly
                  variant="light"
                  aria-label="Shopping cart"
                  size="sm"
                >
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                </Button>
              </Badge>
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile menu */}
        <NavbarMenu className="pt-6">
          {navLinks.map((link) => (
            <NavbarMenuItem key={link.name}>
              <Link
                href={link.href}
                className="w-full text-lg text-gray-700 hover:text-hithium-primary py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Link
              href="/products"
              className="w-full text-lg font-semibold text-hithium-primary py-2 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop All Products
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
