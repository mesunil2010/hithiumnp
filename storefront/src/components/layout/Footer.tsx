"use client";

import Link from "next/link";
import { Divider } from "@heroui/react";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { name: "HeroEE 1 (1kWh)", href: "/product/heroee-1" },
    { name: "HeroEE 2 (2kWh)", href: "/product/heroee-2" },
    { name: "HeroEE 8 (8kWh)", href: "/product/heroee-8" },
    { name: "HeroEE 16 (16kWh)", href: "/product/heroee-16" },
    { name: "200W Solar Panel", href: "/product/hithium-solar-200w" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Become a Dealer", href: "/become-dealer" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  support: [
    { name: "Product Support", href: "/support" },
    { name: "Watt Calculator", href: "/watt-calculator" },
    { name: "Product Registration", href: "/support#registration" },
    { name: "Warranty Info", href: "/support#warranty" },
    { name: "FAQ", href: "/support#faq" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-hithium-dark text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg green-gradient flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">
                  HiTHIUM
                </span>
                <span className="text-xs text-gray-400 block -mt-1">
                  Bangladesh
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4 max-w-xs">
              Exclusive distributor of HiTHIUM and HiTHIUM HeroEE energy storage
              products in Bangladesh. Powering a cleaner, greener future.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-hithium-accent" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-hithium-accent" />
                <a href="tel:+8801XXXXXXXXX" className="hover:text-white">
                  +880 1XXX-XXXXXX
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-hithium-accent" />
                <a href="mailto:info@hithiumbd.com" className="hover:text-white">
                  info@hithiumbd.com
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-hithium-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-hithium-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-hithium-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Divider className="bg-gray-700" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} HiTHIUM Energy Storage Technology
            BD Ltd. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://www.hithium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hithium-accent hover:underline"
            >
              HiTHIUM
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
