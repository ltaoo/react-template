// 引入配置项，下面称“通用配置”
const config = require('../config')
// 如果 process.env.NODE_ENV 这个变量不存在，就赋值，保证这个值是存在的
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)

const path = require('path')
const express = require('express')
const webpack = require('webpack')
const open = require('opn')

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackProxyMiddleware = require('http-proxy-middleware')

// 引入 webpack 配置文件
const webpackConfig = require('./webpack.dev.conf')
// 端口号如果没有在命令行或者系统变量指定，就用通用配置中的
const port = process.env.PORT || config.dev.port
// 代理配置，方便开发与上线无缝切换
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

// express 服务器
const app = express()
// webpack 本质上是一个构建工具，就是编译器了，所以这里用 compiler 命名
const compiler = webpack(webpackConfig)

// 设置 express 的中间件 - 开发中间件，通过这个中间件，compiler 可以实时将编译后的 js 给这个中间件，就可以通过 express 服务器访问到这个 js 文件了，这样就实现了开发服务器
const devMiddleware = webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quite: true
})
// 注册开发中间件
app.use(devMiddleware)

// 设置 express 的中间件 - 热重载中间件
const hotMiddleware = webpackHotMiddleware(compiler, {
	log() {}
})
// 注册热重载中间件
app.use(hotMiddleware)

// 注册代理中间件
Object.keys(proxyTable).forEach(context => {
	const options = proxyTable[context]
	if(typeof options === 'string') {
		options = {target: options}
	}
	// 注册中间件
	app.use(webpackProxyMiddleware(context, options))
})

// 注册静态服务器中间件
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// 当前目录下的 static 文件夹？
app.use(staticPath, express.static('./static'))

// 服务器 url 地址
const uri = `http://localhost:${port}`

// 启动服务器
const server = app.listen(port, (err) => {
	if(err) {
		console.log(err)
		return
	}
	// 自动打开浏览器访问服务器
	open(uri)
})

module.exports = server
