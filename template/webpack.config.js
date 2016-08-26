var path = require('path')

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

  devtool: 'source-map'
}