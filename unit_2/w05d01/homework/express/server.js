const express = require('express');
const app = express();
const port = 3000;
const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/greeting/:name', (req, res)=>{
    const name = req.params.name
    res.send(`Hello, ${name}! It's so great to see you!`)
})

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    const tip = req.params.total
    const percent = req.params.tipPercentage
    res.send(`You should tip $${tip * (percent/100)}`)
})

app.get('/magic/Will%20I%20be%20a%20Millionaire', (req, res)=>{
    const randomResponse = responses[Math.floor(Math.random()*responses.length-1)]
    res.send(`
    <h1>Will I be a Millionaire?</h1>
    <h1>${randomResponse}</h1>
    `)
})

app.listen(port, (req, res)=>{
    console.log('Listening...')
})