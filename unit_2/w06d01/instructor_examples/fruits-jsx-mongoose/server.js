/* Set Up Express*/
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection; 
const show = console.log
const Fruit = require('./models/fruits.js')
 /* Middleware */
app.use(express.urlencoded({extended: true})); // cant use req.body without it
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect('mongodb://localhost:27017/basiccrud', {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true})
db.once('open', ()=> {
    show('everything is awesome')
})


/* Presentational Routes */

app.get('/', (req, res)=> {
    res.send(`<a href="/fruits"> Continue to Fruits</a>`)
})
app.get('/fruits', (req, res)=> {
    // below first we will try to find all of our fruits
    // Then after we either find all fruits or get an error we will run our callback
    const thisRunsNext = (error, allFruits) => {
        show('Hey I ran after find happened')
        if(error){
            show(error)
        } else {
            const props = {
                fruits: allFruits
            }
            res.render('Index', props)
        }
    }
    Fruit.find({}, thisRunsNext)
})

// New
app.get('/fruits/new', (req,res)=> {
    res.render('New')
})

// Seed

app.get('/fruits/seed', (req, res)=> {
 Fruit.create([
    {
        name:'grapefruit',
        color:'pink',
        readyToEat:true
    },
    {
        name:'grape',
        color:'purple',
        readyToEat:false
    },
    {
        name:'avocado',
        color:'green',
        readyToEat:true
    }
 ], (error, newFruits)=> {
     res.redirect('/fruits')
 })
})

// Show

app.get('/fruits/:id', (req, res) => {
    // req.params.id was set by the line above's :id
 Fruit.findById(req.params.id, (error, foundFruit)=> {
     if(error){
         show(error)
     } else {
         res.render('Show', {
             fruit: foundFruit
         })
     }
 } )
})




/* Functional Routes */
app.post('/fruits', (req, res) => {
    console.log('This is the body before we change it')
    console.log(req.body);
    // if(req.body.readyToEat === 'on'){
    //     req.body.readyToEat = true
    // } else {
    //     req.body.readyToEat = false 
    // }

    req.body.readyToEat === "on"? 
        req.body.readyToEat = true:
        req.body.readyToEat = false;
    console.log('This is the body after we change it')
    console.log(req.body)
    Fruit.create(req.body, (error, createdFruit)=> {
        if(error){
            show(error)
        } else {
            res.redirect('/fruits')
        }
    })
})


/* Listening on Port*/
app.listen(3000, ()=>{
    console.log('listening');
});