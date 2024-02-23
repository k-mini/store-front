const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    default: {
      entry: 'src/pages/main/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    admin: {
      entry: 'src/pages/admin/main.js',
      template: 'public/index2.html',
      filename: 'index2.html'
    }
  }

})
