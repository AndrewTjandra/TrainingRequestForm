/* eslint-disable max-len */
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();
const db = require('../database/controller/registrations');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/registration/', db.getRegistrations);

app.post('/api/registration', db.createRegistration);

app.put('/api/registration/:id', db.updateRegistration);

app.delete('/api/registration/:id', db.deleteRegistration);

app.post('/api/docusign', (req, res) => {
  const authentication = {
    Username: process.env.USERNAME,
    Password: process.env.PASSWORD,
    IntegratorKey: process.env.INTEGRATORKEY,
  };

  axios({
    method: 'post',
    url: `https://demo.docusign.net/restapi/v2/accounts/${process.env.ACCOUNTID}/envelopes`,
    data: JSON.stringify({
      emailSubject: 'Please Sign My Document',
      templateId: 'b7884896-64a8-40df-9f7a-53b9d80880ba',
      templateRoles: [
        {
          email: req.body.email,
          name: `${req.body.firstName} ${req.body.lastName}`,
          roleName: 'Employee',
        },
        {
          email: 'andrew.tjandra@gmail.com',
          name: 'Andrew Tjandra',
          roleName: 'Manager',
        },
      ],
    }),
    headers: {
      'Content-Type': 'application/json',
      'X-DocuSign-Authentication': JSON.stringify(authentication),
    },
  })
    .then(() => {
      res.status(200).json({ status: 'DocuSign Envelope Created' });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server Started, listening on port ${port}`));
