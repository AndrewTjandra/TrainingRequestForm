const registrations = require('../models/registrations.js');

const getRegistrations = (req, res) => {
  registrations.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Unable to get registrations',
        errorMessage: err,
      });
    });
};

const createRegistration = (req, res) => {
  registrations.create(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Unable to create registration',
        errorMessage: err,
      });
    });
};

const updateRegistration = (req, res) => {
  const itemId = req.params.id;
  registrations.update({ _id: itemId }, req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Unable to find registration',
        errorMessage: err,
      });
    });
};

const deleteRegistration = (req, res) => {
  const itemId = req.params.id;
  registrations.deleteOne({ _id: itemId })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Unable to delete registration',
        errorMessage: err,
      });
    });
};

module.exports = {
  getRegistrations,
  createRegistration,
  updateRegistration,
  deleteRegistration,
};
