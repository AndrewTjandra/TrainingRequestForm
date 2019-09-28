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
      .then(() => {
        axios.get('/api/registration')
          .then((result) => {
            setRegistrations(result.data);
          });
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        e.target.reset();
      });
  };

  return (
    <div>
      <RegistrationForm submitHandler={submitRegistration} />
      <Submitted registrations={registrations} />
    </div>
  );
};

export default App;
