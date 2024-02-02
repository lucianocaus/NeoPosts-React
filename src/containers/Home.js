import React from 'react';

import Sidebar from 'components/Sidebar';
import Posts from 'components/Posts';

const Home = () => (
  <div className="home-container">
    <Sidebar />
    <Posts />
  </div>
);

export default Home;
