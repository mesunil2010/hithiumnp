"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowRight, Shield, RotateCcw, Battery } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="hero-gradient absolute inset-0" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      {/* Green glow accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-hithium-primary/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-hithium-primary/20 border border-hithium-primary/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm">
              <span className="w-2 h-2 rounded-full bg-hithium-accent animate-pulse" />
              <span className="text-gray-300">Exclusive Distributor in Nepal</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Power Your Life{" "}
              <br className="hidden sm:block" />
              with{" "}
              <span className="brand-gradient-text">HiTHIUM</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              Advanced LiFePO&#x2084; battery technology with 11,000+ cycle life.
              From portable power stations to whole-home energy storage —
              reliable, safe, and built for Nepal.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                as={Link}
                href="/products"
                size="lg"
                className="font-semibold px-8 bg-hithium-primary text-white hover:bg-hithium-accent"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Shop Products
              </Button>
              <Button
                as={Link}
                href="/watt-calculator"
                variant="bordered"
                size="lg"
                className="font-semibold text-white border-white/20 hover:bg-white/5 px-8"
              >
                Watt Calculator
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-hithium-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-hithium-accent" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-white">10 Year</p>
                  <p className="text-gray-500 text-xs">Warranty</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-hithium-primary/20 flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-hithium-accent" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-white">11,000+</p>
                  <p className="text-gray-500 text-xs">Cycles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-hithium-primary/20 flex items-center justify-center">
                  <Battery className="w-5 h-5 text-hithium-accent" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-white">LiFePO&#x2084;</p>
                  <p className="text-gray-500 text-xs">Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — product showcase */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-8 green-gradient rounded-full opacity-10 blur-3xl" />
              {/* Main card */}
              <div className="relative w-[400px] h-[420px] rounded-3xl bg-white/[0.04] backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center p-8">
                {/* HeroEE product visual */}
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 flex items-center justify-center mb-6 shadow-2xl">
                  <div className="text-center">
                    <Battery className="w-10 h-10 text-hithium-accent mx-auto" />
                    <div className="w-8 h-1 rounded-full bg-hithium-orange mx-auto mt-2" />
                  </div>
                </div>
                <p className="text-white font-display text-2xl font-bold mb-1">
                  HeroEE Series
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Portable &amp; Home Energy Storage
                </p>
                <div className="flex gap-3">
                  {["1kWh", "2kWh", "8kWh", "16kWh"].map((cap) => (
                    <span
                      key={cap}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
                <p className="text-hithium-accent text-sm mt-4 font-medium">
                  LiFePO&#x2084; Energy Storage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
