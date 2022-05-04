const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/': {
        target: 'http://47.108.173.156:12315',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
