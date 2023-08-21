import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { login } from 'api/session.service';

import Box from 'components/Box';
import Input from 'components/Input';
import Button from 'components/Button';

import './style.scss';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmitHandler = ({
    email,
    password,
  }) => {
    login(email, password)
      .then(({ headers }) => {
        localStorage.setItem(
          'authentication',
          JSON.stringify({
            client: headers.client,
            expiry: headers.expiry,
            token: headers['access-token'],
            uid: headers.uid,
          }),
        );
        navigate('/');
      }).catch((error) => {
        if (!error) {
          toast.error('No Server Response');
        } else if (error.response?.status === 422) {
          toast.error('Email already in use');
        } else {
          error.data.errors.forEach((message) => {
            toast.error(message);
          });
        }
      });
  };

  return (
    <Box containerClassName="login__box">
      <div className="box__title">
        NeoPosteos
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          placeholder="Email"
          id="email"
          type="email"
          {...register('email', { required: true })}
        />
        <Input
          placeholder="Password"
          id="password"
          type="password"
          {...register('password', { required: true })}
        />
        <div className="submit-btn">
          <Button
            text="SignUp"
            type="submit"
          />
        </div>
        <div className="signup-link">
          <p>
            Don&apos;t have an account?
            Shame on you!
            <br />
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </form>
    </Box>
  );
};
export default Login;
