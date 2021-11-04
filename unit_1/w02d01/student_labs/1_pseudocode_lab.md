[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Pseudocoding

Pseudocoding is a helpful process to begin with before you start writing actual code. It makes it easier for you to conceptualize and understand what you're actually aiming to do. So, let's get some practice!

#### Learning Objectives

- Pseudocoding

#### Prerequisites

- Javascript
- Critical thinking

---

## Getting Started

1. In today's `student_labs` folder, create a file called `pseudocode.js` and a file called `index.html`

## Intro to Pseudo Code

Pseudo code is the process of taking a larger solution and breaking it down into the programmable steps without actually writing any code.

1. Think about the larger solution as a whole, but as a series of steps that you would write out for a petulant child to follow
1. Write out the solution in plain English, breaking it down into as many tiny steps as possible.  Remember, this child doesn't want to do the task.  If there's any ambiguity, you're sunk
1. Create a flow chart
1. Try to separate each phrase/independent clause onto a different line
1. Identify the following:
    - Assertions
        - comments, probably
    - Conditionals
        - A question is asked.  This tells us a conditional is coming
        - Looks for words like "if, unless, otherwise"
        - Think of all the possible outcomes of the situation
            - Each outcome represents an `if`, `else if`, or `else` statement
    - Loops
        - Something is done multiple times
        - Look for words like "while, as long as, until"
        - Think of the child asking "am I done yet?"
            - Better to tell them "keep eating string beans until there are no more string beans" than to tell them to each individual string bean
    - Functions
        - We've oversimplified a step which could be broken out into multiple steps.
1. Identify data types
    - whenever you have a conditional, loop, or something you're keeping track of, identify its type
        - text (strings)
        - numbers (ints/floats)
        - true/false values (booleans)
        - collections of stuff (arrays)
1. (Optional) Try to convert each line into something that resembles code

### For example, pseudocoding peeling an orange

```
Peeling an orange: First, do we have an orange?  If not, I'm going to take one out of the fridge.  We now have the orange.  Then I'm going to see if it has already been peeled.  If it is peeled, I'm going to eat it.  If it isn't peeled, I'm going to remove a chunk of the rind.  At this point, I'm going to see if it's peeled.  If it isn't I'm going to remove another chunk of the rind.  I'll keep doing this until the orange is peeled.

Do we have an orange? - conditional coming up
    We do not have the orange: - conditional (boolean test: does orange exist)
        Take out the orange - function
We now have the orange - comment
Is it peeled? - conditional coming up
    If it is peeled - conditional, situation 1 (number test: number of pieces of rind left === 0)
        You're done!  Eat it! - function
    If it is not peeled  - conditional, situation 2 (number test: number of pieces of rind left > 0)
        As long as it is not peeled - loop (number test: while(number of rind pieces > 0))
            Remove a chunk of rind - function
        The orange is now peeled - comment
        You're done!  Eat it! - function
```

---


## Your Turn: Write Pseudocode for how to Make Waffles

1. In your `pseudocode.js` file, pseudo code the process for making waffles (the frozen kind) with syrup.
1. Start simply with broad commands (put syrup on the waffles)
1. As time permits, make each broad command more specific (pull syrup from refrigerator, warm the syrup before you use it, open the lid on the syrup, pour the syrup on top of waffle).
1. Once you've done that, take the time to think this over as if you were writing it as an application. Comment each step and determine what it would be in your code from the following:

    - Assertions
        - This is a statement that is expected to be true (Boolean-valued function, i.e. a true–false expression), or in this instance, what we want to get to a true point ("Take the waffles from the freezer" would be an assertion after we confirmed that we had waffles in the freezer that we could remove).
    - Conditionals
        - A question is asked.  This tells us a conditional is coming
        - Looks for words like "if, unless, otherwise"
        - Think of all the possible outcomes of the situation
            - Each outcome represents an `if`, `else if`, or `else` statement
    - Loops
        - Something is done multiple times
        - Look for words like "while, as long as, until"
    - Functions
        - We've oversimplified a step which could be broken out into multiple steps.

1. Identify data types
    - whenever you have a conditional, loop, or something you're keeping track of, identify its type
        - text (strings)
        - numbers (ints/floats)
        - true/false values (booleans)
        - collections of stuff (arrays)

1. (Optional) Try to convert each line into something that resembles code

## Making Waffles - Actual Code

1. In your `index.html`, connect your `pseudocode.js` file and test to make sure it's connected with a console log 
1. Now, in your `pseudocode.js`, try and write a program that implements your pseudocoded waffles with syrup process.
    - As a bonus, try and make it an interactive application in your browser!
    
## Hungry for More? 

1. Try connecting your prompt events to the DOM and adding some HTML/CSS to your page.
1. Write another interactive application in your browser for a running a lemonade stand.

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
