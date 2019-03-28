const express = require("express");
const router = express.Router();

router.get(
  "https://api.themoviedb.org/3/trending/movie/week?api_key=943d003becc08df50bf054b11efaccb1",
  (req, res) => {
    res.send();
    console.log("you reached backend route");
  }
);

module.exports = router;
