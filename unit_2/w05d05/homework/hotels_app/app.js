/****
 * Mongo
 **/

const show = console.log;

// Dependencies
const mongoose = require("mongoose");
const db = mongoose.connection;

// Config
const mongoURI = "mongodb://localhost:27017/hotel";

// Models
const Hotel = require("./models/hotel.js");
const hotelSeed = require("./models/seed.js");

// Connect to Mongo
mongoose.connect(
  mongoURI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("Mongo running at", mongoURI)
);

// Error / success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

Hotel.count({}, (err, data) => {
  if (err) show(err.message);
  show(`There are ${data} hotels in this database`);
});

/****
 * Create
 **/

const myHotel = {
  name: "The Ritz-Carlton",
  location: "Los Angeles",
  rating: 5,
  vacancies: true,
  tags: ["Luxury"],
  rooms: [
    { roomNumber: 801, size: "Deluxe Guest Room", price: "9999", booked: true },
    {
      roomNumber: 802,
      size: "Deluxe Queen Room",
      price: "8888",
      booked: false,
    },
    { roomNumber: 803, size: "Corner King", price: "7777", booked: true },
  ],
};

// Hotel.create(myHotel, (err, hotel) => {
// 	if (err) {
// 		show(err)
// 	} else {
// 		show(hotel)
// 	}
// })

/****
 * Read
 **/

// Hotel.find({}, (err, hotels) => {
//   	if (err) {
// 		show(err)
//   	} else {
// 		show(hotels)
// 	}
// 	db.close()
// })

// Hotel.find({}, 'name', (err, hotels) => {
// 	if (err) {
// 	  show(err)
// 	} else {
// 	  show(hotels)
//   }
//   db.close()
// })

// Hotel.find({name: 'The W'}, (err, hotels) => {
// 	if (err) {
// 	  show(err)
// 	} else {
// 	  show(hotels)
//   }
//   db.close()
// })

// Hotel.find({vacancies: true}, 'name location vacancies tags rooms', (err, hotels) => {
// 	if (err) {
// 	  show(err)
// 	} else {
// 	  show(hotels)
//   	}
//   db.close()
// })

/****
 * Update
 **/

// Hotel.findOneAndUpdate({name: 'The Great Northern'}, {rating: 5}, {new: true}, (err, hotel) => {
// 	if (err){
// 		show(err)
// 	} else {
// 		show(hotel)
// 	}
// 	db.close()
// });

/****
 * Del
 **/

// Hotel.findOneAndRemove({name: 'Hotelicopter'}, (err, hotel) => {
// 	if (err){
// 		show(err)
// 	} else {
// 		show('Removed: ', hotel)
// 	}
// 	db.close()
// });

// Hotel.findOneAndRemove({name: "Hilbert's Hotel"}, (err, hotel) => {
// 	if (err){
// 		show(err)
// 	} else {
// 		show('Removed: ', hotel)
// 	}
// 	db.close()
// });

// Hotel.findOneAndRemove({location: "Colorado Rockies"}, (err, hotel) => {
// 	if (err){
// 		show(err)
// 	} else {
// 		show('Removed: ', hotel)
// 	}
// 	db.close()
// });

// Hotel.findOneAndUpdate({name: 'Motel Bambi'}, {vacancies: false}, {new: true}, (err, hotel) => {
// 	if (err){
// 		show(err)
// 	} else {
// 		show(hotel)
// 	}
// 	db.close()
// });

// Hotel.findOneAndUpdate({location: 'White Bay, Oregon'}, {rating: 2}, {new: true}, (err, hotel) => {
// 	if (err){
// 		show(err)
// 	} else {
// 		show(hotel)
// 	}
// 	db.close()
// });

/****
 * Count
 **/

// Hotel.count({}, (err, data) => {
//   if (err) show(err.message);
//   show(`There are ${data} hotels in this database`);
// });

/****
 * Grave
 **/

// db.on('open', Hotel.create(hotelSeed, (err, data) => {
//     if (err) console.log(err.message)
//     console.log('added provided hotel data')
//   }))

// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// Hotel.collection.drop()

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
// })