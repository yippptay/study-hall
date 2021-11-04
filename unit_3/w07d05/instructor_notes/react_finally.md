# Introduction to React

## Learning Objectives

 - Describe why React is so popular and in high demand
 - Describe the history of React
 - Describe what is React in terms of code organization
 - Explain what is JSX
 - Explain what is state
 - Build a simple React app

 ### What is React

 [Reference](https://generalassemb.ly/coding/full-stack-web-development/beginners-guide-react)

We've already been building web sites based on data. We've been using server-side rendering with a template engine (ie `EJS`). While there are many upsides to server-side rendering, there are some down sides.
- it can be cumbersome to maintain, when you want to change one thing, you have to change things across many files
- your data is tightly coupled with your view of the data (embedding our data inside of HTML using `EJS`)
- every view requires a page reload, which can get slow for the user and can be demanding on the server (imagine thousands or millions of users)

React is just the view layer. We can go over to the [react docs](https://reactjs.org/) - Which are some of the best docs out there.

Let's look at a few screenshots from their docs

![declarative views](https://i.imgur.com/sDfJeh1.png)

<hr>

![Component Based](https://i.imgur.com/ElASYZ2.png)

<hr>

![Write once, use anywhere](https://i.imgur.com/Ov0pSW1.png)

<hr>

### History of React

React was created at Facebook. It was used at first for just one specific project. Then it was expanded to more projects, then it began being used at Instagram and then it was made open-source.

This organic growth of React demonstrated that React was a solution that appealed to many developers. React's meteoric rise and continued demand continued appeal makes it worthwhile to learn.

### What is React in terms of code?

React is written in JavaScript. However, it has always relied on the bleeding edge of JavaScript and uses JSX (an HTML-JavaScript hybrid). Therefore, in order for browsers to understand it, it has to be compiled into older JavaScript.

Luckily there is a great technology called [Babel](https://babeljs.io/), that will handle this for us. This lets us write modern React/JavaScript without having to worry whether an older browser is up to date with its JavaScript.

Let's start with a `Hello World` example.

Every (class) component needs a render function. React is the view layer for users to see and interact with. If these components don't render any elements to the DOM, then they don't serve much purpose. So we'll always have a render function.

The render function returns the html elements that will be loaded somewhere in the DOM.

```js
class HelloWorld extends React.Component {
  render () {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}
```

In this case, the component is a class.

It is made up of a div that says `Hello World!`.  

This isn't the most mind-blowing component. But it is a simple example that we can create custom elements with exactly the functionality we need.

We can incorporate data into our app rather easily.

```js
const someData = 'World!'

class HelloWorld extends React.Component {
  render () {
    return (
      <div>
        Hello {someData}!
      </div>
    )
  }
}

```

One great feature of React is that you can write your functionality right in your component. This includes event handlers and listeners.

Let's add a click event that triggers an alert:

```js
const someData = 'World!'

class HelloWorld extends
 React.Component {
  clickIt() {
    alert('you clicked it!')
  }
  render () {
    return (
      <div onClick={this.clickIt}>
        Hello {someData}!
      </div>
    )
  }
}


```

# Intro to Create React App

## Learning Objectives

- Learn about Create React App
- Learn what some of the pros and cons of Create React App are
- Learn how to build an app with Create React App

## It's 2020 Y'all

If you've googled anything about what to learn to be a web developer, you've likely been overwhelmingly crushed by the number of tools, technologies and buckets full of acronym soup.

All of these tools are meant to solve problems. But with too many tools it can be a problem in and of itself. Which one(s) do you learn? Additionally, as new web devs a lot of the tools can seem like total magic and it can be really hard to to figure out what is what and it can even impede learning when you take on too much too fast. Especially when the documentation is not very good.

So we've been really selective about which tools we teach. Thinking about what be will serve you post-course.

**Create React App** is built buy facebook and it is meant for:

- Learning React in a comfortable and feature-rich development environment (good errors! warnings, notes about best practices, hot reloading, zero configuration)
- Starting new single page applications
- Creating Examples with react for your libraries and components

[More info](https://github.com/facebook/create-react-app#creating-an-app)

Create React App isn't the best choice for:

- a sandbox where you just want to try some samples out (try a simple html page like we did yesterday or a react sandbox - linked above)
- A mostly static site (portfolio, blog) - try Gatsby!
- Server side rendering (yes! With a front-end framework! What is next? Cats and dogs being friends?!) - look into Next.js

Takeaway - soon you'll be on your own and you'll be trying to learn new things and get ready for job interviews. How do you figure out what to learn?

- figure out what you want to build and THEN figure out the right tools
- Start small and then add what you need
- Look at the job market and learn something that seems to be popular in the area

## Let's get started

- `npx create-react-app react_tac_toe`
- `cd react_tac_toe`
- `rm -rf .git` - because we are in the class repository - no git reps inside other git repos!
- open a new tab in terminal
- `npm start`
- in the other open tab `atom .`

![](https://i.imgur.com/AlBJBso.png)

Let's look at our folders

![](https://i.imgur.com/ovMXd4n.png)

The `public` folder holds static assets like the favicon and the `index.html` that will load in the browser

The `src` folder has a lot new things

- `App.css` - a different way to organize and use CSS than what we are used to. [As a bonus you can learn this way](https://facebook.github.io/create-react-app/docs/adding-a-stylesheet) or we can just link our CSS like we always have been or you can work in the `index.css` file

- `App.js` the main React component, we'll be writing in here
- `App.test.js` - we haven't gotten a chance to dive into testing but if you look at the code, in summary it says if the app doesn't crash load it. If the app does crash a lot of things happen but they require some deeper poking aorund
- `index.css` - if you do your css in here, it will be most familiar to what we've already been doing in the course.
- `index.js` - this file has some magic going in in it. Suffice to say, if you create React components in the `src` folder, they will magically work
- `logo.svg`-that's that spinning react logo you see in the browser. SVG is a really great technology worth exploring sometime later...
- `serviceWorker.js`, rather than an express app serving our web pages, this service worker is helping us interact with our app in the browser. [More info](https://developers.google.com/web/fundamentals/primers/service-workers/) - we are going to go ahead and call this part 'magic' since we don't have time to jump down this rabit hole.

Note: if you need to add a dependency you'd just run `npm install react-router-dom` or any other dependency you might want.

## Let's Get Coding

- Open the `src` folder
- open the `App.js` file
- remove the text inside the `p` tag and put some of your own words

![](https://i.imgur.com/SSM71Qt.png)

- save the file
- look at the browser

![](https://i.imgur.com/pNIo19B.png)

Notice! you didn't have to reload the browser! 🎉

## Make This App Our Own

Let's remove all the create react app showcase stuff and rewrite our component to be a class. There are a few ways to make react components. We're going to stick with classes. Later, when you feel more confident you can explore different ways to write them

```js
import React from 'react'

class App extends React.Component {
  render() {
    return <div></div>
  }
}

export default App
```

# React Components

## Learning Objectives

- Learn to Think in React
- Build Components
- Put components inside other components

## Thinking in React

The [React Docs](https://reactjs.org/docs/thinking-in-react.html) are a key resource. They are very well written, however a lot of the concepts can take a while to understand. So don't worry about having to read things a few times.

The React docs always recommend starting with a mock up of what the app should look like and then, break that mock up into a component hierarchy:

![components](https://i.imgur.com/6CV69PA.png)

Then, you should build a static version in React.

Later, you'd want to start incorporating your data and using state/props (later lesson).

For now, let's build a static version of a small app

![React Tac Toe Static](https://i.imgur.com/G4W4mWF.png)

Below, we can identify several components

- app (blue)
  - div with the following inside:
    - header (red)
      - an `h1` inside
    - player scores (mustard yellow)
      - an `h2` and an `h3`
    - board (fuchsia)
      - squares (green)
        - an h4 styled to look good as a played X or O

![outlined components](https://i.imgur.com/TORIpcG.png)

### Let's Build our Mockup in React

### Our First Component

There are a few ways to write React components, some are outdated, some are bleeding edge/very new, some are for static components are some are for holding state.

For ease of learning, we are just going to learn to write our components one way. As you grow more experienced and comfortable with React, you can incorporate the right one(s) for your project.

**in App.js**

Declare a class that extends from `React Component`

At minimum, this class **MUST HAVE** a render function. The purpose of React is to make views, so a component must render some view.

```js
class App extends React.Component {
  render() {}
}
```

Let's render that `h1` inside our render function and let's render our `App` in our ReactDOM.render function

```js
class App extends React.Component {
  render() {
    return <h1> React Tac Toe </h1>
  }
}
```

When we refresh our view it should look the same.

##### If we've installed React Dev tools, we can go over to the React tab and see our component

![react dev tools](https://i.imgur.com/CxcflPZ.png)

## Making a Component inside another component

According to our mockup, our App will have 4 components

- header
- two player components
- board

With react, we can only render **ONE** component. That component can have numerous components inside of it.

Let's make our header component

- `mkdir src/components`
- `touch src/components/Header.js`

in `Header.js`

```js
import React from 'react'

class Header extends React.Component {
  render() {
    return <h1> React Tac Toe</h1>
  }
}

export default Header
```

In `App.js`
we must import our component before we use it

```js
import React from 'react'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return <Header />
  }
}

export default App
```

We still haven't changed how things should look so let's use the dev tools to check everything is in order:

![react dev tools](https://i.imgur.com/ZZ2cteT.png)

#### Let's make a player scoreboard

It should be made up of

- a div and inside that div
  - an `h2` with the text `Player`
  - an `h3` with the text `Wins:`

And have that component render in our app:

**GOTCHA** To return multiple lines of code in a return statement - you must wrap that code in parenthesis

Example:

```js
return (
  <nav>
    <ul>
      <li></li>
    </ul>
  </nav>
)
```

**GOTCHA:** The parenthesis must start on the same line as a return

This will error:

```
return
(
  <nav>
    <ul>
      <li></li>
    </ul>
  </nav>
)
```

**GOTCHA** : You can only return 1 component. However, you can have as many components nested inside. Let's wrap our Header and Player components in a div to make it work

```js
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Player />
      </div>
    )
  }
}
```

Since a main feature of React is reusable components we can just copy our Player again:

```js
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Player />
        <Player />
      </div>
    )
  }
}
```

![two players](https://i.imgur.com/eUkvjtR.png)

### A Sneak Peak of a Lesson in the Near Future

We know we have a player X and a player O, and we want to be able to customize our components. We can pass custom properties to our Player components, using `props` (short for properties). `props` is a special term in React. Let's see it in action.

Let's make a custom `prop` called `whichPlayer` and pass the appropriate player name

```js
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Player whichPlayer="X" />
        <Player whichPlayer="O" />
      </div>
    )
  }
}
```

Now, we need to access these properties inside our Player component. Our player component is a child of App, and thus has access to props. Don't worry if this doesn't make sense yet. We'll be returning to this concept over and over again and it'll start to come together.

```js
class Player extends React.Component {
  render() {
    return (
      <div>
        <h2>Player {this.props.whichPlayer} </h2>
        <h3>Wins: </h3>
      </div>
    )
  }
}
```

Now we can see our custom property `whichPlayer` rendering with its value, depending on which component it is:

![Props](https://i.imgur.com/Zieebv4.png)

Let's make one more component for our App, the board:

- `touch src/components/Board.js`

```js
import React from 'react'

class Board extends React.Component {
  render() {
    return <div>the board!</div>
  }
}

export default Board
```

Don't forget to add the `Board` component in our `App`

### You Do:

On your own, and then we'll review ~ 10 minutes

- make one more component called `Square`, made up of a div, inside the div put an `h4` element, inside the `h4` put some text like the word `square`
- gotcha! divs have a height and width of 0 when they are empty. Be sure to put in an `h4` and some text
- render 9 squares inside the Board
- **Extra** - Read ahead to learn how to incorporate CSS

Final Result:

![](https://i.imgur.com/zjcmqso.png)

Chrome/React Dev tools view

![](https://i.imgur.com/RGF2w0K.png)

# React and CSS

## Learning Objectives

- Learn to Use CSS with React

### CSS & React

Right now we have all the right elements, but we need some style to make it look like a proper tic tac toe game, let's try to make it look like this:

![expected final appearance](https://i.imgur.com/gbvCuEY.png)

The simplest way is to add code to the `index.css` file. Let's do that!

```css
/* * {
  border: 1px solid gold;
} */

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

:root {
  --dark-cerulean: #124e78;
  --maastricht-blue: #0b132b;
  --yankees-blue: #1c2541;
  --sea-serpent: #5bc0be;
  --aquamarine: #6fffe9;
  --react: #00d8ff;
}

html {
  background: var(--yankees-blue);
}
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  color: white;
}

.container > div {
  display: flex;
  background: var(--yankees-blue);
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 60vh;
  align-items: flex-start;
}

.app {
  display: flex;
  background: var(--yankees-blue);
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 60vh;
  align-items: flex-start;
}

.board {
  flex-basis: 60%;
  display: grid;
  grid-template-columns: 15vw 15vw 15vw;
  grid-template-rows: 15vw 15vw 15vw;
  color: white;
  justify-items: stretch;
  justify-content: center;
}

.board div {
  display: flex;
  align-itmes: center;
  border: 3px solid var(--react);
}

h1 {
  flex-basis: 100%;
}

h4,
h3 {
  text-align: center;
  flex-basis: 100%;
  align-self: center;
}

.X,
.O {
  flex-basis: 45%;
  text-align: center;
  justify-content: space-between;
}

.X {
  color: var(--sea-serpent);
}

.O {
  color: var(--aquamarine);
}
h1 {
  flex-basis: 60%;
  color: var(--react);
  text-align: center;
}
```

Let's add some classes to target parts of our components

**GOTCHA** Class is already a reserved word in JavaScript. We'll have to use `className` instead. React will compile it into the proper class attribute in the html that is rendered

**App.js**

```js
<div className="app">
  <Header />
  <Player whichPlayer="X" />
  <Player whichPlayer="O" />
  <Board className="board" />
</div>
```

**Player.js:**

```js
class Player extends React.Component {
  render() {
    return (
      <div className={this.props.whichPlayer}>
        <h2>Player {this.props.whichPlayer} </h2>
        <h3>Wins: </h3>
      </div>
    )
  }
}
```

**Board.js**:

```js
class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}
```

**Square.js:**

```js
class Square extends React.Component {
  render() {
    return (
      <div>
        <h4>square</h4>
      </div>
    )
  }
}
```

## Extra

There are newer ways to incorporate CSS into react. You can read about [4 Ways to style react components](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822) and try to swap out our style sheet for one ore more of these methods

# Intro to React State

## Learning Objectives

- Learn about state
- Learn how to declare state in a React component
- Learn how to iterate over some data and render it

## State

State is the particular view of a React component based on its data.

We can imagine we have a component that has our shopping cart

At first, our cart is empty. Our state would likely be an empty array .

Then we add an item into our cart. We'd push an object like this one into our cart:

```js
{
 itemName: 'Jar of Speculoos',
 description: 'Imagine butter cookies dissolved in butter, made into cookie butter and stored in a jar. Stop imagining and now buy this!',
 price: 6.99
}
```

Now our view of our shopping cart will change, based on the data or the state of the shopping cart.

### Set Up

Let's build a tiny online store and render the items available to us.

- `npx create-react-app big_time_shopping`
- `cd big_time_shopping`
- `rm -rf .git` - because we are in the class repository - no git reps inside other git repos!
- open a new tab in terminal
- `npm start`
- in the other open tab `atom .`

## Make This App Our Own

Let's remove all the create react app showcase stuff and rewrite our component to be a class. There are a few ways to make react components. We're going to stick with classes. Later, when you feel more confident you can explore different ways to write them

```js
import React from 'react'

class App extends React.Component {
  render() {
    return <div></div>
  }
}

export default App
```

## Render a list

copy the contents of the `data.js` in `instructor_notes` and paste it on line 1 of your `App.js`

console.log to check that it looks right

![try console.table instead of console.log](https://i.imgur.com/wo7ayxR.png)

We want to be able to see an unordered list of our product names in the browser.

React is designed to render views based on data.

Let's set up our React app.

**app.js**

```js
class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Big Time Shopping </h1>
      </div>
    )
  }
}
```

Currently, our app has no state (no view based on data). That's ok! Not all components have to have state. A simple navigation bar that is just 'hard coded' can be a react component - some components are just for presentation.

However, in the case of our online store, we'll want a list based on our data, so we will add state.

`state` is a special key word in react. In order to use it, we have to set up our `constructor` function. You cannot declare state without calling super. Try it! You'll get an error. Go back to your unit 1 notes for more details.

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: products
    }
  }
  render() {
    return (
      <div>
        <h1> Big Time Shopping </h1>
      </div>
    )
  }
}
```

We can look at our React dev tools and now see that our products are being stored in the `App` components state

![app state](https://i.imgur.com/XAxOGgh.png)

Inside the `return` of `render()` function is special. The syntax that is recognized is JSX. JSX is a mishmash of HTML and JavaScript. We can't console log inside the return, and there are few little gotchas we'll see along the way.

Much like we did in unit 2, we can embed our data in the html. Let's put the first product in there for rendering. We have to wrap what we want to render in curlies `{}`

```js
render () {
  return (
    <div>
      <h1> Big Time Shopping </h1>
      {this.state.products[0].name}
    </div>
  )
}
```

We should see the allen wrench show up.

Unlike EJS (or handlebars), we can't write for loops here. But what we can use is the `.map` function. `.map` will iterate over every item, manipulate it in some way and return the new array.

In our case, we want to make an unordered list:

```js
render () {
  return (
    <div>
      <h1> Big Time Shopping </h1>
      <ul>
        {
          this.state.products.map(product => {
            return <li>{product.name}</li>
          })
        }
      </ul>
    </div>
  )
}
```

** Note** : You'll get a message in the console

```
Warning: Each child in a list should have a unique "key" prop.
```

This a warning and you don't have to fix it. We'll learn how to fix it once we are working with data coming from a database/API.

Remember, with ES6, if our function is one line of code (and no more), we can skip the curly braces after the arrow and we can skip the return statement - it will implicitly return the one line. However, if you don't put anything on the same line as a return statement it will return undefined/null - so be sure to add at least a parenthesis on the same line as the return.

In our case, we may also want to show the price, so let's update our code:

```js
render () {
  return (
    <div>
      <h1> Big Time Shopping </h1>
      <ul>
        {
          this.state.products.map(product => {
            return(
              <li>{product.name}  {product.price}</li>
            )})
        }
      </ul>
    </div>
  )
}
```
# React State

## Learning Objectives
 - Learn about state and forms
 - Learn how to update state
 - Learn how to make one source of truth
 - Learn about events and use onChange and submit


 ## Form Inputs / Controlled Components

 HTML elements like `input` maintain their own state (this their default behavior as just plain HTML: as you enter or delete letters/characters into an input you see those letters change).

We'll need to give React control over our inputs, so that React's state will maintain the state of our inputs. That way there is one source of truth for our data (React state).

 Let's add an input
 ```js
 render () {
   return (
     <div>
     <h1> Big Time Shopping </h1>
     <form>
      <input type="text" />
     </form>
       <ul>
       {
         this.state.products.map(product => {
         return (
           <li>{product.name } | {product.price} | {product.description}</li>)}
         )
       }
       </ul>
     </div>
   )
 }
```

We can still type into this field, but we need to connect it to React.

Let's expand state to hold our input value

```js
constructor (props) {
  super(props)
  this.state = {
    products: products,
    value: ''
  }
```

Now let's tie it into our input

```js
render () {
  return (
    <div>
    <h1> Big Time Shopping </h1>
    <form>
      <input type="text" value={this.state.value}/>
    </form>
      <ul>
      {this.state.products.map(product => {
        return (
          <li>{product.name } | {product.price} | {product.description}</li>)}
        )
      }
      </ul>
    </div>
  )
}
```

If we've done it right, we won't be able to type in our form: We have set the state of the input field's value to be an empty string and currently we have no way of updating it.

React is optimized to only re-render elements that have changed/been updated. That is one its key features. We don't update state directly, rather, we use a function called `setState` to update state.

Let's code it out.

We'll add a function that allows us to update the state of our input

```js
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: products,
      value: ''
    }
  }
  handleChange(event){
    console.log(event.target.value)
  }
  // ...
  // render () {

```
And we'll call that function using the `onChange` event (we covered event listeners/handlers in unit 1 with vanilla js/jQuery - the syntax is a little different but the principals are the same).  One of the most common is click, but there are others like like mouse over, key up or key down or form submission.

```js
render () {
  return (
    <div>
    <h1> Big Time Shopping </h1>
    <form>
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
    </form>
    // ...
```

Now we can see the letters we type log in the console. They still are not updating in the input field.

We may think we can just update state directly like in the example below but we **CAN'T**.

```js
handleChange(event){
  console.log(event.target.value)
  this.state.value = event.target.value // NO!!! 
}
```

This is because we are trying to mutate state directly. React will not update the view if you mutate state directly. So you must update it using the `setState` built-in function

```js
handleChange(event){
  this.setState({ value: event.target.value })
}
```

Now if we try, we'll get an error that is something along the lines of `Cannot read property 'setState' of undefined.` This probably seems strange. Several lines below we saw we were able to access `this.state.products` inside of our render function. So why can't we access state here?

It has to do with `this` and in simple terms JavaScript `this` is defined when the function is invoked, not where it is defined. Since we are calling it inside the render function, we've changed scope and the value of `this` is different than what it should be.

You can take some time to console log the value of this between the `render()` and the `return` and then again inside the `handleChange` function to see that they are different.

We need to fix the context of `this`. To do that we have to bind the value of `this` inside the constructor. Now we'll see that our `handleChange` function has the right context. Your constructor should now look like this:

```js
constructor() {
    super()
    this.state = {
        products: products,
        value: ''
    }

    this.handleChange = this.handleChange.bind(this)
}
```

And now our input box should update!

### Updating more than one input field

It's very likely that our app will have more than one input field. We could write a `handleChange` function for every field. But that seems like a lot of work.

What would be better would be to follow the proper guidelines for creating inputs.[ Which is to use `label` elements.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) Creating forms properly, by including labels and possibly [fieldsets](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset), helps improve accessibility - especially in the case of screen readers.

[React and Web Accessibility](https://reactjs.org/docs/accessibility.html)

When we properly update our HTML with labels, we'll also end up with each input having an `id` we can match this `id` to the matching key in state and this will then make updating our input fields much easier.

Let's upgrade our product names first

```js
this.state = {
  products: products,
  name: '',
  price: 0,
  description: ''
}
```
Now, let's add a label element with the attribute `hmtlFor` - the value will match the key for the input. **Note** just like `class` is a reserved word in JavaScript, so is `for`. So we have to use the React syntax which will get rendered into the proper attribute

Then, in the input element we'll add an id that will match the for value as well.


```html
<h1> Big Time Shopping </h1>
<form>
  <label htmlFor='name'></label>
  <input type='text' value={this.state.name} onChange={this.handleChange} id='name'/>
</form>
  <ul>
```

One more step. Let's update our `handleChange` function in order to restore the functionality

```js
handleChange(event){
  this.setState({[event.target.id]: event.target.value})
}
```

### Add more fields

Adding more fields should now be a snap! This is pretty typical for React in that it takes a lot of set up to do simple things, but once you have a good base, it's much easier to build on top of it.


Let's add inputs for price and description

```html
<form>
  <label htmlFor='name'>Name</label>
  <input type='text' value={this.state.name} onChange={this.handleChange} id='name' />
  <br />
  <label htmlFor='price'>Price</label>
  <input type='number' value={this.state.price} onChange={this.handleChange} id='price' />
  <br />
  <label htmlFor='description'>Description</label>
  <input type='textarea' value={this.state.description} onChange={this.handleChange} id='description' />
  <br />
  <input type='submit' />
</form>
```

### Preview and then submit

To demonstrate state and rendering, we'll make a little preview box. Let's put this after our last input and before the start of our `ul`

```html
<div>
  <h2>Preview our new item</h2>
  <h3>Name: {this.state.name}</h3>
  <h4>Price: {this.state.price}</h4>
  <h5>Description: {this.state.description}</h5>
</div>
```

Take some time to make sure that as you update each input field, each preview gets properly updated as well.

When we are ready, we'd like to submit this new item and see it's name and price show up in our list.

### Add a new item

Once we are happy with our new item we want to submit it.

Upon submission we'll add our new item object into our array of products

Remember, form submits, by default, refresh the page. So the first thing we'll have to do is add an event listener for the submit event. Then we'll prevent the default behavior.

```html
  <form onSubmit={this.handleSubmit}>
```

```js
handleSubmit(event){
  event.preventDefault()
  console.log('you prevented the default');
}
```

You should see your console.log and it should stay. If you see it for a moment and it disappears, then you have not yet prevented the default behavior of submit.

Next, since we will be accessing `this`, we will need to bind the value of `this` for this function in the constructor

```js
constructor (props) {
  super(props)
  this.state = {
    products: products,
    name: '',
    price: 0,
    description: ''
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}
```

We'll make a new object with the correct structure for our products array. Then we'll add it to our array using ES6 syntax, rather than using a method, as recommended in [the official React documentation](https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data)

```js
handleSubmit(event){
  event.preventDefault()
  const newItem = {
    name: this.state.name,
    price: this.state.price,
    description: this.state.description
  }
  this.setState({
    products: [ ...this.state.products, newItem ],
  })
}
```
### One More Nice Touch
It would be nice to have the form reset once we have submitted our new item
```js
handleSubmit(event){
  event.preventDefault()
  const newItem = {
    name: this.state.name,
    price: this.state.price,
    description: this.state.description
  }
  this.setState({
    products: [ ...this.state.products, newItem],
    name: '',
    price: 0,
    description: ''
  })
}

```
# Intro to Conditional Rendering in React

## Learning Objectives

- Be able to describe why conditional rendering is important
- Use a ternary operator for conditional rendering

### Conditional Rendering

We may want to render different things depending on state. For example, if a product is out of stock, we may want to hide the 'add to cart' button and instead put a message that says 'sorry out of stock'.

Since our dataset is simple and we don't have stock of items, what we can do is just put a simple message that states whether or not we are hiring.
Let's add to our constructor `isHiring` and set it to true

```js
constructor (props) {
  super(props)
  this.state = {
    products: products,
    name: '',
    price: 0,
    description: '',
    isHiring: true
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}
```

We'll use a ternary operator, which is just shorthand for an `if/else` statement

The following two examples are equivalent

```js
const fact1 = true
const fact2 = false
let print

if (fact1) {
  print = 'yes, it is true'
} else {
  print = 'no, that is false'
}

console.log(print)
```

```js
let print = fact2 ? 'yes, it is true' : 'no, that is false'

console.log(print)
```

Now we can use this syntax to conditionally render the text of an h2 element:

```js
;<h1> Big Time Shopping </h1>
{
  this.state.isHiring ? (
    <h2>Yes, we are hiring </h2>
  ) : (
    <h2>Sorry, try again tomorrow</h2>
  )
}
```

### Extra, if there is time

Let's add a click event that toggles the value of our hiring.

We'll write a function

```js
toggleHiring () {
  this.setState({ isHiring: !this.state.isHiring })
}
```

and bind the value of `this` in the constructor

Finally, let's add a click event to our `h1` (we could have made a button or chosen another element as well)

```js
;<h1 onClick={this.toggleHiring}> Big Time Shopping </h1>
{
  this.state.isHiring ? (
    <h2>Yes, we are hiring </h2>
  ) : (
    <h2>Sorry, try again tomorrow</h2>
  )
}
```

[More ways to conditionally render](https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e) - caveat React updates often always check the date of articles - if something isn't working as expected, it may be that React was updated - these all should work with React 16.x

The full code for today's build:

```js
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: products,
      name: '',
      price: 0,
      description: '',
      isHiring: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleHiring = this.toggleHiring.bind(this)
  }

  handleChange(event) {
    // this.state.value = event.target.value // NO!!!
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    }
    this.setState({
      products: [...this.state.products, newItem],
      name: '',
      price: 0,
      description: ''
    })
  }

  toggleHiring() {
    this.setState({ isHiring: !this.state.isHiring })
  }

  render() {
    return (
      <div>
        <h1 onClick={this.toggleHiring}> Big Time Shopping </h1>
        {this.state.isHiring ? (
          <h2>Yes, we're hiring!</h2>
        ) : (
          <h3>Sorry, try again tomorrow </h3>
        )}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
          />
          <br />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
            id="price"
          />
          <br />
          <label htmlFor="description">Description</label>
          <input
            type="textarea"
            value={this.state.description}
            onChange={this.handleChange}
            id="description"
          />
          <br />
          <input type="submit" />
        </form>
        <div>
          <h2>Preview our new item</h2>
          <h3>Name: {this.state.name}</h3>
          <h4>Price: {this.state.price}</h4>
          <h5>Description: {this.state.description}</h5>
        </div>
        <ul>
          {this.state.products.map(product => {
            return (
              <li>
                {product.name} | {product.price} | {product.description}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
```
