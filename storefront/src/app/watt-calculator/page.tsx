"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Card,
  CardBody,
  Button,
  Chip,
  Breadcrumbs,
  BreadcrumbItem,
  Input,
  Divider,
} from "@heroui/react";
import {
  Plus,
  Trash2,
  Calculator,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import type { Product } from "@/lib/api";

interface Appliance {
  id: string;
  name: string;
  watts: number;
  hours: number;
  quantity: number;
}

const presetAppliances = [
  { name: "LED Light (10W)", watts: 10 },
  { name: "Ceiling Fan", watts: 75 },
  { name: "WiFi Router", watts: 15 },
  { name: "Phone Charger", watts: 20 },
  { name: "Laptop", watts: 65 },
  { name: "TV (LED 32\")", watts: 50 },
  { name: "TV (LED 55\")", watts: 100 },
  { name: "Refrigerator", watts: 150 },
  { name: "Air Cooler", watts: 200 },
  { name: "Washing Machine", watts: 500 },
  { name: "Microwave", watts: 1000 },
  { name: "Air Conditioner (1 Ton)", watts: 1200 },
];

// Product capacity mapping for recommendations
const productCapacities = [
  { handle: "heroee-1", capacity: 1, model: "HeroEE 1" },
  { handle: "heroee-2", capacity: 2, model: "HeroEE 2" },
  { handle: "heroee-8", capacity: 8, model: "HeroEE 8" },
  { handle: "heroee-16", capacity: 16, model: "HeroEE 16" },
];

export default function WattCalculatorPage() {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products on mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("/api/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products || []);
        } else {
          // Fallback to static data
          const { products: staticProducts } = await import("@/lib/data");
          setProducts(staticProducts);
        }
      } catch {
        // Fallback to static data
        const { products: staticProducts } = await import("@/lib/data");
        setProducts(staticProducts);
      }

      setIsLoading(false);
    };

    loadData();
  }, []);

  const addAppliance = (preset?: { name: string; watts: number }) => {
    const newAppliance: Appliance = {
      id: Date.now().toString(),
      name: preset?.name || "Custom Appliance",
      watts: preset?.watts || 0,
      hours: 4,
      quantity: 1,
    };
    setAppliances([...appliances, newAppliance]);
  };

  const removeAppliance = (id: string) => {
    setAppliances(appliances.filter((a) => a.id !== id));
  };

  const updateAppliance = (
    id: string,
    field: keyof Appliance,
    value: string | number
  ) => {
    setAppliances(
      appliances.map((a) => (a.id === id ? { ...a, [field]: value } : a))
    );
  };

  const totalWatts = useMemo(
    () => appliances.reduce((sum, a) => sum + a.watts * a.quantity, 0),
    [appliances]
  );

  const totalWh = useMemo(
    () =>
      appliances.reduce((sum, a) => sum + a.watts * a.hours * a.quantity, 0),
    [appliances]
  );

  const totalKwh = totalWh / 1000;

  const recommendation = useMemo(() => {
    // Find the appropriate product based on capacity needed
    let recommendedCapacity = productCapacities[0];

    for (const cap of productCapacities) {
      if (totalKwh <= cap.capacity) {
        recommendedCapacity = cap;
        break;
      }
      recommendedCapacity = cap; // Use the largest if needed
    }

    // Find the product to get the actual price
    const product = products.find((p) => p.handle === recommendedCapacity.handle);

    return {
      model: recommendedCapacity.model,
      capacity: `${recommendedCapacity.capacity}kWh`,
      handle: recommendedCapacity.handle,
      price: product?.priceFormatted || `NPR ${recommendedCapacity.capacity * 30000}`,
    };
  }, [totalKwh, products]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Watt Calculator</BreadcrumbItem>
      </Breadcrumbs>

      <div className="text-center mb-10">
        <Chip color="primary" variant="flat" className="mb-4">
          <Calculator className="w-3 h-3 mr-1" />
          Watt Calculator
        </Chip>
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">
          Find Your Perfect Battery Size
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Add the appliances you want to power during load shedding. We&apos;ll
          calculate your energy needs and recommend the right HeroEE model.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Appliance list */}
        <div className="lg:col-span-2">
          <Card className="border border-gray-100" shadow="sm">
            <CardBody className="p-6">
              <h2 className="font-display font-bold text-gray-900 mb-4">
                Your Appliances
              </h2>

              {appliances.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p className="mb-4">No appliances added yet.</p>
                  <p className="text-sm">Use the quick add buttons below or add a custom appliance.</p>
                </div>
              ) : (
                <div className="space-y-3 mb-6">
                  {appliances.map((appliance) => (
                    <div
                      key={appliance.id}
                      className="flex flex-wrap items-center gap-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <Input
                        value={appliance.name}
                        onValueChange={(v) =>
                          updateAppliance(appliance.id, "name", v)
                        }
                        variant="bordered"
                        size="sm"
                        className="flex-1 min-w-[140px]"
                        label="Appliance"
                      />
                      <Input
                        type="number"
                        value={String(appliance.watts)}
                        onValueChange={(v) =>
                          updateAppliance(appliance.id, "watts", Number(v) || 0)
                        }
                        variant="bordered"
                        size="sm"
                        className="w-24"
                        label="Watts"
                        min={0}
                      />
                      <Input
                        type="number"
                        value={String(appliance.hours)}
                        onValueChange={(v) =>
                          updateAppliance(appliance.id, "hours", Number(v) || 0)
                        }
                        variant="bordered"
                        size="sm"
                        className="w-24"
                        label="Hours/day"
                        min={0}
                        max={24}
                      />
                      <Input
                        type="number"
                        value={String(appliance.quantity)}
                        onValueChange={(v) =>
                          updateAppliance(
                            appliance.id,
                            "quantity",
                            Number(v) || 1
                          )
                        }
                        variant="bordered"
                        size="sm"
                        className="w-20"
                        label="Qty"
                        min={1}
                      />
                      <Button
                        isIconOnly
                        variant="light"
                        color="danger"
                        size="sm"
                        onClick={() => removeAppliance(appliance.id)}
                        aria-label="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick add presets */}
              <Divider className="mb-4" />
              <p className="text-sm font-medium text-gray-700 mb-3">
                Quick add:
              </p>
              <div className="flex flex-wrap gap-2">
                {presetAppliances.map((preset) => (
                  <Chip
                    key={preset.name}
                    variant="bordered"
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => addAppliance(preset)}
                    startContent={<Plus className="w-3 h-3" />}
                  >
                    {preset.name}
                  </Chip>
                ))}
              </div>

              <Button
                className="mt-4 font-semibold"
                variant="flat"
                color="primary"
                onClick={() => addAppliance()}
                startContent={<Plus className="w-4 h-4" />}
              >
                Add Custom Appliance
              </Button>
            </CardBody>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {/* Summary */}
          <Card className="border border-gray-100" shadow="sm">
            <CardBody className="p-6">
              <h2 className="font-display font-bold text-gray-900 mb-4">
                Energy Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Load</span>
                  <span className="font-bold text-gray-900">
                    {totalWatts.toLocaleString()} W
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Daily Consumption</span>
                  <span className="font-bold text-gray-900">
                    {totalWh.toLocaleString()} Wh
                  </span>
                </div>
                <Divider />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">
                    Required Capacity
                  </span>
                  <span className="font-display text-2xl font-bold text-hithium-primary">
                    {totalKwh.toFixed(1)} kWh
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Recommendation */}
          <Card className="bg-hithium-dark text-white border border-hithium-primary/20" shadow="lg">
            <CardBody className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5" />
                <span className="font-semibold text-sm">
                  Recommended Model
                </span>
              </div>
              {isLoading ? (
                <div className="animate-pulse">
                  <div className="h-8 bg-white/20 rounded w-48 mb-2"></div>
                  <div className="h-4 bg-white/20 rounded w-32 mb-4"></div>
                  <div className="h-6 bg-white/20 rounded w-24"></div>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold mb-1">
                    HiTHIUM {recommendation.model}
                  </h3>
                  <p className="text-white/80 mb-1">
                    {recommendation.capacity} Capacity
                  </p>
                  <p className="text-xl font-bold mb-4">{recommendation.price}</p>
                  <Button
                    as={Link}
                    href={`/product/${recommendation.handle}`}
                    className="bg-hithium-primary text-white font-semibold w-full hover:bg-hithium-accent"
                    endContent={<ArrowRight className="w-4 h-4" />}
                  >
                    View {recommendation.model}
                  </Button>
                </>
              )}
            </CardBody>
          </Card>

          <Card className="border border-gray-100" shadow="sm">
            <CardBody className="p-4">
              <p className="text-xs text-gray-500">
                <strong>Note:</strong> This calculator provides an estimate.
                Actual consumption may vary based on appliance efficiency,
                usage patterns, and ambient temperature. We recommend adding
                20-30% buffer to your calculated needs. Contact us for a
                personalized assessment.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
