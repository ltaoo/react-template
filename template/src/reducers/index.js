// reducers/index.js
import * as types from '../actions'
const index = (state = {loaded: false}, action)=> {
    switch(action.type) {
        case types.FETCH_BOOK_LIST:
            return Object.assign({}, state, {
				books: action.value,
				loaded: true
            })
        default:
            return state
    }
}

export default index
