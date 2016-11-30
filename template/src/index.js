import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
// redux 日志中间件
import createLogger from 'redux-logger'
// thunk
import thunk from 'redux-thunk'
// 全局样式
import './styles/main.scss'
// 路由配置
import routes from './routes'
// 暴露给所有子组件有 dispatch 的 store 对象
// reducer
import rootReducer from './reducers'
// 返回一个有 dispatch 方法的对象
export const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()))

ReactDOM.render(
	//
	<Provider store = {store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
  	document.getElementById('app')
)
