/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zluncbhyhpxonqhigbhn.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/images-restaurant/**',
      },
    ],
  },
}

module.exports = nextConfig
