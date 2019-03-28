const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get(
  "/",

  (req, res) => {
    // res.send();

    axios
      .get(
        // "https://api.themoviedb.org/3/trending/movie/week?api_key=943d003becc08df50bf054b11efaccb1"
        "https://api.themoviedb.org/3/search/movie?api_key=943d003becc08df50bf054b11efaccb1&query=marvel"
      )
      .then(response => {
        return response.data;
      })
      .then(response => res.send(response));

    console.log("you reached backend route");
  }
);

module.exports = router;
