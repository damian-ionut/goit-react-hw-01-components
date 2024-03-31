import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.new_profile}>
      <div className={styles.new_description}>
        <img src={avatar} alt="User avatar" className={styles.new_avatar} />
        <p className={styles.new_name}>{username}</p>
        <p className={styles.new_tag}>@{tag}</p>
        <p className={styles.new_location}>{location}</p>
      </div>

      <ul className={styles.new_stats}>
        <li className={styles.new_item}>
          <span className={styles.new_label}>Followers</span>
          <span className={styles.new_quantity}>{followers}</span>
        </li>
        <li className={styles.new_item}>
          <span className={styles.new_label}>Views</span>
          <span className={styles.new_quantity}>{views}</span>
        </li>
        <li className={styles.new_item}>
          <span className={styles.new_label}>Likes</span>
          <span className={styles.new_quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;