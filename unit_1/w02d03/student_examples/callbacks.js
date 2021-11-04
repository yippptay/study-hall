////////////////
// Callbacks
///////////////

//A function passed as an argument to another function

// const myFunc = () => {
//     console.log('Hello World');
// };

// setTimeout(myFunc, 5000); // settimeout is a func where you pass in a function, time in milliseconds as the arguments // prints hello world 5 seconds later

// setTimeout(() => {
//     console.log('Hello World')
// }, 5000); // just define the function while being passed as an argument to save time from storing it in a variable

// Synchronus - one step at a time/ single threaded - JS is synchronus, runs the code one line at a time

// Asynchronus - Multiple things, out of order

// setInterval(() => {
//     console.log('hello world')
// }, 1000) // every second, it will say hello world

// const parent = (callback) => {
//     callback()
// } //callback is just parameter for any callback function that will be passed in as argument when we later use the parent function

// const child = () => {
//     console.log('hello world')
// }

// parent(child); // parent function says to say that whatever callback function is being passed as an argument will have its function invoked so when we do parent(child), child function is passed and invoked and thats why hello world prints.

////////////////
//Higher Order Function
///////////////

//A function that is a wrapper around other functions

// const fancyText = () => {
//     console.log('=============');
//     console.log('hello world');
//     console.log('=============');
// };

// fancyText();

// const fancyWrapper = (callback) => {
//     console.log('=============');
//     callback();
//     console.log('=============');
// };

// fancyWrapper(() => {
//     console.log('hello world')
// }); //takes a callback function and prints whatever that function is supposed to do in between the equal signs

// fancyWrapper(() => {
//     console.table({name:'Sharon Kim', age: 24})
// }); //console.table is nice for printing out objects in better layouts

//////////////////////
//Higher Order Array Functions
/////////////////////

//Loop over the array but lets you decide what happens in the middle

// const customForEach = (arr, callback) => {
//     for (x = 0; x < arr.length; x++) {
//         callback(arr[x], x)
//     }
// } //the for loop says that each time you loop through the array, it will run that function
// //for each loop

// const myArr = [1,2,3,4,5,6,7,8,9];

//const logValue = (value, index) => {
//     console.log(value);
// };
//customForEach(myArr, logValue);
//OR
// customForEach (myArr, (value, index) => {
//     console.log(value);
// }); // value, index are the parameters because the arguments for this callback function have been defiend in the customforEach function already // index isnt being used this time, its just available to you if you want // prints 1, 2, 3, 4, 5, 6, 7, 8, 9

// const loopObject = (obj, callback) => {
//     for (key in obj) {
//         callback(key)
//     }
// };

// const myObj = {
//     name: 'Sharon Kim',
//     age: 24
// }

// loopObject (myObj, (key) => {
//     console.log(key, myObj[key]);
// })

////////////////////
// array.forEach
///////////////////
// forEach does not return a value, just does the thing
//executes the same code for each element of an array
//quick way to loop over an array; quicker version of a regular for loop

// const myArr = [1,2,3,4,5,6,7,8,9];

// myArr.forEach((value, index) => {
//     console.log(`at index ${index} there is the value ${value}`)
// }); //if you dont need one of these arguments, then just use underscore _ in place of it
// //OR
// const logArray = (value, index) => {
//     console.log(`at index ${index} there is the value ${value}`)
// });
// myArr.forEach(logArray); // prints at index 0 there is the value 1, and so forth


//////////////////
// array.map
//////////////////

// Returns an array made of the return of the callback
// map returns a new array, without mutating the original one, otherwise use the forEach if you dont care about making those alterations

// const myArr = [1,2,3,4,5,6,7,8,9];

// const addOne = (value, index) => {
//     return value + 1;
// }
// const newArr = myArr.map(addOne);
// console.log(newArr);

// const myArr = [1,2,3,4,5];
// const newArr = myArr.map((value, index) => {
//     return value *10;
// })
// console.log(newArr);

// const nameArr = [
//     {first: 'Sharon', last: 'Kim'},
//     {first: 'Shawn', last: 'Mendes'}
// ];

// const newArr = nameArr.map((value, index) => {
//     return {name: `${value.first} ${value.last}`}
// }) //returns in object form
// console.log(newArr);


////////////
//array.filter
///////////
// Filter returns an array for each item in which the callback returns true
//the callback function when using this .filter() method should return a boolean of true or false. So if you wanted it to be true, itd print just the true values

//const myArr = [1,2,3,4,5,6,7,8,9];

// const filterTest = (value, index) => {
//     return value > 4; //if true, print, if false, skip the number
// }
//const newArr = myArr.filter(filterTest);
//console.log(newArr); // prints an array [5,6,7,8,9,] because the other numbers are not bigger than 4, so theyre false. We only print the true ones 

// const filterCallback = (value, index) => {
//     return value % 2 === 0;
// }
// const newArr = myArr.filter(filterCallback); 
// console.log(newArr); // prints array of just even numbers


//////////////////
// array.every
/////////////////

//returns true if every element of the passes the callbacks test
//everything in the array has to pass the test

// const myArr = [2,4,6,8];

// const everyCallback = (value, index) => {
//     return value % 2 === 0
// };
// console.log(myArr.every(everyCallback)); //prints true, but lets say you had a 9 in the array, it would print false because every single element in the array is not even because of the 9


/////////////////
// array.some
////////////////

//returns true if at least one element passes the callback test

// const myArr = [2,4,6,8,9];

// const someCallback = (value, index) => {
//     return value % 2 !== 0
// };

// console.log(myArr.some(someCallback)); // returns true because 9 is odd, doesnt matter if the other elements are even because at least one element just has to pass the test. 9 passed the test


//////////////////
// array.find and array.findIndex
/////////////////

// find -> returns the value of the first element that passes the callback test
// findIndex -> returns the index of the first element that passes the callback test

// const myArr = [2,3,4,5,6];

// const findOdd = (value, index) => {
//     return value % 2 !== 0
// };
// console.log(myArr.find(findOdd)); // prints 3 because its the first element in the array that is odd. it stops there, 5 passes the test but it stops at the first element that is true. if you want to print both 3 and 5, then use array.filter()

// console.log(myArr.findIndex(findOdd)); // prints the index of 3, which is 1, so it prints 1


/////////////////
// Chaining Array Functions
////////////////

// you can chain a function of a value type that the prior function returns

// const myArr = [1,2,3,4];

// // console.log(myArr.map((value, index) => {
// //     return value + 1
// // })); // gives me an array with everything +1

// console.log(myArr.map((value, index) => {
//     return value + 1
// }).filter((value, index) => {
//     return value % 2 === 0 //prints [2,4]
// }).find((value, index) => {
//     return value % 2 === 0 //prints 2
// })); 


///////////////
// reduce
///////////////

// it allows you to loop over the array do a cumulative operation

const myArr = [1,2,3,4,5,6,7,8,9];

// const reduceCallback = (accumulator, value, index) => {
//     return accumulator + value;
// } //accumulator is your current element plus the next value and that new sum becomes the accumulator and the next element becomes the next value 


// console.log(myArr.reduce(reduceCallback,0));
// prints 45 because you 1 + 2 first where 1 is the accumulator and value is 2, then together thats 3. Then 3 becomes accumulator which is added to next value which is 3. so now you have 6 and then add 6 +4 and so on.

const reduceCallback = (accumulator, value, index) => {
    if (value % 2 === 0) {
        return accumulator + 1
    } else {
        return accumulator // which is initially 0
    }
} // adds 1 if its even, and doesnt do anything if its odd

console.log(myArr.reduce(reduceCallback, 0)); // 0 is the initial value you start off with
console.log(myArr.filter((value) => value % 2 === 0).length);