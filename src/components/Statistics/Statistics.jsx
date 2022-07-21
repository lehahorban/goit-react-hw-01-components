function Statistics({ stats }) {
    
    return (
        stats.map(item => <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li key = {item.id} className="item">
                    <span className="label">{ item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </li>
    {/* <li key = {item.id} className="item">
      <span className="label">{ item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </li>
    <li key = {item.id} className="item">
      <span className="label">{ item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </li>
    <li key = {item.id} className="item">
      <span className="label">{ item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </li> */}
  </ul>
</section>)
        
      
        
    )
}

export default Statistics