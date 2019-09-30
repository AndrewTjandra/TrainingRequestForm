/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const Icon = styled.button`
  background-color: Transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline:none;
`;

const Cell = styled.td`
  padding: 10px 25px;
  border-top: 1px solid gray;
`;

// eslint-disable-next-line object-curly-newline
const Registration = ({ registration, deleteHandler, showModal, setRegistrationItem }) => {
  const deleteHandlerEvent = (e) => {
    deleteHandler(e, registration);
  };

  const openModal = () => {
    showModal();
    setRegistrationItem(registration);
  };

  return (
    <tr>
      <Cell>
        { registration.firstName }
      </Cell>
      <Cell>
        { registration.lastName }
      </Cell>
      <Cell>
        { registration.email }
      </Cell>
      <Cell>
        { moment(registration.startDate).utc().format('MM/DD/YY') }
      </Cell>
      <Cell>
        { moment(registration.endDate).utc().format('MM/DD/YY') }
      </Cell>
      <Cell>
        $
        { registration.price.$numberDecimal }
      </Cell>
      <Cell>
        { registration.status }
      </Cell>
      <Cell>
        <Icon type="button" onClick={openModal}>
          <img src="./assets/pencil.png" alt="pencil" />
        </Icon>
      </Cell>
      <Cell>
        <Icon type="button" onClick={deleteHandlerEvent}>
          <img src="./assets/delete.png" alt="trashcan" />
        </Icon>
      </Cell>
      <Cell>
        <Icon type="button">
          <img src="./assets/send.png" alt="send" />
        </Icon>
      </Cell>
    </tr>
  );
};

Registration.propTypes = {
  registration: PropTypes.object,
  deleteHandler: PropTypes.func,
  showModal: PropTypes.func,
  setRegistrationItem: PropTypes.func,
};

Registration.defaultProps = {
  registration: {},
  deleteHandler: () => {},
  showModal: () => {},
  setRegistrationItem: () => {},
};

export default Registration;
