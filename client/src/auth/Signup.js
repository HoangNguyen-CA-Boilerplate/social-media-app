import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from '../components/form/Form';
import Button from '../components/Button';
import FormGroup from '../components/form/FormGroup';
import AuthLayout from './AuthLayout';

import {
  signup,
  selectIsAuth,
  selectSignupError,
} from '../store/slices/authSlice';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const signupError = useSelector(selectSignupError);

  const onSubmit = (data) => {
    dispatch(
      signup({
        username: data.username,
        email: data.email,
        password: data.password,
      })
    );
  };

  return (
    <AuthLayout header='Sign up' error={signupError}>
      <Form onSubmit={handleSubmit(onSubmit)} data-testid='Signup'>
        {isAuth && <Redirect to='/home' />}

        <FormGroup
          label='Username:'
          error={errors.username?.message}
          inputProps={{
            error: errors.username?.message,
            ...register('username', {
              required: 'username is required',
              minLength: {
                value: 4,
                message: 'username must be at least 4 characters long',
              },
              maxLength: {
                value: 15,
                message: 'username must be at most 15 characters long',
              },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message:
                  'username must only include alphanumeric characters and underscores',
              },
            }),
          }}
        />
        <FormGroup
          label='Email:'
          error={errors.email?.message}
          inputProps={{
            error: errors.email?.message,
            type: 'email',
            ...register('email', {
              required: 'email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'email is invalid',
              },
            }),
          }}
        />
        <FormGroup
          label='Password:'
          error={errors.password?.message}
          inputProps={{
            error: errors.password?.message,
            type: 'password',
            ...register('password', {
              required: 'password is required',
              minLength: {
                value: 5,
                message: 'password must be at least 5 characters long',
              },
            }),
          }}
        />

        <Button submit>Submit</Button>
      </Form>
    </AuthLayout>
  );
}

export default Signup;
