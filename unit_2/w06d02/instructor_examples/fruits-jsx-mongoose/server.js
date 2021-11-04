/////////////////
// dependencies
/////////////////
const express = require('express'); //Express
const app = express(); //Create app object
const mongoose = require('mongoose'); //bring in mongoose
const Fruit = require('./models/fruits.js'); //Fruit Model
const methodOverride = require('method-override'); //Method Override
const fruitsController = require('./controllers/fruits.js'); //Fruits Controller
require('dotenv').config(); //Process.env holds all your env variables
const port = process.env.PORT || 3000; // Port Number
const DBURI = process.env.MONGOURI; //Mongo DB URI
const userController = require('./controllers/users_controller.js'); //Users Controller
const session = require('express-session'); //Session Middlewhere
const User = require('./models/users.js'); // User Model
const bcrypt = require('bcryptjs'); //bcrypt to encrypt passwords

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Controllers
app.use('/fruits', fruitsController);
app.use('/user', userController);

// mongoose connection
mongoose.connect(DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

////////////////
//Authorization Routes
////////////////

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
};

//ROUTE TO LOGIN PAGE
app.get('/sessions/new', (req, res) => {
    res.render('sessions/New', { currentUser: req.session.currentUser });
});

//Authentication Route, Login
app.post('/sessions/', (req, res) => {
    //See if user exists
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if (err) {
            //send error if error
            res.send(err);
        } else if (!foundUser) {
            //send to sign up if user doesn't exist
            res.redirect('/user/new');
        } else {
            //copmpare passwords
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                //send to fruits page
                req.session.currentUser = foundUser.username;
                res.redirect('/fruits/');
            } else {
                //tell them its a wrong password
                res.send('WRONG PASSWORD');
            }
        }
    });
});

app.delete('/sessions/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/sessions/new');
    });
});

// listen
app.listen(port, () => {
    console.log('listening on: ' + port);
});
