function TransactionHistory({ items }) {
   return items.map(item =>  <table className="transaction-history">            
  <thead>
    <tr key={item.id}>
      <th>{item.type}</th>
      <th>{item.amount}</th>
      <th>{item.currency}</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>)
}

export default TransactionHistory