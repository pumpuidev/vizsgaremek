const fsp = require('fs').promises;
const User = require('../models/user.model');
const Movie = require('../models/movie.model');
const Actor = require('../models/actor.model');
const Director = require('../models/director.model');
const Rating = require('../models/rating.model');


// const Product = require('../models/product.model');


const seedCollection = async (model, fileName) => {
    try {
        const exists = await model.find().count();
        if (!exists) {
            throw new Error();
        }
    } catch (e) {
        const source = await fsp.readFile(
            `./src/seed/${fileName}.json`, 
            'utf8'
        );
        const list = JSON.parse(source);
        if (model && model.insertMany) {
            await model.insertMany(list, {limit: 100});
        }
    }
};

( async () => {

  

    // seedCollection(Product, 'products');
    // seedCollection(Race, 'races');
    // seedCollection(Service, 'services');

	seedCollection(User, 'users');
    seedCollection(Movie, 'movies');
    seedCollection(Actor, 'actors');
    seedCollection(Rating, 'ratings');
    seedCollection(Director, 'directors');

})();
