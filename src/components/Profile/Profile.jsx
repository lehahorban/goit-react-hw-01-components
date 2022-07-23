import PropTypes from 'prop-types';
import styles from "./Profile.module.css";

function Profile({username, tag, location, avatar, stats}) {
   
    return  <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt={username}
      className={styles.avatar}
    />
            <p className={styles.name}>{username}</p>
            <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className= {styles.item}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>1000</span>
    </li>
    <li className= {styles.item}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>2000</span>
    </li>
    <li className= {styles.item}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>3000</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile