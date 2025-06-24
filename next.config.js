const withBabelMinify = require('next-babel-minify')()

module.exports = withBabelMinify({
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/kivakaupunki': { page: '/kivakaupunki' },
      '/aikakone': { page: '/aikakone' }
    }
  }
})
