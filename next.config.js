/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Docker yapılandırması için önemli
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true, // Static export için gerekli
  },
}

module.exports = nextConfig 