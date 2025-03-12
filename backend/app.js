const express = require("express");
const bodyParser = require("body-parser");

const placeRputes = require("./routes/places-routes");

const app = express();

app.use("/api/places", placeRputes);

app.listen(5000);
