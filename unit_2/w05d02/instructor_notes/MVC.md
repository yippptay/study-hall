# MVC

## Beginning with the End In Mind

1. Define MVC and explain why it matters
1. Move our data into a separate file
1. Move our presentation code into an JSX file



# Explanation
## Remember where we are going

![switch_to_jsx (1)](https://media.git.generalassemb.ly/user/15881/files/4cb02600-92e5-11ea-95c3-4a5765bb3bb9)

## Define MVC and explain why it matters

- One of the core tenants of good programming is to compartmentalize your code
- Already our code is getting a little messy
    - we have data, app instantiation (listening), and routes all in one file
- One way to keep an app from getting messy is to separate it out into three sections
    - Models
        - data (javascript variables)
    - Views
        - how the data is displayed to the user (HTML)
    - Controllers
        - the glue that connects the models with the views
- This allows various developers to divide up a large code base
    - minimizes likelihood of developers overwriting each others code
    - allows developers to specialize
        - one can focus just on getting good with dealing with data
        - one can focus just on getting good with html
        - one can focus just on getting good with connecting the two
- Think of MVC as a restaurant
    - Models are the cook
        - prepares food/data
    - Views are the customer
        - consumes food/data
    - Controllers are the waiter
        - brings food from cook to customer
        - has no idea how food/data is prepared
        - has no idea how the food/data is consumed

# All in all

![mvc-meme](https://media.git.generalassemb.ly/user/15881/files/24990200-9460-11ea-8f91-a81163b612d5)

# Demonstration

```js
// Show them an example Arthur use Blavity API or TN or A GA Project
```

# Imitation
## Move our data into a separate file

1. Create a directory called models inside our app directory
1. Inside /models, create your data file (fruits.js)
1. Put your fruits variable in there

    ```javascript
    const fruits = [
        {
            name:'apple',
            color: 'red',
            readyToEat: true
        },
        {
            name:'pear',
            color: 'green',
            readyToEat: false
        },
        {
            name:'banana',
            color: 'yellow',
            readyToEat: true
        }
    ];    
    ```

1. We now require that file in the original server.js

    ```javascript
    const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
    ```

1. But, we could have multiple variables in our /models/fruits.js file.
    - How does javascript know which variable in /models/fruits.js to assign to the fruits const in server.js (the result of the `require()` statment)?
    - We must tell javascript which variable we want to be the result of the `require()` statement in server.js

        ```javascript
        //at the bottom of /models/fruits.js
        module.exports = fruits;
        ```

## Move our presentation code into an JSX file

Now we want to move our View code (HTML) into a separate file just like we did with the data

1. Install the NPM package EXPRESS React Views, react, react-dom (This will let us make our pages appear in the dom)
    - this is a templating library that allows us to mix data into our html
    - the HTML will change based on the data!
    - `npm install express-react-views react react-dom --save`
1. Create a views directory inside our app directory
1. Inside /views, create a file called `Show.jsx` (capitalized)
    - this will be the html for our show route
1. Put some html into `Show.jsx`

    ```jsx
        const React = require('react')
        class Show extends React.Component {
           render () {
            return (
              <h1> Show Page </h1>
             );
            }
         }
         module.exports  = Show;
   
    ```
1. Now we need to go to our `Server.js` file and set up our view engine and this must be done above our routes

 ```javascript
   app.set('view engine', 'jsx');
   app.engine('jsx', require('express-react-views').createEngine());
  ```
1. Now, instead of `res.send('some text')`, we can call `res.render('Show')`
    - express will know to look inside the /views directory
    - it will send the html in the Show file as a response

        ```javascript
        app.get('/fruits/:indexOfFruitsArray', function(req, res){
            res.render('Show');
        });        
        ```

Now lets mix our data into our HTML

1. Our route is acting like the controller now.  Let's gather the data and pass it to the view

    ```javascript
    app.get('/fruits/:indexOfFruitsArray', function(req, res){
        res.render('Show', { //second param must be an object
            fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
        });
    });    
    ```

1. Access the data in the view:

    ```jsx
    const React = require('react')
    class Show extends React.Component {
      render () {
       const fruit = this.props.fruit
        return (
          <div>
          <h1> Show Page </h1>
            The {fruit.name} is {fruit.color}
            {fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
          </div>
          );
         }
       }
      module.exports  = Show;
    ```

1. Note that we place javascript inside of curly braces as soon as you put curly braces React knows you want to execute js

# parctice

 Add a Index Route
