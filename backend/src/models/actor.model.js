const mongoose = require('mongoose');

const ActorSchema = mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    movie: String,
    alive: {
      type: Boolean,
      default: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Actor', ActorSchema);

/*
{"firstName":"Clélia","lastName":"Butler","year":2009,"movie":"Cellular","alive":false},

*/