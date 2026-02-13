"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowRight, Shield, RotateCcw, Battery, Zap, Play } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-hithium-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Energy Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 98, 254, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(15, 98, 254, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-hithium-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-hithium-orange/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-hithium-cyan/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Lightning Bolt Decorations */}
      <div className="absolute top-20 right-[15%] text-hithium-cyan/20">
        <Zap className="w-24 h-24 animate-pulse" />
      </div>
      <div className="absolute bottom-32 left-[10%] text-hithium-orange/20">
        <Zap className="w-16 h-16 animate-pulse" style={{ animationDelay: '0.7s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hithium-primary/20 to-hithium-cyan/20 border border-hithium-primary/30 rounded-full px-5 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hithium-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-hithium-cyan"></span>
              </span>
              <span className="text-hithium-cyan font-semibold text-sm tracking-wide">Exclusive Distributor in Nepal</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 text-white">
              <span className="block">Unleash the</span>
              <span className="block">
                <span className="brand-gradient-text">Power</span>
                {" "}of{" "}
                <span className="energy-gradient-text">Energy</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Advanced <span className="text-hithium-cyan font-semibold">LiFePO&#x2084;</span> battery technology with
              <span className="text-hithium-orange font-semibold"> 11,000+ cycles</span>. From portable power stations
              to whole-home energy storage — reliable, safe, and built for Nepal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14">
              <Button
                as={Link}
                href="/products"
                size="lg"
                className="font-bold px-8 py-6 text-base bg-gradient-to-r from-hithium-primary to-hithium-accent text-white shadow-lg shadow-hithium-primary/30 hover:shadow-hithium-primary/50 hover:scale-105 transition-all duration-300"
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Explore Products
              </Button>
              <Button
                as={Link}
                href="/watt-calculator"
                variant="bordered"
                size="lg"
                className="font-bold text-white border-white/30 hover:bg-white/10 hover:border-white/50 px-8 py-6 text-base transition-all duration-300"
                startContent={<Play className="w-4 h-4" />}
              >
                Calculate Your Needs
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="group flex flex-col items-center lg:items-start gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-hithium-primary/50 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-hithium-primary to-hithium-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-bold text-white text-lg">10 Year</p>
                  <p className="text-gray-400 text-xs">Warranty</p>
                </div>
              </div>
              <div className="group flex flex-col items-center lg:items-start gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-hithium-orange/50 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-hithium-orange to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <RotateCcw className="w-6 h-6 text-white" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-bold text-white text-lg">11,000+</p>
                  <p className="text-gray-400 text-xs">Cycles</p>
                </div>
              </div>
              <div className="group flex flex-col items-center lg:items-start gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-hithium-cyan/50 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-hithium-cyan to-hithium-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Battery className="w-6 h-6 text-white" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-bold text-white text-lg">LiFePO&#x2084;</p>
                  <p className="text-gray-400 text-xs">Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Product Showcase */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-8 bg-gradient-to-r from-hithium-primary/30 via-hithium-cyan/20 to-hithium-orange/30 rounded-full blur-3xl animate-pulse" />

              {/* Main Product Card */}
              <div className="relative w-[450px] h-[500px] rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center p-10 overflow-hidden">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-hithium-primary via-hithium-cyan to-hithium-orange opacity-50">
                  <div className="w-full h-full rounded-3xl bg-gray-900" />
                </div>

                {/* Inner Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-hithium-primary/30 blur-[60px]" />

                {/* Product Image or Placeholder */}
                <div className="relative z-10 w-48 h-48 mb-6 float-animation">
                  {!imageError ? (
                    <Image
                      src="/images/products/heroee-main.jpg"
                      alt="HeroEE Energy Storage System"
                      fill
                      className="object-contain drop-shadow-2xl"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-hithium-primary/20 to-hithium-cyan/20 border-2 border-dashed border-hithium-primary/30 flex items-center justify-center">
                      <div className="text-center">
                        <Battery className="w-16 h-16 text-hithium-cyan mx-auto mb-2" />
                        <Zap className="w-6 h-6 text-hithium-orange mx-auto animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="relative z-10 text-center">
                  <p className="text-white font-display text-3xl font-bold mb-2">
                    HeroEE Series
                  </p>
                  <p className="text-gray-400 text-sm mb-6">
                    Portable &amp; Home Energy Storage
                  </p>

                  {/* Capacity Options */}
                  <div className="flex gap-2 justify-center mb-6">
                    {["1kWh", "2kWh", "8kWh", "16kWh"].map((cap, index) => (
                      <span
                        key={cap}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 cursor-pointer ${
                          index === 2
                            ? 'bg-gradient-to-r from-hithium-primary to-hithium-cyan text-white shadow-lg shadow-hithium-primary/30'
                            : 'bg-white/10 text-white border border-white/20 hover:border-hithium-primary/50'
                        }`}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  {/* Feature Highlight */}
                  <div className="flex items-center justify-center gap-2 text-hithium-cyan">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-semibold">LiFePO&#x2084; Energy Storage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "#2", label: "Global Shipments", sublabel: "Energy Storage" },
            { value: "28.3", label: "GWh Sold", sublabel: "In Cell Sales" },
            { value: "100+", label: "Countries", sublabel: "Worldwide Presence" },
            { value: "24/7", label: "Support", sublabel: "Local Service" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-3xl sm:text-4xl font-black font-display text-white mb-1 group-hover:text-hithium-cyan transition-colors">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-gray-300">{stat.label}</p>
              <p className="text-xs text-gray-500">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#F4F4F4"
          />
        </svg>
      </div>
    </section>
  );
}
