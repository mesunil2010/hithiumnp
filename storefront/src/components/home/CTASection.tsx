"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowRight, Phone, Calculator } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl green-gradient p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Not sure which system is right for you?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg">
                Use our Watt Calculator to find the perfect energy storage
                solution for your home or business. Or talk to our energy
                experts for personalized recommendations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  as={Link}
                  href="/watt-calculator"
                  className="bg-white text-hithium-primary font-semibold px-6"
                  size="lg"
                  startContent={<Calculator className="w-4 h-4" />}
                >
                  Watt Calculator
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  variant="bordered"
                  className="border-white/30 text-white font-semibold hover:bg-white/10 px-6"
                  size="lg"
                  startContent={<Phone className="w-4 h-4" />}
                >
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="grid grid-cols-2 gap-4 text-white text-center">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <p className="text-3xl font-bold">~2.5</p>
                  <p className="text-sm text-white/70">Years ROI</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm text-white/70">Years Lifespan</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <p className="text-3xl font-bold">0</p>
                  <p className="text-sm text-white/70">Emissions</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-sm text-white/70">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
