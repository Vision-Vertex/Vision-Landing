/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    runtime: 'nodejs',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
