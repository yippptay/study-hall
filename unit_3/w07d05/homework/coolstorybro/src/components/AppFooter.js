import React, { Component } from 'react';

export default class AppFooter extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		// const style = {
		// 	display: 'flex',
		// 	justifyContent: 'space-between'
		// };
		return (
			<div className="footer">
				<div className="column">
					<ul>
						<li>
							<a href="#">Twitter</a>
						</li>
						<li>
							<a href="#">Facebook</a>
						</li>
						<li>
							<a href="#">Instagram</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
