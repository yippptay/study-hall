// console.log("you are awesome");

// 2 ways of creating functions

// function declaration
// function one () {
//     return 'one'
// }
// one()

// // function expression
// const two = () => {
//     return 2
// }
// const shotenedTwo = () => 2

// const printBoo = () => {
// 	console.log('======');
// 	console.log('Boo!');
// 	console.log('======');
// };
// printBoo();

// const printSum = (num) => console.log(num + num);
// printSum(8); // 16

// const printTriangle = (sign) => {
//     console.log(sign);
//     console.log(sign, sign);
//     console.log(sign, sign, sign);
//     console.log(sign, sign, sign, sign);
//     console.log(sign, sign, sign, sign, sign);
// };
// printTriangle('#');

// const printTriangle = (amt) => {
//     for (let x = 1; x <= amt; x++) {
//         let tag = '#'
//         console.log(tag.repeat(x))
//     };
// };
// printTriangle(5);


//CONDITIONALS

// if (true) {
//     const num = 100;
// }
// console.log(num);


// const age = 21;
// let message = '';

// if (age < 21) {
// 	message = 'You cannot buy the beer';
// } else {
// 	message = 'You can buy the beer';
// }

// console.log(message); //you can buy the beer because age and message are defined in the outer scope. 


// const words = 'that\'s a...';
// {
// 	const item = 'spicy meatball';
// 	const start = 'mama mia!'
// 	{
// 		console.log(start);
// 		console.log(words);
// 		console.log(item);
// 	}
// } // prints mama mia thats a spicy meatball because the console logs are within the smallest scope and can access the other scopes it is also a part of
// console.log(item) // wont work because youre calling the variable outside of its scope


// const areAllOdd = (arr) => {
//     // This known as our base case this keeps us from having an infinite loop
//     // we are checking here to see if the array no longer has any values in it
//       if (arr.length === 0){
//         console.log('no numbers in this array')
//         return
//       }
//       // here we check if the num is odd
//       if (arr[0] % 2 === 0){
//         console.log(`is the first number in this array odd ${arr}`)
//         // We run shift because we want to eliminate the value that we know is no longer checking for
//         const num = arr.shift()
//         console.log(`${num} is not odd`)
//         areAllOdd(arr)
//       } else {
//             console.log(`is the first number in this array odd ${arr}`)
//         console.log(`${arr[0]} is odd`)
//         return
//       }
//     }
  
//     const martinsArray = [3142, 5798, 6550, 5914]
  
//     areAllOdd(martinsArray)

// Step 1: Write our outer function 
// Step 2: Create a variable that we want to persist in our Closure
// Step 3: Define a function that uses the value we want to persist
// Step 4: Return the definition of our function, we didnt call/invoke it

// const outerFunction = () => {
//     let novaIsAwesome = 0;
//     const innerFunc = () => {
//         novaIsAwesome++
//         console.log(novaIsAwesome)
//         return novaIsAwesome > 5
//     }
//     return innerFunc
// }

// const bryceIsAwesome = outerFunction()
// const christianIsAwesome = outerFunction()
// const abrahamIsAwesome = outerFunction()

// bryceIsAwesome()
// christianIsAwesome()
// bryceIsAwesome()
// bryceIsAwesome()
// christianIsAwesome()
// bryceIsAwesome()
// bryceIsAwesome()
// christianIsAwesome()
// abrahamIsAwesome()
// abrahamIsAwesome()
// christianIsAwesome()

// console.log('Bryce State:')
// console.log(bryceIsAwesome())
// console.log('Abraham State:')
// console.log(abrahamIsAwesome())
// console.log('Christian State:')
// console.log(christianIsAwesome())


// 10! = 10 x 9 x 8 x 7... x1


// Step 1: Write our function and define a base case
// step 2: Write our Recursive logic
// Step 3: Test your function
const factorial = (n) => {
    if (n === 0) {
        return 1 // this exits the function so it doesnt keep repeating itself and itll be running infinitely SO MAKE SURE YOU USE THE RETURN IN YOUR BASE CASE because once the comp sees return, it will stop the function, even if there are 800 more lines of code left within the function
    } else {
        return n * factorial(n-1)
    }
}

console.log(factorial(10));
console.log(factorial(9));
console.log(factorial(50));
console.log(factorial(5));