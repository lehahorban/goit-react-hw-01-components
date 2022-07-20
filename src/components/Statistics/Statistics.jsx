function Statistics({stats}) {
    return (
        stats.map(item =>  <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
                    <span class="label">{ item.label}</span>
                    <span class="percentage">{ item.percentage}%</span>
    </li>
    <li class="item">
      <span class="label">{ item.label}</span>
      <span class="percentage">{ item.percentage}%</span>
    </li>
    <li class="item">
      <span class="label">{ item.label}</span>
      <span class="percentage">{ item.percentage}%</span>
    </li>
    <li class="item">
      <span class="label">{ item.label}</span>
      <span class="percentage">{ item.percentage}%</span>
    </li>
  </ul>
</section>)
        
    )
}

export default Statistics