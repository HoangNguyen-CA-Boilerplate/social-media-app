import React from 'react';
import Nav from '../nav/Nav';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../store/slices/authSlice';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;

  border-right: 1px solid ${({ theme }) => theme.clrs.neutral[300]};
  border-left: 1px solid ${({ theme }) => theme.clrs.neutral[300]};
`;

function Layout({ children, header, subheader, top }) {
  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) return <Redirect to='/' />;
  return (
    <Container>
      <Nav />
      <MainContainer>{children}</MainContainer>
    </Container>
  );
}

export default Layout;
