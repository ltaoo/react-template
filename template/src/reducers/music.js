import * as types from '../actions'


const music = (state = {}, action)=> {
	switch(action.type) {
		// 正在请求数据
		case types.FETCHING_MUSIC:
			return Object.assign({}, state, {
				disable: true
			})
		// 请求音乐数据成功
		case types.FETCH_MUSIC_LIST:
			return Object.assign({}, state, {
				musiclist: action.value,
				disable: false
			})
		// 请求数据失败
		case types.FETCH_MUSIC_FAIL:
			return Object.assign({}, state, {
				disable: false
			})
		default:
			return state
	}
}

export default music