const router = require('express').Router();
const { Movie } = require('../models/Movie');

router.get('/', async (req, res) => {
    const moviesResult = await Movie.find();
    
    moviesResult.forEach(m => {
        console.log(m.getInfo());
        console.log(m.isNew);
    });

    
    const movies = await Movie.find().lean();
    res.render('movies', { movies });
});

router.get('/create', (req, res) => {
    res.render('createMovie');
});

router.get('/:movieId', async (req, res) => {     
    console.log('We are HERe!');              // CRUD ----> Read opearation!
    // let movie = await Movie.findOne({_id: req.params.movieId}).lean();
    let movie = await Movie.findById(req.params.movieId).lean();
    
    console.log(movie);
    res.render('movieDetails', {movie});
});


router.post('/create', async (req, res) => {
    console.log(req.body);
    // First way to create DB document---------------

    // const movie = new Movie(req.body);
    // movie.title = req.body.title
    // movie.description = req.body.description
    // movie.year = req.body.year
    // let savedMovie = await movie.save();

    // Second way to create a DB document------------
    let savedMovie = await Movie.create(req.body);

    
    res.redirect('/movies');
});

module.exports = router;