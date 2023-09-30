const { Schema, model } = require('mongoose')


const eventSchema = new Schema({
  trainerEmail: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, '👻👻 Email Address is Invalid! 👻👻'],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  calendarLink: {
    type: String,
    // required: true,
    trim: true,
  },
  trainerFirstName: {
    type: String,
    required: true,
    trim: true,
  },
  trainerLastName: {
    type: String,
    required: true,
    trim: true,
  },
  registerDate: {
    type: Date,
    required: true,
    trim: true,
  }
});

const Event = model('Trainer', eventSchema, "trainers");

module.exports = Event;