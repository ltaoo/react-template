import * as types from '../actions'
const index = (state = {}, action)=> {
	switch(action.type) {
		case types.FETCH_BOOK_LIST:
			return Object.assign({}, state, {
				booklist: action.value
			})
		default:
			return state
	}
}

export default index