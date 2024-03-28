
const express = require('express');


const app = express();
const port = 3000; 

//practice
app.get('/func1', (req, res) => {
    res.send('my initial function');
});

app.get('/hello', (req, res) => {
    res.send('hellooo');
});

//bye branchi ile merge edilerek gelmiş fonksiyonlar
app.get('/bye', (req, res) => {
    res.send('goodbye');
});


app.get('/bye2', (req, res) => {
    res.send('goodbyeeee');
});

//new line added.

//feature branch fonksiyonları
app.get('/f1', (req, res) => {
    res.send('new feature in this app');
});


app.get('/f2', (req, res) => {
    res.send('new feature2 here'); //this function changed
});
// new line added from (feature branch)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});