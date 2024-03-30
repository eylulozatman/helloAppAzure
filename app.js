
const express = require('express');

//DEPLOYMENT
const app = express();
const port = 3000; 

app.get('/', (req, res) => {
    res.send('my initial function, Hello');
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


// new line added from (feature branch)


//f2 endpoint deleted

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});