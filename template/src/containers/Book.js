import React, { Component } from 'react' 
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

		this.state = {}
	}

	componentWillMount() {
		// subscribe 函数接收一个函数作为参数，当 state 发生改变时会调用该函数
		store.subscribe(() => {
			const state = store.getState()
			this.setState(state)
		})
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
  		if(this.state.loaded) {
  			container = this.state.books.map((book, index) => {
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
