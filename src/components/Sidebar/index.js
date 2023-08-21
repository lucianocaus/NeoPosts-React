import React from 'react';

import Box from '../Box';

import './style.scss';

const Sidebar = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const userImage = 'https://www.laprensa.com.ar/multimedios/imgs/123027_620.jpg';

  return (
    <Box containerClassName="sidebar">
      <div className="sidebar__header">
        <img src={userImage} alt="User Profile" />
        <div className="sidebar__username">
          <div className="nickname">{currentUser.userName}</div>
          <div className="email">{currentUser.userEmail}</div>
        </div>
      </div>
    </Box>
  );
};

export default Sidebar;
