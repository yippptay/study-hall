import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeImage from './HomeImage';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			cardText: ''
		};
	}

	render() {
		return (
			<div className="Page">
				<h2>Welcome home, traveler.</h2>
				<HomeImage />
			</div>
		);
	}
}
