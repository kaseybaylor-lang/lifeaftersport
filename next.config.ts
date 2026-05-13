import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t0.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
