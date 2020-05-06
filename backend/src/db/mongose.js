const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
    if (isConnected) {
        console.log('=> using existing database connection');
        return Promise.resolve();
    }
    console.log('=> using new database connection');
    return mongoose.connect('mongodb://animalcatalogue:animalcatalogue1@ds263248.mlab.com:63248/animal-catalogue').then(db => {
        isConnected = db.connections[0].readyState;
    });
};
