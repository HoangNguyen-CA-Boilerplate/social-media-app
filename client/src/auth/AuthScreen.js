import React from 'react';
import LinkButton from '../components/LinkButton';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectIsAuth } from '../store/slices/authSlice';

import { FaTwitter } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Inner = styled.div`
  padding: 2.5em;
  width: 50%;
  z-index: 1;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${(props) =>
    props.$primary ? props.theme.clrs.primary[500] : 'white'};
`;

const ContentContainer = styled.div`
  width: max-content;

  & > button {
    font-size: 1rem;
  }
  & > button + button {
    margin-top: 1em;
  }
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 1em;
`;

const SubHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1em;
`;

const Icon = styled(FaTwitter)`
  font-size: 3rem;
  color: ${({ theme }) => theme.clrs.primary[500]};
  margin-bottom: 1em;
`;

function AuthScreen() {
  const isAuth = useSelector(selectIsAuth);
  return (
    <Container>
      {isAuth && <Redirect to='/home' />}
      <Inner $primary></Inner>
      <Inner>
        <ContentContainer>
          <Icon />
          <Header>Happening now</Header>
          <SubHeader>Join Twitter today.</SubHeader>
          <LinkButton $fill to='/signup'>
            Sign Up
          </LinkButton>
          <LinkButton $fill to='/login'>
            Log In
          </LinkButton>
        </ContentContainer>
      </Inner>
    </Container>
  );
}

export default AuthScreen;
