"use client";

import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
  Chip,
  Breadcrumbs,
  BreadcrumbItem,
} from "@heroui/react";
import {
  Handshake,
  TrendingUp,
  Shield,
  Users,
  Send,
} from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growing Market",
    desc: "Bangladesh's energy storage market is rapidly expanding with increasing demand for backup power solutions.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Premium Brand",
    desc: "Represent the world's #2 energy storage battery manufacturer with Lighthouse Factory credentials.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Full Support",
    desc: "Receive marketing materials, technical training, and dedicated account management from HiTHIUM BD.",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Competitive Margins",
    desc: "Enjoy attractive dealer pricing and margins with a high-value product range.",
  },
];

export default function BecomeDealerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Become a Dealer</BreadcrumbItem>
      </Breadcrumbs>

      <div className="text-center mb-12">
        <Chip color="primary" variant="flat" className="mb-4">
          Partnership
        </Chip>
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">
          Become a HiTHIUM Dealer
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join our growing network of authorized dealers and bring world-class
          energy storage solutions to your customers.
        </p>
      </div>

      {/* Benefits */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {benefits.map((b) => (
          <Card key={b.title} className="border border-gray-100" shadow="sm">
            <CardBody className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-hithium-light flex items-center justify-center text-hithium-primary mx-auto mb-3">
                {b.icon}
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-1">
                {b.title}
              </h3>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Application form */}
      <Card className="max-w-3xl mx-auto border border-gray-100" shadow="sm">
        <CardBody className="p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-6">
            Dealer Application Form
          </h2>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="Business Name"
                placeholder="Your company name"
                variant="bordered"
                isRequired
              />
              <Input
                label="Contact Person"
                placeholder="Full name"
                variant="bordered"
                isRequired
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="Email"
                placeholder="business@email.com"
                type="email"
                variant="bordered"
                isRequired
              />
              <Input
                label="Phone"
                placeholder="+880 1XXX-XXXXXX"
                variant="bordered"
                isRequired
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Select
                label="Business Type"
                placeholder="Select type"
                variant="bordered"
              >
                <SelectItem key="retail">Retail Store</SelectItem>
                <SelectItem key="wholesale">Wholesale / Distributor</SelectItem>
                <SelectItem key="solar">Solar Installer</SelectItem>
                <SelectItem key="electrical">Electrical Contractor</SelectItem>
                <SelectItem key="ecommerce">E-Commerce Platform</SelectItem>
                <SelectItem key="other">Other</SelectItem>
              </Select>
              <Select
                label="Location"
                placeholder="Select division"
                variant="bordered"
              >
                <SelectItem key="dhaka">Dhaka</SelectItem>
                <SelectItem key="chittagong">Chittagong</SelectItem>
                <SelectItem key="rajshahi">Rajshahi</SelectItem>
                <SelectItem key="khulna">Khulna</SelectItem>
                <SelectItem key="sylhet">Sylhet</SelectItem>
                <SelectItem key="barisal">Barisal</SelectItem>
                <SelectItem key="rangpur">Rangpur</SelectItem>
                <SelectItem key="mymensingh">Mymensingh</SelectItem>
              </Select>
            </div>
            <Input
              label="Business Address"
              placeholder="Full address"
              variant="bordered"
            />
            <Textarea
              label="Tell us about your business"
              placeholder="What products do you currently sell? Why are you interested in HiTHIUM?"
              variant="bordered"
              minRows={4}
            />
            <Button
              type="submit"
              color="primary"
              size="lg"
              className="font-semibold w-full sm:w-auto"
              startContent={<Send className="w-4 h-4" />}
            >
              Submit Application
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
