"use client";

import { Button } from "@heroui/react";
import { Home, Building2, Tent, Palmtree, ArrowRight, Zap, Battery, Sun, Wifi, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const useCases = [
  {
    id: "home",
    icon: <Home className="w-8 h-8" />,
    title: "Home Backup",
    subtitle: "Never lose power again",
    description: "Keep lights, fans, internet, and essential appliances running during load shedding. Solar + battery for maximum savings.",
    products: "HeroEE 2 / 8 / 16",
    features: ["24/7 Power Supply", "Solar Integration", "Silent Operation"],
    gradient: "from-hithium-primary to-hithium-cyan",
    image: "/images/use-cases/home.jpg",
    stats: { value: "8-16", label: "Hours Backup" },
  },
  {
    id: "commercial",
    icon: <Building2 className="w-8 h-8" />,
    title: "Commercial & Industrial",
    subtitle: "Optimize your energy costs",
    description: "Optimize energy costs for shops, offices, and factories. Peak shaving, demand management, and solar integration.",
    products: "HeroEE 8 / 16 (expandable)",
    features: ["Peak Shaving", "Demand Management", "Grid Independence"],
    gradient: "from-purple-500 to-pink-500",
    image: "/images/use-cases/commercial.jpg",
    stats: { value: "40%", label: "Cost Savings" },
  },
  {
    id: "outdoor",
    icon: <Tent className="w-8 h-8" />,
    title: "Outdoor & Events",
    subtitle: "Portable power anywhere",
    description: "Portable, silent power for camping, outdoor events, and remote work sites. No generators, no noise, no fumes.",
    products: "HeroEE 1 / 2",
    features: ["Ultra Portable", "Zero Noise", "Multiple Outlets"],
    gradient: "from-emerald-500 to-teal-500",
    image: "/images/use-cases/outdoor.jpg",
    stats: { value: "1-2", label: "kWh Capacity" },
  },
  {
    id: "offgrid",
    icon: <Palmtree className="w-8 h-8" />,
    title: "Off-Grid & Rural",
    subtitle: "Power remote locations",
    description: "Reliable energy for areas with limited grid access. Solar-powered systems for remote homes, schools, and communities.",
    products: "HeroEE 8 / 16 + Solar",
    features: ["Complete Independence", "Solar Powered", "Low Maintenance"],
    gradient: "from-hithium-orange to-yellow-500",
    image: "/images/use-cases/offgrid.jpg",
    stats: { value: "100%", label: "Off-Grid" },
  },
];

function UseCaseCard({ useCase, isActive, onHover }: { useCase: typeof useCases[0]; isActive: boolean; onHover: () => void }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 ${
        isActive ? 'lg:col-span-2' : 'lg:col-span-1'
      }`}
      onMouseEnter={onHover}
    >
      <div
        className={`h-full rounded-3xl overflow-hidden transition-all duration-500 ${
          isActive
            ? 'bg-gradient-to-br from-hithium-dark to-gray-900'
            : 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl'
        }`}
      >
        {isActive ? (
          // Expanded Active Card
          <div className="relative h-full min-h-[450px] p-8 flex flex-col lg:flex-row gap-8">
            {/* Background Effects */}
            <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${useCase.gradient} opacity-20 rounded-full blur-[100px]`} />

            {/* Left Content */}
            <div className="relative flex-1 flex flex-col justify-between">
              <div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {useCase.icon}
                </div>
                <h3 className="font-display font-black text-3xl lg:text-4xl text-white mb-2">
                  {useCase.title}
                </h3>
                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${useCase.gradient} font-semibold text-lg mb-4`}>
                  {useCase.subtitle}
                </p>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                  {useCase.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {useCase.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium"
                    >
                      <Zap className="w-3.5 h-3.5 text-hithium-cyan" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <p className={`font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r ${useCase.gradient}`}>
                      {useCase.stats.value}
                    </p>
                    <p className="text-gray-500 text-sm">{useCase.stats.label}</p>
                  </div>
                  <div className="h-12 w-px bg-white/10" />
                  <div>
                    <p className="text-white font-bold">{useCase.products}</p>
                    <p className="text-gray-500 text-sm">Recommended</p>
                  </div>
                </div>
                <Button
                  as={Link}
                  href="/products"
                  className={`font-bold bg-gradient-to-r ${useCase.gradient} text-white shadow-lg hover:scale-105 transition-transform`}
                  endContent={<ArrowRight className="w-4 h-4" />}
                >
                  View Products
                </Button>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="relative w-full h-80">
                {!imageError ? (
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover rounded-2xl"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${useCase.gradient} opacity-20 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                        {useCase.icon}
                      </div>
                      <p className="text-white/60 font-medium">{useCase.title}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Collapsed Card
          <div className="p-6 h-full min-h-[200px] flex flex-col justify-between">
            <div>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {useCase.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-2 group-hover:text-hithium-primary transition-colors">
                {useCase.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {useCase.subtitle}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm font-semibold text-gray-400">{useCase.products}</span>
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${useCase.gradient} flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-gradient-to-b from-hithium-light to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0F62FE 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-hithium-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-hithium-orange/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hithium-orange/10 to-yellow-500/10 border border-hithium-orange/20 text-hithium-orange rounded-full px-5 py-2 text-sm font-bold mb-4">
              <Zap className="w-4 h-4" />
              Use Cases
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900">
              Power for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hithium-primary to-hithium-cyan">
                Every Scenario
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl mt-4 text-lg">
              From home backup to industrial applications, HiTHIUM solutions adapt to your energy needs.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="hidden lg:flex items-center gap-8 mt-6 lg:mt-0">
            <div className="text-center">
              <p className="font-display font-black text-3xl text-hithium-primary">4</p>
              <p className="text-gray-500 text-sm">Solutions</p>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div className="text-center">
              <p className="font-display font-black text-3xl text-hithium-orange">1-16</p>
              <p className="text-gray-500 text-sm">kWh Range</p>
            </div>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={useCase.id}
              useCase={useCase}
              isActive={index === activeIndex}
              onHover={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-hithium-dark to-gray-900 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-hithium-primary to-hithium-cyan flex items-center justify-center text-white">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-hithium-orange to-yellow-500 flex items-center justify-center text-white">
                <Sun className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">
                <Wifi className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">Not sure which system fits your needs?</h3>
              <p className="text-gray-400">Use our Watt Calculator to find the perfect match</p>
            </div>
          </div>
          <Button
            as={Link}
            href="/watt-calculator"
            size="lg"
            className="font-bold px-8 bg-gradient-to-r from-hithium-orange to-yellow-500 text-white shadow-lg hover:scale-105 transition-transform"
            startContent={<Battery className="w-5 h-5" />}
          >
            Calculate Your Needs
          </Button>
        </div>
      </div>
    </section>
  );
}
