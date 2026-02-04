"use client";

import Link from "next/link";
import { Divider } from "@heroui/react";
import { Mail, Phone, MapPin } from "lucide-react";

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
    <footer className="bg-hithium-dark text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg green-gradient flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
                  <text
                    x="50%"
                    y="54%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontWeight="800"
                    fontSize="14"
                    fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
                  >
                    H
                  </text>
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-lg leading-tight block">
                  <span className="text-hithium-accent">Hi</span>
                  <span className="text-white">THIUM</span>
                </span>
                <span className="text-[10px] font-medium text-gray-500 tracking-widest uppercase block -mt-0.5">
                  Nepal
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 mb-5 max-w-xs leading-relaxed">
              Exclusive distributor of HiTHIUM and HiTHIUM HeroEE energy storage
              products in Nepal. Powering a cleaner, greener future.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-hithium-primary shrink-0" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-hithium-primary shrink-0" />
                <a href="tel:+8801XXXXXXXXX" className="hover:text-white transition-colors">
                  +880 1XXX-XXXXXX
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-hithium-primary shrink-0" />
                <a href="mailto:info@hithiumnp.com" className="hover:text-white transition-colors">
                  info@hithiumnp.com
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-2.5">
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
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5">
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
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2.5">
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

      <Divider className="bg-gray-800" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} HiTHIUM Energy Storage Technology
            NP Ltd. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://www.hithium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hithium-primary hover:text-hithium-accent transition-colors"
            >
              HiTHIUM
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
