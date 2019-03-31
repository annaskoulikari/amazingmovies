const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const FavouriteSchema = new Schema({
  id: {
    type: Number
    // required: true
  },
  poster_path: {
    type: String
    // required: true
  },
  title: {
    type: String
    // required: true
  },
  overview: {
    type: String
    // required: true
  },
  release_date: {
    type: String
    // required: true
  }
});

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favourite_movies: [FavouriteSchema]
});

module.exports = User = mongoose.model("user", UserSchema);
