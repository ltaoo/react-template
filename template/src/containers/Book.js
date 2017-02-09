import React, { Component } from 'react' 
import { Link } from 'react-router'
import $ from 'jquery'

// 数据
import store from '../store'
// action
import {fetchBookList} from '../actions'
// 组件
import Item from '../components/Item'

export default class Book extends Component {
	constructor(props) {
		super(props)
	}
	// 获取数据方法
	_loadData() {
		// 调用 action 获取数据
		store.dispatch(fetchBookList())
	}
	
	// 视图显示内容
  	render() {
  		const state = store.getState()
  		console.log(state)
  		// 默认显示的内容
  		let container = null
  		// 最后才是获取数据成果的视图
  		if(state.loaded) {
  			container = state.books.map((book, index) => {
  				return <Item
  					key = {index}
  					title = {book.title}
  				/>
  			})
  		}
	    return (
  			<div>
	      		<h4>Book Page</h4>
	      		<button 
	      			onClick={this._loadData.bind(this)}
	      		>获取书籍数据</button>
	      		<button 
	      			onClick={() => {
	      				console.log(store.getState())
	      			}}
	      		>打印 store </button>
	      		{container}
	      	</div>
	    )
  	}
}
