"use client";

import Link from "next/link";
import { Divider, Button } from "@heroui/react";
import { Mail, Phone, MapPin, Zap, ArrowRight, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

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

const socialLinks = [
  { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
  { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
  { name: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "#" },
  { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-hithium-dark text-gray-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-hithium-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-hithium-orange/5 rounded-full blur-[120px]" />

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Stay Powered Up
              </h3>
              <p className="text-gray-400">
                Get the latest updates on products, offers, and energy tips.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-hithium-primary/50 focus:ring-2 focus:ring-hithium-primary/20 transition-all"
              />
              <Button
                className="font-bold px-6 bg-hithium-primary text-white shadow-md shadow-hithium-primary/20 hover:bg-hithium-accent transition-colors"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              {/* Logo */}
              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-hithium-primary via-hithium-accent to-hithium-light" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 32 32" className="w-12 h-12" fill="none">
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
              </div>
              <div>
                <span className="font-display font-black text-xl leading-tight block">
                  <span className="text-hithium-light">Hi</span>
                  <span className="text-white">THIUM</span>
                </span>
                <span className="text-xs font-bold text-hithium-orange tracking-[0.2em] uppercase block">
                  Nepal
                </span>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Exclusive distributor of HiTHIUM and HiTHIUM HeroEE energy storage
              products in Nepal. Powering a <span className="text-hithium-light">cleaner</span>, <span className="text-hithium-orange">greener</span> future.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-hithium-primary/20 to-hithium-light/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-hithium-light" />
                </div>
                <span className="text-gray-300">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-hithium-primary/20 to-hithium-light/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-hithium-light" />
                </div>
                <a href="tel:+9771XXXXXXXX" className="text-gray-300 hover:text-white transition-colors">
                  +977 1XXX-XXXXXX
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-hithium-primary/20 to-hithium-light/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-hithium-light" />
                </div>
                <a href="mailto:info@hithiumnp.com" className="text-gray-300 hover:text-white transition-colors">
                  info@hithiumnp.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-hithium-primary hover:to-hithium-light hover:border-transparent transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-hithium-orange" />
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-hithium-light transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-hithium-light transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-hithium-orange" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-hithium-light transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-hithium-light transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-hithium-orange" />
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-hithium-light transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-hithium-light transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Divider className="bg-gray-800" />

      {/* Bottom Bar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} HiTHIUM Energy Storage Technology NP Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <a
              href="https://www.hithium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-hithium-primary to-hithium-light hover:from-hithium-light hover:to-hithium-primary transition-all"
            >
              HiTHIUM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
