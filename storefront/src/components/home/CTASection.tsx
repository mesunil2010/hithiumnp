"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Phone, Calculator, Zap, TrendingUp, Clock, Leaf, Headphones } from "lucide-react";

const stats = [
  { icon: <TrendingUp className="w-5 h-5" />, value: "~2.5 yrs", label: "Average ROI" },
  { icon: <Clock className="w-5 h-5" />, value: "10+ yrs", label: "Product Lifespan" },
  { icon: <Leaf className="w-5 h-5" />, value: "0", label: "Emissions" },
  { icon: <Headphones className="w-5 h-5" />, value: "24/7", label: "Local Support" },
];

export function CTASection() {
  return (
    <section className="section-padding bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-hithium-dark border border-white/[0.05]">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hithium-primary/50 to-transparent" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Single ambient glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-hithium-primary/10 rounded-full -translate-y-1/3 translate-x-1/4 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-hithium-primary/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-[100px]" />

          <div className="relative grid lg:grid-cols-2 gap-12 p-10 sm:p-14 lg:p-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.1] rounded-full px-4 py-1.5 mb-8">
                <Zap className="w-3.5 h-3.5 text-hithium-cyan" />
                <span className="text-sm font-semibold text-slate-300">Find Your Perfect System</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
                Not sure which
                <br />
                <span className="text-hithium-cyan">system</span> is right
                <br />
                for you?
              </h2>

              <p className="text-slate-400 mb-10 max-w-md leading-relaxed">
                Use our{" "}
                <span className="text-slate-200 font-medium">Watt Calculator</span> to find the
                right energy storage size for your home or business. Or talk directly to our local energy experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  as={Link}
                  href="/watt-calculator"
                  size="lg"
                  className="font-semibold px-7 bg-hithium-primary text-white hover:bg-hithium-accent transition-colors"
                  startContent={<Calculator className="w-4 h-4" />}
                >
                  Watt Calculator
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  variant="bordered"
                  size="lg"
                  className="font-semibold px-7 border-white/20 text-slate-300 hover:bg-white/[0.06] hover:border-white/30 transition-all"
                  startContent={<Phone className="w-4 h-4" />}
                >
                  Talk to an Expert
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:border-white/[0.1] transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-hithium-primary/15 flex items-center justify-center text-hithium-primary mb-4 group-hover:bg-hithium-primary group-hover:text-white transition-all duration-200">
                      {stat.icon}
                    </div>
                    <p className="font-display font-black text-3xl text-white mb-1">{stat.value}</p>
                    <p className="text-slate-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-hithium-primary/15 flex items-center justify-center text-hithium-primary flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Free Consultation Available</p>
                  <p className="text-slate-500 text-xs">Our energy experts help you choose the right system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
