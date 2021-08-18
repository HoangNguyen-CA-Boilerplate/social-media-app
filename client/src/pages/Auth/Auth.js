import React from 'react';

import LinkButton from '../../components/button/LinkButton';
import styled from 'styled-components';

import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../store/slices/authSlice';
import { brandName, BrandIcon } from '../../theme/brand';

const Container = styled.div`
  display: flex;
  min-height: 100vh;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 0.8em;
  }
`;

const Cover = styled.div`
  width: 50%;
  padding: 2.5em;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.clrs.primary[500]};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    order: 1;
    flex-grow: 1;
  }
`;

const CoverIcon = styled(BrandIcon)`
  font-size: 15em;
  color: ${({ theme }) => theme.clrs.neutral[100]};
`;

const Inner = styled.div`
  width: 50%;
  padding: 2.5em;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${(props) => props.theme.clrs.neutral[100]};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
  }
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
  font-size: 3em;
  margin-bottom: 1em;
`;

const SubHeader = styled.h2`
  font-size: 2em;
  margin-bottom: 1em;
`;

const Icon = styled(BrandIcon)`
  font-size: 3em;
  color: ${({ theme }) => theme.clrs.primary[500]};
  margin-bottom: 1em;
`;

function AuthScreen() {
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) return <Redirect to='/home' />;

  return (
    <Container>
      <Cover>
        <CoverIcon />
      </Cover>
      <Inner>
        <ContentContainer>
          <Icon />
          <Header>Happening now</Header>
          <SubHeader>Join {brandName} today.</SubHeader>
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
