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



app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
})


