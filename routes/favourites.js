const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const User = require("../models/User");

router.post("/", auth, (req, res) => {
  //first we need to find the right user

  //   const newMovie = {
  //     id: req.body.itemID,
  //     backdrop_path: req.body.itemBackdropPath,
  //     title: req.body.itemTitle,
  //     overview: req.body.itemOverview,
  //     release_date: req.body.itemReleaseDate
  //   };

  //   console.log("this is newMovie Object", newMovie);

  //   User.update({ _id: req.body.id }, { $push: { favourite_movies: newMovie } });

  User.findOne({ _id: req.body.user }).then(user => {
    //   if(user.favourites.includes(req.body.itemID)){   res.status(401).json({
    //     message: "favourite already exists in array"}
    user.favourite_movies.push({
      id: req.body.itemID,
      backdrop_path: req.body.itemBackdropPath,
      title: req.body.itemTitle,
      overview: req.body.itemOverview,
      release_date: req.body.itemReleaseDate
    });
    user.save();
  });

  //   User.findOne({ _id: req.body.user }).then(user => {
  //     user.favourite_movies.push({ newMovie });
  //     user.save();
  //   });

  // then we need to save the new movie to the favourites

  // then we need to return and res.send all the favourites back to frontend
});

module.exports = router;
