// setup express
const express = require('express');
const app = express();
const port = 3000;
// temporary data wil be replaced with models and a connection to our db
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];
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
    res.send(fruits[req.params.id])
})
/*******
  * Functional Routes
* ********/
/*** Routes end ***/
app.listen(port, ()=> {
  console.log(`listening on port ${port}`)
})