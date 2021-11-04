import React, { Component } from 'react';
import ContactForm from './ContactForm';

export default class ContactUs extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const style = {
			height: '70vh',
			padding: '20%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-evenly'
		};

		return (
			<div style={style} className="contact-us">
				<label>Phone: </label>
				<a href="tel:123-456-7890">(123) 456-7890</a>
				<br />
				<h2>CONTACT US!</h2>
				<h3>Feel free to reach out to us!</h3>
				<h3>Email: info@rev-automotive.com</h3>
				<br />
				<ContactForm />
			</div>
		);
	}
}
