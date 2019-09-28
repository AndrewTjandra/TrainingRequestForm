const registrations = require('../models/registrations');

const getRegistrations = (req, res) => {

};

const createRegistration = (req, res) => {
  registrations.create(req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updateRegistration = (req, res, id) => {

};

const deleteRegistration = (req, res, id) => {

};

module.exports = {
  getRegistrations,
  createRegistration,
  updateRegistration,
  deleteRegistration,
};
