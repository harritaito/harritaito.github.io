module.exports = {
  reactStrictMode: true,
  output: "export",
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/kivakaupunki": { page: "/kivakaupunki" },
      "/aikakone": { page: "/aikakone" },
    };
  },
};
