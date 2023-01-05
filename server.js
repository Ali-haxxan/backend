const express = require('express');
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();
const bodyParser = require('body-parser');
const connectDB = require("./config/db.config");
const seedData = require('./seeders/seed_activities');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
connectDB();

var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); 

app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

app.use('/user',require('./routes/userRoutes'));
// app.use('/', router);
mongoose.connection.once('open',()=>{
  console.log("Connected to MongDB!");
  // seedData();
  app.listen(process.env.PORT || 5001, () => {console.log(`Application started and Listening on port http://127.0.0.1:${process.env.PORT}`)});
})
