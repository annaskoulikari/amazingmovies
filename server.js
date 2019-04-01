const express = require("express");
const config = require("config");
require("dotenv").config();

const mongoose = require("mongoose");

const cors = require("cors");

const path = require("path");
const app = express();

//DB Config

// const db = config.get("mongoURI");
const db = process.env.MONGOURI;

const port = process.env.PORT || 5000;
//
//Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

//Bodyparser Middleware
app.use(express.json());

// Use Routes
app.use("/moviesSearch", require("./routes/moviesSearch"));
app.use("/movies", require("./routes/movies"));
app.use("/people", require("./routes/people"));
app.use("/tv", require("./routes/tv"));
app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));
app.use("/favourites", require("./routes/favourites"));

//serve static assets if we are in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
