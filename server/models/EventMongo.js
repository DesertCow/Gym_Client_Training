const { Schema, model } = require('mongoose')


const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    // required: true,
    trim: true,
  },
  end: {
    // type: Date,
    type: Date,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  eventID: {
    type: String,
    required: true,
    trim: true,
  },
  // eventPhotoURL: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // eventCurrent: {
  //   type: Boolean,
  //   required: true,
  //   trim: true,
  // },
});

const Event = model('Event', eventSchema, "events");

module.exports = Event;