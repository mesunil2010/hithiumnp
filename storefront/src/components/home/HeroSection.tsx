"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowRight, Shield, RotateCcw, Battery, Zap, ChevronRight } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "#2", label: "Global Ranking", sub: "Energy Storage" },
  { value: "28.3", label: "GWh Shipped", sub: "Cell Sales" },
  { value: "100+", label: "Countries", sub: "Worldwide" },
  { value: "11,000+", label: "Cycle Life", sub: "LiFePO₄" },
];

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle top blue accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-hithium-primary via-hithium-accent to-hithium-green" />

      {/* Light background tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-hithium-light/40 via-white to-white" />

      {/* Soft decorative circles */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-hithium-light opacity-60" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-hithium-green/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0 sm:pt-16 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[75vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left py-8 lg:py-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-hithium-primary/8 border border-hithium-primary/20 rounded-full px-5 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hithium-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-hithium-green"></span>
              </span>
              <span className="text-hithium-primary font-semibold text-sm">Exclusive Distributor in Nepal</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black leading-[1.08] mb-6 text-hithium-navy">
              <span className="block">Nepal&apos;s Premium</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-hithium-primary to-hithium-accent">
                Energy Storage
              </span>
              <span className="block">Solution</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Advanced <span className="text-hithium-primary font-semibold">LiFePO₄</span> battery systems with{" "}
              <span className="text-hithium-orange font-semibold">11,000+ cycle life</span>. From portable power stations
              to whole-home energy storage — built for Nepal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                as={Link}
                href="/products"
                size="lg"
                className="font-bold px-8 bg-hithium-primary text-white shadow-lg shadow-hithium-primary/20 hover:bg-hithium-accent transition-all duration-200"
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Shop Products
              </Button>
              <Button
                as={Link}
                href="/watt-calculator"
                variant="bordered"
                size="lg"
                className="font-bold px-8 border-2 border-hithium-primary text-hithium-primary hover:bg-hithium-light transition-all duration-200"
                startContent={<Zap className="w-4 h-4" />}
              >
                Calculate Your Needs
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { icon: <Shield className="w-4 h-4" />, text: "10-Year Warranty" },
                { icon: <RotateCcw className="w-4 h-4" />, text: "11,000+ Cycles" },
                { icon: <Battery className="w-4 h-4" />, text: "LiFePO₄ Safe" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-semibold shadow-sm"
                >
                  <span className="text-hithium-primary">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Product Visual */}
          <div className="flex justify-center items-end lg:items-end relative">
            {/* Product card */}
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="relative bg-gradient-to-b from-hithium-light to-white rounded-[2.5rem] border border-hithium-primary/10 shadow-2xl shadow-hithium-primary/10 overflow-hidden p-8 pb-0">
                {/* Top product label */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-bold text-hithium-primary uppercase tracking-wider">HiTHIUM HeroEE</p>
                    <h3 className="font-display font-black text-2xl text-hithium-navy">Energy Storage</h3>
                  </div>
                  <div className="bg-hithium-orange text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Featured
                  </div>
                </div>

                {/* Capacity pills */}
                <div className="flex gap-2 mb-6">
                  {["1kWh", "2kWh", "8kWh", "16kWh"].map((cap, i) => (
                    <span
                      key={cap}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        i === 2
                          ? "bg-hithium-primary text-white shadow-md"
                          : "bg-white border border-gray-200 text-gray-500"
                      }`}
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Product Image */}
                <div className="relative h-64 sm:h-72 flex items-end justify-center float-animation">
                  {!imageError ? (
                    <Image
                      src="/images/products/heroee-main.jpg"
                      alt="HeroEE Energy Storage System"
                      fill
                      className="object-contain object-bottom drop-shadow-2xl"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                      <Battery className="w-32 h-32 text-hithium-primary/30 mb-4" />
                      <p className="text-hithium-primary font-semibold">HeroEE Series</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating spec badge */}
              <div className="absolute -left-4 top-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-hithium-green/10 flex items-center justify-center">
                    <RotateCcw className="w-4 h-4 text-hithium-green" />
                  </div>
                  <div>
                    <p className="font-black text-sm text-hithium-navy">11,000+</p>
                    <p className="text-xs text-gray-400">Cycle Life</p>
                  </div>
                </div>
              </div>

              {/* Floating price badge */}
              <div className="absolute -right-4 top-24 bg-hithium-primary rounded-2xl shadow-xl px-4 py-3 text-white hidden lg:block">
                <p className="text-xs font-semibold opacity-80">Starting from</p>
                <p className="font-black text-lg">NPR 85,000</p>
              </div>

              {/* View all link */}
              <div className="mt-4 text-center pb-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-hithium-primary font-semibold text-sm hover:gap-2 transition-all"
                >
                  View all products <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-6 border-t border-gray-100 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-black font-display text-hithium-primary mb-0.5">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-hithium-navy">{stat.label}</p>
              <p className="text-xs text-gray-400">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
