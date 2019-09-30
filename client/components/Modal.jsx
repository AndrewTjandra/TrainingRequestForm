/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  ${({ displayModal }) => (displayModal ? 'display: block;' : 'display: none;')}
`;

const Display = styled.div`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

const Modal = ({ handleClose, show, registrationItem, setRegistrationItem, updateRegistration }) => {
  const updateHandler = (e) => {
    updateRegistration(e, registrationItem._id);
    handleClose();
    setRegistrationItem({});
  };

  const closeHandler = () => {
    handleClose();
    setRegistrationItem({});
  };

  return (
    <Container displayModal={show}>
      <Display>
        <form onSubmit={updateHandler}>
          <label htmlFor="firstName">
            First Name:
            <input name="firstName" type="text" defaultValue={registrationItem.firstName} required />
          </label>
          <br />
          <label htmlFor="lastName">
            Last Name:
            <input name="lastName" type="text" defaultValue={registrationItem.lastName} required />
          </label>
          <br />
          <label htmlFor="email">
            Email Address:
            <input name="email" type="text" defaultValue={registrationItem.email} required />
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
          <button type="submit">Update</button>
          <button type="button" onClick={closeHandler}>Close</button>
        </form>
      </Display>
    </Container>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  registrationItem: PropTypes.object,
  setRegistrationItem: PropTypes.func,
  updateRegistration: PropTypes.func,
};

Modal.defaultProps = {
  handleClose: () => {},
  show: false,
  registrationItem: {},
  setRegistrationItem: () => {},
  updateRegistration: () => {},
};

export default Modal;
