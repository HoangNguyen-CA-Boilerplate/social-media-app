import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { selectUser } from '../../store/slices/authSlice';

import { AiOutlineHome } from 'react-icons/ai';
import {} from 'react-icons/fa';
import { VscSignOut } from 'react-icons/vsc';
import { RiUserSharedLine, RiUserLine } from 'react-icons/ri';

import { BrandIcon } from '../../theme/brand';

import NavLink from './NavLink';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  min-width: max-content;
  height: 100vh;

  overflow-y: auto;
  overflow-x: hidden;

  position: sticky;
  top: 0;
  left: 0;

  padding: 0.5em;
  min-height: 100vh;

  & > * + * {
    margin-top: 0.5em;
  }
`;

const Logo = styled(BrandIcon)`
  color: ${({ theme }) => theme.clrs.primary[500]};
`;

const BottomNavLink = styled(NavLink)`
  margin-top: auto;
`;

function Nav() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Container>
      <NavLink aria-label='logo' icon={<Logo />} to='/home' />
      <NavLink aria-label='home' icon={<AiOutlineHome />} to='/home'>
        Home
      </NavLink>
      <NavLink
        aria-label='profile'
        icon={<RiUserLine />}
        to={`/users/${user.username}`}
      >
        Profile
      </NavLink>

      <NavLink
        aria-label='following'
        icon={<RiUserSharedLine />}
        to={`/users/${user.username}/following`}
      >
        Following
      </NavLink>

      <BottomNavLink
        aria-label='logout'
        icon={<VscSignOut />}
        onClick={() => dispatch(logout())}
      >
        Logout
      </BottomNavLink>
    </Container>
  );
}

export default Nav;
