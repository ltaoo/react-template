var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/dev-server",
      "./src/index.js"
    ]
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel',
        query: {
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react')
          ]
        }
      },
      {
        test: /\.css$/, 
        loader: 'style!css'
      },
      {
        test: /\.scss$/, loaders: ['style', 'css', 'sass']
      }
    ]
  },

  plugin: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    hot: true,
    contentBase: './'
  }
}