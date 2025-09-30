/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://4lge.algepop.net/kasm-registry/1.0/ubuntu.png',
    listUrl: 'https://4lge.algepop.net/kasm-registry/1.0/',
    contactUrl: 'https://4lge.algepop.net/ksam-registry/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
