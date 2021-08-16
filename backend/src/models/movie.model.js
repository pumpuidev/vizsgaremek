const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    genre: String,
    year: {
      type: Number,
      required: true,
    },
    producer: String,
    watchlist: {
      type: Boolean,
      default: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', MovieSchema);

/*
export class Movie {
  _id: string = '';
  title: string = '';
  genre: string = '';
  year: number = 0;
  producer: string = '';
  watchlist: boolean = true;
}
*/