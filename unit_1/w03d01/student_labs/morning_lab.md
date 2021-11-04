
---
Title: 'Vanilla' DOM commands<br>
Type: Lab <br>
Duration: 45 - 60 mins<br>
Creator: Karolin Rafalski <br>
 Original Inspiration by : Thom Page
Topics:  DOM intro with Vanilla JS<br>

---

## JS DOM commands

You are not expected to remember these commands. This is an exercise to get you familiar with the concept of the DOM and the pattern of how we interact with it. We will be using jQuery commands in the future.

At the bottom of the instructor notes for this morning's lecture is an appendix of vanilla DOM commands, use that and your notes from lecture to complete the following

## Setup Part 1

1. Inside your `student_labs` folder for today, create new folder called `vanilla_dom_practice`
1. Inside your `vanilla_dom_practice` folder, create two files: `index.html` and `dom_practice.js`

1. Load your `index.html` file for this lab into the browser and make sure that the proper js file is connected.

## Setup Part 2
#### Make a web page for your hometown

Include:
- html boilerplate
- a link to your js file
- an `h2` tag with a `welcome to` and the name of your hometown
- an image of your hometown
- an `h4` tag that says `Featuring`
- an `ol` tag (ordered list) that has
  - 2 - 5 `li` elements that have text of things in your town
- two other html elements of your choice, they can be anywhere in your HTML's `body` (maybe a `div` or `footer` if you are short for ideas)
- give one element an id
- give at least two elements a class

**Note:** The focus of this lab is the DOM so don't spend more than 10 minutes on the set up and don't do any extra HTML, skip the CSS for now, CSS is the Hungry for More, if  you have time at the end

<hr>

## How to Check Your Work
**Check the results of your commands in the Elements tab and in the Console** (some divs won't have text, etc. but you can see the element appearing in the DOM in the elements tab.)

Remember: to see it in the **console**, you will need to either log the JS code or save the code to a variable and log the variable. Save your file and the refresh your browser.

## ⌘R

⌘R in your browser, or Command-R will **reload** your webpage after you have made changes to your html, css, or js files (if your OS has focus on the browser).

<br>
<hr>

## Part 1 Draw the DOM tree struture
- Based on your HTML, draw the tree of your elements, starting with the `document` as the root and branch off from there
- You can do this on paper and take a photo and upload it to your student_examples directory to have a record (you can keep it on paper too - you don't have to take the time to upload it if it isn't part of the way you keep notes for this class), you can also use a drawing program if you are more comfortable doing that
- Think about which elements are children, which are siblings, which are 'leaves' or the end of the tree. Can you branch off of text?

<hr>

## Part 2 Manipulate the DOM

### Notes

Use `document.querySelector()` to find your an element

Use `document.querySelectorAll()` to find a collection of elements in the DOM.

Refer back to the instructor notes (and the appendix at the bottom) - for more details/syntax checks

### Activity
#### Query and change some elements

&#x1F535;  Get the element with the id you assigned and save it to a variable . Console.log that variable.

**Make sure** you get the element logged in the console:

![](https://i.imgur.com/1ocG4tc.png)


&#x1F535;  Get the `h2` element  and save it to a variable `h2`. Console.log that variable.


&#x1F535;  Using JavaScript, change the innerText of your `h2` to have 3 exclamation points at the end


&#x1F535;  Get all of the elements with the class you assigned and save them to a variable. Console.log that variable.

**Make sure** you get an array:

![](https://i.imgur.com/Ahh8J0C.png)

And **not this** (a single element)

![](https://i.imgur.com/2YLSvzd.png)



Why?

&#x1F535;  Change the style/color of the text of your ONE of your `li` elements to your [favorite html color](https://htmlcolorcodes.com/color-names/)



&#x1F535;  Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'

#### Create an element and append it

&#x1F535; Create a new `img` element using `document.createElement()`

&#x1F535; Add an attribute for the source url of your new image using `.setAttribute()`

&#x1F535; Append it to your page, somewhere, using `.appendChild()`

&#x1F535; Check that your image has appeared

BONUS:

Change the style/color of the text of your ALL of your `li` elements to another [favorite html color](https://htmlcolorcodes.com/color-names/)  

#### Remove an element:

&#x1F535; Select any element using `querySelector` and save it to a variable

&#x1F535; and remove it from your page using `.remove()`
- if you would like your element to stay, just comment this line of code out - so you have it as a reference

### Hungry for More

- We won't be using `Vanilla` JavaScript for DOM manipulation for the rest of the course. So now would be a good time to get a little extra CSS practice
- Go ahead and style your page with some CSS
- Make your hometown proud! Style even more and if you're proud of your work, think about using it as a portfolio piece! 

### Wildly Ravenous for Even More
- Build an image carousel that scrolls through 2-4 images every 2-3 seconds
