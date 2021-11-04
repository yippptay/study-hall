// setup express
const express = require('express');
const app = express();
const port = 3000;

// temporary data wil be replaced with models and a connection to our db
const fruits = require('./models/fruits')

const demo = ['cool', 'fresh', 'awesome', 'all things that describe Arthur 10 years ago']

// setup your jsx engine

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



/*** Routes Start ***/
/******* 
 * Presentational Routes 
*********/
app.get('/', (req,res)=> {
    res.send('I can get whatever i want')
})
// Index
app.get('/fruits/', (req,res)=> {
    res.send(fruits)
})

// Show

app.get('/fruits/:id', (req,res) => {
    const props = {
        fruit: fruits[req.params.id],
        demo: demo
    }
    res.render('Show', props)
})


/*******
  * Functional Routes
* ********/



/*** Routes end ***/

app.listen(port, ()=> {
  console.log(`listening on port ${port}`)
})

