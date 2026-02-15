"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowRight, Shield, RotateCcw, Battery, Zap, Calculator } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#0a0f1c]">
      {/* Subtle diagonal line texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(255,255,255,1) 0px,
            rgba(255,255,255,1) 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Single deep blue ambient glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-hithium-primary/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-hithium-primary/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 bg-hithium-primary/10 border border-hithium-primary/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-hithium-cyan" />
              <span className="text-hithium-cyan font-semibold text-sm tracking-wide">
                Exclusive Distributor in Nepal
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.04] mb-6 tracking-tight">
              <span className="text-white block">Advanced</span>
              <span className="text-white block">
                Energy{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%)",
                  }}
                >
                  Storage
                </span>
              </span>
              <span className="text-white block">for Nepal</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              LiFePO&#x2084; battery technology with{" "}
              <span className="text-slate-200 font-medium">11,000+ cycles</span> and{" "}
              <span className="text-slate-200 font-medium">10-year warranty</span>.
              Reliable home and commercial energy storage built for Nepal&apos;s climate.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-14">
              <Button
                as={Link}
                href="/products"
                size="lg"
                className="font-semibold px-8 bg-hithium-primary text-white shadow-lg shadow-hithium-primary/20 hover:bg-hithium-accent transition-all duration-200"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                Explore Products
              </Button>
              <Button
                as={Link}
                href="/watt-calculator"
                variant="bordered"
                size="lg"
                className="font-semibold text-slate-300 border-slate-600 hover:border-slate-400 hover:text-white px-8 transition-all duration-200"
                startContent={<Calculator className="w-4 h-4" />}
              >
                Calculate Your Needs
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
              {[
                { icon: <Shield className="w-5 h-5" />, value: "10 Year", label: "Warranty" },
                { icon: <RotateCcw className="w-5 h-5" />, value: "11,000+", label: "Cycles" },
                { icon: <Battery className="w-5 h-5" />, value: "LiFePO₄", label: "Technology" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-200"
                >
                  <div className="text-hithium-primary">
                    {badge.icon}
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="font-bold text-white text-sm leading-none mb-1">{badge.value}</p>
                    <p className="text-slate-500 text-xs">{badge.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Product Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Card */}
              <div className="relative w-[460px] h-[520px] rounded-3xl overflow-hidden border border-white/[0.08] bg-gradient-to-b from-slate-800/80 to-slate-900/90 backdrop-blur-sm shadow-2xl">
                {/* Inner top glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-hithium-primary/60 to-transparent" />

                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-[0.025]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Ambient glow */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-32 bg-hithium-primary/15 blur-[60px]" />

                {/* Product image */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-10">
                  <div className="relative w-52 h-52 mb-8 float-animation">
                    {!imageError ? (
                      <Image
                        src="/images/products/heroee-main.jpg"
                        alt="HiTHIUM HeroEE Energy Storage"
                        fill
                        className="object-contain drop-shadow-2xl"
                        onError={() => setImageError(true)}
                        priority
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="relative">
                          <Battery className="w-28 h-28 text-slate-600" />
                          <Zap className="w-8 h-8 text-hithium-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Product info */}
                  <div className="text-center w-full">
                    <p className="font-display text-2xl font-bold text-white mb-1">
                      HeroEE Series
                    </p>
                    <p className="text-slate-500 text-sm mb-5">
                      LiFePO&#x2084; Energy Storage Systems
                    </p>

                    {/* Capacity pills */}
                    <div className="flex gap-2 justify-center mb-5">
                      {["1 kWh", "2 kWh", "8 kWh", "16 kWh"].map((cap, i) => (
                        <span
                          key={cap}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                            i === 2
                              ? "bg-hithium-primary text-white"
                              : "bg-white/[0.06] text-slate-400 border border-white/[0.08]"
                          }`}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>

                    {/* Spec row */}
                    <div className="flex items-center justify-center gap-1 text-slate-400 text-xs">
                      <Zap className="w-3.5 h-3.5 text-hithium-cyan" />
                      <span>Grade-A LiFePO&#x2084; cells · IEC certified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2.5 border border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-hithium-light flex items-center justify-center">
                  <Shield className="w-5 h-5 text-hithium-primary" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">10 Year</p>
                  <p className="text-gray-400 text-xs">Warranty</p>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/3 bg-hithium-dark rounded-2xl shadow-xl p-3 flex items-center gap-2.5 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-hithium-primary/20 flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-hithium-cyan" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">11,000+</p>
                  <p className="text-slate-400 text-xs">Cycles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-20 lg:mt-28 pt-8 border-t border-white/[0.06]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "#2", label: "Global Shipments Ranking" },
              { value: "28.3 GWh", label: "Cell Sales Volume" },
              { value: "100+", label: "Countries Served" },
              { value: "24/7", label: "Local Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-black text-white mb-1.5">
                  {stat.value}
                </p>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
