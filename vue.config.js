const path = require('path')
const webpack = require('webpack')

const targetStub = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080
  },
  transpileDependencies: ['buntpapier'],
  configureWebpack: {
    entry: {
      app: './src/main.js'
    },
    resolve: {
      modules: [path.resolve('src'), path.resolve('src/styles'), 'node_modules'],
      alias: {
        'config': path.resolve(__dirname, `config.${targetStub}.js`)
      }
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        }
      ]
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },
  css: {
    loaderOptions: {
      stylus: {
        use: [require('buntpapier/stylus')()]
      }
    }
  }
}
