import React, { Component } from 'react';

export default function Student(props) {
	return (
		<li>
			<button
				onClick={() => {
					props.updateStudent(props.student);
				}}
			>
				{props.student.name}
			</button>
		</li>
	);
}
