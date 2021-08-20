import React from 'react';
import styled from 'styled-components';

import AuthError from './AuthError';
import Spinner from '../Spinner';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  padding: 1em;
  width: 100%;
  max-width: 25em;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

const AuthLayout = ({ children, header, error, loading }) => {
  return (
    <Wrapper>
      <Container>
        <Header>{header}</Header>
        {loading && <Spinner />}
        <AuthError>{error}</AuthError>
        {children}
      </Container>
    </Wrapper>
  );
};

export default AuthLayout;
