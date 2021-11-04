const express =         require("express");
const app =             express();
const PORT =            3000;
const Pokemon =         require("./models/pokemon.js");
const methodOverride =  require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

/****
 * Routes
 **/

/* Create */
app.post("/pokemon", (req, res) => {
  console.log(req.body);
  req.body.stats = {
    hp: req.body.hp,
    attack: req.body.attack,
    defense: req.body.defense,
    spattack: req.body.spattack,
    spdefense: req.body.spdefense,
    speed: req.body.speed,
  };
  req.body.img =
    "https://static.turbosquid.com/Preview/2014/07/10__06_24_11/PokeBall1200ts.jpg22574adf-2173-4031-8fc7-d0182dc6b930Zoom.jpg";
  Pokemon.push(req.body);
  res.redirect("/pokemon");
});

/* Destroy all humans */
app.delete("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  Pokemon.splice(id, 1);
  res.redirect("/pokemon");
});

/* Edit */
app.get("/pokemon/:id/edit", (req, res) => {
  res.render("Edit", {
    monster: Pokemon[req.params.id],
    id: req.params.id,
  });
});

/* Index */
app.get("/pokemon", (req, res) => {
  res.render("Index.jsx", {
    data: Pokemon,
  });
});

/* New */
app.get("/new", (req, res) => {
  res.render("New");
});

/* Show */
app.get("/pokemon/:id", (req, res) => {
  console.log(Pokemon[req.params.id]);
  res.render("Show.jsx", {
    monster: Pokemon[req.params.id],
    id: req.params.id,
  });
});

/* Update */
app.put("/pokemon/:id", (req, res) => {
  req.body.stats = {
    hp: req.body.hp,
    attack: req.body.attack,
    defense: req.body.defense,
    spattack: req.body.spattack,
    spdefense: req.body.spdefense,
    speed: req.body.speed,
  };
  const { id } = req.params;
  req.body.img = Pokemon[id].img;
  Pokemon[id] = req.body;
  res.redirect("/pokemon");
});

/****
 * Listen server
 **/
app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
