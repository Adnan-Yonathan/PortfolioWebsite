const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack(config) {
    config.resolve.alias["three/examples/js/libs/stats.min"] = path.resolve(
      __dirname,
      "./lib/three-stats-shim.js"
    );
    return config;
  },
};

module.exports = nextConfig;
