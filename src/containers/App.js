import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header';
import Main from './Main';

const App = () => (
  <>
    <Header />
    <ToastContainer />
    <Main />
  </>
);

export default App;
