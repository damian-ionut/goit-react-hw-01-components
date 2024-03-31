import css from './Transactions.module.css';
import PropTypes from 'prop-types';

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.2 +
    ')';

  return color;
};

export const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transactionContainer}> 
      <div className={css.tableWrapper}> 
        <table className={css.table}> 
          <thead>
            <tr className={css.tableHeaderRow} style={{ backgroundColor: createColor() }}>
              <th className={css.tableHeaderCell}>Type</th>
              <th className={css.tableHeaderCell}>Amount</th>
              <th className={css.tableHeaderCell}>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ id, type, amount, currency }) => {
              return (
                <tr key={id} className={css.tableBodyRow} style={{ backgroundColor: createColor() }}>
                  <td className={css.tableDataCell}>{type}</td>
                  <td className={css.tableDataCell}>{amount}</td>
                  <td className={css.tableDataCell}>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
