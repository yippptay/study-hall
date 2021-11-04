/****
 * Setup and require express
 **/ 
const express = require("express");
const app = express();
const PORT = 3000;

/****
 * JSX
 **/
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

/****
 * Database
 **/
const drinks = require("./models/drinks.js");

/****
 * Presentational Routes 
 **/
app.get("/", (req, res) => {
    res.render("Index", {
        drinks
    });
});

app.get("/drinks", (req, res) => {
    res.send(drinks);
});

app.get("/drinks/showpage/:id", (req, res) => {
    res.render("Show", 
    {drinks: drinks[req.params.id]})
})

/****
 * Routes end
 **/
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})