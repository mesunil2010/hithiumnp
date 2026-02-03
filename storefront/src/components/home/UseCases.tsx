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
    <section className="section-padding bg-hithium-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Use Cases
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
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
              className="bg-white/[0.04] backdrop-blur border border-white/10 card-hover"
            >
              <CardBody className="p-6">
                <div className="w-14 h-14 rounded-xl bg-hithium-primary/20 flex items-center justify-center text-hithium-accent mb-4">
                  {useCase.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-hithium-primary/20 text-hithium-accent text-xs font-medium">
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
