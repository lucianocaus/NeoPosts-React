import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';
import Login from './LogIn';

const Main = () => (
  <main>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </main>
);

export default Main;
