
![](/ga_cog.png)

# Even More Problem Solving with JavaScript 

Remember:

* One step at a time (test thoroughly each step)
* Researching a step is excellent (although time-consuming)

**Learning Objectives**
- JS Problem Solving

**Prerequisites**
- JS Fundamentals 

## Getting Started

1. In today's student_labs folder, create a javascript file called `afternoon.js` and do your work for the problems below in there 
1. Don't forget to test your code along the way by using `node afternoon.js` in terminal


---

## The Problems 

### Calculate the Cube
Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.

```javascript
console.log(calculateCube(5));
```

> Expected Output => 125


---

### Is a Vowel?
Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

```javascript
console.log(isAVowel("a"));
```

> Expected Output => true


---

### Get Two Lengths
Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

```javascript
console.log(getTwoLengths("Hank", "Hippopopalous"));
```

> Expected Output => [4, 13]


---

 
### Get Multiple Lengths

Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array of strings**. The function should return an array of **numbers** where each number is the length of the corresponding string.


```javascript
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
```

>  Expected Output => [5, 4, 2, 2, 4]


---

### Maximum of Three Numbers
Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

```javascript
console.log(maxOfThree(6, 9, 1));
```

> Expected Output => 9


---

### Print Longest Word

Write a function `printLongestWord` that accepts a single argument, an **array of strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

```javascript
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
```

> Expected Output => "Peanutbutter"


---

### Transmogrify the Numbers
Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
power of 2` is 225.

```javascript
console.log(transmogrify(5, 3, 2));
```

> Expected Output => 225


---

### Project Euler Problem 2
[Project Euler problem #2](https://projecteuler.net/problem=2)

* Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.

* Adjust the function to push the **even numbered** values into an array.

* Adjust the function to return the summed value of the array.

* Find the sum of the even numbered values that do not exceed four million.

---

### A Needle in the Haystack

[From Codewars](https://www.codewars.com/kata/56676e8fabd2d1ff3000000c)

[Join CodeWars](www.codewars.com/r/bEqEeQ)

Can you find the needle in the haystack?

Write a function `findNeedle()` that takes an array full of junk but contains one `"needle"`

After your function finds the needle it should return a message (as a string) that says:

`"found the needle at postition"` plus the index it found the needle so:

`findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])`

Should return:

`"found the needle at position 5"`


---
 
### Sum the Positive

[From Codewars](https://www.codewars.com/kata/5715eaedb436cf5606000381)

[Join CodeWars](www.codewars.com/r/bEqEeQ)

Given an array, return the sum of only the positive numbers

`Expected Output for[1, -4, 7, 12] => 1 + 7 + 12 = 20`

---

## Hungry for More?

[Join CodeWars](www.codewars.com/r/bEqEeQ) and find your own challenges to solve! Find a great one? Share it in slack!

