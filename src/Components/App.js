import React from 'react';
import { Link } from 'react-router-dom';

import Main from './Main';

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="login">Login</Link></li>
          <li><Link to="signup">Signup</Link></li>
        </ul>
      </nav>
    </header>
    <Main />
  </div>
);

export default App;
