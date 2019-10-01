/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  text-align: left;

  ${({ displayModal }) => (displayModal ? 'display: block;' : 'display: none;')}
`;

const Display = styled.div`
  position:fixed;
  padding: 50px;
  background: white;
  width: 30%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

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
  display: inline-block;
  font-size: 16px;
  margin: auto 10px;
  padding: 5px 15px;
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
          <Label htmlFor="firstName">
            First Name:
            <Input name="firstName" type="text" defaultValue={registrationItem.firstName} required />
          </Label>
          <br />
          <Label htmlFor="lastName">
            Last Name:
            <Input name="lastName" type="text" defaultValue={registrationItem.lastName} required />
          </Label>
          <br />
          <Label htmlFor="email">
            Email Address:
            <Input name="email" type="text" defaultValue={registrationItem.email} required />
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
          <Button type="submit">Update</Button>
          <Button type="button" onClick={closeHandler}>Close</Button>
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
