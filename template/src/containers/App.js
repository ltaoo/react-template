import React, { Component } from 'react' 
import { Link } from 'react-router'

import {observer} from 'mobx-react'
import {observable, computed} from 'mobx'

// store
class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}


import Index from './Index'

const store = new TodoList()

// 可以理解成 @observer 其实就是 redux 中的 connect，只要涉及到数据操作的组件都要加装饰器
@observer
export default class App extends Component {
  	render() {
  		let i = 0
	    return (
	      	<div>
		        <h2>Hello React</h2>
		        <Link to="/about">点击跳转到About页面</Link>
		        <input
		        	ref = {e => this.something = e}
		        />
		        <button
		        	onClick = {() => {
		        		const value = this.something.value
		        		store.todos.push({
		        			id: i++,
		        			title: value,
		        			finished: false
		        		})
		        	}}
		        >点击</button>
		        {this.props.children || <Index todoList = {store} />}
	      	</div>
	    )
  	}
}