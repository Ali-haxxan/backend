const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activities = new Schema({
    name: String,
  });

module.exports = mongoose.model('Activities',activities);

