import React, { Component } from 'react';
import NavButton from './NavButton';

export default class AppNavbar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const style = {
			backgroundColor: '#89d1f0'
		};
		return (
			<div className="Navbar" style={style}>
				<div>
					<NavButton buttonName="Home" function={this.props.function} />
				</div>
				<div>
					<NavButton buttonName="About Us" function={this.props.function} />
				</div>
				<div>
					<NavButton buttonName="Contact Us" function={this.props.function} />
				</div>
			</div>
		);
	}
}
