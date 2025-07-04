import type { NextConfig } from 'next'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/temple-five-dawns' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/temple-five-dawns/' : '',
  experimental: {
    optimizePackageImports: ['date-fns'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
} satisfies NextConfig

export default nextConfig
