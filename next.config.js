module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/kivakaupunki': { page: '/kivakaupunki' },
      '/aikakone': { page: '/aikakone' }
    }
  }
}
const withBabelMinify = require('next-babel-minify')()
module.exports = withBabelMinify()