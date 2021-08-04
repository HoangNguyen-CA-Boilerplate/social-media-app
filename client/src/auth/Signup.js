import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from '../components/form/Form';
import Input from '../components/form/Input';
import Label from '../components/form/Label';
import Button from '../components/Button';
import FormGroup from '../components/form/FormGroup';

import { signup, selectIsAuth } from '../store/slices/authSlice';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

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
    <Form onSubmit={handleSubmit(onSubmit)} data-testid='Signup'>
      {isAuth && <Redirect to='/home' />}

      <FormGroup
        label='Username:'
        error={errors.username?.message}
        inputProps={{
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
          type: 'email',
          ...register('email', { required: 'email is required' }),
        }}
      />
      <FormGroup
        label='Password:'
        error={errors.password?.message}
        inputProps={{
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
  );
}

export default Signup;
