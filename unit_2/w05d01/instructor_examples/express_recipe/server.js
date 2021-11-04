// grabbing express from nodemodules
const express = require('express');
// we are invoking the express function
const app = express();
// we are setting the local port that our app will use
const port = 3000;

// const recipe = [
//     'Welcome lets go ahead and make Spaghetti, wash your hands', 
//     'Make Noodles', 
//     'Make Sauce', 
//     "Make Protein",
//     "Add Noodles, Sauce and Protein together make it fancy"];



// app.get('/spaghetti/step/:currentStep/:start', (req, res) => {
//     console.log(req.params.start)
//     res.send(recipe[req.params.currentStep]);
// });
// app.get('/spaghetti/step/sali', (req, res) => {
//     res.send("Sali is cool");   
// });


// app.get('/fixed/spaghetti/step/:currentStep', (req, res) => {
//     if (recipe[req.params.currentStep]) {
//           res.send(recipe[req.params.currentStep]);
//     } else {
//       res.send('cannot find anything at this index: ' + recipe[req.params.currentStep]);
//     }

// });

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter"];

app.get('/', (req, res)=> {
    res.send("Welcome to the root")
})

app.get('/awesome', (req, res) => { //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });

app.get('/:indexOfPlantsArray', (req, res) => { //:indexOfPlantsArray can be anything, even awesome
    res.send(plants[req.params.indexOfPlantsArray]);
});

app.get('/hello/:firstName/:lastName', (req, res)=> {
   console.log(req.query)
   const {firstName, lastName} = req.params
   const {isCool, isAwesome} = req.query
   res.send(`
    <h1> The First name is ${firstName} and the last name is ${lastName}</h1>
    <h2>${isCool? 'And Im cool': 'And I am corny'}</h2>
    <h3>${isAwesome? 'And Im awesome': 'and I am not Awesome'}</h3>
   `)
})


app.listen(port,() => {
    console.log('listening on port' , port);
});