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
  Battery,
  Sun,
  Zap,
} from "lucide-react";

const productCategories = [
  {
    name: "Energy Storage Systems",
    href: "/products?category=energy-storage-systems",
    icon: <Battery className="w-4 h-4" />,
    description: "8kWh & 16kWh LiFePO\u2084 systems",
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
      <div className="bg-hithium-primary text-white text-xs py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-blue-100">
            Exclusive Distributor of HiTHIUM & HiTHIUM HeroEE in Nepal
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+8801XXXXXXXXX"
              className="flex items-center gap-1 text-blue-100 hover:text-white transition-colors"
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
        className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
        height="4.5rem"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/" className="flex items-center gap-2.5">
              {/* HiTHIUM Logo Mark */}
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-lg blue-gradient" />
                <svg
                  viewBox="0 0 36 36"
                  className="relative w-9 h-9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="50%"
                    y="54%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontWeight="800"
                    fontSize="15"
                    fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                  >
                    H
                  </text>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight leading-tight">
                  <span className="text-hithium-primary">Hi</span>
                  <span className="text-gray-800">THIUM</span>
                </span>
                <span className="text-[10px] font-medium text-gray-400 leading-tight tracking-widest uppercase">
                  Nepal
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
              className="text-sm font-medium text-gray-600 hover:text-hithium-primary px-3 py-2 rounded-lg hover:bg-hithium-light transition-colors"
            >
              Home
            </Link>
          </NavbarItem>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="bg-transparent text-sm font-medium text-gray-600 hover:text-hithium-primary data-[hover=true]:bg-hithium-light px-3"
                  endContent={<ChevronDown className="w-3 h-3" />}
                  variant="light"
                >
                  Products
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="Product categories" className="w-64">
              <>
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
              </>
            </DropdownMenu>
          </Dropdown>

          <NavbarItem>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-hithium-primary px-3 py-2 rounded-lg hover:bg-hithium-light transition-colors"
            >
              About
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="/support"
              className="text-sm font-medium text-gray-600 hover:text-hithium-primary px-3 py-2 rounded-lg hover:bg-hithium-light transition-colors"
            >
              Support
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-hithium-primary px-3 py-2 rounded-lg hover:bg-hithium-light transition-colors"
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
                <User className="w-5 h-5 text-gray-500" />
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
                  <ShoppingCart className="w-5 h-5 text-gray-500" />
                </Button>
              </Badge>
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile menu */}
        <NavbarMenu className="pt-6 bg-white">
          {navLinks.map((link) => (
            <NavbarMenuItem key={link.name}>
              <Link
                href={link.href}
                className="w-full text-lg text-gray-600 hover:text-hithium-primary py-2 block"
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
