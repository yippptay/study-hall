// DEPENDENCIES ===============
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

// GREETINGS ROUTES ===============
app.get('/greeting', (req, res) => {
    res.send(`Hello, Stranger!`);
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`)
})

// TIP CALCULATOR ROUTES ===============
app.get('/tip/:num1/:num2', (req, res) => {
    const tip = (req.params.num2 / req.params.num1) * 100;
    res.send(`$${tip}`);
})

// MAGIC 8 BALL ROUTES ===============
app.get('/magic/:question', (req, res) => {
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    res.send(`${req.params.question}? <h1>${randomResponse}</h1>`)
})