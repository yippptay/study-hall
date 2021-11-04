<<<<<<< HEAD
////////////////////////////
// Math Object (Rounding) //
////////////////////////////

// let num = 16.07;
=======
/////////////////
//Math Object (Rounding)
////////////////

// console.log(console);
// console.log(Math);

// let num = 16.07;

>>>>>>> cd111adb1579480cb09838f476953d49de41b385
// console.log(Math.round(num)); // rounds normally
// console.log(Math.ceil(num)); // auto rounds up
// console.log(Math.floor(num)); // auto rounds down

<<<<<<< HEAD
//////////////////////////////////
// Math Object (Random Numbers) //
//////////////////////////////////

// console.log(Math.floor(Math.random()*10)); // random number generator

////////////////
// Other Math //
////////////////

// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8)); // finds the highest value
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8)); // finds the lowest value

////////////////////
// Ternary Review //
////////////////////

// expresion ? true : false
// 'dog' ? console.log(true) : console.log(false);

////////////////////
// Do... While... //
////////////////////

// let x = 100;
// do {
//     if (x % 2 !== 0) {
//         console.log(x);
//     }
//     x--;
// } while (x > 0); // if true, run once. if still true, keep running.

/////////////////////////////////////////////////
// Revisit Destructuring and The Rest Operator //
/////////////////////////////////////////////////

// const myArr = [1, 2];
// const [one, two, three = 0] = myArr;
// console.log(one, two , three);


// const myArr = [1, 2, 3];
// const [one, ...cheese] = myArr;
// console.log(one, cheese);


// const myObj = {name: 'Taylor Yip', age: 21, height: 5.8};
// const {name, ...theRest } = myObj;
// console.log(name, theRest);

////////////////////////////
// Revisit Split and Join //
////////////////////////////

// let myString = 'Hello World';
// console.log(myString.split(''));
// console.log(myString.split(' '));


// const myArr = ['Hello', 'World'];
// console.log(myArr.join());
// console.log(myArr.join(''));
// console.log(myArr.join(' '));

//////////
// eval //
//////////

// eval('console.log("hello")');

// const num1 = 5;
// const num2 = 7;
// const operator = '+';
// // let result;
// eval(`var result = ${num1} ${operator} ${num2}`);
// console.log(result);

//////////
// Sets //
//////////

// Collections with only unique items

// const myArr = [1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3];
// const mySet = new Set(myArr);
// console.log(mySet);
// const newArray = [...mySet];
// console.log(newArray);
// const noDupeArray = [...new Set(myArr)]; // removes dupes from array
// console.log(noDupeArray);

//////////////////////////////
// Multi-Dimensional Arrays //
//////////////////////////////

const mArray = [1, 2, 3, 4, 5, [6, 7, [8, 9]], [10, 11]];
// console.log(mArray[5][2][1]) // log 9
// console.log(mArray[6][0]); // log 10
// console.log(mArray[5][2][0]) // log 8

/////////////////////////////////////////////////////
// Getting the last and middle element of an array //
/////////////////////////////////////////////////////

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(myArr[myArr.length - 1]); // get last element

///////////////////////////////////////////////
// Array methods: indexOf, push, pop, shift, //
// unshift, reverse, slice, splice, sort     //
///////////////////////////////////////////////\

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// indexOf
// console.log(myArr.indexOf(5)); // searches the array for the specified item, and returns its position. must be primitive values: booleans, numbers, and strings

// pop
// console.log(myArr.pop(), myArr); // removes the last element of an array, and returns that element.

// push
// console.log(myArr.push(9), myArr); // adds new items to the end of an array, and returns the new length.

// shift
// console.log(myArr.shift(), myArr); // removes the first item of an array.

// unshift
// console.log(myArr.unshift(0), myArr); // adds new items to the beginning of an array, and returns the new length.

// reverse
// console.log(myArr.reverse(), myArr); // reverses the order of the elements in an array.

// slice
// console.log(myArr.slice(1, 3)); // returns the selected elements in an array, as a new array object. Selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

// splice
// console.log(myArr.splice(2, 3), myArr); // adds/removes items to/from an array, and returns the removed item(s).

// sort
// const myArr = [1, 4, 2, 8, 3, 8, 5, 7];
// console.log(myArr.sort()); // method sorts the items of an array.
// console.log(myArr.sort().reverse()); // method sorts the items of an array in reverse.
// the sort() method sorts the values as strings in alphabetical and ascending order.
// This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

////////////////////////////////////////
// pass by reference vs pass by value //
////////////////////////////////////////

// Javascript is always pass by value, but when a variable refers to an object (including arrays), the "value" is a reference to the object. Changing the value of a variable never changes the underlying primitive or object, it just points the variable to a new primitive or object. However, changing a property of an object referenced by a variable does change the underlying object.

const myAr = [5, 3, 0, -3, -5];
console.log(myAr.sort().reverse());
=======

//////////////
//Math Object (Random Numbers)
//////////////

//console.log(Math.floor(Math.random()*10)); // generates random rounded number from 0-10

////////////////
//Other Math
////////////////

// let one = 1;
// let two = 2;
// let three = 3;

// console.log(Math.max(one, two, three)); // 3
// console.log(Math.min(one, two, three)); // 1

// let myArr = [1,2,3,4,5,6,7,8];

// console.log(Math.max(...myArr));
// console.log(Math.min(...myArr));


//////////////////
// Ternary Operator Review
///////////////////

// expression ? true : false

//'dog' ? console.log(true) : console.log(false); // prints true


////////////////
//Do..While..
///////////////

//Run it at least once, then check if it's true or false

// let x = 100;

// do {
//     console.log(x);
//     x--
// } while (x > 0); //Prints 100-1 descending

// let x = 100;

// do {
//     console.log(x);
//     x--
// } while (x > 100); //Just prints 100 because of the do part, but the while loop doesnt work cause 100 is not greater than 100

// let x = 100;

// do {
//     if (x % 2 !== 0) {
//         console.log(x)
//     }
//     x--;
// } while (x > 0); // prints only the odd numbers

///////////////
//Revisit Destructuring and The Rest Operator
////////////////

//Destructuring- Break down a collection of data into variables

// const myArr = [1,2];

// // const one = myArr[0];
// // const two = myArr[1];

// const [one, two, three = 0] = myArr // Take the first thing in myArr and store in the variable one, do the same for 2 and two, and since there is no 3, we defined three and gave it a default value of 0.

// console.log(one, two, three);

// const myArr = [1,2,3];

// const [one, ...theRest] = myArr;

// console.log(one, theRest); //prints 1 because its in its own variable, and theRest is still left as an array. The three dots look like the spread operator but its theRest operator here. The variable doesnt have be called theRest, it can be cheese or anything else.

// const myObj = {name: 'Sharon Kim', age: 24, height: 5.7};

// const {name, ...theRest} = myObj // break apart myObj and store it in name and theRest

// console.log(name, theRest); //Prints Sharon Kim because its been stored in the variable and now you are just calling that variable and printing its value. Then the rest in the object, but still within the curly brackets, is printed


///////////////////////
// revisit Split and Join
///////////////////////

// let myString = 'Hello World';

// console.log(myString.split('')); // empty string means it breaks it by each letter
// console.log(myString.split(' ')); // any time there is a space, it will break it up there

// let date = '7/8/20';
// console.log(date.split('/')); // splits it by the slash in the date 

// const myArray = ['Hello', 'World'];

// console.log(myArray.join()); // when you dont specify a divider, it just assumes to use a commma because it used to be an array
// console.log(myArray.join('')); //empty string means no space so the array turns into a string without spacing or dividing
// console.log(myArray.join(' ')); // the array turns into a string that is separated by spacing because the string with a space says to separate the things in the array with a space when printed as a string using the join function


///////////////
//eval
//////////////

//eval('console.log("hello")');
// eval passes a string as a javascript expression

// const num1 = 5;

// const num2 = 7;

// const operator = '+';

// let result;

// eval(`result = ${num1} ${operator} ${num2}`); // we declared result variable outside of this function first because of scoping issues
// console.log(result);

//////////////
//Sets
/////////////

//sets are used to remove duplicates
//sets are collections with only unique items

// const myArr = [1,1,1,1,2,2,2,2,2,3,3,3,3,3];

// // const mySet = new Set(myArr)
// // console.log(mySet); // prints Set(3) {1,2,3} created new object from a set from myArr

// // const newArr = [...mySet]; // spread the stuff inside to make it print into an array when you console log it
// // console.log(newArr);

// const noDupeArray = [...new Set(myArr)]; //sets a new array from your array and takes out the dupes, and then it spreads everything in your array out for the new array
// console.log(noDupeArray);

/////////////
//MultiDimensional Arrays
/////////////

//An array inside of an array

// const mArray = [1, 2, 3, 4, 5, [6, 7, [8, 9]], [10, 11]];
// console.log(mArray[5][2][1]); // log 9
// console.log(mArray[6][0]); // log 10
// console.log(mArray[5][2][0]); // log 8


//////////////
//Getting the last and middle element of an array
//////////////

// const myArr = [1,2,3,4,5,6,7,8,9];

// console.log(myArr[myArr.length-1]); // get last element because the index is the arrays length but -1 since arrays are zero based index

// console.log(myArr[Math.floor(myArr.length/2)]); // to get middle element- take the arrays length and divide by 2 and then math floor it so it rounds to 4 and myArr[4] = 5 so 5 is the middle number!


///////////
//Array Methods indexOf, push, pop, shift, unshift, reverse, slice, splice, sort
/////////////


// const myArr = [1,2,3,4,5,6,7,8];

///indexOf

// console.log(myArr.indexOf(5)); // return the index of value 5

//Push and Pop
//pop removes last item and returns it
//push adds an item to the end of the array and returns new length of array

// console.log(myArr.pop(), myArr); //side effect of pop is that it returns the last element and also takes it out of the array, mutating it. Doesnt hold argument.

// console.log(myArr.push(9), myArr); //push returns the length of the array after pushing something new to the end of the array. The array is mutated. Pass whatever value you want to add as the argument. 

//Shift and Unshift

// console.log(myArr.shift(), myArr); // removes first item and returns it. Array is mutated and no longer has its original first item.

// console.log(myArr.unshift(0), myArr); // add something to the front of the array and then return the new length of the array

// Reverse

// console.log(myArr.reverse(), myArr); // reverses the array

//Slice and Splice

//slice does not mutate the array; gives subset of array
//splice mutates the array

// console.log(myArr.slice(1,3), myArr); //creates a new array with the elements from the starting to but not including the ending index, does not mutate original array. so it should print elements with index 1 and 2, not 3. 
//slice(inclusive,exclusive)

//splice
//start cutting from here and cut this many things and then give them back to me

// console.log(myArr.splice(2,3), myArr); // begin cutting at the specific index and remove the number of elements specified in the next given number. return the removed elements in an array.

//Sort

// const myArr = [1,4,2,8,3,8,5,7];

// console.log(myArr.sort().reverse()); //reverse will reverse order the sorted array, so make sure the first one returns an array that the reverse() can work on


//////////////////
//Reference vs Value
/////////////////

//Primitives: Strings, Numers, Booleans are passed by value
//Just passes copy of the value

// let num1 = 5;
// let num2 = num1;
// num1 = 6;

// console.log(num1, num2); //prints 6 5

// //collections: Objects, Arrays, Sets are passed by reference

// let arr1 = [1];
// let arr2 = [...arr1]; // everything thats in that array, save it in the new array arr2
// arr1[0] = 5;
// console.log(arr1, arr2);
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
