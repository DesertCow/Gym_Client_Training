//* Event Seeding File
//*

const mongoose = require('mongoose');
const EventMongo = require('../../models/EventMongo');


const EventsSeed = [
  {
    // start: moment().toDate(),
    // start: moment("09/28/2023", "MM/DD/YYYY"),
    title: "Daily Workout",
    start: new Date("2023-09-25T05:00:00.000"),
    end: new Date("2023-09-25T07:00:00.000"),
    // end: moment()
    //   .add(0, "days")
    //   .toDate(),
    desc: 'Workout Information',
    eventID: "64b7e6298acc0966613ae6d1"
  },
  {
    title: "Daily Workout",
    start: new Date("2023-09-26T05:00:00.000"),
    end: new Date("2023-09-26T07:00:00.000"),
    desc: 'Workout Information',
    eventID: "64b7e6298acc0966613ae6d2"
  },
  {
    title: "Daily Workout",
    start: new Date("2023-09-27T05:00:00.000"),
    end: new Date("2023-09-27T07:00:00.000"),
    desc: 'Workout Information',
    eventID: "64b7e6298acc0966613ae6d3"
  },
  {
    title: "Daily Workout",
    start: new Date("2023-09-28T05:00:00.000"),
    end: new Date("2023-09-28T07:00:00.000"),
    desc: 'Workout Information',
    eventID: "64b7e6298acc0966613ae6d4"
  },
  {
    title: "Daily Workout",
    start: new Date("2023-09-29T05:00:00.000"),
    end: new Date("2023-09-29T07:00:00.000"),
    desc: 'Workout Information',
    eventID: "64b7e6298acc0966613ae6d5"
  },
];

const seedEventDB = async () => {
  // console.log("seedEventDB Function Start!")
  await EventMongo.deleteMany({});
  await EventMongo.insertMany(EventsSeed);
};

module.exports = seedEventDB;

//!========================= EOF =========================