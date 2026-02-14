"use client";

import {
  Shield,
  Zap,
  RotateCcw,
  ThermometerSun,
  Factory,
  Award,
  Leaf,
  Clock,
  Globe,
  Battery,
} from "lucide-react";

export function WhyHithium() {
  return (
    <section className="section-padding bg-hithium-gray relative overflow-hidden">
      {/* Very subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hithium-gray via-white to-hithium-gray" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-hithium-primary/8 border border-hithium-primary/15 text-hithium-primary rounded-full px-5 py-2 text-sm font-bold mb-4">
              <Shield className="w-4 h-4" />
              Why Choose HiTHIUM?
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-hithium-navy">
              Trusted by the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hithium-primary to-hithium-accent">
                World
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl mt-4 text-lg">
              HiTHIUM is a global leader in energy storage, powering utility-scale projects in 100+ countries.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[180px]">

          {/* Large Featured Card - Cycle Life */}
          <div className="group md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden bg-hithium-navy p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-hithium-primary/20 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-hithium-green/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-2xl" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-hithium-primary/20 border border-hithium-primary/30 flex items-center justify-center text-white mb-6">
                <RotateCcw className="w-8 h-8 text-hithium-light" />
              </div>
              <h3 className="font-display font-black text-5xl lg:text-6xl text-white mb-2">
                11,000+
              </h3>
              <p className="text-xl text-hithium-light font-bold mb-3">Cycle Life</p>
            </div>
            <p className="relative text-gray-400 leading-relaxed text-sm">
              Industry-leading LiFePO₄ cells deliver over 11,000 charge cycles — more than 10–15 years of daily use.
            </p>
          </div>

          {/* Safety Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg hover:border-hithium-green/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-hithium-green/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 text-hithium-green" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-hithium-navy mb-1">Ultimate Safety</h3>
              <p className="text-sm text-gray-500">Zero thermal runaway risk</p>
            </div>
          </div>

          {/* Lighthouse Factory Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg hover:border-hithium-primary/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-hithium-primary/8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Factory className="w-6 h-6 text-hithium-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-hithium-navy mb-1">Lighthouse Factory</h3>
              <p className="text-sm text-gray-500">World Economic Forum</p>
            </div>
          </div>

          {/* Wide Card - In-House Manufacturing */}
          <div className="group md:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-r from-hithium-primary to-hithium-accent p-6 flex items-center">
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">In-House Manufacturing</h3>
                  <p className="text-white/70 text-sm">From raw materials to finished product</p>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center">
                <Battery className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Nepal Ready Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg hover:border-hithium-orange/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-hithium-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ThermometerSun className="w-6 h-6 text-hithium-orange" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-hithium-navy mb-1">Nepal-Ready</h3>
              <p className="text-sm text-gray-500">Tropical climate optimized</p>
            </div>
          </div>

          {/* Warranty Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg hover:border-hithium-primary/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-hithium-primary/8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 text-hithium-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-hithium-navy mb-1">10-Year Warranty</h3>
              <p className="text-sm text-gray-500">Local support included</p>
            </div>
          </div>

          {/* Tall Card - Global Presence */}
          <div className="group md:row-span-2 relative rounded-3xl overflow-hidden bg-hithium-navy p-6 flex flex-col">
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
            </div>

            <div className="relative flex-1 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-hithium-primary/20 border border-hithium-primary/30 flex items-center justify-center text-hithium-light mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7" />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <p className="font-display font-black text-5xl text-white mb-2">#2</p>
                <p className="text-lg text-hithium-light font-bold mb-1">Global Ranking</p>
                <p className="text-gray-400 text-sm">In energy storage shipments</p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-2xl text-white">28.3</span>
                  <span className="text-hithium-orange font-bold">GWh</span>
                </div>
                <p className="text-gray-500 text-sm">Cell sales volume</p>
              </div>
            </div>
          </div>

          {/* Zero Emissions Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg hover:border-hithium-green/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-hithium-green/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-6 h-6 text-hithium-green" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-hithium-navy mb-1">Zero Emissions</h3>
              <p className="text-sm text-gray-500">Clean &amp; silent power</p>
            </div>
          </div>

          {/* Award Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg hover:border-hithium-orange/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-hithium-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 text-hithium-orange" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-hithium-navy mb-1">100+ Countries</h3>
              <p className="text-sm text-gray-500">Worldwide presence</p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="group md:col-span-2 relative rounded-3xl overflow-hidden bg-hithium-light border border-hithium-primary/15 p-6 flex items-center justify-between hover:border-hithium-primary/30 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-hithium-primary flex items-center justify-center text-white">
                <Battery className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-hithium-navy">Experience the difference</h3>
                <p className="text-gray-500 text-sm">Premium LiFePO₄ technology for your home</p>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="inline-flex items-center gap-2 text-hithium-primary font-bold group-hover:gap-3 transition-all text-sm">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
