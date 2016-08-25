var path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}