/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    runtime: 'nodejs', // Force Node.js runtime instead of Edge
  },
  images: {
    unoptimized: true, // Avoid sharp
  },
};

export default nextConfig;
