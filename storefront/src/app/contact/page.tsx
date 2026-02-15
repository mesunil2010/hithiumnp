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
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Contact Us</BreadcrumbItem>
      </Breadcrumbs>

      <div className="text-center mb-12">
        <Chip color="primary" variant="flat" className="mb-4">
          Get in Touch
        </Chip>
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about our products? Need help choosing the right energy
          storage solution? Our team is here to help.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact info */}
        <div className="space-y-6">
          {[
            {
              icon: <Phone className="w-5 h-5" />,
              title: "Phone",
              details: ["+880 1XXX-XXXXXX", "+880 1XXX-XXXXXX"],
            },
            {
              icon: <Mail className="w-5 h-5" />,
              title: "Email",
              details: ["info@hithiumnp.com", "sales@hithiumnp.com"],
            },
            {
              icon: <MapPin className="w-5 h-5" />,
              title: "Address",
              details: ["Kathmandu, Nepal"],
            },
            {
              icon: <Clock className="w-5 h-5" />,
              title: "Business Hours",
              details: ["Saturday - Thursday", "10:00 AM - 7:00 PM"],
            },
          ].map((item) => (
            <Card key={item.title} className="border border-gray-100" shadow="sm">
              <CardBody className="p-4 flex flex-row items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-hithium-primary/10 flex items-center justify-center text-hithium-primary shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-sm">
                    {item.title}
                  </h3>
                  {item.details.map((d) => (
                    <p key={d} className="text-sm text-gray-600">
                      {d}
                    </p>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Contact form */}
        <Card className="lg:col-span-2 border border-gray-100" shadow="sm">
          <CardBody className="p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  placeholder="Your full name"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired
                />
                <Input
                  label="Email"
                  placeholder="your@email.com"
                  type="email"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Phone"
                  placeholder="+880 1XXX-XXXXXX"
                  variant="bordered"
                  labelPlacement="outside"
                />
                <Select
                  label="Subject"
                  placeholder="Select a subject"
                  variant="bordered"
                  labelPlacement="outside"
                >
                  <SelectItem key="product">Product Inquiry</SelectItem>
                  <SelectItem key="purchase">Purchase / Order</SelectItem>
                  <SelectItem key="support">Technical Support</SelectItem>
                  <SelectItem key="dealer">Become a Dealer</SelectItem>
                  <SelectItem key="warranty">Warranty Claim</SelectItem>
                  <SelectItem key="other">Other</SelectItem>
                </Select>
              </div>
              <Textarea
                label="Message"
                placeholder="Tell us how we can help..."
                variant="bordered"
                labelPlacement="outside"
                minRows={4}
                isRequired
              />
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="font-semibold"
                startContent={<Send className="w-4 h-4" />}
              >
                Send Message
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
