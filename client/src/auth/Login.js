import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from '../components/form/Form';
import FormGroup from '../components/form/FormGroup';
import Button from '../components/Button';

import { login, selectIsAuth } from '../store/slices/authSlice';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onSubmit = (data) => {
    dispatch(login({ email: data.email, password: data.password }));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-testid='Login'>
      {isAuth && <Redirect to='/home' />}

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
              message: 'password must be at least 5 characters long ',
            },
          }),
        }}
      />

      <Button submit>Submit</Button>
    </Form>
  );
}

export default Login;
