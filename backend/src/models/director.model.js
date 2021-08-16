const mongoose = require('mongoose');

const DirectorSchema = mongoose.Schema({
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

module.exports = mongoose.model('Director', DirectorSchema);

