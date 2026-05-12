module.exports = {
  reactStrictMode: true,
  output: "export",
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
