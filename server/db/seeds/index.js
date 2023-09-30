
//* DB Connection
const mongodb = require('../mongoConnection');

//* Seed Lists
const seedEventDB = require('./events-seeds');

const seedAll = async () => {

  await seedEventDB();
  // console.log('\n\x1b[43m   ~~~~~~ EVENTS SEEDED ~~~~~~    \x1b[0m');

  return true

};

module.exports = seedAll;

//!========================= EOF =========================