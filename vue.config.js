const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    proxy: {
      '/': {
        target: 'http://192.168.31.113:8080',
        changeOrigin: true,
        ws: false
      }
    }
  }
})
