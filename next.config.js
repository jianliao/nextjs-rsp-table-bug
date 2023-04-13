/** @type {import('next').NextConfig} */
const nextConfig = {
  // RSP@v3 does not support React strict mode yet.
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
