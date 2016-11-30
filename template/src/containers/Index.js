import React, { Component } from 'react' 
import { Link } from 'react-router'
import {connect} from 'react-redux'

// action
import {fetchBookList} from '../actions'

// 组件
import Item from '../components/Item'

class Index extends Component {
	// 根据数据渲染列表
	_renderList() {
		const {dispatch, state} = this.props
		if(state && state.booklist) {
			return state.booklist.map((obj, index) => {
				return <Item
					key = {index}
					title = {obj.title}
				/>
			})
		} else {
			return <p>暂无数据</p>
		}
	}
	// 获取数据
	_loadData() {
		const {dispatch} = this.props
		dispatch(fetchBookList())
		// fetchBookList()
		// 	.then(action => {
		// 		dispatch(action)
		// 		alert('获取成功')
		// 	})
		// 	.catch(err => {
		// 		alert('获取失败', err)
		// 	})
	}
	// 真正的渲染视图
  	render() {
  		const {state} = this.props
	    return (
	      	<div>
	      		<h3>Index Page</h3>
	      		<button 
	      			onClick={this._loadData.bind(this)}
	      			disabled = {state.disable ? true : false}
	      		>{state.disable ? '加载中...' : '获取数据'}</button>
	      		{this._renderList.call(this)}
	      	</div>
	    )
  	}
}
// connect 函数接收一个函数作为参数，决定在这个组件可以获取到哪些数据
// 首先要了解， state 是一棵很大的状态树，也就是我们reducer函数中传入的 state
export default connect((state)=> {
	return {
		state
	}
})(Index)