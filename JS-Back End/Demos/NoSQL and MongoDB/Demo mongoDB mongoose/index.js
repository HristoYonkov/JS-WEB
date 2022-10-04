const express = require('express');
const hbs = require('express-handlebars');
const app = express();

const movieController = require('./controllers/movieController');

// ---------------- ADD the database!!!...
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movies')
    .then(() => {
        console.log('DB Connected!');
    }).catch((err) => {
        console.log('DB Error: ', err);
    })

// ---------------- ADD the database!!!...

app.use(express.urlencoded({extended: false}));

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home');
});

app.use('/movies', movieController);


app.listen(3000, () => console.log('Server is listening on port 3000'));