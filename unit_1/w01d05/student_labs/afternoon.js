// // The Problems
// Calculate the Cube
const calculateCube = (num) => {
    return Math.pow(num, 3);
}
console.log(calculateCube(5));

// Is a Vowel?
const isAVowel = (char) => {
    const vowelList = ["A", "E", "I", "O", "U", "Y"];
    for (let i = 0; i < vowelList.length; i++) {
        if (char.toUpperCase() == vowelList[i]) {
            return true;
        } else {return false;}
    }
}
console.log(isAVowel("a"));

// Get Two Lengths
const getTwoLengths = (str1, str2) => {
    let arr1 = [], arr2 = [], arr1ln = 0, arr2ln = 0;
    arr1 = str1.split("");
    arr2 = str2.split("");
    arr1ln = arr1.length;
    arr2ln = arr2.length;
    return "[" + arr1ln + "," + arr2ln + "]";
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// Get Multiple Lengths
const getMultipleLengths = (arr) => {
    const finalArray = [];
    const splitWords = arr;
    let strLength = 0;
    for (let i = 0; i < splitWords.length; i++) {
        const splitLetters = splitWords[i].split(""); // split the words into letters
        strLength = splitLetters.length;
        finalArray.push(strLength);
        strLength = 0;
    }
    return finalArray;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// Maximum of Three Numbers
const maxOfThree = (num1, num2, num3) => {
    let arr = [num1, num2, num3];
    arr.sort(function(a, b){return b - a});
    return arr[0];
}
console.log(maxOfThree(6, 9, 1));

// Print Longest Word
const printLongestWord = (arr) => {
    let splitWord = 0;
    let highestTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        splitWord = arr[i].split("");
        if (splitWord.length >= highestTotal) {
            highestTotal = splitWord.length;
        }
    }
    return highestTotal;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

// Transmorgrify the Numbers
const transmogrify = (num1, num2, num3) => {
    return Math.pow(num1 * num2, num3);
}
console.log(transmogrify(5, 3, 2));

// Project Euler Problem 2
const fibonacci = (num) => {
    let total = 0;
    let retArr = [];
    let temp = 0;
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    while (arr[1] < num) {
        if (arr[0] % 2 == 0) {
            retArr.push(arr[0])
        }
        temp = arr[1] + arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }
    for (let i = 0; i < retArr.length; i++) {
        total = total + retArr[i];
    }
    console.log(retArr);
    console.log(total);
}
fibonacci(4000000); // output: 1089154

// A Needle in the Haystack
const findNeedle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf("needle") !== -1) {
            console.log("found the needle at postition " + arr.indexOf("needle"));
            return;
        }
        else { console.log("no needle found")}
    }
}
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// Sum the Positive
const sumThePositive = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            total = total + arr[i];
        }
    }
    console.log(total);
}

// random array with negative and positive numbers
let ranArr = [];
for (let i = 0; i <= 10; i++) {
    let ranNum = Math.floor(Math.random()*100) - 50;
    ranArr[i] = ranNum;
}

// output random array and sumThePostive
console.log(ranArr);
sumThePositive(ranArr);