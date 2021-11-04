// ===================
// DEPENDENCIES
// ===================
const express = require('express')
const app = express()
const port = 3000 

// ===================
// CONFIGURATION
// ===================
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

// ===================
// DATA
// ===================
const Budget = require('./models/budget.js')

// ===================
// ROUTES
// ===================
// index
app.get('/budgets',  (req, res) => {
    // initialize bank account 
    let bankAccount = 0
    // loop through budget data 
    for (const budget of Budget) {
        bankAccount += budget.amount
    }
    res.render('Index', {
        budgets: Budget,
        bankAccount
    })
})
// new 
app.get('/budgets/new', (req, res) => {
    res.render('New')
})

// show 
app.get('/budgets/:id', (req, res) => {
    res.render('Show',  {
        budget: Budget[req.params.id]
    })
})

// post 
app.post('/budgets', (req, res) => {
    req.body.amount = parseInt(req.body.amount)
    Budget.push(req.body)
    res.redirect('/budgets')
})

// ===================
// LISTENER
// ===================
app.listen(port, () => {
    console.log('Listening on port ', port)
})