const {Schema, model} = require('mongoose');

const fruitSchema = new Schema({
    name: {type: String, required: true },
    color: {type: String, required: true},
    readyToEat: Boolean
}, { timestamps: true})
// This is what each of our documents will look like
/* {
"_id": 5cdjsaopdhjcaophcdoiqhdcf,
name: "apple",
color: "blue",
readToEat: true,
createdAt: sometimestamp
} */

module.exports = model('Fruit', fruitSchema) // This creates our Collection i n MongoDB after we actually connect to the DB 

// module.exports = Fruit;
