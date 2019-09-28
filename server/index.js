const express = require('express');
const bodyParser = require('body-parser');
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

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server Started, listening on port ${port}`));
