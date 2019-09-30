import React from 'react';
import PropTypes from 'prop-types';

const RegistrationForm = ({ submitHandler }) => (
  <form onSubmit={submitHandler}>
    <label htmlFor="firstName">
      First Name:
      <input name="firstName" type="text" required />
    </label>
    <br />
    <label htmlFor="lastName">
      Last Name:
      <input name="lastName" type="text" required />
    </label>
    <br />
    <label htmlFor="email">
      Email Address:
      <input name="email" type="text" required />
    </label>
    <br />
    <label htmlFor="startDate">
      Start Date:
      <input name="startDate" type="date" required />
    </label>
    <label htmlFor="endDate">
      End Date:
      <input name="endDate" type="date" required />
    </label>
    <br />
    <label htmlFor="price">
      Total Cost:
      <input name="price" type="number" min="0.01" step="0.01" required />
    </label>
    <br />
    <button type="submit">Register</button>
  </form>
);

RegistrationForm.propTypes = {
  submitHandler: PropTypes.func,
};

RegistrationForm.defaultProps = {
  submitHandler: () => {},
};

export default RegistrationForm;
