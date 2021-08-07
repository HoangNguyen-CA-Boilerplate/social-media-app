import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { Redirect } from 'react-router';
import { selectIsAuth } from '../store/slices/authSlice';

import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser, FaPencilRuler } from 'react-icons/fa';
import { BrandIcon } from '../brand';

import NavLink from './NavLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;

  padding: 0 1em;
  min-height: 100vh;
  & > * + * {
    margin-top: 0.5em;
  }
`;

const Logo = styled(BrandIcon)`
  color: ${({ theme }) => theme.clrs.primary[500]};
`;

function Nav() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  return (
    <Container>
      {!isAuth && <Redirect to='/' />}
      <NavLink icon={<Logo />} to='/home' />
      <NavLink icon={<AiOutlineHome />} to='/home'>
        Home
      </NavLink>
      <NavLink icon={<FaRegUser />} to='/profile'>
        Profile
      </NavLink>
      <NavLink icon={<FaRegUser />} to='/profile'>
        Profile
      </NavLink>
      <NavLink icon={<FaPencilRuler />} to='/submit'>
        Post
      </NavLink>
      <NavLink onClick={() => dispatch(logout())}> Logout</NavLink>
    </Container>
  );
}

export default Nav;
