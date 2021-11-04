# Intro to Sass

<img src='https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg' width='300px'>

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*

- Have a clear understanding of what Sass is and the benefits of writing in Sass.
- Will be able to develop a clean css workflow in Sass. 


### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*

- Can write and understand clear CSS.
- Understand how variables and nesting works.  
- Can use cmd line to initialize and compile projects.

***

## Overview

#### What is Sass? 

Sass is an extension of CSS that adds power and elegance to the basic language. It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized, and get small stylesheets up and running quickly, particularly with the help of the Compass style library.

[Compass Library](http://compass-style.org/)

As you can see Sass can add alot of functionality to css to improve front end development life.

##### So let's get Sassy! 
<img src="https://media.giphy.com/media/BhhvMflNABkoE/giphy.gif" width="300px">

## Common Myths

There are alot of common misconceptions about Sass but let us tackle the biggest ones.

- Sass will change the way I write css entirely
- Sass will make my site less compatible across browsers.

### The Truth

Sass is no different then standard css in 90% of its syntax. In fact Sass has devoted to be compatible with ALL versions of css. 

Here is standard css.

``` css 
    article{ font-family: helvetica; }
    article h1{ color: #333377;}
    article p{ color: #333377;}
    article p:hover{ color: #cc3333;}

```
And here is Sass.
```scss 
    $mainColor: #333377;
    
    article{
        font-family: helvetica;
        h1{ color: $mainColor;}
        p{ color: $mainColor;
        &:hover{ color: #cc3333;}
        }  
    }
    
```
As you can see Sass reads the same as standard css but instead of calling each parent container you can nest the children elements inside the css! So much cleaner to read alrady. 

Did you also notice the amazing $ symbol? We were able to save that color as a variable to call in our properties. This means we can from one location update multiple css elements! This is only a few of the ways that Sass can help you step up your css game.

***

## How does Sass work?

Sass takes your written Scss file and compiles it into css to be used in your site. There are a couple ways to do this, but we will be showing you the simplest way in terminal. 

### Installation and Use

Sass can be installed globally via homebrew! and you can setup a workflow on your computer

But when you get to the work field everyone working on the same project will have to code in the same

environment so you will usually a dev environment that can compile sass for you, that's what we will use today

with the Starter Kit that we have been using thus far.

***

## The Benefits of Being Sassy

Next we are going to break down the advantages that Sass brings to the table. 

### Variables 

Currently in css the only way to style several elements together is to either use an existing css library or manually style every element one at a time. Which is fine when you are working on a small project, but imagine the complications that arise when you have a large scale project and you have to update several places. 

To wrap our heads around this we will be looking at the Bulma Css file and how they went about using variables to streamline their css file. 

[Bulma Css](https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css)

Now let's look how they established variables to quickly create themes with the same css base.

[Bulma Sass](https://bulma.io/documentation/customize/variables/)

#### Creating variables

With the power of variables you can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable. Here's an example:

```scss

$primary-font: Helvetica, sans-serif;
$primary-color: #777;

body{
    font: $primary-font;
    color: $primary-color;
}

```

### Practice 

Clone down this repo and let's play with the starter-code. 

Inside you will find a beautiful blanket html along with a styles.scss and style.css . For this practice we will be dealing with the main.scss . 

*Hint (Make sure you run the Sass command so your Sass will auto compile into your css)*

Right now as we look at our scss file we see some repeating colors.

One example.
```scss

header{
    width: 100vw;
    display: block;
    text-align: center;
    color: white;
    background-color: aquamarine;
    margin-top: 0;
    padding: 1em; 
}

footer {
    width: 100vw;
    margin: 0;
    padding: 1em;
    text-align: center;
    background-color: aquamarine;
}

```

If we wanted to change the colors of our site we would have to go to every instance and change it. Let's create a variable and store that color. 

```scss

$primary-color: aquamarine;

header{
    width: 100vw;
    display: block;
    text-align: center;
    color: white;
    background-color: $primary-color;
    margin-top: 0;
    padding: 1em; 
}

footer {
    width: 100vw;
    margin: 0;
    padding: 1em;
    text-align: center;
    background-color: $primary-color;
}

```

Now when we change the variable it will reflect across ALL instances! Saving time and making our develoment more efficiant. 
Go throughout all the css and combine as many similar attributes into variables as you can. Then adjust the variables to reflect the styles of your choice. 

So easy its like magic! 

<img src='https://media.giphy.com/media/wAjfQ9MLUfFjq/giphy.gif' alt='amazed gif' width='250px'>

### Additional resource 

Check out this fun scss project and adjust the $color1 and $color2 to really see the power of assigning variables.

[Submarine Codepen](https://codepen.io/ajerez/pen/EaEEOW)

***

### Nesting

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. 

**WARNING**

Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.

That being said lets look at how our current scss looks in the start code. 

```scss
article {
    background-color: $article-color;
    width: 47vw;
}
article img{
    width: 100%;
}
article h2{
    background-color: black;
    color: $header-font;
    text-align: center;
    margin-bottom: 0;
    padding: .3em;
}
article p {
    padding: .5em;
}

```

Yikes! So much repeating code! Let's use Sass nesting to dry it up. 

```scss
article {
    background-color: $article-color;
    width: 47vw;
    img{
    width: 100%;
    }
    h2{
    background-color: black;
    color: $header-font;
    text-align: center;
    margin-bottom: 0;
    padding: .3em;
    }
    p {
    padding: .5em;
    }
}
```

With this new structure it is very clear to see the inheritance of css properties. 
Go through the starter code and nest all children css properties with their parents. 

**BUT WAIT!** How does this compile in css? 


```css
article {
    background-color: $article-color;
    width: 47vw;
}
article img{
    width: 100%;
}
article h2{
    background-color: black;
    color: $header-font;
    text-align: center;
    margin-bottom: 0;
    padding: .3em;
}
article p {
    padding: .5em;
}

```
Exactly the way it was. Nesting Css is a great tool for us as developers to clearly see how css is being applied. 
For small projects this probably isnt a big deal. But for large scale applications it can be a life saver. 

***

Now lets jump into some more advanced topics. 

### Partials & Imports

#### Partials

A partial is a small snippet of css saved into a seperate sass file for use of importing into other files. The main use of this is to modularize your code and make it easier to manage. To create a partial you simply name your Sass file with a leading underscore.

```
_partial.scss
```
This underline tells Sass that this is a file that awaits an import before being compiled into a css file. 

#### Import

The import abilty allows us to import partials into our Sass code. 

With standard css everytime you use @import it creates an HTTP request for each css file. Sass improves this by compiling the partials into one css file so the browser only runs a single HTTP request. Simple to use and efficiant. 

##### How to use 

To import a partial you will be using the @import property. 

Let's test it out! Add the following line to your main.scss 

```scss

@import 'base';

```
If you imported correctly you will see the css inside of _base.scss applied to your css file. But, wait...

Why did we just put 'base' instead of _base.scss? Sass is smart enough to know that by using import you are requesting a partial and will automatically call upon the correct file without having to be so exact saving coding time once again! 

So where does the css go that you import? 

Where ever you import the partial it will be added into the css at that level. With that ability you can easily save several partials and call upon them inside your code and know as a fact that it will be where you want to render. 

***

### Extend/Inheritance

This is one of the coolest features dealing with Sass. Using @extend lets you share a set of CSS properties from one selector to another. In other words you basically create a variable object that hold css properties! This is a great way to keep your css very DRY and well organized. 

Syntax 

```scss

%alert-style {
    width: 20vw;
    height: 20vh;
}

.message{
    @extend %alert-style;
    background-color: white;
}

.error{
    @extend %alert-style;
    background-color: red;
}

```

Because we are 'extending' the styles of alert-style we can have the message and error classes inherit said styles. 

***

### Operators 

That's right we can do math in css! 

![wat](https://media.giphy.com/media/tu54GM19sqJOw/giphy.gif)

This is more useful then you might think. Sass has a handful of standard math operators like +, -, *, /, and %. With these operators we can create more dynamic css. As an example we will use it to calculate the sizes for an article and an aside. 

```scss

.container { width: 100%; }

article {
  float: left;
  width: 600px / 960px * 100%;
}

aside {
  float: right;
  width: 300px / 960px * 100%;
}

```

What we were able to do was create a grid based on 960px and convert them into exact percentages. When the sass renders out it will look like so..

```css

.container {
  width: 100%;
}

article {
  float: left;
  width: 62.5%;
}

aside {
  float: right;
  width: 31.25%;
}

```


### YOU ARE NOW A CSS MAGICIAN! 

![magician](https://media.giphy.com/media/FDu0k1BETbTjeH4xXx/giphy.gif)
