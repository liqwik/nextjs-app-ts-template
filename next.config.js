/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['nextjs-app-ts-template.vercel.app', 'joeschmoe.io'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
