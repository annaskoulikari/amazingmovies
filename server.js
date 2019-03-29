const express = require("express");
const bodyParser = require("body-parser");
const moviesSearch = require("./routes/moviesSearch");
const movies = require("./routes/movies");
const people = require("./routes/people");
const tv = require("./routes/tv");

const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

//Bodyparser Middleware
app.use(bodyParser.json());

// Use Routes

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use("/moviesSearch", moviesSearch);
app.use("/movies", movies);
app.use("/people", people);
app.use("/tv", tv);
