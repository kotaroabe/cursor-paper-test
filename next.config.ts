import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/nri-kaona", destination: "/nri-kaona/index.html" }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "workers.paper.design",
      },
    ],
  },
};

export default nextConfig;
