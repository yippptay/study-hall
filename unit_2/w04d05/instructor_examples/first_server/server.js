const express = require('express')
const app = express()
const anagrams = require('./anagram.js')
const path = require('path')



app.get('/',(req, res) => {
    //res.sendFile('./index.html')
    // const thing ="yay"
    // res.send(`<h1>Hello World ${thing}</h1>`)
    res.sendFile('index.html', {root: path.join(__dirname)})
})

/*
const runagram = (string1, string2)=> {
  console.log(string1)
  console.log(string2)
  return anagrams(string1, string2)
}
 $('#thing').on('click', runanagram)
*/


app.get('/anagrams/:string1/:string2', (req,res)=> {
    console.log(`:string1 becomes ${req.params.string1}`)
    console.log(`:string2 becomes ${req.params.string2}`)
    console.log(req.params)
    console.log(anagrams)
    res.send(anagrams(req.params.string1, req.params.string2))
})

// Add
app.get('/add/:num1/:num2', (req, res)=> {
    const num1 = parseInt(req.params.num1, 10)
    const num2 =  parseInt(req.params.num2, 10)
    const ans = num1 + num2
    res.send({
        ans: ans
    })
})

app.get('/sayHello', (req, res)=> {
    res.send('Hello From Express')
})

app.listen(3000, () => {
 console.log("Hey I'm awesome i made a simple server")
})


