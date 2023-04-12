import axios from 'axios';

import useAuth from 'hooks/useAuth';

const HTTP = () => {
  const headers = {
    Accept: 'application/json',
  };

  const auth = useAuth();

  if (auth) {
    const {
      token,
      uid, client,
      expiry,
    } = auth;

    headers['Access-Token'] = token;
    headers.uid = uid;
    headers.client = client;
    headers.expiry = expiry;
  }

  const client = axios.create({
    baseURL: process.env.API_URL,
    headers,
  });

  client.interceptors.response.use(
    (response) => response,
    ({ response }) => {
      if (!response) {
        throw new Error('No server response');
      }
      throw response;
    },
  );

  return client;
};

export default HTTP;
