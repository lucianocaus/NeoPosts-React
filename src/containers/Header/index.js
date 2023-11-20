import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logout } from 'api/session.service';

import logo from './logo.png';

import './style.scss';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => logout().then(() => {
    localStorage.removeItem('authentication');
    localStorage.removeItem('currentUser');
    navigate('/login');
  });

  return (
    <header>
      <nav>
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="NeoPost" />
          </Link>
        </div>
        <div className="header__item">
          {
            localStorage.getItem('authentication') ? (
              <Link
                to="/"
                onClick={handleLogout}
              >
                Logout
              </Link>
            ) : (
              <Link to="login">Login</Link>
            )
          }
        </div>
      </nav>
    </header>
  );
};

export default Header;
