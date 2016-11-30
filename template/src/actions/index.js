import $ from 'jquery'

export const FETCHING = "FETCHING"
export const FETCH_BOOK_LIST = "FETCH_BOOK_LIST"
export const FETCH_FAIL = "FETCH_FAIL"


export const fetchBookList = () => dispatch => {
	dispatch({
		type: FETCHING,
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
				type: FETCH_FAIL,
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