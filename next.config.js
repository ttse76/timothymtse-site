/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/email',
        destination: 'mailto:timtse76@gmail.com',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
