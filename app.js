require('dotenv').config();
const express = require('express');
const config = require('./config');
const { Pool } = require('pg');

const app = express();
const port = 3000;

//DEPLOYMENT

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

async function connectToPostgres() {
    try {
        // Key Vault'tan gizli bilgileri al
        const url = await config.getSecret("url");
        const username = await config.getSecret("username");
        const password = await config.getSecret("password");

        // PostgreSQL bağlantı dizesini oluştur
        const connectionString = `postgres://${username}:${password}@${url}`;

        // PostgreSQL havuzu oluştur
        const pool = new Pool({
            connectionString: connectionString
        });

        // PostgreSQL'e bağlan ve sorguyu gerçekleştir
        const client = await pool.connect();
        const result = await client.query('SELECT NOW()');
        console.log('Connected to PostgreSQL:', result.rows[0].now);

        // Bağlantıyı serbest bırak
        client.release();
    } catch (error) {
        console.error('Error connecting to PostgreSQL:', error);
    }
}

// Test etmek için PostgreSQL bağlantısını gerçekleştir
connectToPostgres();


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
