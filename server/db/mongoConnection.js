const mongoose = require('mongoose');

process.env.MONGODB_URI || 'mongodb://192.168.25.63:32769/';

// console.log("URI = " + process.env.MONGODB_URI)

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'VeganLiftz-Dev',
  }
);

module.exports = mongoose.connection;


//!========================= EOF =========================