const express = require("express");
const bodyParser = require("body-parser");

const movies = require("./routes/api/movies");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// Use Routes

// app.use("/api/movies", movies);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
