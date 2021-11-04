// server.js
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// routes here above listen

app.get('/',(req,res)=> {
    const props = {
        name: "Arthur Bernier Jr"
    }
    res.render('Index', props)
})

app.listen(port, (req, res) => {
  console.log("listening...")
})