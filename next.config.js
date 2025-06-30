/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/temple-five-dawns' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/temple-five-dawns/' : '',
}

module.exports = nextConfig 