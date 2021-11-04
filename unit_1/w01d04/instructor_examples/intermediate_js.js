///////////////////
// Math Object (Rounding)
///////////////////

// let num = 16.67;

// console.log(Math.round(num)); //rounds normally

// console.log(Math.ceil(num)); //auto rounds up

// console.log(Math.floor(num)); //auto rounds down

///////////////////
//Math Object (Random Numbers)
///////////////////

// console.log(Math.floor(Math.random() * 11)); //random number generator

//////////////////
//Other Math
/////////////////

// let one = 1;
// let two = 2;
// let three = 3;

// console.log(Math.max(one, two, three));

// console.log(Math.min(one, two, three));

// let myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(Math.max(...myArr));

// console.log(Math.min(...myArr));

////////////////////////
// Ternary Review
///////////////////////

// expression ? true : false

// 'dog' ? console.log(true) : console.log(false);

////////////////
// Do... While...
////////////////

// let x = 100;

// do {
//     if (x % 2 !== 0) {
//         console.log(x);
//     }
//     x--;
// } while (x > 0);

//////////////////////
// Revisit Destructuring and The Rest Operator
/////////////////////

// const myArr = [1, 2, 3];

// const [one, two, three = 0] = myArr;

// console.log(one, two, three);

// const myArr = [1, 2, 3];

// const [one, ...cheese] = myArr;

// console.log(one, cheese);

// const myObj = { name: 'Alex Merced', age: 34, height: 5.8 };

// const { name, ...theRest } = myObj;

// console.log();

//////////////////////
// revisit split and join
//////////////////////

// const myString = 'Hello World';

// console.log(myString.split(''));
// console.log(myString.split(' '));

// const myArray = ['Hello', 'World'];

// console.log(myArray.join());
// console.log(myArray.join(''));
// console.log(myArray.join(' '));

///////////////////
///eval
///////////////////

// eval('console.log("hello")');

// const num1 = 5;

// const num2 = 7;

// const operator = '+';

// // let result;

// eval(`var result = ${num1} ${operator} ${num2}`);

// console.log(result);

///////////////
// Sets
///////////////

//Collections with only unique items

// const myArr = [1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3];

// const mySet = new Set(myArr);

// console.log(mySet);

// const newArray = [...mySet];

// console.log(newArray);

// const noDupeArray = [...new Set(myArr)]; //remove dupes from array

// console.log(noDupeArray);

///////////////
//MultiDimensional Arrays
///////////////

// const mArray = [1, 2, 3, 4, 5, [6, 7, [8, 9]], [10, 11]];

// console.log(mArray[5][2][1]); //log 9

// console.log(mArray[6][0]); // log 10

// console.log(mArray[5][2][0]); // log 8

//////////////////
//Getting the last and middle element of an array
//////////////////

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(myArr[myArr.length - 1]); // get last element

// console.log(myArr[Math.floor(myArr.length / 2)]); //get middle element

///////////////
///Array Methods indexOf, push, pop, shift, unshift, reverse, slice, splice, sort
///////////////

const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
const myArr2 = ['Bob', 'Sally', 'Jesse', ['ALex Merced']];

///indexOf

// console.log(myArr.indexOf(5)); // return the index of value 5
// console.log(myArr2.indexOf()); // return the index of value 5

//Push and Pop

// console.log(myArr.pop(), myArr);
//removes last item and returns it

// console.log(myArr.push(9), myArr);
//adds an item to the end of the array and returns new length of array

//Shift and Unshift

// console.log(myArr.shift(), myArr);
//removes first item and returns it

console.log(myArr.unshift(0), myArr);
//add something to the front of array and return the new length of array

//Reverse

// console.log(myArr.reverse(), myArr);
//Reverse the Array

//Slice and Splice

// console.log(myArr.slice(1, 3), myArr);
//Creates a new array with the elements from the starting to but not including
//ending index,does not mutate original array

//Splice

// console.log(myArr.splice(2, 3), myArr);
//begin cutting at the specified index, and remove the number of elements
//specified and return the removed elements in an Array.

//Sort

// const myArr = [1, 4, 2, 8, 3, 8, 5, 7, 20];

// console.log(myArr.sort().reverse());

///////////////
// Reference vs Value
//////////////

//Primitives: Strings, Numbers, Booleans are passed by value

// let num1 = 5;

// let num2 = num1;

// num1 = 6;

// console.log(num1, num2);

// //Collections: Objects, Arrays, Sets are passed by reference

// let arr1 = [1];

// let arr2 = [...arr1];

// arr1[0] = 5;

// console.log(arr1, arr2);
