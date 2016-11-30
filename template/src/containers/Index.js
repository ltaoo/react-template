import React, { Component } from 'react' 
import { Link } from 'react-router'
import {connect} from 'react-redux'

// action
import {fetchBookList} from '../actions'
// container components
import Book from './Book'
import Music from './Music'

class Index extends Component {
  	render() {
  		const {state} = this.props
	    return (
	      	<div>
	      		<h3>Index Page</h3>
	      		<Book />
	      		<Music />
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