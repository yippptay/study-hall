import React, { Component } from 'react';

export default class ContactForm extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const style = { fontSize: '1.5rem', margin: '15px' };
		return (
			<div className="contact-form" style={style}>
				<h5>Comment</h5>
				<form>
					<textarea name="contact"></textarea> <br />
					<input type="submit" value="Submit"></input>
				</form>
			</div>
		);
	}
}
