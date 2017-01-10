const config = require('../config')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')

const merge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const friendlyError = require('friendly-errors-webpack-plugin')

// 由于支持热重载，所以配置文件中的 entry 字段需要加上 /build/dev-client
Object.keys(baseWebpackConfig.entry).forEach(name => {
	baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

// 导出配置
module.exports = merge(baseWebpackConfig, {
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style!css'
		}]
	},
	devtool: '#eval-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': config.dev.env
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// https://github.com/ampedandwired/html-webpack-plugin
		// 将 html 文件插入 script 标签、并拷贝到静态服务器目录下 ps: 文件是看不见的
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new friendlyError()
	]
})
