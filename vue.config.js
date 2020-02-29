const path = require('path')
const TransformModulesPlugin = require('webpack-transform-modules-plugin')
const isDev = process.env.NODE_ENV === 'development'

function resolve(dir) {
  return path.join(__dirname, dir)
}
const externals = {
  // 'vue': 'Vue',
  // 'vue-router': 'VueRouter',
  // 'vuex': 'Vuex',
  // 'axios': 'axios'
}
// 配置 cdn 资源链接
const cdn = {
  dev: {
    css: [],
    js: [
      '//qiniu.qyhever.com/lib/echarts/4.0.4/echarts.js',
      '//qiniu.qyhever.com/js/vconsole.min.js'
    ]
  },
  build: {
    css: [],
    js: [
      '//qiniu.qyhever.com/lib/echarts/4.0.4/echarts.min.js'
    ]
  }
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    port: 2020,
    host: '0.0.0.0',
    overlay: {
      warnings: true,
      errors: true
    }
    // proxy: {
    //   // change xxx-api/login => mock/login
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    // }
  },
  pluginOptions: {
    // import global scss variables and mixins
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolve('./src/assets/styles/global.scss')]
    }
  },
  configureWebpack(config) {
    config.externals = externals
    if (process.env.NODE_ENV === 'production') {
      // 移除console.log
      // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  chainWebpack(config) {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.plugin('TransformModules').use(TransformModulesPlugin)
    config.resolve.alias.set('cube-ui', 'cube-ui/lib')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
      .end()
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
          disable: isDev
      })
      // cdn变量插入到 index.html 中
      config.plugin('html').tap(args => {
        args[0].cdn = isDev? cdn.dev : cdn.build
        return args
      })
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          '@green': '#ffcd38'
        }
      }
    }
  }
}
