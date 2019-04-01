const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get(
  "/",

  (req, res) => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=943d003becc08df50bf054b11efaccb1"
      )
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
