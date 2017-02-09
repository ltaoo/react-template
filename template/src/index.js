import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
// 全局样式
import './styles/main.css'
// 路由配置
import routes from './routes'

ReactDOM.render(
	<Router history={hashHistory} routes={routes} />,
  	document.getElementById('app')
)
