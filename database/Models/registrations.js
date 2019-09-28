const mongoose = require('mongoose');
const db = require('../connection');

const registrationsSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  startDate: Date,
  endDate: Date,
  price: mongoose.Schema.Types.Decimal128,
});

const registrations = db.model('Registrations', registrationsSchema);

module.exports = registrations;
