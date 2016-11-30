import { combineReducers } from 'redux'

import book from './book'
import music from './music'

const index = combineReducers({
	book,
	music
})

export default index