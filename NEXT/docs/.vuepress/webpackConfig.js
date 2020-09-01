/**
 * NOTE webpack config
 * https://github.com/codyrobert/new-portfolio/blob/aa042a15d82edaf0d514430c67cc8adb45a100f3/.vuepress/config.js#L49
 * https://github.com/fecym/cym-blog-template/blob/6d478e18f3a90239897da8c0e163434ae3763ce2/docs/.vuepress/config/webpackConfig.js
 * https://github.com/vuejs/vuepress/issues/146
 */

const webpack = require('webpack')

module.exports = {
  // https://github.com/neutrinojs/webpack-chain
  chainWebpack: (config, isServer) => {

    // config.module.rule('images')
    //   .test('/\.(png|jpe?g|webp|git|svg|)$/i')
    //   .use('img-optimize-loader')
    //   .loader('img-optimize-loader')
    //   .options({
    //     compress: {
    //       webp: true,
    //       // disableOnDevelopment: true,
    //     }
    //   })
    //   .end()
  },

  configureWebpack: (config, isServer) => {
    /**
     * FIXME deal with images
     * https://www.npmjs.com/package/image-webpack-loader
     * ANCHOR compress images
     */
    config.module.rules.push({
      test: /\.(png|jpe?g|webp|git|svg|)$/i,
      use: [{
        loader: 'img-optimize-loader',
        options: {
          compress: {
            webp: true,
            // disableOnDevelopment: true,
          }
        }
      }],
    })
  }
}