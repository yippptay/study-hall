import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Form from './form.js';
import Login from './login.js';

const App = (props) => {
    //CREATE STATE
    //this state holds our array of holidays
    const [holidays, setHolidays] = React.useState(null);
    //this state holds the holiday the user wants to edit
    const [editHoliday, setEditHoliday] = React.useState({
        name: '',
        description: '',
    });
    //STATE FOR STORING OUR JWT
    const [token, setToken] = React.useState(null);

    //OBJECT FOR BLANK FORM FOR CREATE
    const blank = {
        name: '',
        description: '',
    };

    //Function to get holidays from API
    const getInfo = async () => {
        const response = await fetch('http://localhost:3000/holidays', {
            headers: {
                Authorization: `bearer ${token}`,
            },
        });
        const result = await response.json();
        console.log(result);
        setHolidays(result);
    };

    //another useEffect to check if localStorage has a token
    React.useEffect(() => {
        const theToken = JSON.parse(window.localStorage.getItem('token'));
        //always wrap your getItem calls with JSON.parse to get the data out
        if (theToken) {
            setToken(theToken);
        }
    }, []); //No dependencies in the array, so function will only run once when component loads initially

    //USEEFFECT HOOK HAPPENS WHEN COMPONENTS LOADS AND WILL GRAB API DATA
    React.useEffect(() => {
        if (token) {
            getInfo();
        }
    }, [token]); //Array is dependencies that would trigger function running again
    //THIS WILL NOT RUN GET INFO UNTIL YOU"VE GOTTEN YOUR TOKEN

    //handleCreate function for the from
    const handleCreate = async (data) => {
        const response = await fetch('http://localhost:3000/holidays', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`,
            },
            body: JSON.stringify(data),
        });
        getInfo(); //update the list of holidays
    };

    const handleDelete = async (id) => {
        //makes the delete call to the backend
        const response = await fetch(`http://localhost:3000/holidays/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `bearer ${token}`,
            },
        });
        //re-fetches the updated list of holidays
        getInfo();
    };

    //when clicking edit button, this function runs
    const handleSelect = async (holiday) => {
        setEditHoliday(holiday);
    };

    const handleEdit = async (data) => {
        //updates the selected holiday
        const response = await fetch(
            `http://localhost:3000/holidays/${data._id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `bearer ${token}`,
                },
                body: JSON.stringify(data),
            }
        );
        //grab the updated list of holidays
        getInfo();
    };

    const handleLogin = async (data) => {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        setToken(result);
        window.localStorage.setItem('token', JSON.stringify(result));
    };

    const handleLogout = () => {
        //REMOVE TOKEN FROM LOCAL STORAGE
        window.localStorage.removeItem('token');
        //REMOVE TOKEN FROM STATE
        setToken(null);
        //SET HOLIDAYS TO NULL
        setHolidays(null);
    };

    //TO LOGOUT YOU WOULD JUST MAKE A BUTTON THAT SETS THE TOKEN BACK TO NULL

    return token ? (
        <>
            <h1>Holidays App</h1>
            <button onClick={handleLogout}>Logout</button>
            <ul>
                {holidays
                    ? holidays.map((holiday) => {
                          return (
                              <li key={holiday._id}>
                                  <h1>{holiday.name}</h1>
                                  <h3>{holiday.description}</h3>
                                  <button
                                      onClick={() => {
                                          handleDelete(holiday._id);
                                      }}
                                  >
                                      Delete
                                  </button>
                                  <button
                                      onClick={() => {
                                          handleSelect(holiday);
                                      }}
                                  >
                                      Edit
                                  </button>
                              </li>
                          );
                      })
                    : 'LOADING...'}
            </ul>
            <h1>Create a Holiday</h1>
            <Form initial={blank} handleSubmit={handleCreate} />
            <h1>Edit Selected Holiday</h1>
            <Form initial={editHoliday} handleSubmit={handleEdit} />
        </>
    ) : (
        <Login handleSubmit={handleLogin} />
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
