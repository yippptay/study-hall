// create 5 burgers (at least 3 should be beef)
db.burger.insert({
  meat: "beef",
  cheese: false,
  toppings: ["ketchup", "onions", "pickles"],
});

db.burger.insert({
  meat: "beef",
  cheese: true,
  toppings: ["ketchup", "grilled onions", "pickles", "special sauce"],
});

db.burger.insert({
  meat: "beef",
  cheese: true,
  toppings: ["ketchup"],
});

db.burger.insert({
  meat: "chicken",
  cheese: false,
  toppings: ["onions", "pickles"],
});

db.burger.insert({
  meat: "chicken",
  cheese: true,
  toppings: ["lettuce", "chic-fil-a sauce"],
});



// find all the burgers
db.burger.find();

// show just the meat of each burger
db.burger.find({}, { _id: 0, meat: 1 });

// show just the toppings of each burger
db.burger.find({}, { _id: 0, toppings: 1 });

// show everything but the cheese
db.burger.find({}, { cheese: 0, meat: 1 });

// find all the burgers with beef
db.burger.find({ meat: "beef" });

// find all the burgers that are not beef
db.burger.find({ meat: { $ne: "beef" } });

// find the first burger with cheese
db.burger.findOne({ cheese: true });

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.findOneAndUpdate(
  { cheese: true },
  { $set: { cheese: "double cheese" } }
);

// find the burger you updated to have double cheese
db.burger.findOne({ cheese: "double cheese" });

// find and update all the beef burgers to be 'veggie'
db.burger.updateMany({ meat: "beef" }, { $set: { meat: "veggie" } });

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burger.deleteOne({ meat: "veggie" });

// drop the collection
//Expected Output
//true
db.burger.drop();

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase();
