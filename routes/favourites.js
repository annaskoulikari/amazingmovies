const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const User = require("../models/User");

router.get("/:user", (req, res) => {
  console.log("these should be params", req.params);
  User.findOne({ _id: req.params.user })
    .then(user => res.send(user.favourite_movies))
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", auth, (req, res) => {
  console.log("this is req.body", req.body);
  User.findOne({ _id: req.body.user })
    .then(user => {
      if (user.favourite_movies.some(e => e.id === req.body.addMovie.itemID)) {
        console.log("this movie already exists");
      } else {
        user.favourite_movies.push({
          id: req.body.addMovie.itemID,
          poster_path: req.body.addMovie.itemPosterPath,
          title: req.body.addMovie.itemTitle,
          overview: req.body.addMovie.itemOverview,
          release_date: req.body.addMovie.itemReleaseDate
        });

        user.save();

        res.send(user.favourite_movies);
      }
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete("/:itemID/:user", auth, (req, res) => {
  console.log(req.params);
  User.findOne({ _id: req.params.user })
    .then(user => {
      user.favourite_movies.pull({ _id: req.params.itemID });
      user.save();
      return user;
    })
    .then(user => res.send(user.favourite_movies))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
