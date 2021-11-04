<<<<<<< HEAD
 ////// Taylor Yip
//// Part I: HTML & CSS
// 4 - I feel pretty good about the material, but some extra review would help

////Part II: JavaScript Reps
// // Easy Going
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }


// // Get Even
// for (let i = 0; i <= 200; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// } 


// // Fizz Buzz
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }


// Wild Wild Life
=======
////////////////////////////////
// Easy Going
////////////////////////////////
for (let a = 1; a <=20; a++) {
    console.log(a);
};

////////////////////////////////
// Get Even
////////////////////////////////
for (let b = 0; b <= 200; b+=2) {
    console.log(b);
};

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let c = 1; c <= 100; c++) {
    if (c % 3 === 0 && c % 5 === 0) {
        console.log('FizzBuzz');
    } else if (c % 3 === 0) {
        console.log('Fizz');
    } else if (c % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(c);
    }
};

////////////////////////////////
// Wild Wild Life
////////////////////////////////
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

<<<<<<< HEAD
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";

// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy";


// Yell at the Ninja Turtles
const ninArr = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (str of ninArr) {
    console.log(str.toUpperCase());
}


// Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic'));

// Use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
console.log(favMovies.sort());

// Use the method pop
console.log(favMovies.pop());

// push "Guardians of the Galaxy"
console.log(favMovies.push("Guardians of the Galaxy"));

// Reverse the array
console.log(favMovies.reverse());

// Use the shift method
console.log(favMovies.shift());

// unshift - what does it return?
console.log(favMovies.unshift()); // returns 18

// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
const position = favMovies.indexOf("Django Unchained");
console.log(favMovies.splice(position, 1, "Avatar"));

// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
var middle = Math.floor(favMovies.length / 2);

// store the value of your slice in a variable, console.log it - Thought question: what is going on here?
var newArray = favMovies.slice(middle, favMovies.length + 1);
console.log(newArray);

// console.log your final results
console.log(favMovies);


// Where is Waldo
=======
plantee[2] = 5001;
console.log(plantee);
wolfy[3] = "Gotham City";
console.log(wolfy);
dart.push("Hawkins");
console.log(dart);
wolfy.shift();
wolfy.unshift('Gameboy');
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (const caps of ninjTurtles) {
    console.log(caps.toUpperCase());
};

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'));
favMovies.sort();
//console.log(favMovies);
favMovies.pop();
//console.log(favMovies);
favMovies.push('Guardians of the Galaxy');
favMovies.reverse();
//console.log(favMovies);
favMovies.shift();
favMovies.unshift(); 
console.log(favMovies);// returns nothing changed because there was no argument passed in it, I don't know what I should be adding to the array as the first element
//console.log(favMovies.indexOf('Django Unchained')); // logs 14
favMovies.splice(14, 1, 'Avatar');
console.log(favMovies);
//console.log(favMovies.length); //logs 18
const halfMovies = favMovies.slice(favMovies.length/2,favMovies.length-1);
console.log(halfMovies);
console.log(favMovies.indexOf('Fast and Furious')); //When did we get rid of this? I can only think of getting rid of Guardians of the Galaxy.


////////////////////////////////
// Where is Waldo
////////////////////////////////
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

<<<<<<< HEAD
console.log(whereIsWaldo.splice(1, 1));
whereIsWaldo[2][2] = "No One";
console.log(whereIsWaldo[2][1][1]);


//  Excited Kitten
const stringLib = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        let ranNum = Math.floor(Math.random() * 3);
        console.log(stringLib[ranNum]);
    } else {
        console.log(i);
    }
}


//  Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
const newNums = nums.sort();
console.log(newNums[Math.floor(newNums.length / 2)]);
=======
whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);
//console.log(whereIsWaldo.indexOf('Neff'));
//console.log(whereIsWaldo[1][2]); //found Neff
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);


//////////////////////////////
//Excited Kitten
//////////////////////////////
const attention = "Love me, pet me! HSSSSSS!"
const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
let meow = Math.floor(Math.random()*3);
for (let i = 1; i <=20; i++) {
    if (i % 2 === 0) {
        console.log(kittyTalk[meow]);
    } else {
        console.log(attention);
    }
};


//////////////////////////////
//Find the Median
//////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort();
console.log(Math.floor(nums.length/2)); // 12
console.log(nums[12]);
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
