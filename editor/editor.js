var mongoose = require("mongoose");

var editorSchema = new mongoose.Schema({
    filename    : String,
    html        : String,
    css         : String,
    js          : String
});

module.exports = mongoose.model("Editor", editorSchema);