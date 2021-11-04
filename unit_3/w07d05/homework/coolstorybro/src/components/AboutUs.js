import React, { Component } from 'react';

export default class AboutUs extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const style = {
			height: '70vh',
			padding: '20%'
		};
		return (
			<div style={style} className="about-us">
				<p>
					"Everyone has their own little internal world - a secret garden only
					they can enter. Each world follows its own internal logic -
					individuality. And the logic of one world means nothing in another.
					Understanding other people isn't hard.....It's Impossible."
				</p>
			</div>
		);
	}
}
