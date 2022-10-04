const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Movie title is required!'],
        minLength: 2,
        maxLength: 20
    },
    description: String,
    imageUrl:  String,
    year: {
        type: Number,
        min: [1888, 'The year {VALUE} should be higher than 1888'],
        max:2023
    },
    genre: {
        type: String,
        enum: ['action', 'comedy', 'thriller', 'fantasy']
    }
});


// movieSchema.method.getInfo = function () {                       // Adding a model methods...
    //     return `${this.title} - ${this.description || 'n/a'}`  
    // }
    
    movieSchema.methods.getInfo = function () {                     // Adding a model methods...
        return `${this.title} - ${this.description || 'n/a'}`
    }

    movieSchema.virtual('isNew')
        .get(function() {                   // Adding or set Virtual Properties
            return this.year >= 2020
        })
        .set(function(value) {

        })

    movieSchema.path('title').validate(function () {
        return this.title.length >= 2 && this.title.length <= 20;
    }, `Movie title should be less than 20 and more than 2!`);
    
    const Movie = mongoose.model('Movie', movieSchema);
    
    //module.exports = Movie; // Default export

    exports.Movie = Movie; // Named export