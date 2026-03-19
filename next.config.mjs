/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cataractsafeandlock.com",
      },
    ],
  },
};

export default nextConfig;
