/* eslint-disable no-unused-vars */
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`public`));
app.use('/images', express.static('images'));
app.use(express.static(path.join(__dirname, 'map')));


app.get("/", (req, res) => {
    res.render("home");

})


app.get("/map", (req, res) => {
    res.sendFile(path.join(__dirname, 'map', 'index.html'));

})



app.listen(3000, (req, res) => {
    console.log("The server is running on port 3000");
})


