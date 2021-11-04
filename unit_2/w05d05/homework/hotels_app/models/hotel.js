const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    name: String,
    location: String,
    rating: { type: Number, min: 0, max: 5 },
    vacancies: Boolean,
    tags: [String],
    rooms: [
      { roomNumber: Number, size: String, price: Number, booked: Boolean },
    ],
  },
  { timestamps: true }
);

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
