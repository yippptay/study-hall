import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

const App = (props) => {
    //STATE TO HOLD THE TOKEN
    const [token, setToken] = React.useState('');

    //STATE TO HOLD FORM DATA
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
    });

    //FORM HANDLECHANGE FUNCTION
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    //HANDLE LOGIN FUNCTION
    const handleLogin = () => {
        //Make Login API Call
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((token) => {
                //store token in state
                setToken(token);
                //store token in localstorage
                window.localStorage.setItem('token', JSON.stringify(token));
            });
    };

    //HANDLE LOGIN FUNCTION
    const handleTest = () => {
        //Make Login API Call
        fetch('http://localhost:3000/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`,
            },
        })
            .then((response) => response.text())
            .then((text) => alert(text));
    };

    //HANDLELOGOUT FUNCTION
    const handleLogout = () => {
        //destroy token from localStorage
        window.localStorage.removeItem('token');
        //clear Token from state
        setToken('');
    };

    //CHECK IF TOKEN EXISTS WHEN SITE LOADS
    React.useEffect(() => {
        //Get Token from localStorage
        const token = JSON.parse(window.localStorage.getItem('token'));
        //If token exists, add it to state
        if (token) {
            setToken(token);
        }
    });

    //LOGGED OUT VIEW
    const loggedOut = (
        <div>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );

    //LOGGED IN VIEW
    const loggedIn = (
        <div>
            <h1>YOU ARE LOGGED IN!!!</h1>
            <button onClick={handleTest}>Test Auth</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );

    return token ? loggedIn : loggedOut;
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
