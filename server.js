const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/storyRoutes")
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));
app.use(routes)
mongoose.Promise = Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/myna"
);

app.listen(PORT, () => {
    console.log(`Now listening on PORT ${PORT}`)
})