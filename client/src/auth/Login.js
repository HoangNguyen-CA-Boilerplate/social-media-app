import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import LoginForm from './LoginForm';

import {
  login,
  selectIsAuth,
  selectLoginError,
} from '../store/slices/authSlice';

function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const error = useSelector(selectLoginError);

  const handleSubmit = (data) => {
    dispatch(login({ email: data.email, password: data.password }));
  };

  if (isAuth) return <Redirect to='/home' />;

  return (
    <AuthLayout header='Log In' error={error}>
      <LoginForm onSubmit={handleSubmit} />
    </AuthLayout>
  );
}

export default Login;
