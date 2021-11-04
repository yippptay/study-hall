# NOVA Class SOP for SSR MERN STACK APP


# Step 1

1. Create a directory for the app in student_examples called fruits-jsx-mongoose and cd into it
1. touch server.js
1. npm init -y
1. npm i express express-react-views react react-dom
1. Edit package.json to have "main": "server.js", and the dev script

--
```json

{
  "name": "fruits-jsx-mongoose",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "express-react-views": "^0.11.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  }
}

```

--

# Step 2 Set Up Express in our Server.js

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.listen(3000, ()=>{
    console.log('listening');
});

```

# Step 3 add our model and views folder add our middleware and create our model 
1. run mkdir views models in the terminal
1. add all necessary views using JSX ( Leave them blank at first or just put Hello World Text)
1. Index.jsx
1. New.jsx
1. Edit.jsx
1. Show.jsx
1. layouts/Default.jsx (any name is ok)
1. add mongoose with npm i mongoose

### Example Placeholder JSX File

```jsx
const React = require('react');

class Index extends React.Component {
  render() {
    return (
        <div>
           Hello World
        </div> );
  }
}

module.exports = Index;

```

then 

```javascript

/* Set Up Express*/
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection; 
const show = console.log
 /* Middleware */
app.use(express.urlencoded({extended: true})); // cant use req.body without it
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect('mongodb://localhost:27017/NAMEOFDATABASE', {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true})
db.once('open', ()=> {
    show('everything is awesome')
})

```

add a model in your models folder and require it in server.js example


```javascript
const {Schema, model} = require('mongoose');

const fruitSchema = new Schema({
    name: {type: String, required: true },
    color: {type: String, required: true},
    readyToEat: Boolean
}, { timestamps: true})
// This is what each of our documents will look like
/* {
"_id": 5cdjsaopdhjcaophcdoiqhdcf,
name: "apple",
color: "blue",
readToEat: true,
createdAt: sometimestamp
} */

module.exports = model('Fruit', fruitSchema) // This creates our Collection in MongoDB after we actually connect to the DB 

// module.exports = Fruit;

```



# Step 4 Create routes that render each view and supply it with the correct Data


``` javascript
// example routes

/* Set Up Express*/
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection; 
const show = console.log
const Fruit = require('./models/fruits.js')
 /* Middleware */
app.use(express.urlencoded({extended: true})); // cant use req.body without it
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect('mongodb://localhost:27017/basiccrud', {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true})
db.once('open', ()=> {
    show('everything is awesome')
})


/* Presentational Routes */

app.get('/', (req, res)=> {
    res.send(`<a href="/fruits"> Continue to Fruits</a>`)
})
app.get('/fruits', (req, res)=> {
    // below first we will try to find all of our fruits
    // Then after we either find all fruits or get an error we will run our callback
    const thisRunsNext = (error, allFruits) => {
        show('Hey I ran after find happened')
        if(error){
            show(error)
        } else {
            const props = {
                fruits: allFruits
            }
            res.render('Index', props)
        }
    }
    Fruit.find({}, thisRunsNext)
})

// New
app.get('/fruits/new', (req,res)=> {
    res.render('New')
})

// Seed

app.get('/fruits/seed', (req, res)=> {
 Fruit.create([
    {
        name:'grapefruit',
        color:'pink',
        readyToEat:true
    },
    {
        name:'grape',
        color:'purple',
        readyToEat:false
    },
    {
        name:'avocado',
        color:'green',
        readyToEat:true
    }
 ], (error, newFruits)=> {
     res.redirect('/fruits')
 })
})

// Show

app.get('/fruits/:id', (req, res) => {
    // req.params.id was set by the line above's :id
 Fruit.findById(req.params.id, (error, foundFruit)=> {
     if(error){
         show(error)
     } else {
         res.render('Show', {
             fruit: foundFruit
         })
     }
 } )
})




/* Functional Routes */
app.post('/fruits', (req, res) => {
    console.log('This is the body before we change it')
    console.log(req.body);
    // if(req.body.readyToEat === 'on'){
    //     req.body.readyToEat = true
    // } else {
    //     req.body.readyToEat = false 
    // }

    req.body.readyToEat === "on"? 
        req.body.readyToEat = true:
        req.body.readyToEat = false;
    console.log('This is the body after we change it')
    console.log(req.body)
    Fruit.create(req.body, (error, createdFruit)=> {
        if(error){
            show(error)
        } else {
            res.redirect('/fruits')
        }
    })
})


/* Listening on Port*/
app.listen(3000, ()=>{
    console.log('listening');
});

```


Step 5 In your JSX Views use the data.

Build them in this order
- New First because it doesn't need data to render
- Index Second
- Show Third
- Seed Fourth
- Then Delete, Edit and Update because of how they work


## New.jsx Example

```jsx

const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Fruit page</h1>
            <nav>
                <a href="/fruits"> Go Back to Index</a>
            </nav>
            <form action="/fruits" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                <input type="submit" name="" value="Create Fruit"/>
             </form>
        </div>);
  }
}

module.exports = New;
```

### Index.jsx example

```jsx
const React = require('react');

class Index extends React.Component {
  render() {
    return (
        <div>
            <h1>Fruits index page</h1>
            <nav>
                <a href="/fruits/new">Create a New Fruit</a>
            </nav>
            <ul>
                {
                   this.props.fruits.map((fruit, i) => {
                    return (
                        <li>
			{/* Link to Show Route Below  and we use the fruits id not the array index*/}
                        The <a href={`/fruits/${fruit._id}`}>{ fruit.name }</a> is { fruit.color }
                        { fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
                        </li>
                        )
                    })
                }
            </ul>
        </div> );
  }
}

module.exports = Index;

```

### Example Show


``` jsx
const React = require('react');

class Show extends React.Component {
    render(){
        return (
            <div>
                <h1>Fruits show page</h1>
                <nav>
                    <a href="/fruits">Back to Home</a>
                </nav>
                The { this.props.fruit.name } is { this.props.fruit.color }
        { this.props.fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
            </div>
        )
    }
}
module.exports = Show;
```
