import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { Redirect } from 'react-router';
import { selectIsAuth } from '../store/slices/authSlice';

import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';

import NavLink from './NavLink';
import Button from '../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;

  padding: 0 1em;

  & > * + * {
    margin-top: 0.5em;
  }
`;

function Nav() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  return (
    <Container>
      {!isAuth && <Redirect to='/' />}
      <NavLink icon={<AiOutlineHome />} to='/home'>
        Home
      </NavLink>
      <NavLink icon={<FaRegUser />} to='/profile'>
        Profile
      </NavLink>
      <NavLink onClick={() => dispatch(logout())}> Logout</NavLink>
    </Container>
  );
}

export default Nav;
