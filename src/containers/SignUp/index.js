import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { signup } from 'api/session.service';

import Box from 'components/Box';
import Input from 'components/Input';
import Button from 'components/Button';

import './style.scss';

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmitHandler = ({
    name,
    email,
    password,
    passwordConfirmation,
  }) => {
    signup(name, email, password, passwordConfirmation)
      .then((response) => {
        localStorage.setItem('client', response.headers.client);
        localStorage.setItem('uid', response.headers.uid);
        localStorage.setItem('token', response.headers.accessToken);
        localStorage.setItem('expiry', response.headers.expiry);
        navigate('/');
      }).catch((error) => {
        if (error?.status === 500) {
          toast.error('No Server Response');
        } else {
          error.data.errors.full_messages.forEach((message) => {
            toast.error(message);
          });
        }
      });
  };

  return (
    <Box containerClassName="signup-box">
      <div>
        <div className="box-header">
          <p>
            NeoPosteos
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          placeholder="Name"
          id="name"
          type="text"
          {...register('name', { required: true })}
        />
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
        <Input
          placeholder="Password Confirmation"
          id="passwordConfirmation"
          type="password"
          {...register('passwordConfirmation', { required: true })}
        />
        <div className="submit-btn">
          <Button
            text="SignUp"
            type="submit"
          />
        </div>
      </form>
    </Box>
  );
};

export default SignUp;
