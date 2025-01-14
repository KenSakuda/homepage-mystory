import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.microcms-assets.io",
    },
  ],
};

export default nextConfig;
