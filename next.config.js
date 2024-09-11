/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
