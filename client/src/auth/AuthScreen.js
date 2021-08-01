import React from 'react';
import LinkButton from '../components/LinkButton';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function AuthScreen() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div>
      {isAuth && <Redirect to='/home' />}
      <LinkButton to='/register'>Sign Up</LinkButton>
      <LinkButton to='/login'>Log In</LinkButton>
    </div>
  );
}

export default AuthScreen;
