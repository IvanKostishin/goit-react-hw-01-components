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
        {items.map(data => {
          return (
            <tr key={data.id}>
              <td>{data.type}</td>
              <td>{data.amount}</td>
              <td>{data.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
