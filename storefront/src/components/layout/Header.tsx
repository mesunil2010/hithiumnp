"use client";

import { useState, useEffect } from "react";
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
  Mail,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";

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
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-hithium-dark text-white text-xs py-2.5 hidden sm:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-hithium-cyan" />
            <p className="text-blue-100">
              <span className="text-white font-semibold">Exclusive Distributor</span> of HiTHIUM & HiTHIUM HeroEE in Nepal
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@hithiumnp.com"
              className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>info@hithiumnp.com</span>
            </a>
            <a
              href="tel:+9771XXXXXXXX"
              className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+977 1XXX-XXXXXX</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-50'
        }`}
        height="5rem"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/" className="flex items-center gap-3 group">
              {/* HiTHIUM Logo Mark */}
              <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-hithium-primary via-hithium-accent to-hithium-cyan" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 36 36"
                    className="w-11 h-11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      x="50%"
                      y="54%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontWeight="900"
                      fontSize="16"
                      fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                    >
                      H
                    </text>
                  </svg>
                </div>
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight leading-tight">
                  <span className="text-hithium-primary">Hi</span>
                  <span className="text-gray-800">THIUM</span>
                </span>
                <span className="text-[10px] font-bold text-hithium-orange leading-tight tracking-[0.2em] uppercase">
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
              className="text-sm font-semibold text-gray-600 hover:text-hithium-primary px-4 py-2 rounded-xl hover:bg-hithium-light transition-all duration-200"
            >
              Home
            </Link>
          </NavbarItem>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="bg-transparent text-sm font-semibold text-gray-600 hover:text-hithium-primary data-[hover=true]:bg-hithium-light px-4 rounded-xl"
                  endContent={<ChevronDown className="w-3.5 h-3.5" />}
                  variant="light"
                >
                  Products
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Product categories"
              className="w-72"
              itemClasses={{
                base: "gap-4 rounded-xl",
              }}
              items={[
                { key: "all", name: "All Products", href: "/products", description: "Browse all HiTHIUM products", isAll: true },
                ...productCategories.map((cat) => ({ key: cat.name, name: cat.name, href: cat.href, description: cat.description, icon: cat.icon, isAll: false })),
              ]}
            >
              {(item: any) => (
                <DropdownItem
                  key={item.key}
                  href={item.href}
                  description={item.description}
                  startContent={
                    item.isAll ? (
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-hithium-primary to-hithium-cyan flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-hithium-light flex items-center justify-center text-hithium-primary">
                        {item.icon}
                      </div>
                    )
                  }
                  className="py-3"
                >
                  <span className="font-semibold">{item.name}</span>
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>

          <NavbarItem>
            <Link
              href="/about"
              className="text-sm font-semibold text-gray-600 hover:text-hithium-primary px-4 py-2 rounded-xl hover:bg-hithium-light transition-all duration-200"
            >
              About
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="/support"
              className="text-sm font-semibold text-gray-600 hover:text-hithium-primary px-4 py-2 rounded-xl hover:bg-hithium-light transition-all duration-200"
            >
              Support
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="/contact"
              className="text-sm font-semibold text-gray-600 hover:text-hithium-primary px-4 py-2 rounded-xl hover:bg-hithium-light transition-all duration-200"
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Right side actions */}
        <NavbarContent justify="end" className="gap-2">
          <NavbarItem className="hidden sm:flex">
            <Button
              as={Link}
              href="/watt-calculator"
              size="sm"
              className="font-semibold bg-hithium-orange text-white shadow-md shadow-hithium-orange/20 hover:bg-orange-500 hover:shadow-hithium-orange/30 transition-all duration-300"
              startContent={<Zap className="w-3.5 h-3.5" />}
            >
              Calculator
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Link href="/account">
              <Button
                isIconOnly
                variant="light"
                aria-label="Account"
                size="sm"
                className="hover:bg-hithium-light"
              >
                <User className="w-5 h-5 text-gray-500" />
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/cart">
              <Badge
                content={totalItems > 0 ? totalItems : undefined}
                color="primary"
                size="sm"
                shape="circle"
                isInvisible={totalItems === 0}
                classNames={{
                  badge: "bg-gradient-to-r from-hithium-primary to-hithium-cyan font-bold"
                }}
              >
                <Button
                  isIconOnly
                  variant="light"
                  aria-label="Shopping cart"
                  size="sm"
                  className="hover:bg-hithium-light"
                >
                  <ShoppingCart className="w-5 h-5 text-gray-500" />
                </Button>
              </Badge>
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile menu */}
        <NavbarMenu className="pt-8 bg-white/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <NavbarMenuItem key={link.name}>
              <Link
                href={link.href}
                className="w-full text-lg font-semibold text-gray-600 hover:text-hithium-primary py-3 block transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Link
              href="/products"
              className="w-full text-lg font-bold text-white bg-gradient-to-r from-hithium-primary to-hithium-cyan py-4 px-6 rounded-xl block text-center mt-4 shadow-lg"
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
