var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.scss']
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

  devtool: 'source-map'
}