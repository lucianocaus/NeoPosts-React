import React from 'react';

const Home = () => {
  const user = localStorage.getItem('authentication');

  return (
    <h1>
      Benvindo {user ? ` ${JSON.parse(user).uid}` : '' }
    </h1>
  );
};

export default Home;
