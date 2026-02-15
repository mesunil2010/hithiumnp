"use client";

import { Button } from "@heroui/react";
import { Home, Building2, Tent, Palmtree, ArrowRight, Zap, Battery, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const useCases = [
  {
    id: "home",
    icon: <Home className="w-6 h-6" />,
    title: "Home Backup",
    subtitle: "Never lose power again",
    description:
      "Keep lights, fans, internet, and essential appliances running during load shedding. Pair with solar for maximum savings and independence.",
    products: "HeroEE 2 / 8 / 16",
    features: ["24/7 Power Supply", "Solar Integration", "Silent Operation"],
    image: "/images/use-cases/home.png",
    stat: { value: "8–16 hrs", label: "Average backup duration" },
  },
  {
    id: "commercial",
    icon: <Building2 className="w-6 h-6" />,
    title: "Commercial & Industrial",
    subtitle: "Optimize energy costs",
    description:
      "Peak shaving, demand management, and solar integration for shops, offices, and factories. Reduce your electricity bill significantly.",
    products: "HeroEE 8 / 16 (expandable)",
    features: ["Peak Shaving", "Demand Management", "Grid Independence"],
    image: "/images/use-cases/commercial.png",
    stat: { value: "Up to 40%", label: "Electricity cost reduction" },
  },
  {
    id: "outdoor",
    icon: <Tent className="w-6 h-6" />,
    title: "Outdoor & Events",
    subtitle: "Power anywhere, silently",
    description:
      "Portable, silent power for camping, outdoor events, and remote work sites. No generators, no noise, no fumes — just clean energy.",
    products: "HeroEE 1 / 2",
    features: ["Ultra Portable", "Zero Noise", "Multiple Outlets"],
    image: "/images/use-cases/outdoor.jpg",
    stat: { value: "1–2 kWh", label: "Portable capacity" },
  },
  {
    id: "offgrid",
    icon: <Palmtree className="w-6 h-6" />,
    title: "Off-Grid & Rural",
    subtitle: "Power remote locations",
    description:
      "Complete energy independence for areas with limited grid access. Solar-powered systems for remote homes, schools, and communities.",
    products: "HeroEE 8 / 16 + Solar",
    features: ["Complete Independence", "Solar Powered", "Low Maintenance"],
    image: "/images/use-cases/offgrid.png",
    stat: { value: "100%", label: "Off-grid capable" },
  },
];

function UseCaseCard({
  useCase,
  isActive,
  onActivate,
}: {
  useCase: (typeof useCases)[0];
  isActive: boolean;
  onActivate: () => void;
}) {
  const [imageError, setImageError] = useState(false);

  if (isActive) {
    return (
      <div className="lg:col-span-2">
        <div className="h-full min-h-[440px] rounded-3xl bg-hithium-dark border border-white/[0.07] overflow-hidden relative">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hithium-primary/60 to-transparent" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-hithium-primary/8 rounded-full blur-[120px]" />

          <div className="relative p-8 lg:p-10 flex flex-col lg:flex-row gap-8 h-full">
            {/* Left content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-hithium-primary/20 flex items-center justify-center text-hithium-primary mb-5 border border-hithium-primary/20">
                  {useCase.icon}
                </div>
                <h3 className="font-display font-black text-3xl lg:text-4xl text-white mb-1.5">
                  {useCase.title}
                </h3>
                <p className="text-hithium-cyan font-semibold mb-4">{useCase.subtitle}</p>
                <p className="text-slate-400 leading-relaxed mb-6 max-w-md text-sm">
                  {useCase.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {useCase.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] text-slate-300 text-xs font-medium border border-white/[0.08]"
                    >
                      <Check className="w-3 h-3 text-hithium-primary" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-display font-black text-2xl text-white">{useCase.stat.value}</p>
                    <p className="text-slate-500 text-xs">{useCase.stat.label}</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div>
                    <p className="text-white font-semibold text-sm">{useCase.products}</p>
                    <p className="text-slate-500 text-xs">Recommended</p>
                  </div>
                </div>
                <Button
                  as={Link}
                  href="/products"
                  size="sm"
                  className="font-semibold bg-hithium-primary text-white hover:bg-hithium-accent transition-colors"
                  endContent={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  View Products
                </Button>
              </div>
            </div>

            {/* Right image */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-slate-800/50 border border-white/[0.06]">
                {!imageError ? (
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover opacity-80"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-hithium-primary/10 border border-hithium-primary/20 flex items-center justify-center text-hithium-primary">
                      {useCase.icon}
                    </div>
                    <p className="text-slate-500 text-sm font-medium">{useCase.title}</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-hithium-dark/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={onActivate}
      onClick={onActivate}
    >
      <div className="h-full min-h-[180px] rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="p-6 h-full flex flex-col justify-between">
          <div>
            <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-hithium-light group-hover:border-hithium-primary/20 group-hover:text-hithium-primary mb-4 transition-all duration-200">
              {useCase.icon}
            </div>
            <h3 className="font-display font-bold text-gray-900 text-lg mb-1 group-hover:text-hithium-primary transition-colors">
              {useCase.title}
            </h3>
            <p className="text-gray-400 text-sm">{useCase.subtitle}</p>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
            <span className="text-xs text-gray-400 font-medium">{useCase.products}</span>
            <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-hithium-primary group-hover:border-hithium-primary group-hover:text-white transition-all duration-200">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Very subtle background tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-600 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Zap className="w-4 h-4 text-hithium-primary" />
              Use Cases
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
              Power for{" "}
              <span className="text-hithium-primary">every scenario</span>
            </h2>
            <p className="text-gray-500 max-w-lg mt-3 text-base leading-relaxed">
              From home backup to industrial applications, HiTHIUM solutions adapt to your
              energy needs across Nepal.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-6 mt-6 lg:mt-0">
            <div className="text-center">
              <p className="font-display font-black text-2xl text-gray-900">1–16 kWh</p>
              <p className="text-gray-400 text-sm">Capacity range</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div className="text-center">
              <p className="font-display font-black text-2xl text-gray-900">4</p>
              <p className="text-gray-400 text-sm">Use cases</p>
            </div>
          </div>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={useCase.id}
              useCase={useCase}
              isActive={index === activeIndex}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-8 p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-hithium-primary/10 flex items-center justify-center text-hithium-primary">
              <Battery className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Not sure which system fits your needs?</p>
              <p className="text-gray-400 text-sm">Use our Watt Calculator to find the right capacity</p>
            </div>
          </div>
          <Button
            as={Link}
            href="/watt-calculator"
            size="md"
            className="font-semibold bg-hithium-dark text-white hover:bg-gray-800 transition-colors whitespace-nowrap"
            startContent={<Zap className="w-4 h-4" />}
          >
            Calculate Your Needs
          </Button>
        </div>
      </div>
    </section>
  );
}
