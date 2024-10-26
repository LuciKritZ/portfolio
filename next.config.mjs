/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
