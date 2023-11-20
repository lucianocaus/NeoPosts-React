import React from 'react';
import { Routes, Route } from 'react-router-dom';

import withAuth from 'concerns/WithAuth';

import Home from './Home';
import SignUp from './SignUp';
import Login from './LogIn';

const Main = () => {
  const HomeWithAuth = withAuth(Home);
  const SignUpWithAuth = withAuth(SignUp);
  const LoginWithAuth = withAuth(Login);

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<HomeWithAuth />} />
        <Route path="/login" element={<LoginWithAuth />} />
        <Route path="/signup" element={<SignUpWithAuth />} />
      </Routes>
    </main>
  );
};

export default Main;
