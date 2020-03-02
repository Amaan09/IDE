const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Editor = require("./editor");
var bodyParser = require('body-parser');
var FileSaver = require('file-saver');
var methodOverride = require('method-override');
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get("/", (req, res) => {
    res.render("home");
});

router.post("/", (req, res) => {
    var text = {
        html: req.body.html,
        css: req.body.css,
        js: req.body.js,
        filename: req.body.filename
    }
    Editor.create(text, (err, newText) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render("home");
        }
    });
});

router.get("/:id", (req, res) => {
    Editor.findById(req.params.id, (err, foundEditor) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render("view",{editor:foundEditor});
        }
    });
});

router.delete("/:id",function (req, res) {
    Editor.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/");
        }
        else {
            res.redirect("/");
        }
    });
});

module.exports = router;