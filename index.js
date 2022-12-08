require("dotenv").config();
require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playListRoutes = require("./routes/playLists");
const searchRoutes = require("./routes/search");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users/", userRoutes);
app.use("/api/login/", authRoutes);
app.use("/api/songs/", songRoutes);
app.use("/api/playlists/", playListRoutes);
app.use("/api/", searchRoutes);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}...`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
