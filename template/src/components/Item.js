import React, { Component } from 'react' 

export default class Item extends Component {
  render() {
  	const {title} = this.props
    return (
    	<li>{title}</li>
	)
  }
}