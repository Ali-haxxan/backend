const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const Activities = require('./Activities')
const User = require('./User');

const userActivities = new Schema({
    name: {
      type: String,
      required: true, 
    },
    description: {
      type: String,
      required: true, 
    },
    activity_type:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Activities,
        required: true, 
      },
    date: {
      type: String,
      required: true, 
    },
    duration: {
      type: String,
      required: true, 
    },
    hasCompleted: {
      type: Boolean,
      required: false, 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true, 
    }
  })

  module.exports = mongoose.model('User_Activities',userActivities);
