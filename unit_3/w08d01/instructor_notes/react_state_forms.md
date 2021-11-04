# React State Forms

## Begin with the end in mind
 - Learn about state and forms
 - Learn how to update state
 - Learn how to make one source of truth
 - Learn about events and use onChange and submit

 ## State
 State is the particular view of a React component based on it's data.

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

- `cd student_examples`
- `run lets-code and lest build a quick app`
- link the `data.js` file - feel free to move it inside your directory or copy paste into `app.js`
- test that you can see your data by `console.table(products)` on the first line in app.js

## Render a list

![try console.table instead of console.log](https://i.imgur.com/wo7ayxR.png)


We want to be able to see an unordered list of our product names in the browser.

React is designed to render views based on data.

Let's set up our React app.

**app.js**

```js

console.log(products);

class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Hi there! </h1>
        <ul>
          {products.map(item => <li>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)

```

Currently, our app has no state (no view based on data). That's ok! Not all components have to have state. A simple navigation bar that is just 'hard coded' can be a react component - some components are just for presentation.

However, in the case of our online store, we'll want a list based on our data, so we will add state.

`state` is a special key word in react. In order to use it, we have to set up our `constructor` function

```js
class App extends React.Component {
  // old syntax
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     products: products
  //   }
  // }

  // new syntax
  state = {
      products: products
  }
  
  render () {
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

We can use is the `.map` function. `.map` will iterate over every item, manipulate it in some way and return the new array.

In our case, we want to make an unordered list:


```js
render () {
  return (
    <div>
      <h1> Big Time Shopping </h1>
      <ul>
        {this.state.products.map(product => <li>{product.name }</li>)}
      </ul>
    </div>
  )
}
```

Remember, with ES6, if our function is one line of code (and no more), we can skip the curly braces after the arrow and we can skip the return statement - it will implicitly return the one line. However, if you don't put anything on the same line as a return statement it will return undefined/null - so be sure to add at least a parenthesis on the same line as the return.

In our case, we may also want to show the price, so let's update our code:

```js
render () {
  return (
    <div>
      <h1> Big Time Shopping </h1>
      <ul>
        {this.state.products.map(product => {
          return (
            <li>{product.name}  {product.price}</li>)}
          )
        }
      </ul>
    </div>
  )
}
```


 ## Form Inputs / Controlled Components

 HTML elements like `input` maintain their own state (this is their default behavior as just plain HTML: as you enter or delete letters/characters into an input you see those letters change).

We'll need to give React control over our inputs, so that React's state will maintain the state of our inputs. That way there is one source of truth for our data (React state).

 Let's add an input
 ```js
 render () {
   return (
     <div>
     <h1> Big Time Shopping </h1>
     <input type="text" />
       <ul>
       {this.state.products.map(product => {
         return (
           <li>{product.name }  {product.price}</li>)}
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

 state = {
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
          <li>{product.name }  {product.price}</li>)}
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
    
  state = {
      products: products,
      value: ''
  }
  
  handleChange = (event) =>{
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

We may think we can just update state directly. Let's try it

```js
handleChange = (event) =>{
  console.log(event.target.value)
  this.state.value = event.target.value
}
```

If we do not do this, we will get an error that is something along the lines of `Cannot read property 'state' of undefined.` This probably seems strange. Several lines below we saw we were able to access `this.state.products` inside of our render function. So why can't we access state here?

It has to do with `this` and in simple terms JavaScript `this` is defined when the function is invoked, not where it is defined. Since we are calling it inside the render function, we've changed scope and the value of `this` is different than what it should be.

You can take some time to console log the value of this between the `render()` and the `return` and then again inside the `handleChange` function to see that they are different.

We need to fix the context of `this`. To do that we have to bind the value of `this` inside the constructor. Now we'll see that our `handleChange` function has the right context.


```js
constructor (props) {
  /*... */
  this.handleChange = this.handleChange.bind(this)
}
```

But we still don't get an update in our input. This is because we are trying to mutate state directly. React will not update the view if you mutate state directly. So you must update it using the `setState` built-in function

```js
handleChange = (event) =>{
  this.setState({value: event.target.value})
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
state = {
  products: products,
  name: '',
  price: 0,
  description: 'Describe this item'
}
```
Now, let's add a label element with the attribute `hmtlFor` - the value will match the key for the input. **Note** just like `class` is a reserved word in JavaScript, so is `for`. So we have to use the React syntax which will get rendered into the proper attribute

Then, in the input element we'll add an id that will match the for value as well.


```html
<h1> Big Time Shopping </h1>
<form>
  <label htmlFor="name"></label>
  <input type="text" value={this.state.name} onChange={this.handleChange} id="name"/>
</form>
  <ul>
```

One more step. Let's update our `handleChange` function in order to restore the functionality

```js
handleChange = (event) =>{
  this.setState({[event.target.id]: event.target.value})
}
```

### Add more fields

Adding more fields should now be a snap! This is pretty typical for React in that it takes a lot of set up to do simple things, but once you have a good base, it's much easier to build on top of it.


Let's add inputs for price and description

```html
<form>
  <label htmlFor='name'>Name</label>
  <input type='text' value={this.state.name} onChange={this.handleChange} id='name' placeholder='name of product' />
  <br />
  <label htmlFor='price'>Price</label>
  <input type='number' value={this.state.price} onChange={this.handleChange} id='price' />
  <br />
  <label htmlFor='description'>Description</label>
  <input type='textarea' value={this.state.description} onChange={this.handleChange} id='description' />
</form>
```

### Preview and then submit

To demonstrate state and rendering, we'll make a little preview box. Let's put this after our last input and before the start of our `ul`

```html
<div>
  <h2>Preview our new item</h2>
  <h3>{this.state.name}</h3>
  <h4>{this.state.price}</h4>
  <h5>{this.state.description}</h5>
</div>
```

Take some time to make sure that as you update each input field, each preview gets properly updated as well.

When we are ready, we'd like to submit this new item and see it's name and price show up in our list.

### Add a new item

Once we are happy with our new item we want to submit it.

Upon submission we'll `unshift` our new item object into our array of products

```html
<input type="submit" />
</form>
```

Remember, form submits, by default, refresh the page. So the first thing we'll have to do is add an event listener for the submit event. Then we'll prevent the default behavior.

```jsx
  <form onSubmit={this.handleSubmit}>
```

```js
handleSubmit = (event) =>{
  event.preventDefault()
  console.log('you prevented the default');
}
```

You should see your console.log and it should stay. If you see it for a moment and it disappears, then you have not yet prevented the default behavior of submit.

Next, since we will be accessing `this`, we will need to bind the value of `this` for this function in the constructor

```js
  state = {
    products: products,
    name: '',
    price: 0,
    description: 'Describe this item'
  }

```

We'll make a new object with the correct structure for our products array. Then we'll add it to our array using ES6 syntax, rather than using a method, as recommended in [the official React documentation](https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data)

```js
handleSubmit = (event) =>{
  event.preventDefault()
  const newItem = {
    name: this.state.name,
    price: this.state.price,
    description: this.state.description
  }
  this.setState({
    products: [ newItem, ...this.state.products],
    name: '',
    price: 0,
    description: 'Describe this item'
  })
}
```
### One More Nice Touch
It would be nice to have the form reset once we have submitted our new item
```js
handleSubmit = (event) =>{
  event.preventDefault()
  const newItem = {
    name: this.state.name,
    price: this.state.price,
    description: this.state.description
  }
  this.setState({
    products: [ newItem, ...this.state.products],
    name: '',
    price: 0,
    description: 'Describe this item'
  })
}

```
