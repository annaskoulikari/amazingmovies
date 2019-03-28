const express = require("express");
const bodyParser = require("body-parser");

const movies = require("./routes/movies");
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

app.use("/movies", movies);
