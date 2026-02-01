import type { Metadata } from "next";
import {
  Card,
  CardBody,
  Chip,
  Breadcrumbs,
  BreadcrumbItem,
} from "@heroui/react";
import {
  Factory,
  Globe,
  Award,
  Users,
  Zap,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HiTHIUM Bangladesh — exclusive distributor of HiTHIUM and HiTHIUM HeroEE energy storage products.",
};

const milestones = [
  { year: "2019", event: "HiTHIUM founded in Xiamen, China" },
  { year: "2022", event: "3.3 GWh battery cell sales globally" },
  { year: "2024", event: "28.3 GWh in cell sales, Top 2 globally" },
  { year: "2025", event: "HeroEE residential series launched" },
  { year: "2026", event: "World's first Lighthouse Factory for energy storage" },
];

const stats = [
  { value: "28.3 GWh", label: "Cell Sales (2024)", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "#2", label: "Global Ranking", icon: <Award className="w-5 h-5" /> },
  { value: "100+", label: "Countries Served", icon: <Globe className="w-5 h-5" /> },
  { value: "11,000+", label: "Battery Cycle Life", icon: <Zap className="w-5 h-5" /> },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>About Us</BreadcrumbItem>
      </Breadcrumbs>

      {/* Hero */}
      <div className="text-center mb-16">
        <Chip color="primary" variant="flat" className="mb-4">
          About HiTHIUM Bangladesh
        </Chip>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Powering Bangladesh&apos;s Energy Future
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          HiTHIUM Energy Storage Technology BD Ltd. is the exclusive distributor
          of HiTHIUM and HiTHIUM HeroEE energy storage products in Bangladesh.
          We are committed to providing clean, reliable, and affordable energy
          solutions to homes and businesses across the country.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center border border-gray-100" shadow="sm">
            <CardBody className="p-6">
              <div className="w-10 h-10 rounded-lg bg-hithium-light flex items-center justify-center text-hithium-primary mx-auto mb-3">
                {stat.icon}
              </div>
              <p className="font-display text-3xl font-bold text-hithium-primary">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* About HiTHIUM */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            About HiTHIUM
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              HiTHIUM is a global leader in energy storage, focusing exclusively
              on the energy storage field. Founded in 2019, the company has
              rapidly risen to become the #2 ranked energy storage battery
              manufacturer worldwide.
            </p>
            <p>
              In January 2026, HiTHIUM&apos;s Chongqing manufacturing base was
              recognized as the world&apos;s first Lighthouse Factory for energy
              storage batteries by the World Economic Forum — a testament to
              their manufacturing excellence and innovation.
            </p>
            <p>
              Unlike many battery brands that source cells from third parties,
              HiTHIUM controls the entire cell manufacturing process in-house,
              ensuring the highest quality and consistency. Their LiFePO₄ cells
              deliver industry-leading 11,000+ cycle life, equivalent to 10-15
              years of daily use.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Our Mission in Bangladesh
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Bangladesh faces unique energy challenges — from frequent load
              shedding to rising electricity costs. HiTHIUM Bangladesh is here
              to provide world-class energy storage solutions that address these
              challenges head-on.
            </p>
            <p>
              Our HeroEE series of portable power stations and residential
              energy storage systems are designed to keep essential appliances
              running during outages, reduce electricity bills through solar
              integration, and provide clean energy alternatives to noisy,
              polluting diesel generators.
            </p>
            <p>
              With local after-sales support, warranty services, and a growing
              dealer network, we ensure every HiTHIUM customer in Bangladesh
              receives the best possible experience.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-8">
          HiTHIUM Milestones
        </h2>
        <div className="max-w-2xl mx-auto">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex gap-4 mb-6 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full green-gradient flex items-center justify-center text-white font-bold text-sm">
                  {m.year.slice(2)}
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                )}
              </div>
              <div className="pb-6">
                <p className="font-display font-bold text-gray-900">{m.year}</p>
                <p className="text-gray-600">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Shield className="w-6 h-6" />, title: "Safety First", desc: "LiFePO₄ technology with zero thermal runaway risk" },
          { icon: <Target className="w-6 h-6" />, title: "Quality", desc: "In-house manufacturing with Lighthouse Factory standards" },
          { icon: <Users className="w-6 h-6" />, title: "Local Support", desc: "Dedicated after-sales team in Bangladesh" },
          { icon: <Factory className="w-6 h-6" />, title: "Innovation", desc: "Continuous R&D from 587Ah to 1300Ah cells" },
        ].map((v) => (
          <Card key={v.title} className="border border-gray-100" shadow="sm">
            <CardBody className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-hithium-light flex items-center justify-center text-hithium-primary mx-auto mb-3">
                {v.icon}
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-1">{v.title}</h3>
              <p className="text-sm text-gray-600">{v.desc}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
