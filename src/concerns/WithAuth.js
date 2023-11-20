import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  function withAuthComponent(props) {
    const path = useLocation().pathname;
    const auth = localStorage.getItem('authentication');
    const isAuthRoute = ['/login', '/signup'].includes(path);

    if (!auth && !isAuthRoute) {
      return <Navigate to="/login" />;
    }

    if (auth && isAuthRoute) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  }

  return withAuthComponent;
};

export default withAuth;
