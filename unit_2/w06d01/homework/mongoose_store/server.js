/****
 * Express
 **/
const express =         require("express");
const app =             express();
const methodOverride =  require("method-override");
const show =            console.log;
const routes =          require("./controllers/routes.js");
const port =            3000;

/****
 * Mongoose
 **/
const mongoose =        require("mongoose");
const mongoURI =        "mongodb://localhost: 27017/products";
const db =              mongoose.connection;

/****
 * Mid
 **/
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

/****
 * New routes
 **/
app.use("/products", routes);

/****
 * Connect
 **/
mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true,
});
db.once("open", () => show("db open on", mongoURI));

/****
 * Listen port
 **/
app.listen(port, () => show("listening on", port));