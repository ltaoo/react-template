const path = require('path')

module.exports = {
	build: {

	},
	dev: {
		env: require('./dev.env'),
		port: 8080,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		// 可配置代理
		proxyTable: {},
		// 是否开启 css source map
		cssSourceMap: false
	}
}