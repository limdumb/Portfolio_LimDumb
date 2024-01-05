/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    loader: "imgix",
    path: "http://localhost:3000",
  },
  // output: "export",
};

module.exports = nextConfig;
