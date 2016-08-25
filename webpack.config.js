var path = require('path')

module.exports = {
  entry: './src/index.js',

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
          ],
        }
      },
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}