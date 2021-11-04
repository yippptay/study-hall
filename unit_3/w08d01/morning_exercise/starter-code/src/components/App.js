import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Offspring from './Nova.js';

// parent component

class Parent extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Arthur'
        };
    }

    render() {
        return (
            <div className="Page-wrapper">
                <h2>Super Nova App</h2>
                <Offspring
                    favoriteTeacher={this.state.name}
                    thingIGotFromApp="is the coolest student"
                />
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Parent />, app);
