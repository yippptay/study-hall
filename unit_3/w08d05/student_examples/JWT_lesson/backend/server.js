//DEPENDENCIES
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

//Express Application Object
const app = express();

//JWT SECRET and PORT
const [SECRET, PORT] = ['gouda', 3000]; //Should be in .env for production
console.log(SECRET, PORT);

//AUTHENTICATION MIDDLEWARE FUNCTION
const auth = (req, res, next) => {
    //Grab the authorization header
    const authHeader = req.headers.authorization;

    //If header isn't null, parse token from header
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        //verify the token
        jwt.verify(token, SECRET, (err, user) => {
            if (err) {
                //if fail verify, send error code
                return res.sendStatus(403);
            }
            //store the payload (username) in the request object
            req.user = user;
            //go to the route
            next();
        });
    } else {
        //if token not present, send error code
        res.sendStatus(401);
    }
};

//MIDDLEWARE
app.use(cors()); //Prevent CORS Errors by allowing all origins
app.use(express.json()); //Parse JSON Data from requests

//USERS
const users = [
    { username: 'AlexMerced', password: 'password' },
    { username: 'BobSmith', password: 'password' },
];

//ROUTES

app.post('/login', (req, res) => {
    //DESTRUCTURE username and password from request body
    const { username, password } = req.body;

    //SEE IF USER EXISTS
    if (users.find((u) => u.username === username && u.password === password)) {
        //generate token that holds the username
        const token = jwt.sign({ username }, SECRET);
        //return the token

        res.json(token);
    }
});

app.post('/test', auth, (req, res) => {
    res.send(`hello ${req.user.username}!`);
});

//LISTENER
app.listen(PORT, () => {
    console.log(`you are listening on port ${PORT}`);
});
