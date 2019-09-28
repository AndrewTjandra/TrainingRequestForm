/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Registration from './Registration';

const Submitted = ({ registrations }) => (
  <div>
    <h3>
      Submitted Registration Forms
    </h3>
    <table>
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
          <Registration key={registration._id} registration={registration} />
        ))}
      </tbody>
    </table>
  </div>
);

Submitted.propTypes = {
  registrations: PropTypes.array,
};

Submitted.defaultProps = {
  registrations: [],
};

export default Submitted;
