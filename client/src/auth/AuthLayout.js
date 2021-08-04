import React from 'react';
import styled from 'styled-components';

import Error from './Error';

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

const AuthLayout = ({ children, header, error }) => {
  return (
    <Wrapper>
      <Container>
        <Header>{header}</Header>
        <Error>{error}</Error>
        {children}
      </Container>
    </Wrapper>
  );
};

export default AuthLayout;
