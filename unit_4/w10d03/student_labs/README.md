[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Python vs. Javascript - The Differences

Let's take a look at the differences between Python and Javascript

#### Learning Objectives

- Converting Javascript functions into Python

#### Prerequisites

- Python
- Javascript

---

## Getting Started

1. In today's student_labs, create a `differences.py` file and convert all the Javascript functions below into Python in that file.
1. Don't forget to check your work as you go by running the file in terminal using `python3 differences.py`

## The Functions 

### Get Name 

Write a method that accepts a name from the user and then returns it. Here's the javascript: 

```
const getName = () => {
  let name = prompt("what is your name?");
  return name;
};
```

### Reverse It 

Write a method that reverses a string. Here's the javascript:

```

const reverseIt = () => {
  let string = "a man, a plan, a canal, frenemies!";

  let reverse = "";

  for (let i=0; i < string.length; i++) {
    reverse += string[string.length - (i+1)];
  };

  console.log(reverse);
};
```

### Swap Em 

Write a method that swaps the values of two variables around. Here's the javascript:

```
const swapEm = () => {
  let a = 10;
  let b = 30;
  let temp;

  temp = b;
  b = a;
  a = temp;

  console.log("a is now " + a + ", and b is now " + b);
};
```

### Multiply Array 

Write a method that multiplies all numbers in a given array and returns the final product. Here's the javascript:

```
const multiplyArray = (ary) => {
  if (ary.length == 0) { return 1; };

  let total = 1;
  // let total = ary[0];

  for (let i=0; i < ary.length; i++) {
    total = total * ary[i];
  };

  return total;
};
```

### Fizz Buzzer 

Write a method that takes a number argument and returns "fizz" if the number is divisible by three, "buzz" if the number is divisible by five, and "fizzbuzz" if it's divisible by both. Here's the javascript:

```
const fizzbuzzer = (x) => {
  if( x%(3*5) == 0 ) {
    return 'fizzbuzz'
  } else if( x%3 == 0 ) {
    return 'fizz'
  } else if ( x%5 == 0 ) {
    return 'buzz'
  } else {
    return 'archer'
  }
}
```

### Nth Fibonacci 

Write a method that finds the fibonacci number at the nth position and returns it. Here is the javascript:

```
const nthFibonacciNumber = () => {
  let fibs = [1, 1];
  let num = prompt("which fibonacci number do you want?");

  while (fibs.length < parseInt(num)) {
    let length = fibs.length;
    let nextFib = fibs[length - 2] + fibs[length - 1];
    fibs.push(nextFib);
  }

  console.log(fibs[fibs.length - 1] + " is the fibonacci number at position " + num);
};
```

### Search Array 

Write a method that searches through an array for a value and returns true or false depending on whether or not the value is present in the array. Here is the javascript:

```
const searchArray = (array, value) => {
  for(let i = 0; i < array.length-1; i++) {
    if(array[i] == value) {
      return true;
      break;
    }
  }
  return -1;
};

```

### Palindrome 

Write a method that checks whether or not a string is a palindrome. Here is the javascript:

```
const isPalindrome = (str) => {
  for(let i = 0; i < str.length/2; i++){
    if(str[i] != str[str.length-i-1]){
      return false;
      break;
    }
  }
  return true;
};
```

### hasDupes

Write a method that checks whether or not an array has any duplicates. Here is the javascript:

```
const hasDupes = (arr) => {
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    if(obj[arr[i]]) {
      return true;
    }
    else {
      obj[arr[i]] = true;
    }
  }
  return false;
};
```
