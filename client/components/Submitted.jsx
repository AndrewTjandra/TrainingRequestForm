/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Registration from './Registration';
import Modal from './Modal';

const Table = styled.table`
  border-collapse: collapse;
`;


const Submitted = ({ registrations, updateRegistration, deleteHandler, sendToDocuSign }) => {
  const [displayModel, setDisplayModal] = useState(false);
  const [registrationItem, setRegistrationItem] = useState({});

  const showModal = () => {
    setDisplayModal(true);
  };

  const hideModal = () => {
    setDisplayModal(false);
  };

  return (
    <div>
      <h3>
        Submitted Registration Forms
      </h3>
      <Modal
        show={displayModel}
        handleClose={hideModal}
        registrationItem={registrationItem}
        setRegistrationItem={setRegistrationItem}
        updateRegistration={updateRegistration}
      />
      <Table>
        <thead>
          <tr>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Email
            </th>
            <th>
              Start Date
            </th>
            <th>
              End Date
            </th>
            <th>
              Price
            </th>
            <th>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            // eslint-disable-next-line no-underscore-dangle
            <Registration
              key={registration._id}
              registration={registration}
              deleteHandler={deleteHandler}
              setRegistrationItem={setRegistrationItem}
              showModal={showModal}
              sendToDocuSign={sendToDocuSign}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

Submitted.propTypes = {
  registrations: PropTypes.array,
  deleteHandler: PropTypes.func,
  updateRegistration: PropTypes.func,
  sendToDocuSign: PropTypes.func,
};

Submitted.defaultProps = {
  registrations: [],
  deleteHandler: () => {},
  updateRegistration: () => {},
  sendToDocuSign: () => {},
};

export default Submitted;
