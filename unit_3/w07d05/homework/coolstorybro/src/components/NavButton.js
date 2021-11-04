import React, { Component } from 'react';

export default class NavButton extends Component {
	constructor(props) {
		super(props);
	}
	changeState = event => {
		return this.props.function(this.props.buttonName);
	};
	render() {
		return <button onClick={this.changeState}>{this.props.buttonName}</button>;
	}
}
