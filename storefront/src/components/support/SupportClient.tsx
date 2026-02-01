"use client";

import {
  Card,
  CardBody,
  Chip,
  Breadcrumbs,
  BreadcrumbItem,
  Accordion,
  AccordionItem,
  Button,
} from "@heroui/react";
import {
  FileText,
  Shield,
  Wrench,
  Download,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "How long do HiTHIUM LiFePO₄ batteries last?",
    a: "HiTHIUM batteries use premium LiFePO₄ cells rated for 11,000+ charge cycles. With daily use, this translates to 10-15 years of reliable service. The batteries retain over 80% capacity after the rated cycle count.",
  },
  {
    q: "Can I use the HeroEE with solar panels?",
    a: "Yes! All HeroEE models support solar charging. The portable models (HeroEE 1 & 2) have built-in MPPT controllers. The HeroEE 8 and 16 are designed to work with external solar inverters from brands like Victron, Deye, SMA, and GoodWe.",
  },
  {
    q: "What is the warranty coverage?",
    a: "Portable power stations (HeroEE 1 & 2) come with a 5-year warranty. Energy storage systems (HeroEE 8 & 16) come with a 10-year warranty. Warranty is serviced locally through HiTHIUM Nepal.",
  },
  {
    q: "Can I expand my HeroEE 8 or 16 system?",
    a: "Yes! The HeroEE 8 can be expanded by connecting up to 16 units in parallel (128kWh total). The HeroEE 16 also supports up to 16 units in parallel (256kWh total). This modular design lets you start small and expand as needed.",
  },
  {
    q: "Is installation included?",
    a: "For the HeroEE 1 and 2, no installation is needed — they're plug-and-play. For the HeroEE 8 and 16 energy storage systems, we recommend professional installation. Contact us for installation service in Dhaka.",
  },
  {
    q: "How do I claim warranty service?",
    a: "Register your product on our website first. Then contact our support team via email (support@hithiumbd.com) or phone with your registration details and a description of the issue. We'll arrange service or replacement as per the warranty terms.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bKash, Nagad, bank transfer, cash on delivery (Dhaka only), and credit/debit cards. EMI options are available for select products.",
  },
  {
    q: "Do you deliver outside Dhaka?",
    a: "Yes, we deliver nationwide. Delivery within Dhaka is free. Outside Dhaka, a flat shipping fee of ৳1,500 applies. Delivery typically takes 5-7 business days for areas outside Dhaka.",
  },
];

export default function SupportClient() {
  return (
    <div>
      <div className="text-center mb-12">
        <Chip color="primary" variant="flat" className="mb-4">
          Customer Support
        </Chip>
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">
          How Can We Help?
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions, register your product, or get in
          touch with our support team.
        </p>
      </div>

      {/* Support cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          {
            icon: <FileText className="w-6 h-6" />,
            title: "Product Registration",
            desc: "Register your HiTHIUM product for warranty coverage",
            href: "/contact",
            action: "Register Now",
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Warranty Info",
            desc: "Learn about our warranty terms and coverage",
            href: "#warranty",
            action: "Learn More",
          },
          {
            icon: <Wrench className="w-6 h-6" />,
            title: "Technical Support",
            desc: "Get help with installation and troubleshooting",
            href: "/contact",
            action: "Get Help",
          },
          {
            icon: <Download className="w-6 h-6" />,
            title: "Downloads",
            desc: "Product manuals, datasheets, and certificates",
            href: "#downloads",
            action: "Browse",
          },
        ].map((card) => (
          <Card key={card.title} className="card-hover border border-gray-100" shadow="sm">
            <CardBody className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-hithium-light flex items-center justify-center text-hithium-primary mx-auto mb-4">
                {card.icon}
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
              <Button
                as={Link}
                href={card.href}
                color="primary"
                variant="flat"
                size="sm"
                className="font-semibold"
              >
                {card.action}
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Warranty section */}
      <div id="warranty" className="mb-16">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Warranty Information
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <Card className="border border-gray-100" shadow="sm">
            <CardBody className="p-6">
              <h3 className="font-display font-bold text-gray-900 mb-3">
                Portable Power Stations
              </h3>
              <p className="text-gray-600 mb-2">HeroEE 1 & HeroEE 2</p>
              <Chip color="primary" variant="flat" size="lg" className="font-bold">
                5-Year Warranty
              </Chip>
              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                <li>Covers manufacturing defects</li>
                <li>Battery capacity guarantee (80%+ at 5 years)</li>
                <li>Local service through HiTHIUM Nepal</li>
              </ul>
            </CardBody>
          </Card>
          <Card className="border border-gray-100" shadow="sm">
            <CardBody className="p-6">
              <h3 className="font-display font-bold text-gray-900 mb-3">
                Energy Storage Systems
              </h3>
              <p className="text-gray-600 mb-2">HeroEE 8 & HeroEE 16</p>
              <Chip color="success" variant="flat" size="lg" className="font-bold">
                10-Year Warranty
              </Chip>
              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                <li>Covers manufacturing defects</li>
                <li>Battery capacity guarantee (80%+ at rated cycles)</li>
                <li>On-site service available in Dhaka</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="mb-16">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion variant="bordered" selectionMode="multiple">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              aria-label={faq.q}
              title={<span className="font-medium">{faq.q}</span>}
            >
              <p className="text-gray-600 pb-2">{faq.a}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact CTA */}
      <Card className="green-gradient text-white" shadow="lg">
        <CardBody className="p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Still need help?
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Our support team is available Saturday to Thursday, 10 AM to 7 PM.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              as="a"
              href="mailto:support@hithiumbd.com"
              className="bg-white text-hithium-primary font-semibold"
              startContent={<Mail className="w-4 h-4" />}
            >
              Email Support
            </Button>
            <Button
              as="a"
              href="tel:+8801XXXXXXXXX"
              variant="bordered"
              className="border-white/30 text-white font-semibold hover:bg-white/10"
              startContent={<Phone className="w-4 h-4" />}
            >
              Call Us
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
