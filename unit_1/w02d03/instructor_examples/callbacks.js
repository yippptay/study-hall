/////////////
// Callbacks
///////////
// A function passed as an argument to another function

// const myFunc = () => {
//     console.log('Hello World');
// };

// setTimeout(myFunc, 5000);

// setTimeout(() => {
//     console.log('Hello World')
// }, 5000)

// Synchronus - One Step at time

// Asynchronus - Multiple things, out of order

// setInterval(() => {
//     console.log('hello world')
// }, 1000)

// const parent = (callback) => {
//     callback();
// };

// const child = () => {
//     console.log('hello world');
// };

// parent(child);

////////////////////
//Higher Order Function
////////////////////
//A fucntion that is a Wrapper around other functions

// const fancyText = () => {
//     console.log('===============');
//     console.log('Hello World');
//     console.log('===============');
// };

// fancyText();

// const fancyWrapper = (callback) => {
//     console.log('===============');
//     callback();
//     console.log('===============');
// };

// fancyWrapper(() => {
//     console.log('Hello World');
// });

// fancyWrapper(() => {
//     console.log({ name: 'Alex Merced', age: 34 });
// });

////////////////////
//Higher Order Array Functions
////////////////////

// const customForEach = (arr, callback) => {
//     for (x = 0; x < arr.length; x++) {
//         callback(arr[x], x);
//     }
// };

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const logValue = (value, index) => {
//     console.log(value);
// };

// customForEach(myArr, function (value, index) {
//     console.log(value);
// });

// const loopObject = (obj, callback) => {
//     for (key in obj) {
//         callback(obj[key]);
//     }
// };

// const myObj = { name: 'Alex Merced', age: 34 };

// loopObject(myObj, (key) => {
//     console.log(key, myObj[key]);
// });

////////////////
// array.forEach
////////////////
// forEach does not return a value

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// myArr.forEach((value, index) => {
//     console.log(`at index ${index} there is the value ${value}`);
// });

// const logArray = (value, index) => {
//     console.log(`at index ${index} there is the value ${value}`);
// }

// myArr.forEach(logArray);

//////////////////
// array.map
//////////////////
//Return an array made of the return of the callback

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const addOne = (value, index) => {
//     return value + 1;
// };

// const newArray = myArr.map(addOne);

// console.log(newArray);

// const nameArray = [
//     { first: 'Alex', last: 'Merced' },
//     { first: 'Claudio', last: 'Sanchez' },
// ];

// const newArray = nameArray.map((value, index) => {
//     return { name: value.first + ' ' + value.last };
// });

// console.log(newArray);

////////////
//array.filter
////////////
//Filter returns an array for each item in which the callback returns true

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filteredArray = []

// for (x = 0; x < myArr.length; x++){
//     if (myArr[x] > 4){
//         filteredArray.push(myArr[x])
//     }
// }

// const filterCallback = (value, index) => {
// //     return value > 4;
// // };

// const filterCallback = (value, index) => {
//     return value % 2 === 0;
// };

// const newArray = myArr.filter(filterCallback);

// console.log(newArray);

///////////////////
// array.every
///////////////////
//returns true if every element of the array passed the callbacks test

// const myArr = [2, 4, 6, 8, 9];

// const everyCallback = (value, index) => {
//     return value % 2 === 0;
// };

// console.log(
//     myArr.every((value, index) => {
//         return value % 2 === 0;
//     })
// );

///////////////
//array.some
///////////////
// returns true if at least one element passes the callback test

// const myArr = [2, 4, 6, 8];

// const someCallback = (value, index) => {
//     return value % 2 !== 0;
// };

// console.log(myArr.some(someCallback));

//////////////////
// array.find and array.findIndex
//////////////////
//find -> Returns the value of the first element that passes the callback test
//findIndex -> return the index of the first element that passes the callback test
// myArr = [2, 3, 4, 5, 6];

// const findOdd = (value, index) => {
//     return value % 2 !== 0;
// };

// console.log(myArr.find(findOdd));

// console.log(myArr.findIndex(findOdd));

/////////////////
// Chaining Array Functions
/////////////////
// You can chain a function of the value type that the prior function returns

// const myArr = [1, 2, 3, 4];

// console.log(
//     myArr
//         .map((value, index) => {
//             return value + 1;
//         })
//         .filter((value, index) => {
//             return value % 2 === 0;
//         })
//         .find((value, index) => {
//             return value % 2 === 0;
//         })
// );

////////////////
//reduce
////////////////
//it allows you loop over the array do a cumulative operation

// const reduceCallback = (accumulator, value, index) => {
//     return accumulator + value;
// };

// console.log(myArr.reduce(reduceCallback, 0));

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reduceCallback = (accumulator, value, index) => {
    if (value % 2 === 0) {
        return accumulator + 1;
    } else {
        return accumulator;
    }
};

console.log(myArr.reduce(reduceCallback, 0));

console.log(myArr.filter((value) => value % 2 === 0).length);
