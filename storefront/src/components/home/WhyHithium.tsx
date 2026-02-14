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
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-hithium-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-hithium-cyan/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header - Left aligned */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hithium-primary/10 to-hithium-cyan/10 border border-hithium-primary/20 text-hithium-primary rounded-full px-5 py-2 text-sm font-bold mb-4">
              <Shield className="w-4 h-4" />
              Why Choose HiTHIUM?
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900">
              Trusted by the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hithium-primary to-hithium-cyan">
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
          <div className="group md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 via-[#1e3a5f] to-slate-900 p-8 flex flex-col justify-between">
            {/* Warm ambient glows */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-hithium-primary/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-hithium-orange/12 rounded-full blur-[60px]" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-hithium-cyan to-hithium-primary flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <RotateCcw className="w-8 h-8" />
              </div>
              <h3 className="font-display font-black text-4xl lg:text-5xl text-white mb-3">
                11,000+
              </h3>
              <p className="text-2xl text-sky-300 font-bold mb-4">Cycle Life</p>
            </div>
            <p className="relative text-gray-400 leading-relaxed">
              Industry-leading LiFePO₄ cells deliver over 11,000 charge cycles — more than 10-15 years of daily use.
            </p>
          </div>

          {/* Safety Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 p-6 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">Ultimate Safety</h3>
              <p className="text-sm text-white/70">Zero thermal runaway risk</p>
            </div>
          </div>

          {/* Lighthouse Factory Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 p-6 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              <Factory className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">Lighthouse Factory</h3>
              <p className="text-sm text-white/70">World Economic Forum</p>
            </div>
          </div>

          {/* Wide Card - In-House Manufacturing */}
          <div className="group md:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-r from-hithium-orange to-amber-500 p-6 flex items-center">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">In-House Manufacturing</h3>
                  <p className="text-white/70">From raw materials to finished product</p>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Battery className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Nepal Ready Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-500 to-orange-500 p-6 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">Nepal-Ready</h3>
              <p className="text-sm text-white/70">Tropical climate optimized</p>
            </div>
          </div>

          {/* Warranty Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 p-6 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">10-Year Warranty</h3>
              <p className="text-sm text-white/70">Local support included</p>
            </div>
          </div>

          {/* Tall Card - Global Presence */}
          <div className="group md:row-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 p-6 flex flex-col">
            {/* Globe animation would go here */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
            </div>

            <div className="relative flex-1 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-hithium-primary to-hithium-cyan flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7" />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <p className="font-display font-black text-6xl text-white mb-2">#2</p>
                <p className="text-xl text-sky-300 font-bold mb-1">Global Ranking</p>
                <p className="text-gray-400 text-sm">In energy storage shipments</p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-3xl text-white">28.3</span>
                  <span className="text-hithium-orange font-bold">GWh</span>
                </div>
                <p className="text-gray-500 text-sm">Cell sales volume</p>
              </div>
            </div>
          </div>

          {/* Zero Emissions Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 p-6 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">Zero Emissions</h3>
              <p className="text-sm text-white/70">Clean & silent power</p>
            </div>
          </div>

          {/* Award Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 p-6 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">100+ Countries</h3>
              <p className="text-sm text-white/70">Worldwide presence</p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="group md:col-span-2 relative rounded-3xl overflow-hidden bg-hithium-light border-2 border-hithium-primary/20 p-6 flex items-center justify-between hover:border-hithium-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-hithium-primary to-hithium-cyan flex items-center justify-center text-white">
                <Battery className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-gray-900">Experience the difference</h3>
                <p className="text-gray-500">Premium LiFePO₄ technology for your home</p>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="inline-flex items-center gap-2 text-hithium-primary font-bold group-hover:gap-3 transition-all">
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
