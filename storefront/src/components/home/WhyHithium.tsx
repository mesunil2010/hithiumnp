"use client";

import { Card, CardBody, Chip } from "@heroui/react";
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
      "Industry-leading LiFePO₄ cells deliver over 11,000 charge cycles — more than 10-15 years of daily use.",
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
      "World's first Lighthouse Factory for energy storage batteries, recognized by the World Economic Forum.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "In-House Manufacturing",
    description:
      "Unlike many brands, HiTHIUM controls the entire cell manufacturing process — from raw materials to finished product.",
  },
  {
    icon: <ThermometerSun className="w-6 h-6" />,
    title: "Nepal-Ready",
    description:
      "Engineered for tropical climates with superior thermal stability. Ideal for Nepal's temperature conditions.",
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
      "Clean, silent energy storage. No fuel, no fumes — just reliable green power for your home and business.",
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
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Chip color="secondary" variant="flat" className="mb-4">
            Why Choose HiTHIUM?
          </Chip>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by the World, Built for Nepal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            HiTHIUM is a global leader in energy storage, powering utility-scale
            projects, businesses, and homes in 100+ countries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="card-hover border border-gray-100"
              shadow="sm"
            >
              <CardBody className="p-6">
                <div className="w-12 h-12 rounded-xl bg-hithium-light flex items-center justify-center text-hithium-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
