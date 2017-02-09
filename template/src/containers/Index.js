import React, { Component } from 'react' 
import { Link } from 'react-router'

// action
import {fetchBookList} from '../actions'
// container components
import Book from './Book'

export default class Index extends Component {
  	render() {
	    return (
	      	<div>
	      		<h3>Index Page</h3>
	      		<Book />
	      	</div>
	    )
  	}
}
