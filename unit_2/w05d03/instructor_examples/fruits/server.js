const express = require('express');
const app = express();
const methodOverride = require('method-override');

// import data
const fruits = require('./models/fruits.js');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// index route
app.get('/fruits', (req, res) => {
    // res.send(fruits);
    res.render('Index', { title: 'My Fruits Page', fruits });
});

//NEW ROUTE -> Page with form to create new Fruit
app.get('/fruits/new', (req, res) => {
    res.render('New');
});

//CREATE ROUTE -> Create a new fruit
app.post('/fruits', (req, res) => {
    if (req.body.readyToEat == 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits');
});

//DELETE ROUTE
app.delete('/fruits/:index', (req, res) => {
    console.log(req.query);
    const { index } = req.params;
    fruits.splice(index, 1);
    res.redirect('/fruits');
});

//EDIT ROUTE
app.get('/fruits/:index/edit', (req, res) => {
    res.render('Edit', {
        fruit: fruits[req.params.index],
        index: req.params.index,
    });
});

//UPDATE ROUTE

app.put('/fruits/:index', (req, res) => {
    const { index } = req.params;
    console.log(req.body);

    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    fruits[index] = req.body;
    res.redirect('/fruits');
});

// show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', { fruit: fruits[req.params.indexOfFruitsArray] });
});

app.listen(3000, () => {
    console.log('running on port 3000');
});
