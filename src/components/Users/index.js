import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Hearts } from 'react-loader-spinner';

import Box from 'components/Box';
import User from 'components/User';

import { getUsers } from 'api/user.service';

import './style.scss';

const Users = () => {
  const [isFetchingUsers, setIsFetchingUsers] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response);
      })
      .catch(() => {
        toast.error('There was an error. Please try again later.');
      })
      .finally(() => {
        setIsFetchingUsers(false);
      });
  }, []);

  return (
    <div className="users">
      <Box>
        {users.map((post) => (
          <User {...post} />
        ))}
        { isFetchingUsers && (
          <div className="posts__loader">
            <Hearts color="#a88bff" />
          </div>
        ) }
      </Box>
    </div>
  );
};

export default Users;
