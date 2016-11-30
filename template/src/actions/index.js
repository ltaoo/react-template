import $ from 'jquery'

export const FETCHING_BOOK = "FETCHING_BOOK"
export const FETCH_BOOK_LIST = "FETCH_BOOK_LIST"
export const FETCH_BOOK_FAIL = "FETCH_BOOK_FAIL"



export const fetchBookList = () => dispatch => {
	dispatch({
		type: FETCHING_BOOK,
		value: 'https://api.douban.com/v2/book/search?q=react&count=5'
	})
	$.ajax({
		url: 'https://api.douban.com/v2/book/search?q=react&count=5', 
		jsonp: 'callback',
		dataType: "jsonp",
		success(res) {
			return dispatch({
				type: FETCH_BOOK_LIST,
				value: res.books
			})
		},
		error(err) {
			return dispatch({
				type: FETCH_BOOK_FAIL,
				value: JSON.stringify(err)
			})
		}
	})
}

export const FETCHING_MUSIC = "FETCHING_MUSIC"
export const FETCH_MUSIC_LIST = "FETCH_MUSIC_LIST"
export const FETCH_MUSIC_FAIL = "FETCH_MUSIC_FAIL"
export const fetchMusicList = () => dispatch => {
	dispatch({
		type: FETCHING_MUSIC,
		value: 'https://api.douban.com/v2/music/search?q=河图&count=5'
	})
	$.ajax({
		url: 'https://api.douban.com/v2/music/search?q=河图&count=5', 
		jsonp: 'callback',
		dataType: "jsonp",
		success(res) {
			return dispatch({
				type: FETCH_MUSIC_LIST,
				value: res.musics
			})
		},
		error(err) {
			return dispatch({
				type: FETCH_MUSIC_FAIL,
				value: JSON.stringify(err)
			})
		}
	})
}
// export function fetchBookList() { 
// 	return function (dispatch)=> {
// 		dispatch({
// 			type: FETCHING,
// 			value: 'https://api.douban.com/v2/book/search?q=react&count=5'
// 		})
// 		return new Promise((resolve, reject) => {
// 			$.ajax({
// 				url: 'https://api.douban.com/v2/book/search?q=react&count=5', 
// 				jsonp: 'callback',
// 				dataType: "jsonp",
// 				success(res) {
// 					return dispatch({
// 						type: FETCH_BOOK_LIST,
// 						value: res.books
// 					})
// 				},
// 				error(err) {
// 					return dispatch({
// 						type: FETCH_FAIL,
// 						value: JSON.stringify(err)
// 					})
// 				}
// 			})
// 		})
// 	}
// }