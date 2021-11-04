import React from 'react'; //  <- browser server -> const React = require('react');
import { students } from '../data';
import Student from './Student.js';
export default class Offspring extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Ian',
			students: students,
			buddy: 'Ryan',
			isCool: true
		};
		this.changeCoolStudent = this.changeCoolStudent.bind(this);
	}

	makeStudents = filteredStudents => {
		const results = filteredStudents.map((student, sauce) => {
			return (
				<Student
					key={sauce}
					student={student}
					updateStudent={this.changeCoolStudent}
				></Student>
			);
		});
		console.log(results);
		return results;
	};

	changeCoolStudent(newCoolKid) {
		/* 
		this.state = {name: 'Ian'}
		const thingIwant = {name: 'Michael'}
		const newState = {...this.state, ...thingIwant }
		
		*/
		this.setState({ name: newCoolKid.name, buddy: 'none' });
	}

	render() {
		const westCoast = this.state.students.filter(student => {
			return student.westCoast;
		});
		const eastCoast = this.state.students.filter(student => {
			return !student.westCoast;
		});
		return (
			<>
				<div className="Page">
					<ul className="column"> {this.makeStudents(westCoast)}</ul>
					<ul className="column"> {this.makeStudents(eastCoast)}</ul>
					{this.state.isCool
						? `${this.state.name} is awesome also`
						: `${this.state.name} is mean though`}
				</div>
				<h1>{this.state.name}</h1>
				<h1>{this.props.thingIGotFromApp}</h1>
				<h2>and their favorite teacher is {this.props.favoriteTeacher}</h2>
			</>
		);
	}
}
