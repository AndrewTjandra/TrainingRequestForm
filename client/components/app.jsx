import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RegistrationForm from './RegistrationForm';

const App = () => {
  const [registrations, setRegistrations] = useState('');

  useEffect(() => {
    axios.get('/api/registration')
      .then((result) => {
        setRegistrations(result.data);
      });
  }, []);

  const submitRegistration = (e) => {
    e.preventDefault();

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
        e.target.reset();
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div>
      <RegistrationForm submitHandler={submitRegistration} />
    </div>
  );
};

export default App;
