[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Homework, The First

Your first homework!

#### Learning Objectives

- Solidify JS fundamental concepts by answering short answer questions
- Practice using Boolean expressions
- Practice reading code/improving code literacy with while loops/infinite loops
- Practice writing for loops
- Practice using the terminal
    - create files, move files, copy files, remove files
    - create directories, move directories, remove directories

#### Prerequisites

- An introduction to JavaScript
- An introduction to Terminal

---

## Getting Started

1. Create a folder named `first_homework` somewhere convienent, like your `Desktop`
1. Create a file inside that folder called `first_js_homework.js`
1. Create a file inside that folder called `terminal_homework.bash`

## Deliverables

Answer the questions, write some code and submit the files via pastebin and google form (instructions for how to do this can be found at the bottom of the markdown). Note: there are **5 Sections** in this homework

## Technical Requirements
1. When submitting, your JavaScript **MUST** run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong
2. The bash file should just be the commands you ran, copy and pasted into the file. A template is provided in the file `first_hw_bash_instructions.bash`, you can copy and paste that into your file and add your commands below each comment

## Submission Guidelines

- Must be submitted before the next class day, (meaning, no later than 10am Eastern) - if you have problems submitting reach out to one of the instructors ~15 minutes _before_ the start of class
- Tonight we'll be submitting via `pastebin` and `google forms`, since we don't have our github set up completely. Instructions will be at the end of this markdown

### Resources
- Review the class notes and your work from today
- [Terminal Cheatsheet](../../../../../wiki/Terminal-Cheatsheet)

---

## The Assignment 

### Section 1: Terms

For any answers that require a written response, write the response as commented-out code

```js
// 1. The difference between interpolation and
// concatentation is . . .
```

**Remember:**
- Run your file by typing `node first_js_homework.js`
- Then, press the **up arrow** to retrieve the `node first_js_homework.js` command after you have used it the first time, instead of typing it out every single time

Write these answers in `first_js_homework.js` as comments

**Answer:**
1. What does the acronym **DRY** stand for? Why should we pay attention to it? What programming tools have we learned to write **DRY** code?

1.  What is the difference between `const` and `let` and `var`? Please limit your answer to no more than three short sentences. Don't be afraid to **research** using google and other resources

<hr>

### Section 2: Boolean expressions and variable assignment

**Code:**
- Using the provided variable definitions, replace the blanks (underscores) with a mathematical or boolean operator that evaluates the expression to `true` (some may have more than one right answer, just choose one)
- Test your answers by using `console.log` for each expression in your answer file.

```js
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
  const f = false;
```

-  a _ b
-  c _ d
-  'Name' _ 'Name'
-  a _ b _ c
-  a _ a _ d
-  e _ 'Kevin'
-  48 _ '48'
-  f _ e
<br/>

- Set a new variable `g` to `0`
- console.log `g`
- Then set the variable `g` to be equal to `b + c`
- console.log `g`
<br/>

- **Answer:**
  - Did you use `const`, `let` or `var`? Why did you choose the one you chose?
  - What happens if you don't use `const `, `let` or `var`? Do you get an error? If so what does it say?
  - what happens if you write `10 = g`?

<br/>

<details><summary><strong>Bonus Challenge (optional)</strong></summary><p>
Replace the underscores to make a Boolean expression that evaluates to true. Use no more than one of the following: `>` , `<` `!==` and `===`.

```
a _ (b || f) _ !f && e _ c
```
[Bonus hint]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
</p></details>
<br>
<hr>

### Section 3: While loops

Increase your **code literacy** by reading code, line by line.

#### Infinite loop?

Read the following code very carefully.

**DO NOT RUN** the code because it _might_ run an **infinite loop**

Infinite loops can sometimes be hard to stop and may require you to reboot your computer. Being able to determine whether you've created an infinite loop _before_ running your code is a handy skill to have

**Answer:**

* Is the code below an infinite loop? Why or why not?
* Don't worry about getting it 'wrong' - you'll be graded on your reasoning, not if your ultimate answer is correct.

You should **NOT** test (run) this code, so read it line by line and 'execute' the code in your head.

```js
while (true) {
	console.log('Do not run this loop');
}
```

#### Infinite loop II

**Answer:** Is this loop an infinite loop? Why or why not? 

```js
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
```

#### Reading code

Ok rest easy, no more infinite loops for now!

The following while loop uses a [compound assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) operator, i.e. `+=`

_Without running this loop_, what is the expected output?

Read the code line by line-- everything happens in sequence. Write down what you think the code will log in the Terminal by adding comments before each line of code, explaining what that line of code will do. Be patient with your thought! There is no rush.

<details><summary>Example for how to do it:</summary><p>

```js
let q = 20;

// start a while loop that will run as long as q is greater than 10
while (q > 10){
  // prints the value of q to the screen/Terminal window
  console.log(q)
  // decrements the value of q by 1
  q--
// closes the while loop, the code inside this loop will keep running until the while condition is evaluated to false
}
```
</p></details>

**Code for you to explain:**

```js
let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);
```

- Copy the above code into your `.js` file
- Add a comment for each line, like the above example
- Write a comment with your expected result
- Run the code
- Write another sentence confirming whether the code was what you expected. If it isn't what you expected, don't change what you wrote about your expected result. Rather write one sentence explaining what you learned. Remember the goals are to learn how to code, how to think critically, how to fix bugs, and learn from mistakes. [Try to adapt to the growth mindset](https://www.brainpickings.org/2014/01/29/carol-dweck-mindset/) (Bonus reading)

<br>
<hr>

### Section 4: For loops

**Answer:**

* A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?

#### For loop control panel

Here is an example for loop that prints a message 100 times:

```js
for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
```

**Answer:**

What are the three components of the **control panel**? Each component is separated by a semicolon `;`.

Remember: Write your answers as comments in the file.

* The first part of the control panel is:
* The second part of the control panel is:
* The third part of the control panel is:

#### For loop II

Write a for loop that will console.log the numbers 0 to 999.

<details><summary><strong>Bonus Challenge (optional)</strong></summary><p>

What is the difference between `\` (`backslash`, above the `enter`/`return` key) and `/` (`forward slash` or just `slash`, shares the key with the `?`)?
What is `\` doing in the string?

```js
  console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
```

```js
  console.log("Without you, today's emotions are the scurf of yesterday's");
```

</p></details>

#### For loop in reverse

**Code:**

Using a [postfix operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) `i--` instead of `i++`, write a *for* loop that iterates in *reverse*. Console.log a countdown from 999 to 0.


##### More counting

Write a *for* loop that uses **string concatenation** to send a message to the console as well as the current value of `i`.

The loop should run from 1 to 10.

Expected Result:

```
The value of i is: 1 of 10
The value of i is: 2 of 10
The value of i is: 3 of 10
The value of i is: 4 of 10
The value of i is: 5 of 10
The value of i is: 6 of 10
The value of i is: 7 of 10
The value of i is: 8 of 10
The value of i is: 9 of 10
The value of i is: 10 of 10
```

<details><summary><strong>Bonus Challenge (optional)</strong></summary><p>

Rewrite the above loop using [String Interpolation/Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead of **concatenation**

Note: string interpolation uses `backticks`, this is a different character than a single quote. The `backtick` can usually be found above the left `tab` key/below the `esc` key and it shares it with the `tilda` `~`
</p></details>

#### Iteration

```js
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
```

* Iterate over the `StarWars` array and print each element to the console.

* Iterate over the `StarWars` array again and print each character's name **as well as** the value of `i`.

<details><summary><strong>Bonus Challenge (optional)</strong></summary><p>

* Figure out how to iterate over **every second** element of the `StarWars` array, starting with the first element.

> => Han, R2D2, Leia
</p></details>

<br>
<hr>

### Section 5
#### Terminal Practice

Write the answer to each command at the bottom your `terminal_homework.bash`
You can copy a template of each command prompt from the [`first_bash_instructions.bash`](first_bash_instructions.bash) file and then copy paste your answers below each prompt


#### Episode X: A New Terminal

A long time ago in a unix environment far, far away, young Jedi padawans who
knew only of desktop software were seduced by the dark side of the Force to
enter… The Terminal.

Follow the instructions below using all the console commands introduced in
Fundamentals, class, or that you find on your own.

You can do each prompt/command one by one or

<details><summary><strong>Bonus Challenge (optional)</strong></summary><p>

Try doing the following:

* Try applying one command to multiple files at once.
* Try applying one command to **all** files in a single directory (where necessery)
* Try applying one command to **all files that match a pattern**.
* Find and use command line shortcuts.
* Try using a mix of absolute and relative paths (there is a section on absolute pathing in today's Terminal lesson markdown).

</p></details>

#### Part I: Set the Scene


**Code and Copy your working code into the `terminal_homework.bash`** file
* Open the **Terminal app**

* Create a new directory on your `Desktop` called `galaxy_far_far_away` and enter it via terminal

* Create a directory called `death_star`, and make the following files inside of it:
  * **darth_vader.txt**
  * **princess_leia.txt**
  * **storm_trooper.txt**

* In `galaxy_far_far_away`, make a directory named `tatooine` and create the following files in it:
  * **luke.txt**
  * **ben_kenobi.txt**

* Inside of **tatooine** make a directory called `millenium_falcon`, and in it create:

  * **han_solo.txt**
  * **chewbaca.txt**

<br>

#### Part II: mv - rename

You can rename a file using the `mv` command.

For example, rename `file1.txt` to `file2.txt`

```bash
mv file1.txt file2.txt
```

* Rename **ben_kenobi.txt** to **obi_wan.txt**.

<br>

#### Part II: cp - copy

You can copy a file from one location to another using the `cp` command.

For example, copy **file1.txt** to its parent directory:

```bash
cp file1.txt ..
```

And, copy **file1.txt** to a sibling directory:

```bash
cp file1.txt ../some_directory
```

Finally, copy **file1.txt** to a child directory:

```bash
cp file1.txt some_directory
```

* Copy **storm_trooper.txt** from **death_star** to **tatooine**

<br>

#### Part IV: mv - move

You can use the `mv` command to move files from one location to another

For example, move a file from its current location to the parent directory:

```
mv file1.txt ..
```

And, move a file from its current location to a sibling directory:

```
mv file1.txt ../some_directory
```

Finally, move a file from its current location to a child directory:

```
mv file1.txt some_directory
```

You can also move directories into other directories using the same syntax



* Move **luke.txt** and **obi_wan.txt** to the `millenium_falcon`

* Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`

* Move `millenium_falcon` into `death_star`

* Move **princess_leia.txt** into the `millenium_falcon`

<br>


#### Part V: rm - remove

You can use `rm` to delete a file.

For example, delete a file:

```bash
rm file1.txt
```

* Delete **obi_wan.txt**

<br>

#### Part VI: all together

* In `galaxy_far_far_away`, make a directory called `yavin_4`

* Move the `millenium_falcon` out of the `death_star` and into `yavin_4`

* Make a directory in `yavin_4` called `x_wing`

* Move **princess_leia.txt** to `yavin_4` and **luke.txt** to `x_wing`


* Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`

* In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`

* Move **darth_vader.txt** into `tie_fighter_1`

* Make a copy of **storm_trooper.txt** in both `tie_fighter_2` and `tie_fighter_3`

* Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`

<br>

#### Part VII: rm -r - remove directories

**Be careful with this command - cannot undo!**

Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

This command will typically not ask you if you really want to delete. It will just delete . . .

* Remove **tie_fighters** 2 and 3.

#### Part VIII: The Final Act

* Touch a file in `x_wing` called **the_force.txt**

* Destroy the `death_star` and anyone inside of it.

* Return `x_wing` and the `millenium_falcon` to `yavin_4`

* Celebrate!

<br>

<hr>

### Hungry for More

With almost every homework, we'll either pepper in bonus problems throughout the assignment like we did in this one or we'll add a challenge section that is optional -- or both, like today's! These sections will help you grow and solidify concepts. If you feel like homework was too easy for you or you breezed through them, that is when we highly encourage you to attempt the Hungry for More section. 

#### More Fun with For Loops

1. Loop through the following array and for every even indexed element, console log the string "This number was even!", and for every odd indexed element, console log the element itself 

```js
const evenArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

<details><summary>Expected output:</summary><p>

```	
This number was even! 
1
This number was even! 
3
This number was even! 
5
This number was even! 
7
This number was even! 
9
This number was even! 
```

</p></details> 

1. Take the following string and capitalize every first letter of the sentence: "learning javascript is pretty neat"


#### Personal Learning

[Read about Fixed vs. Growth Mindset](https://www.brainpickings.org/2014/01/29/carol-dweck-mindset/)

[Explore online resources like Eloquent JavaScript](https://eloquentjavascript.net/)

<br>
<hr>

# Homework submission

> **NOTE**: This is _not_ how you will be submitting your homework normally. **This is just for tonight!** We will go over how to submit your homework after your Github lesson tomorrow. But for tonight, please follow the instructions below for submitting your homework

**Do this for each file (once for `first_js_homework.js` and once for `terminal_homework.bash`) so that you end up with two separate links**

1. Highlight everything inside the file and copy it 
1. Go to [pastebin](https://pastebin.com/) and paste what you copied into the big textbox that says `New Paste` 
![](https://imgur.com/mfzEwQN.png)
1. In the `Optional Paste Settings` section, make sure your settings are...
	- **Syntax Highlighting**: `JavaScript` for the JavaScript assignment, and `Bash` for the bash assignment
	- **Paste Expiration**: Never
	- **Paste Exposure**: Unlisted
	- **Folder**: Leave this empty (it's a paid feature)
	- **Paste Name / Title**: `YOUR_NAME_HERE + First JS HW` for the JavaScript assignment, and `YOUR_NAME_HERE + First Bash HW` for the bash assignment 
![](https://i.imgur.com/F63rc0m.png)
1. Once that's all set, click the `Create New Paste` button, which should take you to a new page. Copy the URL of that page and paste it into the correct section of [this google form](https://forms.gle/4tKqoPPcB8sPYpT58) 
1. Fill out the rest of the form and submit it once you've pasted both links!

> NOTE: We're using pastebin instead of codepen because you do not need to create an account for pastebin. But if you would prefer to submit codepen links, feel free

---

*Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
