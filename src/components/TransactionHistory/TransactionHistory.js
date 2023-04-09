import { logDOM } from '@testing-library/react';
import './TransactionHistory.css';
import PropTypes from 'prop-types';
const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className="transaction-thead">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <tr
              key={id}
              style={{ backgroundColor: index % 2 === 0 || '#d0c1b5' }}
            >
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default TransactionHistory;
