# Intro to Conditional Rendering in React Revisited

## Beginning with the end in mind
 - Be able to describe why conditional rendering is important
 - Use a ternary operator for conditional rendering

### Conditional Rendering

We may want to render different things depending on state. For example, if a product is out of stock, we may want to hide the 'add to cart' button and instead put a message that says 'sorry out of stock'.

Since our dataset is simple and we don't have stock of items, what we can do is just put a simple message that states whether or not we are hiring.
Let's add to our constructor `isHiring` and set it to true

```js
  state = {
    products: products,
    name: '',
    price: 0,
    description: 'Describe this item',
    isHiring: true
  }

```
We'll use a ternary operator, which is just shorthand for an `if/else` statement

The following two examples are equivalent

```js
 const fact1 = true
 const fact2 = false
 let print;

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

<h1> Big Time Shopping </h1>
 {!this.state.isHiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}
```

### Extra, if there is time

Let's add a click event that toggles the value of our hiring.

We'll write a function

```js
toggleHiring = () => {
  this.setState({isHiring: !isHiring})
}
```

and bind the value of `this` in the constructor

Finally, let's add a click event to our `h1` (we could have made a button or chosen another element as well)

```js
<h1 onClick={this.toggleHiring}> Big Time Shopping </h1>
 {!this.state.isHiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}
```

[More ways to conditionally render](https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e) - caveat React updates often always check the date of articles - if sometng isn't working as expected, it may be that React was updated - these all should work with React 16.x


The full code for today's build:


```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { products } from '../main.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			products: products,
			name: '',
			description: '',
			price: 0,
			isHiring: true
		};
	}
	handleChange = event => {
		this.setState({
			[event.currentTarget.id]: event.currentTarget.value
		});
	};
	handleSubmit = event => {
		event.preventDefault();
		const newProduct = {
			name: this.state.name,
			description: this.state.description,
			price: parseFloat(this.state.price)
		};
		const copyOfProducts = [newProduct, ...this.state.products];
		this.setState({
			products: copyOfProducts,
			name: '',
			description: '',
			price: 0
		});
	};
	toggleHiring = () => {
		this.setState({isHiring: !this.state.isHiring})
	  }
	render() {
		return (
			<div className="main-app">
				<h1 
					className="main-app__title"
					onClick={this.toggleHiring}
					>
						Big Time Shopping
					</h1>
					{
          			this.state.isHiring
          			? <h2> Yes, we are hiring </h2>
          			: <h2> Sorry, try again tomorrow </h2>
        			}

				<ul className="main-app__products">
					{this.state.products.length > 0
						? this.state.products.map((product, index) => {
								return (
									<li className="main-app__products--item" key={index}>
										<span>{product.name}</span>
										<span>{product.price}</span>
									</li>
								);
						  })
						: `There are no product here `}
				</ul>
				<h3>Add your item below</h3>
				<form className="main-app__form" onSubmit={this.handleSubmit}>
					<input
						type="text"
						id="name"
						value={this.state.name}
						onChange={this.handleChange}
					></input>
					<input
						type="text"
						id="description"
						value={this.state.description}
						onChange={this.handleChange}
					></input>
					<input
						type="text"
						id="price"
						value={this.state.price}
						onChange={this.handleChange}
					></input>
					<input type="submit" value="add item"></input>
				</form>
				<div className="main-app__display">
					<h3>See Your New Item Below</h3>
					<div className="main-app__display--item">{this.state.name}</div>
					<div className="main-app__display--item">
						{this.state.description}
					</div>
					<div className="main-app__display--item">{this.state.price}</div>
				</div>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);


```
