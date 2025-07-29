module.exports = {
  reactStrictMode: true,
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/kivakaupunki': { page: '/kivakaupunki' },
      '/aikakone': { page: '/aikakone' }
    }
  }
}
