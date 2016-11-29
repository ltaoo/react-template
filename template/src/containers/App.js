import React, { Component } from 'react' 
import { Link } from 'react-router'

import Index from './Index'

export default class App extends Component {
  	render() {
	    return (
	      	<div>
		        <h2>Hello React</h2>
		        <Link to="/about">点击跳转到About页面</Link>
		        {this.props.children || <Index />}
	      	</div>
	    )
  	}
}