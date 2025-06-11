/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
output:'export',

  // Required for external images
  images: {
    unoptimized: true, // disables automatic optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bing.com',
      }
    ]
  }
};

export default nextConfig;
