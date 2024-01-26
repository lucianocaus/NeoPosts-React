import React from 'react';
import propTypes from 'prop-types';

import Button from 'components/Button';

import './style.scss';

const User = ({
  id,
  name,
  email,
  followed,
}) => {
  const currentUserId = JSON.parse(localStorage.getItem('currentUser')).userId;

  return (
    <div className="user">
      <img src={`https://picsum.photos/200/200?random=${id}`} alt="User Profile" />
      <div className="user__data">
        <div className="nickname">
          {`@${name}`}
        </div>
        <div className="email">
          {email}
        </div>
      </div>
      {currentUserId !== id && (
        <Button
          text={followed ? 'Unfollow' : 'Follow'}
          buttonClassName={followed ? 'unfollow-btn' : 'follow-btn'}
          type="submit"
        />
      )}
    </div>
  );
};

User.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  followed: propTypes.bool.isRequired,
};

export default User;
