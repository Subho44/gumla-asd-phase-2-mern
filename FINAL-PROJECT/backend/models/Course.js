const mongoose = require("mongoose");

const courseschema = new mongoose.Schema({
    title: String,
    price: Number
});

module.exports = mongoose.model("Course-asd", courseschema);