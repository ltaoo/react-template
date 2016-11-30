import * as types from '../actions'


const index = (state = {}, action)=> {
	switch(action.type) {
		// 正在请求数据
		case types.FETCHING:
			return Object.assign({}, state, {
				disable: true
			})
		// 请求数据成功
		case types.FETCH_BOOK_LIST:
			return Object.assign({}, state, {
				booklist: action.value,
				disable: false
			})
		// 请求数据失败
		case types.FETCH_FAIL:
			return Object.assign({}, state, {
				disable: false
			})
		default:
			return state
	}
}

export default index