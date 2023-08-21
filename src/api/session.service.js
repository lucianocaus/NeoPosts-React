import HTTP from './HTTP';

export const login = (email, password) => HTTP().post(
  '/users/sign_in',
  {
    email,
    password,
  },
);

export const signup = (name, email, password, passwordConfirmation) => HTTP().post(
  '/users',
  {
    name,
    email,
    password,
    passwordConfirmation,
  },
);

export const logout = () => HTTP().delete(
  '/users/sign_out',
);
