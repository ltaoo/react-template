import React from 'react'
import { Route } from 'react-router'

// 根组件，可以放一些全局的组件比如导航
import App from './components/App'
// 页面组件
import About from './components/About'

export default <Route path="/" component = {App} >
	<Route path="/about" component = {About} />
</Route>