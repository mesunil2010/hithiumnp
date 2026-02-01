"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowRight, Shield, Zap, RotateCcw } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="hero-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-[url('/images/brand/grid-pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm">
              <span className="w-2 h-2 rounded-full bg-hithium-accent animate-pulse" />
              <span>Exclusive Distributor in Nepal</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Power Your Life with{" "}
              <span className="text-hithium-accent">HiTHIUM</span>{" "}
              Energy Storage
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Advanced LiFePO₄ battery technology with 11,000+ cycle life.
              From portable power stations to whole-home energy storage —
              reliable, safe, and built for Nepal.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                as={Link}
                href="/products"
                color="primary"
                size="lg"
                className="font-semibold px-8"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Shop Products
              </Button>
              <Button
                as={Link}
                href="/watt-calculator"
                variant="bordered"
                size="lg"
                className="font-semibold text-white border-white/30 hover:bg-white/10 px-8"
              >
                Watt Calculator
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-hithium-accent" />
                <div className="text-sm">
                  <p className="font-semibold text-white">10 Year</p>
                  <p className="text-gray-400 text-xs">Warranty</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-hithium-accent" />
                <div className="text-sm">
                  <p className="font-semibold text-white">11,000+</p>
                  <p className="text-gray-400 text-xs">Cycles</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-hithium-accent" />
                <div className="text-sm">
                  <p className="font-semibold text-white">LiFePO₄</p>
                  <p className="text-gray-400 text-xs">Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — product showcase placeholder */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 green-gradient rounded-full opacity-20 blur-3xl" />
              <div className="relative w-full h-full rounded-2xl bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-20 h-20 text-hithium-accent mx-auto mb-4" />
                  <p className="text-white font-display text-2xl font-bold">
                    HeroEE Series
                  </p>
                  <p className="text-gray-400 mt-2">1kWh — 16kWh</p>
                  <p className="text-hithium-accent text-sm mt-1">
                    LiFePO₄ Energy Storage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
