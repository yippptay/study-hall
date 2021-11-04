<<<<<<< HEAD
//// Conceptual Questions
// How do we assign a value to a varible?
    // Declare a variable type then use = to assign a value.
// Which lines are valid?
    // 1, 2, and 4. Line 3 is invalid due SyntaxError: Invalid left-hand side in assignment.
// How do we change the value of a variable?
// How do we assign an existing variable to a new variable?

// Let's get Mathy!
=======
//Let's get Mathy
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16

<<<<<<< HEAD
// // Round a down
// console.log(Math.floor(a));
// // Round b up
// console.log(Math.ceil(b));
// // Find the absolute value of b - a
// console.log(Math.abs(b - a));
// // Find the largest number of a, b, c, d, e
// console.log(Math.max(a, b, c, d, e ));
// // Find the smallest number of a, b, c, d, e
// console.log(Math.min(a, b, c, d, e ));
// // Find the square root of e
// console.log(Math.sqrt(e));
// // Raise e to the power of d
// console.log(Math.pow(e, d));
// // Make a digital die 0 generate a random number between 1 - 6
// console.log(Math.floor(Math.random() * 8) + 1)

//// Strings Activity 1
// // Strings - Switcharoo
// var firstVariable = "Hello World";
// firstVariable = 100;
// var secondVariable = firstVariable;
// secondVariable = "Hello World";
// console.log(firstVariable);
// What is the value of firstVariable?
    // 100

// Strings - Combine it
// var yourName = "Taylor Yip";
// console.log("Hello, my name is " + yourName + ".");

// //// Booleans Activity
=======
// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.abs(b-a));
// console.log(Math.max(a, b, c, d, e));
// console.log(Math.min(a, b, c, d, e));
// console.log(Math.sqrt(e));
// console.log(Math.pow(e,d));
// console.log(Math.ceil(Math.random()*6));
// console.log(Math.floor(Math.random() * 6) +1));

//Strings Activity 1
// let firstVariable = 'Hello World';
// firstVariable = 3;
// let secondVariable = firstVariable;
// secondVariable = 'sharon';
// console.log(firstVariable);

// const yourName = 'Sharon Kim';
// console.log(`Hello, my name is ${yourName}`);

//Booleans Activity
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
// const a = 6;
// const b = 100;
// const c = -5;
// const d = 3000;
// const e = 'Jelly Bean';

// console.log(a < b);
// console.log(c < d);
<<<<<<< HEAD
// console.log('Peanut' === 'Peanut');
// console.log(a + b > c);
// console.log(a + a !== d);
// console.log(e === 'Jelly Bean');
// console.log(48 !== '48');
// console.log('e' !== 'Eh');

//// The Farm
// var animal = "cow";
// if (animal == "cow") {
//     console.log("mooooo");
// } else (console.log("Hey! You're not a cow"));

//// Driver's Ed
// var age = 42;
// if (age >= 16) {
//     console.log("Here are the keys.");
// } else (console.log("Sorry, you're too young."));

//// Just Loop It
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 500; i >= 50; i--) {
//     console.log(i);
// }

//// Let's get odd
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i + " is an odd number.");
//     }
// }

//// Give me Five
// for (let i = 5; i < 100; i++) {
//     if (i % 5 == 0) {
//         console.log("I found a " + i + ". High five!");
//     }
// }

// for (let i = 3; i < 100; i++) {
//     if (i % 3 == 0) {
//         console.log("I found a " + i + ". Three is a crowd!");
//     }
// }

//// Savings account

// var bank_account = 0;
// for (let i = 0; i <= 10; i++) {
//     bank_account = bank_account + i;
// }
// console.log(bank_account + "$");

// var bank_account = 0;
// for (let i = 0; i <= 100; i++) {
//     bank_account = bank_account + (i * 2);
// }
// console.log(bank_account + "$");

//// Fibonacci

// let x = 1, y = 2, total = 0;

// while(total < 75) { // change total to keep calculating
//     let result = x + y;
//     console.log(result);
//     total = total + result;
//     x = y;
//     y = result;
// }

//// Checkerboard
const boardSize = 20; // assuming only even values
let collumns = boardSize / 2;
let rows = boardSize / 2;
var array = [];

for(let row = 0; row <= rows; row++) {
    for(let col = 0; col <= collumns; col++) {
        if (row % 2 !== 0) {
            array.push("# ");
        } else (array.push(" #"));
    }
    console.log(array.join(""));
    array = [];
}
=======
// console.log('Peanut'==='Peanut');
// console.log(a < b > c);
// console.log(a + a < d);
// console.log(e === 'Jelly Bean');
// console.log(48 == '48');
// console.log('e' !== 'Eh');

//The Farm
const animal = 'cow';
if (animal === 'cow') {
    console.log('moooooo')
} else {
    console.log('Hey! You\'re not a cow.');
};

// Driver's Ed
const age = 24;
if (age >= 16) {
    console.log('Here are the keys');
} else {
    console.log(`Sorry, you're too young.`)
}

// Just Loop It
for (let x = 0; x <= 10; x++) {
    console.log(x);
};

for (let y = 500; y >= 50; y--) {
    console.log(y);
};
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
