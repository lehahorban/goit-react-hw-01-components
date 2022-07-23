import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
     <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
      </thead>
      
  <tbody>
   {items.map(item => <tr key={item.id}>
      <th>{item.type}</th>
      <th>{item.amount}</th>
      <th>{item.currency}</th>
    </tr> )}   
  </tbody>
</table>
   )
} 

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
)
}

export default TransactionHistory