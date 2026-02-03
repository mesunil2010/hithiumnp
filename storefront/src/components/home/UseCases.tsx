"use client";

import { Card, CardBody } from "@heroui/react";
import { Home, Building2, Tent, Palmtree } from "lucide-react";

const useCases = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Home Backup",
    description:
      "Keep lights, fans, internet, and essential appliances running during load shedding. Solar + battery for maximum savings.",
    products: "HeroEE 2 / 8 / 16",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Commercial & Industrial",
    description:
      "Optimize energy costs for shops, offices, and factories. Peak shaving, demand management, and solar integration.",
    products: "HeroEE 8 / 16 (expandable)",
  },
  {
    icon: <Tent className="w-8 h-8" />,
    title: "Outdoor & Events",
    description:
      "Portable, silent power for camping, outdoor events, and remote work sites. No generators, no noise, no fumes.",
    products: "HeroEE 1 / 2",
  },
  {
    icon: <Palmtree className="w-8 h-8" />,
    title: "Off-Grid & Rural",
    description:
      "Reliable energy for areas with limited grid access. Solar-powered systems for remote homes, schools, and communities.",
    products: "HeroEE 8 / 16 + Solar",
  },
];

export function UseCases() {
  return (
    <section className="section-padding bg-hithium-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-hithium-primary/10 text-hithium-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Use Cases
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Energy Solutions for Every Need
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Whether you need home backup during load shedding or off-grid power
            for a rural community, HiTHIUM has you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map((useCase) => (
            <Card
              key={useCase.title}
              className="bg-white border border-gray-100 card-hover"
              shadow="sm"
            >
              <CardBody className="p-6">
                <div className="w-14 h-14 rounded-xl bg-hithium-light flex items-center justify-center text-hithium-primary mb-4">
                  {useCase.icon}
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-hithium-light text-hithium-primary text-xs font-medium">
                  {useCase.products}
                </span>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
