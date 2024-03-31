import React from 'react';
import css from './Friends.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <div className={css.friends}>
        <ul className={css.friends_list}>
          {friends.map(({ avatar, name, isOnline, id }) => (
            <li className={css.friends_item} key={id}>
              <span className={`${css.friends_status} ${isOnline ? css.online : css.offline}`}>
              </span>
              <img className={css.avatar} src={avatar} alt={name} />
              <p className={css.friends_name}>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
