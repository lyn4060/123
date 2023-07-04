const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "assets",
  devServer: {
    port: 8080,
    open: true,
    https: false,
    host: "0.0.0.0",
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        changeOrigin: true,
        secure: false,
        target: process.env.VUE_APP_CONSOLE_URL,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
})
