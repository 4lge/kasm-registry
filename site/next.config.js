/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://4lge.github.io/kasm-registry/1.1/ubuntu.png',
    listUrl: 'https://4lge.github.io/kasm-registry/1.1/',
    contactUrl: 'https://4lge.github.io/ksam-registry/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
