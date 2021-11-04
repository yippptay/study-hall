//// Arrays & Conditionals
// Easy Does It
const quotes = ["Give up on yourself, and you give up on the world.",

                "Acts of goodness are not always wise, and acts of evil are not always foolish, but regardless, we shall always strive to be good.",

                "We all make choices, but in the end, our choices make us."]

// // Random
// const randomThings = [1, 10, "Hello", true];
// // 1. How do you access the 1st element in the array?
// randomThings[0];

// // 2. Reassign the value of "Hello" to "World".
// randomThings[2] = "World";

// // 3. Check the value of the array to make sure it updated the array.
// console.log(randomThings[2]);


// // We've Got Class
// const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"]
// // 1. What would you write to access the 3rd element of the array?
// ourClass[2];

// // 2. Change the value of "Github" to "Octocat".
// ourClass[2] = "Octocat";

// // 3. Add a new element, "Cloud City" to the array.
// ourClass.push("Cloud City");


// // Mix It Up
// const myArray = [5 ,10 ,500, 20];

// // 2. Using the push method, add the string "Egon" to the end of the array.
// myArray.push("Egon");

// // 3. Using a method, remove the string from the end of the array.
// console.log(myArray.pop(), myArray);

// // 4. Using the unshift method, add the string "Bob Marley" to the beginning of the array.
// console.log(myArray.unshift("Bob Marley"), myArray);

// // 5. Using a different method, remove the string from the beginning of the array.
// console.log(myArray.shift(), myArray);

// // 6. Use the reverse method on this array.
// console.log(myArray.reverse(), myArray);


// Biggie Smalls
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] < 100) {
//         console.log("little number");
//     } else (console.log("big number"));
// }


// Monkey in the Middle
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] < 5) {
//         console.log("little number");
//       } else if (myArray[i] > 10) {
//         console.log("big number");
//       } else {
//         console.log("monkey");
//       }
// }

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// // 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// // 2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
// const kristynShoe = kristynsCloset.splice(0, 1);
// console.log(kristynsCloset);
  
// // 3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// kristynsCloset.splice(5, "", "raybans");
// console.log(kristynsCloset);

// //   Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset[4] = "stained knit hat";
// console.log(kristynsCloset);
  
// //   Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// console.log(thomsCloset[0][0]);
  
// //   In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][0]);

// //   Access one item from Thom's accessories array.
// console.log(thomsCloset[2][0]);  

// //   Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log("Thom is locking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + ", and " + thomsCloset[2][0] + ".");
  
// //   Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.  
// console.log(thomsCloset[1][2] = "Footie Pajamas");

