/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RegistrationForm from './RegistrationForm';
import Submitted from './Submitted';

const App = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    axios.get('/api/registration')
      .then((result) => {
        setRegistrations(result.data);
      });
  }, []);

  const submitRegistration = (e) => {
    e.preventDefault();
    e.persist();

    axios.post('/api/registration', {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      price: e.target.price.value,
      status: 'Submitted',
    })
      .then(() => axios.get('/api/registration'))
      .then((result) => {
        setRegistrations(result.data);
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        e.target.reset();
      });
  };

  const updateRegistration = (e, registrationId) => {
    e.preventDefault();
    e.persist();

    axios.put(`/api/registration/${registrationId}`, {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      price: e.target.price.value,
      status: 'Submitted',
    })
      .then(() => axios.get('/api/registration'))
      .then((result) => {
        setRegistrations(result.data);
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        e.target.reset();
      });
  };

  const deleteRegistration = (e, registration) => {
    axios.delete(`/api/registration/${registration._id}`)
      .then(() => axios.get('/api/registration'))
      .then((result) => {
        setRegistrations(result.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const sendToDocuSign = (e, registration) => {
    axios.post('/api/docusign', {
      firstName: registration.firstName,
      lastName: registration.lastName,
      email: registration.email,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div>
      <RegistrationForm submitHandler={submitRegistration} />
      <Submitted
        registrations={registrations}
        updateRegistration={updateRegistration}
        deleteHandler={deleteRegistration}
        sendToDocuSign={sendToDocuSign}
      />
    </div>
  );
};

export default App;
