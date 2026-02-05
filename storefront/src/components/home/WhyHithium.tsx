"use client";

import { Card, CardBody } from "@heroui/react";
import {
  Shield,
  Zap,
  RotateCcw,
  ThermometerSun,
  Factory,
  Award,
  Leaf,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: <RotateCcw className="w-7 h-7" />,
    title: "11,000+ Cycle Life",
    description:
      "Industry-leading LiFePO\u2084 cells deliver over 11,000 charge cycles \u2014 more than 10-15 years of daily use.",
    gradient: "from-hithium-primary to-hithium-cyan",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Ultimate Safety",
    description:
      "Lithium iron phosphate chemistry with zero risk of thermal runaway. Built-in BMS with 8 layers of protection.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: <Factory className="w-7 h-7" />,
    title: "Lighthouse Factory",
    description:
      "World\u2019s first Lighthouse Factory for energy storage batteries, recognized by the World Economic Forum.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "In-House Manufacturing",
    description:
      "Unlike many brands, HiTHIUM controls the entire cell manufacturing process \u2014 from raw materials to finished product.",
    gradient: "from-hithium-orange to-yellow-500",
  },
  {
    icon: <ThermometerSun className="w-7 h-7" />,
    title: "Nepal-Ready",
    description:
      "Engineered for tropical climates with superior thermal stability. Ideal for Nepal\u2019s temperature conditions.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Up to 10-Year Warranty",
    description:
      "Backed by comprehensive warranty coverage, with local after-sales support from HiTHIUM Nepal.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Zero Emissions",
    description:
      "Clean, silent energy storage. No fuel, no fumes \u2014 just reliable green power for your home and business.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Global #2 in Shipments",
    description:
      "HiTHIUM ranks #2 globally in energy storage battery shipments, with 28.3 GWh in cell sales.",
    gradient: "from-amber-500 to-orange-500",
  },
];

export function WhyHithium() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-hithium-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-hithium-cyan/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hithium-primary/10 to-hithium-cyan/10 border border-hithium-primary/20 text-hithium-primary rounded-full px-5 py-2 text-sm font-bold mb-6">
            <Shield className="w-4 h-4" />
            Why Choose HiTHIUM?
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 mb-5">
            Trusted by the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hithium-primary to-hithium-cyan">
              World
            </span>
            , Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hithium-orange to-yellow-500">
              Nepal
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            HiTHIUM is a global leader in energy storage, powering utility-scale
            projects, businesses, and homes in <span className="text-hithium-primary font-semibold">100+ countries</span>.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              shadow="none"
            >
              <CardBody className="p-7">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-gray-900 text-lg mb-3 group-hover:text-hithium-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated underline */}
                <div className={`h-1 w-0 group-hover:w-12 bg-gradient-to-r ${feature.gradient} rounded-full mt-5 transition-all duration-500`} />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
