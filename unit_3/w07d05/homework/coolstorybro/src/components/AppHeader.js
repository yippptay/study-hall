import React, { Component } from 'react';

export default class AppHeader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="header">
				<img
					src="https://cdn.shopify.com/s/files/1/2172/3475/files/winner-01_1920x.png?v=1589399272"
					display="block"
					margin-left="auto"
					margin-right="auto"
					width="720px"
				></img>
			</div>
		);
	}
}
