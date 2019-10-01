/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import RegistrationForm from './RegistrationForm';
import Submitted from './Submitted';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
`;

const FormSection = styled.section`
  background-color: rgb(245, 245, 245);
  margin: auto;
  max-width: 500px;
  padding: 20px;
  text-align: left;
`;

const RegistrationSection = styled.section`
  display: inline-block;
  margin: auto;
  padding: 20px;
`;

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
        alert(result.data.status);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <Container>
      <Title>Training Request Form</Title>
      <FormSection>
        <RegistrationForm submitHandler={submitRegistration} />
      </FormSection>
      <RegistrationSection>
        <Submitted
          registrations={registrations}
          updateRegistration={updateRegistration}
          deleteHandler={deleteRegistration}
          sendToDocuSign={sendToDocuSign}
        />
      </RegistrationSection>
    </Container>
  );
};

export default App;
