import React from 'react';
import LinkButton from '../components/LinkButton';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectIsAuth } from '../store/slices/authSlice';

function AuthScreen() {
  const isAuth = useSelector(selectIsAuth);
  return (
    <div data-testid='AuthScreen'>
      {isAuth && <Redirect to='/home' />}
      <LinkButton to='/signup'>Sign Up</LinkButton>
      <LinkButton to='/login'>Log In</LinkButton>
    </div>
  );
}

export default AuthScreen;
