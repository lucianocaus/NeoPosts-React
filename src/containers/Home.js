import React from 'react';

import Sidebar from 'components/Sidebar';
import Posts from 'components/Posts';

const Home = () => {
  const user = localStorage.getItem('currentUser');

  return (
    <div className="home-container">
      <Sidebar />
      { user && <Posts /> }
    </div>
  );
};

export default Home;
