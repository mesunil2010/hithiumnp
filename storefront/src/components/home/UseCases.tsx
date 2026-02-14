"use client";

import { Button } from "@heroui/react";
import { Home, Building2, Tent, Palmtree, ArrowRight, Zap, Battery, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const useCases = [
  {
    id: "home",
    icon: <Home className="w-6 h-6" />,
    title: "Home Backup",
    subtitle: "Never lose power again",
    description: "Keep lights, fans, internet, and essential appliances running during load shedding. Solar + battery for maximum savings.",
    products: "HeroEE 2 / 8 / 16",
    features: ["24/7 Power Supply", "Solar Integration", "Silent Operation"],
    iconBg: "bg-hithium-primary",
    stats: { value: "8–16", label: "Hours Backup" },
  },
  {
    id: "commercial",
    icon: <Building2 className="w-6 h-6" />,
    title: "Commercial",
    subtitle: "Optimize energy costs",
    description: "Optimize energy costs for shops, offices, and factories. Peak shaving, demand management, and solar integration.",
    products: "HeroEE 8 / 16",
    features: ["Peak Shaving", "Demand Management", "Grid Independence"],
    iconBg: "bg-purple-600",
    stats: { value: "40%", label: "Cost Savings" },
  },
  {
    id: "outdoor",
    icon: <Tent className="w-6 h-6" />,
    title: "Outdoor & Events",
    subtitle: "Portable power anywhere",
    description: "Portable, silent power for camping, outdoor events, and remote work sites. No generators, no noise, no fumes.",
    products: "HeroEE 1 / 2",
    features: ["Ultra Portable", "Zero Noise", "Multiple Outlets"],
    iconBg: "bg-hithium-green",
    stats: { value: "1–2", label: "kWh Capacity" },
  },
  {
    id: "offgrid",
    icon: <Palmtree className="w-6 h-6" />,
    title: "Off-Grid & Rural",
    subtitle: "Power remote locations",
    description: "Reliable energy for areas with limited grid access. Solar-powered systems for remote homes, schools, and communities.",
    products: "HeroEE 8 / 16 + Solar",
    features: ["Complete Independence", "Solar Powered", "Low Maintenance"],
    iconBg: "bg-hithium-orange",
    stats: { value: "100%", label: "Off-Grid Ready" },
  },
];

export function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useCases[activeIndex];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-hithium-orange/8 border border-hithium-orange/20 text-hithium-orange rounded-full px-5 py-2 text-sm font-bold mb-4">
              <Zap className="w-4 h-4" />
              Use Cases
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-hithium-navy">
              Power for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hithium-primary to-hithium-accent">
                Every Scenario
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl mt-4 text-lg">
              From home backup to industrial applications, HiTHIUM solutions adapt to your energy needs.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-8 mt-6 lg:mt-0">
            <div className="text-center">
              <p className="font-display font-black text-3xl text-hithium-primary">4</p>
              <p className="text-gray-500 text-sm">Solutions</p>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div className="text-center">
              <p className="font-display font-black text-3xl text-hithium-orange">1–16</p>
              <p className="text-gray-500 text-sm">kWh Range</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 bg-hithium-gray rounded-2xl p-2">
          {useCases.map((uc, i) => (
            <button
              key={uc.id}
              onClick={() => setActiveIndex(i)}
              className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                i === activeIndex
                  ? "bg-white text-hithium-navy shadow-sm"
                  : "text-gray-500 hover:text-hithium-navy"
              }`}
            >
              <span className={i === activeIndex ? "text-hithium-primary" : ""}>{uc.icon}</span>
              <span className="hidden sm:inline">{uc.title}</span>
            </button>
          ))}
        </div>

        {/* Active Case Panel */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 bg-hithium-gray rounded-3xl p-8 lg:p-10">
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-16 h-16 rounded-2xl ${active.iconBg} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                {active.icon}
              </div>
              <div>
                <h3 className="font-display font-black text-2xl lg:text-3xl text-hithium-navy mb-1">
                  {active.title}
                </h3>
                <p className="text-gray-500 font-medium">{active.subtitle}</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              {active.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-8">
              {active.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold"
                >
                  <Zap className="w-3.5 h-3.5 text-hithium-primary" />
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-display font-black text-3xl text-hithium-primary">{active.stats.value}</p>
                  <p className="text-gray-500 text-sm">{active.stats.label}</p>
                </div>
                <div className="h-10 w-px bg-gray-200" />
                <div>
                  <p className="text-hithium-navy font-bold text-sm">{active.products}</p>
                  <p className="text-gray-400 text-xs">Recommended</p>
                </div>
              </div>
              <Button
                as={Link}
                href="/products"
                className="font-bold bg-hithium-primary text-white hover:bg-hithium-accent transition-colors"
                endContent={<ArrowRight className="w-4 h-4" />}
              >
                View Products
              </Button>
            </div>
          </div>

          {/* Side Cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {useCases.filter((_, i) => i !== activeIndex).map((uc) => (
              <button
                key={uc.id}
                onClick={() => setActiveIndex(useCases.indexOf(uc))}
                className="text-left p-5 bg-white border border-gray-100 rounded-2xl hover:border-hithium-primary/20 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${uc.iconBg} flex items-center justify-center text-white flex-shrink-0`}>
                    {uc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-hithium-navy group-hover:text-hithium-primary transition-colors">{uc.title}</p>
                    <p className="text-sm text-gray-500 truncate">{uc.subtitle}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-hithium-primary transition-colors flex-shrink-0" />
                </div>
              </button>
            ))}

            {/* Bottom CTA */}
            <div className="p-6 rounded-2xl bg-hithium-navy flex-1 flex flex-col justify-between min-h-[140px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-hithium-orange flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Not sure what you need?</p>
                  <p className="text-gray-400 text-xs">Use our Watt Calculator</p>
                </div>
              </div>
              <Button
                as={Link}
                href="/watt-calculator"
                size="sm"
                className="font-bold bg-hithium-orange text-white hover:bg-orange-500 w-full transition-colors"
                startContent={<Battery className="w-4 h-4" />}
              >
                Calculate Your Needs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
