const express = require("express");
const app = express();
const cors = require('cors');

//importacion local
const crudRoutes = require("./routes/crudRoutes")

//setings
app.set('port', process.env.PORT || 4000)


// middlewares
app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//routes
app.use('/', crudRoutes)

module.exports = app;
