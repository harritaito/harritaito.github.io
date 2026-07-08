/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_ID: Date.now().toString(),
  },
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
      "/accessibility": { page: "/accessibility" },
      "/saavutettavuusseloste": { page: "/saavutettavuusseloste" },
      "/projects": { page: "/projects" },
      "/kivakaupunki": { page: "/kivakaupunki" },
      "/aikakone": { page: "/aikakone" },
      "/hri-study": { page: "/hri-study" },
      "/thesis": { page: "/thesis" },
    };
  },
};

module.exports = nextConfig;
