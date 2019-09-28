import React from 'react';
import moment from 'moment';

const Registration = ({ registration }) => (
  <tr>
    <td>
      { registration.firstName }
    </td>
    <td>
      { registration.lastName }
    </td>
    <td>
      { registration.email }
    </td>
    <td>
      { moment(registration.startDate).format('M/D/YY') }
    </td>
    <td>
      { moment(registration.endDate).format('M/D/YY') }
    </td>
    <td>
      $
      { registration.price.$numberDecimal }
    </td>
    <td>
      { registration.status }
    </td>
  </tr>
);

export default Registration;
