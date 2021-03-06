/* eslint-disable no-console */
const mongoose = require('mongoose');

const mongoURI = process.env.MONGOURI || 'mongodb://localhost:27017/TrainingRegistration'

mongoose.connect(mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('error', () => console.log('mongoose connection error'));
db.once('connected', () => console.log('mongoose connected successfully'));

module.exports = db;
