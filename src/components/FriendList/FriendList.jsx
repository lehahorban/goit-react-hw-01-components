import PropTypes from "prop-types"
import styles from "./FriendList.module.css"

function FriendList({ friends }) {
    return (        
        <ul className={styles.friendList}>
            {friends.map(item => <li key={item.id} className={styles.item}>
        <span className={item.isOnline ? styles.statusOnline : styles.statusOfline}>{item.isOnline}</span>
  <img className={styles.avatar} src={item.avatar} alt={item.name} width="48" />
        <p className={styles.name}>{item.name}</p>
</li>)}

</ul>
    )

}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};


export default FriendList