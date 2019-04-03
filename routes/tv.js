const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

const apikey = process.env.APIKEY;

router.get(
  "/",

  (req, res) => {
    axios
      .get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apikey}`)
      .then(response => {
        return response.data;
      })
      .then(response => res.send(response))
      .catch(err => {
        console.log(err);
      });
  }
);

module.exports = router;
