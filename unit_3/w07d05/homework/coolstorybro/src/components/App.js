import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Home'
		};
		this.changeState = this.changeState.bind(this);
	}
	changeState(newPage) {
		this.setState({ name: newPage });
	}
	determinePage() {
		if (this.state.name == 'Home') {
			return <Home />;
		} else if (this.state.name == 'About Us') {
			return <AboutUs />;
		} else if (this.state.name == 'Contact Us') {
			return <ContactUs />;
		}
	}
	render() {
		return (
			<div className="Page-wrapper">
				<AppHeader page={this.state.name} />
				<AppNavbar function={this.changeState} />
				{this.determinePage()}

				<AppFooter />
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
