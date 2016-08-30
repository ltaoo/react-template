var path = require('path')
var webpack = require('webpack')

var nodeModulesPath = './node_modules'

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    "./src/index.js"
  ],

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', 'jsx'],
    alias: {
      //'react': path.join(nodeModulesPath, '/react/dist/react.js')
    }
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
          ],
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/, 
        loader: 'style!css'
      },
      {
        test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  },

  plugin: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'source-map',

  devServer: {
    hot: true,
    contentBase: './',
    quiet: true
  }
}