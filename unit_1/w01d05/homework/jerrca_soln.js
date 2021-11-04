// ==================
// PALINDROME
// ==================
const checkPalindrome = (str) => {
    // reverse the string 
        // .split(') splits the word into an array of its characters 
        // .reverse() reverses the array of the characters 
        // .join('') joins the reversed array, turning it back into a string 
    const reverseString = str.split('').reverse().join('')
    // check if equal to the given string and return the result 
    return reverseString.toLowerCase() === str.toLowerCase()
}

console.log(checkPalindrome('racecar')) // true 
console.log(checkPalindrome('hello')) // false 

// ==================
// SUM ARRAY
// ==================
const sumArray = (arr) => {
    //  define initial sum to add onto
    let sum = 0;
    // loop through the array 
    for (let num of arr) {
        console.log(num)
        // add each num to the sum 
        sum += num
    }
    // return the sum 
    return sum
}

console.log(sumArray([1, 2, 3, 4, 5, 6]))

// ==================
// PRIME NUMBERS
// ==================
// CHECK PRIME
const checkPrime = (num) => {
    // loop from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // check if the number is evenly divisible by the current iteration, and if it is, return false 
        if(num % i === 0) {
            return false
        }
    }
    // if the function gets to the end, that must mean the number is prime
    return true
}

console.log(checkPrime(5))
console.log(checkPrime(12))

// PRINT PRIMES (console log version)
const printPrimes = (limit) => {
    // loop from 2 to the limit
    for (let i = 2; i <= limit; i++) {
        // if the current iteration is prime, console log it, otherwise do nothing
        checkPrime(i) ? console.log(i) : null
    }
}

printPrimes(10)
printPrimes(97)

// PRINT PRIMES (array version)
const printPrimesArray = (limit) => {
    // array to hold prime numbers in 
    const primesArr = []
    // loop from 2 to the limit
    for (let i = 2; i <= limit; i++) {
        // if the current iteration is prime, push it into the array, otherwise do nothing
        // ternary operator! 
        checkPrime(i) ? primesArr.push(i) : null
    }
    // return the array 
    return primesArr
}

console.log(printPrimesArray(10))
console.log(printPrimesArray(97))

// ==================
// ROCK PAPER SCISSORS
// ==================
// random move generator 
const randomMove = () => {
    // define the possible moves 
    const possibleMoves = ['rock', 'paper', 'scissors']
    // generate a random index number 
    const random = Math.floor(Math.random() * possibleMoves.length)
    // return the random move 
    return possibleMoves[random]
}

// run one round of the game 
const rockPaperScissors = (computerMove, userMove) => {
    // log what each player used 
    console.log(`computer used ${computerMove}`)
    console.log(`user used ${userMove}`)
    // check who won by comparing the computers move to the user's move
    if (computerMove === userMove) {
        console.log('you played the same move, tie!');
        // check all possible outcomes if comp move is rock
    } else if (computerMove === 'rock') {
        if (userMove === 'paper') {
            console.log('paper beats rock, user wins!')
        }
        else {
            console.log('rock beats scissors, computer wins');
        }
    // check all possible outcomes if comp move is paper
    } else if (computerMove === 'paper') {
        if (userMove === 'rock') {
            console.log('paper beats rock, computer wins!')
        }
        else {
            console.log('rock beats scissors, user wins');
        }
    } else {
    // check all possible outcomes if the user chooses rock
        if (userMove === 'rock') {
            console.log('rock beats scissors, user wins!');
        } else {
            console.log('scissors beats paper, computer wins!');
        }
    }
}

let computerMove = randomMove()
let userMove = randomMove()
rockPaperScissors(computerMove, userMove)
