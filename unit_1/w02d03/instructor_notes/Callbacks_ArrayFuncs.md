# Advanced Objects

### Lesson Objectives

-   Learning about Callbacks
-   Concept of Higher Order Functions
-   Higher Order Array Functions

## Setup

1. Navigate to the `student_examples` folder for today.
2. Create a file called `callbacks.js` to use for practice code.
3. Open it in your text editor. Add a console log and run your code to confirm that you can see the output in your terminal.

## What is a Callback

When a function is passed as an argument into another function, it is referred to as a callback.

```
const myCallback = () => console.log('I am a callback')

const parentFunction = (callback) => callback()

parentFunction(myCallback)

```

\*setTimeout and setInterval are example of functions that take a callback

## Higher Order Functions

Higher Order functions are functions that take a portion of logic that is used in several situations and act as a wrapper to other functions. Arrays have several Higher order functions built in.

## Higher Order Array Functions

-   map
-   filter
-   forEach
-   some
-   every
-   findIndex
-   find
-   reduce
