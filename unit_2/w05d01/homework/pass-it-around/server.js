const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log('listening on ' + port));

app.get('/', (req, res) => {
    res.send(`
        <h1>99 Bottles of beer on the wall</h1>
        <a href="/98">take one down, pass it around</a>
    `)
});

app.get('/:numberBottles', (req, res) => {
    if (req.params.numberBottles <= 0) {
        res.send(`
            <h1>0 Bottles of beer on the wall</h1>
            <a href="/">Start over</a>
        `)
    } else {
        const currentPage = req.params.numberBottles;
        const nextPage = currentPage - 1;

        res.send(`
            <h1>${currentPage} Bottles of beer on the wall</h1>
            <a href="/${nextPage}">Take one down, pass it around</a>
        `)
    }
})