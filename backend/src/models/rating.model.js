const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
    movie: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    favourite: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Rating', RatingSchema);
