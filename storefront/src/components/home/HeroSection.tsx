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
      {/* Warm Background Gradient */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Warm ambient glows — amber + blue, not cold electric */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-hithium-orange/8 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-hithium-accent/8 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/6 border border-white/12 rounded-full px-5 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span className="text-amber-200 font-semibold text-sm tracking-wide">Exclusive Distributor in Nepal</span>
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
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Advanced <span className="text-sky-300 font-semibold">LiFePO&#x2084;</span> battery technology with
              <span className="text-amber-400 font-semibold"> 11,000+ cycles</span>. From portable power stations
              to whole-home energy storage — reliable, safe, and built for Nepal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14">
              <Button
                as={Link}
                href="/products"
                size="lg"
                className="font-bold px-8 py-6 text-base bg-hithium-primary text-white shadow-lg shadow-hithium-primary/25 hover:bg-hithium-accent hover:shadow-hithium-accent/30 transition-all duration-300"
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Explore Products
              </Button>
              <Button
                as={Link}
                href="/watt-calculator"
                variant="bordered"
                size="lg"
                className="font-bold text-white border-white/20 hover:bg-white/8 hover:border-white/35 px-8 py-6 text-base transition-all duration-300"
                startContent={<Play className="w-4 h-4" />}
              >
                Calculate Your Needs
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="group flex flex-col items-center lg:items-start gap-2 p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-amber-400/25 hover:bg-white/8 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-hithium-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-bold text-white text-lg">10 Year</p>
                  <p className="text-slate-400 text-xs">Warranty</p>
                </div>
              </div>
              <div className="group flex flex-col items-center lg:items-start gap-2 p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-amber-400/25 hover:bg-white/8 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-hithium-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <RotateCcw className="w-6 h-6 text-white" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-bold text-white text-lg">11,000+</p>
                  <p className="text-slate-400 text-xs">Cycles</p>
                </div>
              </div>
              <div className="group flex flex-col items-center lg:items-start gap-2 p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-amber-400/25 hover:bg-white/8 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-hithium-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Battery className="w-6 h-6 text-white" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-bold text-white text-lg">LiFePO&#x2084;</p>
                  <p className="text-slate-400 text-xs">Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Product Showcase */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Warm outer glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-hithium-primary/15 via-transparent to-hithium-orange/10 rounded-full blur-3xl" />

              {/* Main Product Card — warm slate, not near-black */}
              <div className="relative w-[440px] h-[500px] rounded-3xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center p-10 overflow-hidden shadow-2xl">
                {/* Inner glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-28 bg-hithium-primary/20 blur-[50px]" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-hithium-orange/12 blur-[60px]" />

                {/* Product Image */}
                <div className="relative z-10 w-48 h-48 mb-6 float-animation">
                  {!imageError ? (
                    <Image
                      src="/images/products/heroee-main.png"
                      alt="HeroEE Energy Storage System"
                      fill
                      className="object-contain drop-shadow-2xl"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <div className="text-center">
                        <Battery className="w-16 h-16 text-sky-300 mx-auto mb-2" />
                        <Zap className="w-6 h-6 text-amber-400 mx-auto" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="relative z-10 text-center">
                  <p className="text-white font-display text-3xl font-bold mb-2">
                    HeroEE Series
                  </p>
                  <p className="text-slate-400 text-sm mb-6">
                    Portable &amp; Home Energy Storage
                  </p>

                  {/* Capacity Options */}
                  <div className="flex gap-2 justify-center mb-6">
                    {["1kWh", "2kWh", "8kWh", "16kWh"].map((cap, index) => (
                      <span
                        key={cap}
                        className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                          index === 2
                            ? 'bg-hithium-primary text-white shadow-md shadow-hithium-primary/30'
                            : 'bg-white/8 text-slate-300 border border-white/12 hover:border-hithium-primary/40'
                        }`}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  {/* Feature Highlight */}
                  <div className="flex items-center justify-center gap-2 text-sky-300">
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
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center group p-5 rounded-2xl bg-white/5 border border-white/8 hover:border-white/15 hover:bg-white/8 transition-all duration-300"
            >
              <p className="text-3xl sm:text-4xl font-black font-display text-white mb-1 group-hover:text-amber-300 transition-colors">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-300">{stat.label}</p>
              <p className="text-xs text-slate-500">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#F8F7F4"
          />
        </svg>
      </div>
    </section>
  );
}
