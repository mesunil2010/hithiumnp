"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Phone, Calculator, Zap, TrendingUp, Clock, Leaf, Headphones } from "lucide-react";

const stats = [
  { icon: <TrendingUp className="w-5 h-5" />, value: "~2.5", label: "Years", sublabel: "ROI" },
  { icon: <Clock className="w-5 h-5" />, value: "10+", label: "Years", sublabel: "Lifespan" },
  { icon: <Leaf className="w-5 h-5" />, value: "0", label: "Emissions", sublabel: "Clean Energy" },
  { icon: <Headphones className="w-5 h-5" />, value: "24/7", label: "Support", sublabel: "Local Team" },
];

export function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-hithium-dark via-[#0d1829] to-[#1a2744] p-10 sm:p-14 lg:p-20">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-hithium-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-hithium-orange/15 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-hithium-cyan/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[60px] animate-pulse" style={{ animationDelay: '0.5s' }} />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
                <Zap className="w-4 h-4 text-hithium-cyan" />
                <span className="text-sm font-semibold text-white/90">Find Your Perfect System</span>
              </div>

              {/* Heading */}
              <h2 className="font-display text-4xl sm:text-5xl font-black mb-6 leading-tight">
                Not sure which
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hithium-cyan to-hithium-primary">
                  system
                </span>{" "}
                is right
                <br />
                for you?
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
                Use our <span className="text-hithium-orange font-semibold">Watt Calculator</span> to find the perfect energy storage
                solution for your home or business. Or talk to our energy
                experts for personalized recommendations.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  as={Link}
                  href="/watt-calculator"
                  size="lg"
                  className="font-bold px-8 py-6 bg-gradient-to-r from-hithium-orange to-yellow-500 text-white shadow-xl shadow-hithium-orange/30 hover:shadow-2xl hover:shadow-hithium-orange/40 hover:scale-105 transition-all duration-300"
                  startContent={<Calculator className="w-5 h-5" />}
                >
                  Watt Calculator
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  variant="bordered"
                  size="lg"
                  className="font-bold px-8 py-6 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                  startContent={<Phone className="w-5 h-5" />}
                >
                  Talk to an Expert
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-5">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="stat-card group text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-hithium-cyan group-hover:text-hithium-orange transition-colors">
                        {stat.icon}
                      </div>
                    </div>

                    {/* Value */}
                    <p className="text-4xl font-black font-display text-white mb-1 group-hover:text-hithium-cyan transition-colors">
                      {stat.value}
                    </p>

                    {/* Labels */}
                    <p className="text-sm font-semibold text-white/90">{stat.label}</p>
                    <p className="text-xs text-white/50">{stat.sublabel}</p>
                  </div>
                ))}
              </div>

              {/* Additional Trust Element */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-hithium-primary to-hithium-cyan flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Free Consultation</p>
                    <p className="text-gray-400 text-sm">Our energy experts are here to help you choose</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
