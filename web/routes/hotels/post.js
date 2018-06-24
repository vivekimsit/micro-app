'use strict';

async function addHotel (req, res) {
  res.status(201).send('Added Hotel Successfully!');
}

module.exports = addHotel;
