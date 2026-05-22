/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/projects": { page: "/projects" },
      "/contact": { page: "/contact" },
      "/kivakaupunki": { page: "/kivakaupunki" },
      "/aikakone": { page: "/aikakone" },
      "/hri-study": { page: "/hri-study" },
    };
  },
};

module.exports = nextConfig;
