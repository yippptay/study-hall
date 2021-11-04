// DEPENDENCIES ===============
const express = require('express');
const app = express();

// PORT ===============
const port = 3000;

// LISTENER ===============
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

// ROUTES ===============
app.get('/', (req, res) => {
    res.send(`99 Bottles of beer on the wall <a href="/98">Take one down and pass it around...</a>`);
})

app.get('/:number_of_bottles', (req, res) => {
    const next = req.params.number_of_bottles -1 

    if(next < 0){
        res.send(`${req.params.number_of_bottles} Bottles of beer on the wall. <a href="/">Time to restock!</a>`);
    } else {
        res.send(`${req.params.number_of_bottles} Bottles of beer on the wall. <a href="${next}">Take one down and pass it around...</a>`);
    }
})

// BONUS! RES.SEND 1 BOTTLE WHEN WE HIT /1 ===============

// app.get('/:number_of_bottles', (req, res) => {
//     const next = req.params.number_of_bottles -1 

//     if(req.params.number_of_bottles == 1){
//         res.send(`${req.params.number_of_bottles} Bottle of beer on the wall. <a href="${next}">Take one down and pass it around...</a>`);
//     } else if(next < 0){
//         res.send(`${req.params.number_of_bottles} Bottles of beer on the wall. <a href="/">Time to restock!</a>`);
//     } else {
//         res.send(`${req.params.number_of_bottles} Bottles of beer on the wall. <a href="${next}">Take one down and pass it around...</a>`);
//     }
    
// })