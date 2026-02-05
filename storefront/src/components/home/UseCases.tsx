"use client";

import { Card, CardBody } from "@heroui/react";
import { Home, Building2, Tent, Palmtree, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const useCases = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Home Backup",
    description:
      "Keep lights, fans, internet, and essential appliances running during load shedding. Solar + battery for maximum savings.",
    products: "HeroEE 2 / 8 / 16",
    gradient: "from-hithium-primary to-hithium-cyan",
    bgGradient: "from-hithium-primary/5 to-hithium-cyan/5",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Commercial & Industrial",
    description:
      "Optimize energy costs for shops, offices, and factories. Peak shaving, demand management, and solar integration.",
    products: "HeroEE 8 / 16 (expandable)",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/5 to-pink-500/5",
  },
  {
    icon: <Tent className="w-8 h-8" />,
    title: "Outdoor & Events",
    description:
      "Portable, silent power for camping, outdoor events, and remote work sites. No generators, no noise, no fumes.",
    products: "HeroEE 1 / 2",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/5 to-teal-500/5",
  },
  {
    icon: <Palmtree className="w-8 h-8" />,
    title: "Off-Grid & Rural",
    description:
      "Reliable energy for areas with limited grid access. Solar-powered systems for remote homes, schools, and communities.",
    products: "HeroEE 8 / 16 + Solar",
    gradient: "from-hithium-orange to-yellow-500",
    bgGradient: "from-hithium-orange/5 to-yellow-500/5",
  },
];

export function UseCases() {
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hithium-orange/10 to-yellow-500/10 border border-hithium-orange/20 text-hithium-orange rounded-full px-5 py-2 text-sm font-bold mb-6">
            <Zap className="w-4 h-4" />
            Use Cases
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 mb-5">
            Energy Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hithium-primary to-hithium-cyan">
              Every Need
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you need home backup during load shedding or off-grid power
            for a rural community, <span className="text-hithium-primary font-semibold">HiTHIUM</span> has you covered.
          </p>
        </div>

        {/* Use Case Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <Card
              key={useCase.title}
              className="group bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              shadow="none"
            >
              <CardBody className="p-0">
                {/* Top Gradient Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${useCase.gradient}`} />

                <div className="p-7">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.bgGradient} border border-gray-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-transparent bg-clip-text bg-gradient-to-br ${useCase.gradient}`}>
                      {useCase.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-gray-900 text-xl mb-3 group-hover:text-hithium-primary transition-colors">
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Products Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r ${useCase.bgGradient} text-sm font-bold`}>
                      <Zap className="w-3.5 h-3.5" />
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${useCase.gradient}`}>
                        {useCase.products}
                      </span>
                    </span>

                    <Link
                      href="/products"
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${useCase.gradient} flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
