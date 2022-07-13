const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

// order of these lines is important
require("./models/User");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5001;

app.listen(PORT);
