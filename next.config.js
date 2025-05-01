/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "async_hooks": false,
      "fs": false,
      "path": false,
      "os": false
    };
    
    return config;
  },
};

module.exports = nextConfig; 