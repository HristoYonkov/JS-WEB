const express = require('express');
const hbs = require('express-handlebars');
const app = express();

// ---------------- ADD the database!!!...
const { MongoClient } = require('mongodb'); // Taking the mongo client trough the driver
const client = new MongoClient('mongodb://localhost:27017');
client.connect()
    .then(() => {
        console.log('DB connected successfully!');
    });
const dB = client.db('local');         // Name of database
const moviesDB = dB.collection('startup_log');   // Name of collection
// ---------------- ADD the database!!!...

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/movies', async (req, res) => {
    let movies = await moviesDB.find();
    res.json(movies);
});


app.listen(3000, () => console.log('Server is listening on port 3000'));