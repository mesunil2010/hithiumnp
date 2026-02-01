import type { Metadata } from "next";
import SupportClient from "@/components/support/SupportClient";

export const metadata: Metadata = {
  title: "Support",
  description:
    "HiTHIUM Nepal product support, warranty information, FAQ, and after-sales service.",
};

export default function SupportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SupportClient />
    </div>
  );
}
