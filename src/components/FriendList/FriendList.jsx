function FriendList({friends}) {
    return (        
        <ul className="friend-list">
            {friends.map(item => <li key={item.id} className="item">
        <span className="status">{item.isOnline}</span>
  <img className="avatar" src={item.avatar} alt={item.name} width="48" />
        <p className="name">{item.name}</p>
</li>)}

</ul>
    )

}

export default FriendList