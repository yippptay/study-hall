<<<<<<< HEAD
// // Written Questions
// 1. What is the difference between a parameter and an argument?
    // A paramater is a value that a function takes as an input. An argument is a condition that needs to be fulfilled.
// 2. Within a fucntion, what is the is dfference between return and console.log?
    // A return function outputs and stops the function once it reaches a return. console.log can output without ending the call stack for a function.

// // Palindrome
const checkPalindrome = (arr) => {
    let tempArrUpper = arr.toUpperCase();
    let tempArrUpperSplit = tempArrUpper.split("");
    let tempArrUpperSplitReverse = tempArrUpper.split("").reverse();
    for (let i = 0; i < tempArrUpperSplit.length; i++) {
        if (tempArrUpperSplit[i] !== tempArrUpperSplitReverse[i]) {
            console.log("false");
            return;
        }
    }
    console.log("true");
}
checkPalindrome("Radar");
checkPalindrome("Borscht");

// // Sum Array
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// // Prime Numbers
const checkPrime = (num) => {
  if (num == 1) {
    return false;
  } else if (num == 2) {
    return true;
  } else {
    for(var x = 2; x < num; x++) {
      if(num % x == 0) {
        return false;
      }
    }
    return true;  
  }
}
console.log(checkPrime(25));
console.log(checkPrime(37));

// Print Prime Numbers
const printPrimes = (num) => {
    for (let i = 0; i <= num; i++) {
        if(checkPrime(i)) {
            console.log(i);
        }
    }
}
printPrimes(97);

// Rock Paper Scissors
const randomMove = () => {
    let moveList = ["Rock", "Paper", "Scissors"];
    return moveList[Math.floor(Math.random() * 3)];
}
let computersMove = randomMove();
let usersMove = randomMove();

const rockPaperScissors = (compMove, userMove) => {
    if (compMove == userMove) {
    return console.log("It's a tie! " + "COM: " + compMove + ", " + "USER: " + userMove + ".")
    } else if (compMove == "Rock" && usersMove == "Paper") {
    return console.log("User wins! " + "COM: " + compMove + ", " + "USER: " + userMove + ".")
    } else if (compMove == "Rock" && usersMove == "Scissors") {
    return console.log("Computer wins! " + "COM: " + compMove + ", " + "USER: " + userMove + ".")
    } else if (compMove == "Paper" && usersMove == "Rock") {
    return console.log("Computer wins! " + "COM: " + compMove + ", " + "USER: " + userMove + ".")
    } else if (compMove == "Paper" && usersMove == "Scissors") {
    return console.log("User wins! " + "COM: " + compMove + ", " + "USER: " + userMove + ".")
    } else if (compMove == "Scissors" && usersMove == "Rock") {
    return console.log("User wins! " + "COM: " + compMove + ", " + "USER: " + userMove + ".")
    } else if (compMove == "Scissors" && usersMove == "Paper") {
    return console.log("Computer wins! " + "COM: " + compMove + ", " + "USER: " + userMove + ".")
    }
}
=======
// test console.log('hello');

/////////////////
//WRITTEN QUESTIONS
////////////////

// 1. Parameters are the inputs we can put in functions when we define them (they're basically placeholders). Arguments are the values/inputs we type in when invoking the functions. Both go in the parentheses after the function identifier/name.
// 2. Return is used to get a value from the function. Also, when there is a return within the function, it stops executing, even if there are more lines of code following it. Console.log prints/logs to the console whatever is in the parentheses that follow it. Console is the object and .log() is the method/action.

////////////////
//Palindrome
///////////////

const checkPalindrome = (anyString) => {
    const newArr = anyString.split('');
    newArr[0] = newArr[0].toLowerCase();
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === newArr[(newArr.length-i)-1]) {
            return true;
        } else {
            return false;
        };
    };
};
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

// const checkPalindrome = (anyString) => {
//   const newArr = anyString.split('');
//   newArr[0] = newArr[0].toLowerCase();
//   const newArr2= newArr.reverse();
//   if (newArr === newArr2) {
//     console.log(true);
//     } else {
//         console.log(false);
//       };
//     };
// console.log(checkPalindrome("Radar")); //returns true
// console.log(checkPalindrome("Borscht")); //returns undefined???

//////////////
//Sum Array
//////////////

const sumArray = (numArr) => {
    let sum = 0;
    for (let i = 0; i <numArr.length; i++) {
        sum += numArr[i];
    };
    return sum;
};
console.log(sumArray([1, 2, 3, 4, 5, 6]));

////////////////////
//Prime Numbers
////////////////////

const checkPrime = (num) => {
    let sqrtNum = Math.floor(Math.sqrt(num));
    for (let x = 2; x <= sqrtNum; x++) {
      if (num % x === 0) {
        return false;
    } else {
      return true
    };
  };
};
console.log(checkPrime(728)); //rounded down sqrt is 26 and 728/26 has no remainder
console.log(checkPrime(7)); // rounded down sqrt is 2 and 7%2 is 1
  
const printPrimes = (primenum) => {
    for (let y = 2; y <= primenum; y++) {
      if (checkPrime(primenum) === true) {
        console.log(y)
      }
    }
  };
printPrimes(97); // When I place y into checkPrime(), it prints odd numbers from 5-97 and when I play primenum into checkPrime(), it prints everything from 2-97. 


//////////////////
//Rock Paper Scissors
//////////////////

const possibleMoves = ['rock', 'paper', 'scissors'];

const randomMove = () => {
  return possibleMoves[Math.floor(Math.random()* possibleMoves.length)];
};
//randomMove();

const rockPaperScissors = (player1, usersMove) => {
  if (computersMove === usersMove) {
    console.log(`computer chose ${computersMove}`);
    console.log(`user chose ${usersMove}`);
    console.log(`${computersMove} is the same as ${usersMove}, it's a draw!`);
  } else if (computersMove === possibleMoves[0]) {
      if(usersMove === possibleMoves[1]) {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
        console.log(`paper beats rock, user wins!`);
      } else {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
        console.log(`rock beats scissor, computer wins!`)
      };
  } else if (computersMove === possibleMoves[1]) {
      if(usersMove === possibleMoves[0]) {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
        console.log(`paper beats rock, computer wins!`);
      } else {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
        console.log(`scissor beats paper, user wins!`)
      };
  } else if (computersMove === possibleMoves[2]) {
      if(usersMove === possibleMoves[0]) {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
      console.log(`rock beats scissor, user wins!`);
      } else {
        console.log(`computer chose ${computersMove}`);
        console.log(`user chose ${usersMove}`);
        console.log(`scissor beats paper, computer wins!`)
      };
  };
};

let computersMove = randomMove();
let usersMove = randomMove();
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
rockPaperScissors(computersMove, usersMove);