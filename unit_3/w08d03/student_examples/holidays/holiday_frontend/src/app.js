import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

const App = (props) => {
    return (
        <>
            <h1>Hello World</h1>
        </>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
