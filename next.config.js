/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Docker yapılandırması için önemli
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // Static export için gerekli
  },
}

module.exports = nextConfig 