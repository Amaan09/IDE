var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const Editor = require("./editor/editor");
const mongoose = require("mongoose");
var methodOverride = require('method-override');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose.connect("mongodb://localhost:27017/ide", { useNewUrlParser: true });

var editorRoutes = require("./editor/editorController");
app.use("/editor", editorRoutes);

app.get("/", (req,res) => {
    Editor.find({}, (err, editors) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render("landing",{editors: editors});
        }
    });
});



app.listen(process.env.PORT || 3000, () => {
    console.log("Server Started !");
});
