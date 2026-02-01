import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "HiTHIUM Nepal — Energy Storage Solutions",
    template: "%s | HiTHIUM Nepal",
  },
  description:
    "Official distributor of HiTHIUM and HiTHIUM HeroEE energy storage products in Nepal. LiFePO₄ batteries, portable power stations, and solar solutions.",
  keywords: [
    "HiTHIUM",
    "HeroEE",
    "Nepal",
    "energy storage",
    "LiFePO₄",
    "battery",
    "portable power station",
    "solar panel",
    "IPS",
    "UPS",
    "load shedding",
  ],
  openGraph: {
    title: "HiTHIUM Nepal — Energy Storage Solutions",
    description:
      "Official distributor of HiTHIUM and HiTHIUM HeroEE energy storage products in Nepal.",
    url: "https://hithiumbd.com",
    siteName: "HiTHIUM Nepal",
    locale: "en_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
