
const express = require('express');

//DEPLOYMENT
const app = express();
const port = 3000; 
const PORT = process.env.PORT || 3000;

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

const config = require('./config');
const { Pool } = require('pg');

async function connectToPostgres() {
    try {
        const username = await config.getSecret("postgres-username-secret-name");
        const password = await config.getSecret("postgres-password-secret-name");
        const url = await config.getSecret("postgres-url-secret-name");

        const connectionString = `postgres://${username}:${password}@${url}`;

        const pool = new Pool({
            connectionString: connectionString
        });

        pool.query('SELECT NOW()', (err, res) => {
            if (err) {
                console.error('Error connecting to PostgreSQL:', err);
            } else {
                console.log('Connected to PostgreSQL:', res.rows[0].now);
            }
            pool.end();
        });
    } catch (error) {
        console.error('Error retrieving PostgreSQL credentials from Key Vault:', error);
    }
}

// Test etmek için uygulamayı çalıştır
connectToPostgres();


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});