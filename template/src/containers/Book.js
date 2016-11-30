import React, { Component } from 'react' 
import { Link } from 'react-router'
import {connect} from 'react-redux'

// action
import {fetchBookList} from '../actions'

// 组件
import Item from '../components/Item'

class Book extends Component {
	// 根据数据渲染列表
	_renderList() {
		const {dispatch, book} = this.props
		if(book && book.booklist) {
			return book.booklist.map((obj, index) => {
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
	}
	// 真正的渲染视图
  	render() {
  		alert('渲染书籍列表')
  		const {book} = this.props
	    return (
	      	<div>
	      		<h4>Book Page</h4>
	      		<button 
	      			onClick={this._loadData.bind(this)}
	      			disabled = {book.disable ? true : false}
	      		>{book.disable ? '加载中...' : '获取书籍数据'}</button>
	      		{this._renderList.call(this)}
	      	</div>
	    )
  	}
}

export default connect((state)=> {
	return {
		book: state.book
	}
})(Book)