/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/sign-in',
        destination: 'https://fn-uks-dev-eng-fe-mock-svc.azurewebsites.net/api/sign-in' // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
