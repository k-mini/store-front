const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // http:localhost:9090/images/** 요청을 받으면 devServer에서 http://localhost:8080으로 대신 요청
    proxy: {
      '/images': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
      '/oauth2': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
    },
  },
    pages: {
      default: {
        entry: 'src/pages/main/main.js',
        template: 'public/index.html',
        filename: 'index.html'
      },
      admin: {
        entry: 'src/pages/admin/main.js',
        template: 'public/adminIndex.html',
        filename: 'adminIndex.html'
      }
    }

  })
