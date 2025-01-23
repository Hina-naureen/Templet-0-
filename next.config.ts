import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['example.com', 'another-domain.com', 'public'], // Allowed image domains
  },
};

export default nextConfig;
