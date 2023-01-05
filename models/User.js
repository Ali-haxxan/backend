const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userScheema = new Schema({
    fullname: {
      type: String,
      required: true, 
    },
    email: {
      type: String,
      required: true, 
    },
    phone: {
      type: String,
      required: false, 
    },
    city: {
      type: String,
      required: false, 
    },
    country: {
      type: String,
      required: false, 
    },
    password: {
      type: String,
      required: true, 
    },
    refreshToken: String
  });

module.exports = mongoose.model('User',userScheema);
