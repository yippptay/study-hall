<<<<<<< HEAD
// // Section 3 Array Methods with Callbacks
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
for (let i = 0; i < nums.length; i++) {
    let arr = [];
    if (nums[i] >= 0) {
        arr.push(nums[i]);
    }
    console.log(arr);
}
for (let i = 0; i < panagram.length; i++) {
    let arr = [];
    let strArr = [];
    strArr = panagram[i].split("");
    if (strArr.length <= 8) {
        arr.push(strArr.join(""));
    }
    console.log(arr);
}

// Filter
for (let i = 0; i < nums.length; i++) {
    let arr = [];
    if (nums[i] < 4) {
        arr.push(nums[i]);
    }
    console.log(arr);
}
for (let i = 0; i < panagram.length; i++) {
    let arr = [];
    let strArr = [];
    strArr = panagram[i].split("");
    if (strArr.length % 2 == 0) {
        arr.push(strArr.join(""));
    }
    console.log(arr);
}

// Find
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 5 == 0) {
        console.log(nums[i]);
        break;
    }
}
for (let i = 0; i < panagram.length; i++) {
    let arr = [];
    let strArr = [];
    strArr = panagram[i].split("");
    if (strArr.length > 5) {
        arr.push(strArr.join(""));
        console.log(arr);
        break;
    }
}

// Find index
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 == 0) {
        console.log(i);
        break;
    }
}
for (let i = 0; i < panagram.length; i++) {
    let arr = [];
    let strArr = [];
    strArr = panagram[i].split("");
    if (strArr.length > 2) {
        arr.push(strArr.join(""));
        console.log(i);
        break;
    }
}

// For Each
console.log(nums.map(function(x) {return x * 3}));
console.log(panagram.map(function(x) {return x + "!"}));

// Map
let newArr = nums.map(function(x) {return x * 100});
console.log(newArr);
let newStrArr = panagram.map(function(x) {return x.toUpperCase()});
console.log(newStrArr);

// Some
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 7 == 0) {
        console.log(nums[i]);
    }
}
for (let i = 0; i < panagram.length; i++) {
    let arr = [];
    let strArr = [];
    strArr = panagram[i].split("");
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == "a") {
            console.log(strArr.join(""));
        }
    }
}
=======
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//////////
// Every
//////////

// 1.Determine if every number is greater than or equal to 0
const everyMethod = (value, index) => {
    return value >= 0
};
console.log(nums.every(everyMethod));
// 2. Determine if every word shorter than 8 characters
const everyMethod2 = (value, index) => {
    return value.length < 8
}
console.log(panagram.every(everyMethod2));

////////////
// Filter
////////////

// 1. Filter the array for numbers less than 4
const filterTest = (value, index) => {
    return value < 4
};
const newArr = nums.filter(filterTest);
console.log(newArr); // prints new array of only the numbers less than 4

// 2. filter words that have an even length
const filterTest2 = (value, index) => {
    return value.length % 2 === 0
}
const newArr2 = panagram.filter(filterTest2);
console.log(newArr2);

////////////
// Find
///////////

// 1. Find the first value divisible by 5
const findDivide5 = (value, index) => {
    return value % 5 === 0
};
console.log(nums.find(findDivide5));

// 2. Find the first word that is longer than 5 characters 
const findLongerThan5 = (value, index) => {
    return value.length > 5
};
console.log(panagram.find(findLongerThan5)); // returns undefined because none of the elements are longer than 5 characters

//////////////
// Find Index
/////////////

// 1. find the index of the first number that is divisible by 3
const findDivide3 = (value, index) => {
    return value % 3 === 0
};
console.log(nums.findIndex(findDivide3));

// 2. find the index of the first word that is less than 2 characters long
const findShorterThan2 = (value, index) => {
    return value.length < 2
};
console.log(panagram.findIndex(findShorterThan2)); // prints -1 because that kind of element does not exist in the array

///////////
// For Each
///////////

// 1. console.log each value of the nums array multiplied by 3
nums.forEach((value, index) => {
    console.log(value * 3);
});

// 2. console.log each word with an exclamation point at the end of it
panagram.forEach((value,index) => {
    console.log(`${value}!`)
});

///////////
// Map
//////////

// 1. make a new array of each number multiplied by 100
const multiplyHundred = (value, index) => {
    return value * 100
};
console.log(nums.map(multiplyHundred));

// 2. make a new array of all the words in all uppercase
const upperCase = (value, index) => {
    return value.toUpperCase();
}
console.log(panagram.map(upperCase));

//////////
// Some
/////////

// 1. Find out if some numbers are divisible by 7
const divisibleBy7 = (value, index) => {
    return value % 7 === 0
};
console.log(nums.some(divisibleBy7)); // prints true because at least one needs to be divisible by 7, and that value is 7

// 2. Find out if some words have the letter a in them
const haveVowelA = (value, index) => {
    return value.includes('a')
};
console.log(panagram.some(haveVowelA)); // prints true because lazy has an A
// found the .includes() method on w3schools

////////////
//Reduce
////////////

// 1. Add all the numbers in the array together
const addAllNumbers = (accumulator, value, index) => {
    return accumulator + value
}
console.log(nums.reduce(addAllNumbers, 0));

// 2. concatenate all the words
const joinAllWords = (accumulator, value, index) => {
    return `${accumulator}${value}`
}
console.log(panagram.reduce(joinAllWords, panagram[0])) // I'm not sure why "the" prints twice in the beginning?
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
