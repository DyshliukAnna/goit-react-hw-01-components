import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return <div className={css.transactions}><table className={css.transactionHistory}>
  <thead className={css.titleTable}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({id, type, amount, currency}) =>
      <tr key={id} className={css.main}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      )}
  </tbody>
</table></div>
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    })).isRequired
}