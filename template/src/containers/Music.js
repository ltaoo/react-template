import React, { Component } from 'react' 
import { Link } from 'react-router'
import {connect} from 'react-redux'

// action
import {fetchMusicList} from '../actions'

// 组件
import Item from '../components/Item'

class Music extends Component {
	// 根据数据渲染列表
	_renderList() {
		const {dispatch, music} = this.props
		if(music && music.musiclist) {
			return music.musiclist.map((obj, index) => {
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
		dispatch(fetchMusicList())
	}
	// 真正的渲染视图
  	render() {
  		alert('渲染音乐列表')
  		const {music} = this.props
	    return (
	      	<div>
	      		<h4>Music Page</h4>
	      		<button 
	      			onClick={this._loadData.bind(this)}
	      			disabled = {music.disable ? true : false}
	      		>{music.disable ? '加载中...' : '获取音乐数据'}</button>
	      		{this._renderList.call(this)}
	      	</div>
	    )
  	}
}
export default connect((state)=> {
	return {
		music: state.music
	}
})(Music)