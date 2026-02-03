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
    icon: <RotateCcw className="w-6 h-6" />,
    title: "11,000+ Cycle Life",
    description:
      "Industry-leading LiFePO\u2084 cells deliver over 11,000 charge cycles \u2014 more than 10-15 years of daily use.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Ultimate Safety",
    description:
      "Lithium iron phosphate chemistry with zero risk of thermal runaway. Built-in BMS with 8 layers of protection.",
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Lighthouse Factory",
    description:
      "World\u2019s first Lighthouse Factory for energy storage batteries, recognized by the World Economic Forum.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "In-House Manufacturing",
    description:
      "Unlike many brands, HiTHIUM controls the entire cell manufacturing process \u2014 from raw materials to finished product.",
  },
  {
    icon: <ThermometerSun className="w-6 h-6" />,
    title: "Nepal-Ready",
    description:
      "Engineered for tropical climates with superior thermal stability. Ideal for Nepal\u2019s temperature conditions.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Up to 10-Year Warranty",
    description:
      "Backed by comprehensive warranty coverage, with local after-sales support from HiTHIUM Nepal.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Zero Emissions",
    description:
      "Clean, silent energy storage. No fuel, no fumes \u2014 just reliable green power for your home and business.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Global #2 in Shipments",
    description:
      "HiTHIUM ranks #2 globally in energy storage battery shipments, with 28.3 GWh in cell sales.",
  },
];

export function WhyHithium() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-hithium-dark/5 text-hithium-dark rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Why Choose HiTHIUM?
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by the World, Built for Nepal
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            HiTHIUM is a global leader in energy storage, powering utility-scale
            projects, businesses, and homes in 100+ countries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="card-hover bg-hithium-gray border-0"
              shadow="none"
            >
              <CardBody className="p-6">
                <div className="w-12 h-12 rounded-xl bg-hithium-primary/10 flex items-center justify-center text-hithium-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
