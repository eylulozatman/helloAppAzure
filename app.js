
const express = require('express');


const app = express();
const port = 3000; 

app.get('/func1', (req, res) => {
    res.send('my initial function');
});

app.get('/hello', (req, res) => {
    res.send('hellooo');
});

app.get('/bye', (req, res) => {
    res.send('goodbye');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});