const path = require('path')
const config = require('../config')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')

const merge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const friendlyError = require('friendly-errors-webpack-plugin')

// 由于支持热重载，所以配置文件中的 entry 字段需要加上 /build/dev-client
Object.keys(baseWebpackConfig.entry).forEach(name => {
	baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
const projectRoot = path.resolve(__dirname, '../')
const styleLoaders = utils.styleLoaders({sourceMap: config.build.productionSourceMap})
// console.log(styleLoaders)
// 导出配置
module.exports = merge(baseWebpackConfig, {
	module: {
		loaders: [
			utils.jsLoader({hot: true}),
			...styleLoaders
		]
	},
	devtool: '#eval-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': config.dev.env
		}),
		// ?
		new webpack.optimize.OccurrenceOrderPlugin(),
		// 支持热重载
		new webpack.HotModuleReplacementPlugin(),
		// https://github.com/ampedandwired/html-webpack-plugin
		// 将 html 文件插入 script 标签、并拷贝到静态服务器目录下 ps: 文件是看不见的
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		// 代码出错后在浏览器页面也显示
		new friendlyError()
	]
})
