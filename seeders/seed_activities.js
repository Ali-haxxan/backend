const Activities = require("../models/Activities.js");
const mongoose = require("mongoose");
const activities = [
  new Activities({
    name: "Walk",
    src: "asset/img/walking.png"
  }),
  new Activities({
    name: "Run",
    src: "asset/img/running.png"
  }),
  new Activities({
    name: "Bicycle Ride",
    src: "asset/img/bicycling.png"
  }),
  new Activities({
    name: "Hike",
    src: "asset/img/hiking.png"
  }),
  new Activities({
    name: "Swim",
    src: "asset/img/swiming.png"
  }),
];

const seedData = async () => {
  try {
    await Activities.deleteMany({});
    await Activities.insertMany(activities);
  } catch (err) {
    console.error(err);
  }

  console.log("Activities are seeded Succeessfully!");
};
module.exports = seedData