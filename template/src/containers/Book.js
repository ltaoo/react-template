import React, { Component } from 'react' 
import { Link } from 'react-router'
import $ from 'jquery'

// 组件
import Item from '../components/Item'

export default class Book extends Component {
	constructor(props) {
		super(props)

		this.state = {
			// 正在获取数据
			loading: false,
			// 数据是否加载完成
			loaded: false,
			// 是否获取数据失败
			loadFail: false,
			// 获取到的书籍
			books: []
		}
	}
	// 获取数据方法
	_loadData() {
		const _this = this
		this.setState({
			loading: true
		})
		$.ajax({
			url: 'https://api.douban.com/v2/book/search?q=react&count=5', 
			jsonp: 'callback',
			dataType: "jsonp",
			success(res) {
				// 获取数据成果
				_this.setState({
					books: res.books,
					loaded: true,
					loading: false
				})
			},
			error(err) {
				_this.setState({
					loadFail: true,
					loading: false
				})
			}
		})
	}
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
	
	// 视图显示内容
  	render() {
  		// 默认显示的内容
  		let container = null
  		// 有限处理获取数据失败
  		if(this.state.loadFail) {
  			container = <h3>获取数据失败</h3>
  		}
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
	      			disabled = {this.state.loading ? true : false}
	      		>{this.state.loading ? '加载中...' : '获取书籍数据'}</button>
	      		{container}
	      	</div>
	    )
  	}
}
