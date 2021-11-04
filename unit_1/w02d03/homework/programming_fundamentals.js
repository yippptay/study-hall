<<<<<<< HEAD
// DRY
//      "Don't Repeat Yourself", keep from re-iterating code that is similar to previous code.
// KISS
//      "Keep It Simple Stupid", don't complicate situtations that could easly be put.
// Avoid creating a YAGNI
//      "You Aren't Going to Need It", only create something when needed.
// Do the simplest thing that could possibly work
//      The fastest and simplist way is the best way.
// Don't make me think
//      Your code should be concise and easy to read with minimal effort.
// Write code for the maintainer
//      Always code in fear that the next person that overlooks your code is a 5 year old.
// Single responsibility principle
//      One block of code should only have one or a simple functionality.
// Avoid premature optimization (gives me trouble)
//      Optimize last, for it will only deter your process when you inevitably look back at your code.
// Separation of concerns
//      Functionality shouldn't overlap and should be distinct.

const f = l => { // create function that takes in "l"
    let es = 0, p = 0, c = 1, n = 0 // create variables
    while (c <= l) { 
      n = c + p; // adds c and p to n
      [c, p] = [n, c] // ?
      es += (c % 2 === 0) ? c : 0 // adds only even numbers to es
    }
    return es // outputs es
}
console.log(f(55)) // prints out function f with l = 55

const f2 = (limit) => { // creates function with variable limit
    let evenSum = 0; // declare
    let previous = 0; // declare
    let current = 1; // declare
    while (current <= limit) { // set limit for while loops
      let next = current + previous; // total
      previous = current; // change position
      current = next; // switch position
      if (current % 2 === 0) { // adds only even numbers to evenSum
        evenSum += current;
      }
    }
    return evenSum; // outputs evenSum
}
console.log(f2(55)) // prints out function with variable 55

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
//      const evenNums

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
//      f2

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//      The semi-color is necessary because it may link to the next line of code due to the use of [];
=======
////////////////////
// Common programming principles
////////////////////

// Write a ~1 sentence summary for each one
// Dry - DONT REPEAT YOURSELF; When programming, avoid repetition for maintainability and performance.
// KISS - KEEP IT SIMPLE STUPID; Always try to aim for writing simpler code in order to have fewer bugs and to cut down coding time.
// Avoid creating a YAGNI - YOU ARENT GOING TO NEED IT; Don't start implementing things until you actually need them
// Do the simplest thing that could possibly work - Keep things simple so you don't stress yourself out and there's less room for error
// Don't make me think - If the code seems confusing or requires more thinking to understand, it can probably be more simplified.
// Write code for the maintainer - Make sure your code is not just readable to you. The person/people maintaining your code in the future should know what's going on and not get stressed from it.
// Single responsibility principle - Your code should be broken into modules. A function should do one thing, not many things, because if you were to go back and correct some damage, it'll be easier to fix a smaller problem over a big one. 
// Avoid premature optimization - Unless your code is even able to run, don't jump many steps ahead. Once your code works, then start worrying about efficiency and optimization. 
// Separation of concerns - Organize your code into a modular program, and section off codes that are meant for specific functionality. 
// Which ones surprise you?
// Though I wasn't aware of all these principles, they all make sense. I think the "single responsibility principle" surprises me a little bit. Even before Alex touched on this during class, I thought it was good to have one function doing a whole bunch of things. I see how it can cause problems now though.
// Which one is currently giving you the most struggle?
// Going off from the landscaping homework, I realized I struggle with "avoid premature optimization" because I kept worrying about the end-goal when I didn't even have code that ran yet. Then, I just kept running in confusion. I think that also helped me realize I need more practice pseudocoding. 

//////////////////////////
//Commenting Code
////////////////////////

const f = l => { // declaring a function, f, with parameter of l
    let es = 0, p = 0, c = 1, n = 0 // declaring variables using let because this allows for reassignment on es, p, c, and n. c is the only one with assigned value of 1.
    while (c <= l) { // a while loop in the function definition that says while c is less than or equal to l, run the next code
      n = c + p; // Evaluate the expression c + p first, which is 1, and then reassign the value of n to this
      [c, p] = [n, c] // reassign the variable p to the value of n and reassign the value of c to the value of next. So p = c, and c = n
      es += (c % 2 === 0) ? c : 0 // ternary operator that says if the value of c is an even number, increase the value of es by c. If the value of c is not an number (false), then return the value of es. 
    }
    return es // return the value of evenSum and this is where the function ends.
  }
  
  console.log(f(55)) // print/log to the console the value of when I run function, f,  with an argument of 55. 

// const f2 = (limit) => {
//     let evenSum = 0;
//     let previous = 0;
//     let current = 1;
//     while (current <= limit) {
//       let next = current + previous;
//       previous = current;
//       current = next;
//       if (current % 2 === 0) {
//         evenSum += current;
//       }
//     }
//     return evenSum;
//   }
  
  
//   console.log(f2(55))

// 1. In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// the function is finding the sum of the even numbers in the Fibonacci sequence/ Project Euler Problem, so the function can be called findEvenSumOfFibonacci. Current can be changed to currentSum so we know the sum is accumulating and we're not focusing on some current number in the sequence.
// 2. If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// f2, because I had no idea what the letters in f meant without f2.
// 3. Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// No, because Javascript reads line by line anyway and the variables are being changed as you go down the code.

>>>>>>> cd111adb1579480cb09838f476953d49de41b385
