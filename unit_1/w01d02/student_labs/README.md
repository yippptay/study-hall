[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Just The Beginning

Let's get some practice with everything you've learned today! Using terminal and reading errors, and using loops and getting used to basic JavaScript syntax are all key to web development and you'll be using them throughout the entire course -- so let's get comfortable with them by doing some reps!

#### Learning Objectives

- Terminal
- Errors
- Variables with let and const
- DRY
- Boolean expressions
- While loops
- For loops

#### Prerequisites

- Terminal
- JavaScript

---

## Getting Started - Terminal

1. Open Terminal

1. Navigate to your Desktop `~/Desktop`

1. Make a directory inside your Desktop called `w01d02_lab`

1. Go into the `w01d02_lab` directory

1. Inside `w01d02_lab`, make a file called `first_lab.js`

1. Open the `w01d02_lab` directory in your text editor

1. Write the answers to the rest of this lab in the `first_lab.js` file.

1. Make sure you are in the same directory as the file, otherwise it won't run.

1. Press the up arrow to retrieve the node `first_lab.js` nm,jbn command. That way, you don't have to type it each time to run the file

##  Reading and Fixing Errors

**Fix the code by following the errors in Terminal**

Cut and paste the following code into your text editor (the "Cheers" song lyrics). The code is broken -- there are **three errors**. You might already see the errors, but --

Run the code and read the error message in the terminal. Using information from the error message (line numbers, etc.), debug the code and make it work.

At the same time, write a comment below the code that specifies what _type_ of error it was. Example, if you get this:

![](https://i.imgur.com/KRHtmPM.png)

Write

```
// SyntaxError: missing ) after argument list
```

Cut and paste:

```javascript
console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
console.lo("and they're always glad you came.");
console.log("You wanna be where you can see,";
console.log("our troubles are all the same");
console.log("You wanna be where" "everybody knows");
console.log("Your name.");
```

Make it so you do not get any more errors!

## Boolean Expressions
*... and arithmetic*

By just looking at the following expressions, determine in your mind whether or not each will evaluate to **true** or **false**

1. `999 > 999`
2. `999 == 999`
3. `999 != 999`
4. `-5 >= -4`
5. `100 <= -100`
6. `20 + 5 < 5`
7. `81 / 9 == 9`
8. `9 != 8 + 1`

## Assignment Operator vs. Equality Operator

Write: What is the difference between:

the **assignment operator** `=`

and the **equality operator** `==`

## While Loops: Reps and Reps

### 1

Write a *while* loop that will log in the console

```
'Ginger chocolate honey patties'
```

1000 times. You can test it out with a smaller number first, such as 10, and when that works, use 1000.

Make sure you do not run an infinite loop! If you do, close your Terminal. Oops!


### 2

Write another *while* loop that counts from 0 to 1000 and will log in the console the current loop number.

> => 0
>
> => 1
>
> => 2
>
> => 3

etc.

### 3

Write another *while* loop that prints a message to the console _and_ concatenates the current loop number. Make it count from 0 to 1000.

> => "Current loop number is: 0"
>
> => "Current loop number is: 1"
>
> => "Current loop number is: 2"
>
> => "Current loop number is: 3"


**NOTE:** You should not need to see the 'correct answers' in this markdown for these loops. Either they work, or they don't. **Test** them thoroughly to make sure they are giving you the desired output.

## For Loops

### 1
* Write a **for loop** that counts from 0 to 100 and console.logs each number.

### 2
* Write another **for loop** that counts from 7 to 635 (no more, no less!), and console.logs each number.

### 3
* Declare a variable `let start = 0`
* Declare a variable `const limit = 100`
* Write a for loop that counts from the value of `start` to the value of `limit`, using those variables in the **control panel** of the loop.

Test the loop thoroughly.

### Bonus! 

_NOTE: Feel free to skip this section if you're not comfortable yet!_

* Loop through the following array using a `regular for loop` and then again using a `for in loop` and `console log` each element of the array

```js 
const loopArr = ["Hello", "world", "this", "is", "me", "looping", "through", "an", "array!"]
``` 

* Even more bonus: Only `console log` every odd indexed element of the array. The expected output would be: `world is looping an`

* Even more bonus: Declare a variable `loopString` and set it equal to any string you wish. Then, loop through that string and console log every individual character of the string

## Best Practices

Code check! Just like writing sentences, code typically has a certain style/syntax. There are some conventions across all languages, and some that are specific to the language.

### Indentation
Reading material for [JavaScript code conventions](http://javascript.crockford.com/code.html).

As we have mentioned before, indentation denotes hierarchy in your code. When writing code in JavaScript, you should indent code that is being run inside other code. Here's an example:

**Correct:**

```js
if (5 % 2 == 0) {
    console.log('Number is even');
} else {
    console.log('Number is odd');
}
```
Note that the console.log that will be run inside the *if* portion is tabbed over once to denote that it should be run if this portion of the code is executed.

**Incorrect:**

```js
if (5 % 2 == 0) {
console.log('Number is even');
} else {
console.log('Number is odd');
}
```

Note that this code will still run, but it is hard to read! This will make your coworkers (and instructors) :confused: . You want to make it as easy as possible for others to know what you are doing, so please show the relationships with indentation! Also note, this is an easy case, imagine if you had 30 lines of code, figuring out where you are missing a curly brace or need to move things around gets nearly impossible with improper indentation.

### Semantic naming
When naming your variable, be explicit about what the variable is! Don't name your variables `x` or `y` when you can name them `timeTracker` or `uncleRoysChickenCount`. It's easier for not only others to understand what variables actually hold, but for you in the future to be able to go back and know what you were doing.

Remember, JavaScript naming convention is *camel case*. This means, the first word in the name is lowercase and any additional words in the name are connected (no spaces between words) and the first letter is capitalized `camelCase` or `thisIsCamelCase`.

In contrast, a language like Python uses `snake case` which uses underscores like so `snake_case`. HTML uses `sausage-case` or it is also known as `kebab-case`.

### Case Sensitivity
Be aware that names are case sensitive. That means: `const redcow` is **not** the same as `const redCow`.

Go back to the code you've written, proofread it and update it to meet best practices

## Typing Practice

Play a game! There are a lot of characters we use in coding that don't show up in our usual typing. This site will help you get used to typing those weird characters

[Typing.io](https://typing.io/)


## Conclusion

Congrats, you finished the lab! There is no need to submit this lab. You will be receiving homework for tonight soon.

If you want more to do, tomorrow we will be getting into git and Github. Use your **research skills** (Google-fu) to find out more about:

* The difference between git and github
* What is a Github repo
* forking a repo on Github
* cloning a repo from Github
* What does `git push origin master` do?
* What would `git pull upstream master` do?

Rather than burning out on code on your second day, set yourself up for success:
 - find some videos for some good stretches/desk exercises
 - write a letter to yourself with what you hope to get out of this course and look back at it when things get rough
 - reach out to a classmate and start getting to know them, see if they need some help
 - Tweak your setup to be more comfortable
 - Go back and practice some of the new keyboard shortcuts you've learned today.


---

*Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
