module.exports = {
  productionSourceMap: false,
  publicPath: './',
  devServer: {
    port: 9091,
    proxy: {
      '/api': {
        target: 'http://10.200.110.109:8087',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
