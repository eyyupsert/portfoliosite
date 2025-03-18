/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Docker yapılandırması için önemli
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // Static export için gerekli
  },
  eslint: {
    ignoreDuringBuilds: true, // Build sırasında ESLint hatalarını görmezden gel
  },
  typescript: {
    ignoreBuildErrors: true, // Build sırasında TypeScript hatalarını görmezden gel
  },
}

module.exports = nextConfig 