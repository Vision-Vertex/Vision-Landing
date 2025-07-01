import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  swcMinify: false,
  images: {
    domains: ['images.unsplash.com'],
    
  },
};

export default nextConfig;
