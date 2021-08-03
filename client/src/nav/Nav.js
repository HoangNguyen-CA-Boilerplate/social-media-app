import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { Redirect } from 'react-router';
import { selectIsAuth } from '../store/slices/authSlice';

const Container = styled.div``;

function Nav() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  return (
    <Container>
      {!isAuth && <Redirect to='/' />}
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </Container>
  );
}

export default Nav;
