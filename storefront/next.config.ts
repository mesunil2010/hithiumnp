import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9000",
      },
      {
        protocol: "https",
        hostname: "hithiumbd.com",
      },
      {
        protocol: "https",
        hostname: "www.hithium.com",
      },
      {
        protocol: "https",
        hostname: "en.hithium.com",
      },
    ],
  },
};

export default nextConfig;
