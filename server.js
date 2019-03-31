const express = require("express");
const config = require("config");

const mongoose = require("mongoose");

const cors = require("cors");
const app = express();

//DB Config
const db = config.get("mongoURI");

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
