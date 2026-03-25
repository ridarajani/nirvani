/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nirvani',
  assetPrefix: '/nirvani/',
}

module.exports = nextConfig