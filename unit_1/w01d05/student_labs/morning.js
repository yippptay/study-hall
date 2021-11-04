<<<<<<< HEAD
// // The Problems
// printGreeting
const printGreeting = (name) => {
    return "Hello there, " + name + "!";
}
console.log(printGreeting("Slimer"));

// reverseWordOrder
const reverseWordOrder = (str) => {
    const res = str.split(" ");
    res.reverse();
    return res.join(" ");
}
console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

// calculate
const calculate = (num1, num2, operation) => {
    if (operation == "add") {
        return num1 + num2;
    } else if (operation == "sub") {
        return num1 - num2;
    } else if (operation == "mult") {
        return num1 * num2;
    } else if (operation == "div" ) {
        return num1 / num2;
    } else if (operation == "exp" ) {
        return Math.pow(num1, num2);
    }
    return console.log("Notation Error: (num1, num2, [add|sub|mult|div|exp])"); // default constructor
}
console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));
console.log(calculate());

// printConsecutives
const printConsecutives = (myArr) => {
    for (let i = 2; i < myArr.length; i++) {
        if ((myArr[i] - 1) === myArr[i - 1]) {
            if ((myArr[i - 1]) - 1 === myArr[i - 2]) {
                console.log(myArr[i - 2] + " " + myArr[i - 1] + " " + myArr[i]); 
            }
        }
    }
}
printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);

// letterReverse
const letterReverse = (str) => {
    const finalArray = [];
    const splitWords = str.split(" "); // split the words
    for (let i = 0; i < splitWords.length; i++) {
        const splitLetters = splitWords[i].split(""); // split the words into letters
        const reverseLetters = splitLetters.reverse(); // reverse the letters
        finalArray.push(reverseLetters.join("")); // put back into new array
    }
    return finalArray.join(" ");
}
console.log(letterReverse("Luke I am your father"));
console.log(letterReverse("Aren't you a little short for a storm trooper"));
=======
//console.log('hello');

//printGreeting
// const printGreeting = (name) => {
//     return `Hello there, ${name}!`
// };
// console.log(printGreeting("Slimer"));

//reverseWordOrder
//try to split the string into an array, reverse the array, then join back into string
// const reverseWordOrder = (emptyString) => {
//     const newArr = emptyString.split(' ');
//     const newArr2 = newArr.reverse();
//     const newString = newArr2.join(' ');
//     return newString;
// };
// console.log(reverseWordOrder("Ishmael me Call"));
// console.log(reverseWordOrder("I use Lâncome on my comb"));

//calculate
// can i use switch statement?
// const calculate = (num1, num2, operation) => {
//     if (operation === "add") {
//         return num1 + num2;
//     } else if (operation === "sub") {
//         return num1 - num2;
//     } else if (operation === "mult") {
//         return num1 * num2;
//     } else if (operation === "div") {
//         return num1 / num2;
//     } else if (operation === "exp") {
//         return Math.pow(num1, num2);
//     } else {
//         console.log('unavailable');
//     };
// };
// console.log(calculate(4, 3, "exp"));

//printConsecutives
// const printConsecutives = (arr) => {
//     //arr.sort();
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] + 1 === arr[i+1] && arr[i+1] 
//             +1 === arr[i+2]) {
//           console.log(arr[i], arr[i+1], arr[i+2]);
//         };
//     };
// };
// printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);


//letterReverse
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
