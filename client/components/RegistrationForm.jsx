import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  border-radius: 20px;
  display: block;
  font-size: 16px;
  margin: auto;
  padding: 5px 15px;
`;

const RegistrationForm = ({ submitHandler }) => (
  <form onSubmit={submitHandler}>
    <Label htmlFor="firstName">
      First Name:
      <Input name="firstName" type="text" required />
    </Label>
    <br />
    <Label htmlFor="lastName">
      Last Name:
      <Input name="lastName" type="text" required />
    </Label>
    <br />
    <Label htmlFor="email">
      Email Address:
      <Input name="email" type="text" required />
    </Label>
    <br />
    <Label htmlFor="startDate">
      Start Date:
      <Input name="startDate" type="date" required />
    </Label>
    <Label htmlFor="endDate">
      End Date:
      <Input name="endDate" type="date" required />
    </Label>
    <br />
    <Label htmlFor="price">
      Total Cost:
      <Input name="price" type="number" min="0.01" step="0.01" required />
    </Label>
    <br />
    <Button type="submit">Register</Button>
  </form>
);

RegistrationForm.propTypes = {
  submitHandler: PropTypes.func,
};

RegistrationForm.defaultProps = {
  submitHandler: () => {},
};

export default RegistrationForm;
