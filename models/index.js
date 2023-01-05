const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.activies = require("./activies.model");
db.user_activities = require("./user_activities.model");

module.exports = db;
