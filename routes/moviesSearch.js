const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post(
  "/",

  (req, res) => {
    const searchTerm = req.body.searchTerm;
    axios
      .post(
        `https://api.themoviedb.org/3/search/movie?api_key=943d003becc08df50bf054b11efaccb1&query=${searchTerm}`
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
