// actions/index.js
export const FETCH_BOOK_LIST = "FETCH_BOOK_LIST"
export const fetchBookList = () => {
    return {
        type: FETCH_BOOK_LIST,
        value: [{
            title: "React"
        }, {
            title: "React-Naitve"
        }, {
            title: "Redux"
        }]
    }
}