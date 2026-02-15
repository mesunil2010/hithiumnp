"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Shield,
  Zap,
  RotateCcw,
  ThermometerSun,
  Factory,
  Award,
  Leaf,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Divider } from "@heroui/react";

const features = [
  {
    icon: <RotateCcw className="w-5 h-5" />,
    title: "11,000+ Cycle Life",
    description: "Grade-A LiFePO₄ cells rated for over 11,000 charge cycles — 10–15 years of daily use.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Zero Thermal Runaway",
    description: "Inherently stable chemistry eliminates fire and explosion risk even under abuse conditions.",
  },
  {
    icon: <Factory className="w-5 h-5" />,
    title: "Lighthouse Factory",
    description: "Recognized by the World Economic Forum as a model smart manufacturing facility.",
  },
  {
    icon: <ThermometerSun className="w-5 h-5" />,
    title: "Climate Optimized",
    description: "Engineered for Nepal's tropical climate — reliable performance from 0°C to 55°C.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Vertical Integration",
    description: "In-house production from raw materials to finished cells ensures unmatched quality control.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Zero Emissions",
    description: "Silent, clean operation with no emissions — the environmentally responsible choice.",
  },
];

const stats = [
  { value: "#2", label: "Global ranking in energy storage shipments" },
  { value: "28.3 GWh", label: "Annual cell sales volume" },
  { value: "100+", label: "Countries with active deployments" },
  { value: "10 Years", label: "Warranty on all HeroEE products" },
];

export function WhyHithium() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 bg-hithium-light border border-hithium-primary/15 text-hithium-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            <Shield className="w-4 h-4" />
            Why HiTHIUM?
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            Trusted by customers in{" "}
            <span className="text-hithium-primary">100+ countries</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            HiTHIUM is the world&apos;s #2 energy storage manufacturer. Every product sold in Nepal meets the same global standards powering utility-scale projects worldwide.
          </p>
        </div>

        {/* Main content: two-column */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Stats + visual */}
          <div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-hithium-primary/20 hover:bg-hithium-light/50 transition-all duration-200"
                >
                  <p className="font-display text-3xl font-black text-gray-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* World-class certification banner */}
            <div className="rounded-2xl bg-hithium-dark p-6 flex items-start gap-4 border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-hithium-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Award className="w-6 h-6 text-hithium-cyan" />
              </div>
              <div>
                <p className="font-bold text-white mb-1">IEC · UL · CE Certified</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  All HiTHIUM products meet international safety and performance standards, with full certification documentation available on request.
                </p>
              </div>
            </div>

            {/* Image block */}
            <div className="mt-6 rounded-2xl overflow-hidden relative h-48 bg-gradient-to-br from-slate-100 to-slate-200">
              {!imageError ? (
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="HiTHIUM manufacturing facility"
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Factory className="w-8 h-8" />
                    <span className="font-medium">Lighthouse Factory</span>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold text-sm">World Economic Forum</p>
                <p className="text-slate-300 text-xs">Lighthouse Factory Recognition</p>
              </div>
            </div>
          </div>

          {/* Right: Feature list */}
          <div>
            <div className="space-y-0">
              {features.map((feature, index) => (
                <div key={feature.title}>
                  <div className="flex gap-4 py-6 group">
                    <div className="w-10 h-10 rounded-xl bg-hithium-light flex items-center justify-center flex-shrink-0 text-hithium-primary group-hover:bg-hithium-primary group-hover:text-white transition-all duration-200 mt-0.5">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="font-display font-bold text-gray-900 text-base">
                          {feature.title}
                        </h3>
                        <CheckCircle2 className="w-4 h-4 text-hithium-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {index < features.length - 1 && (
                    <Divider className="bg-gray-100" />
                  )}
                </div>
              ))}
            </div>

            {/* Nepal-specific note */}
            <div className="mt-6 p-5 rounded-2xl bg-hithium-light border border-hithium-primary/15 flex items-start gap-3">
              <Globe className="w-5 h-5 text-hithium-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  Local Support. Global Standards.
                </p>
                <p className="text-gray-500 text-sm">
                  As Nepal&apos;s exclusive distributor, we provide installation support, warranty service, and technical consultation — all backed by HiTHIUM&apos;s global service network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
