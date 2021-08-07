import React from 'react';
import Nav from '../nav/Nav';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 900px;
`;

const TopBar = styled.div`
  padding: ${({ theme }) => theme.padding.main};
  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[200]};
`;
const Header = styled.h1`
  font-size: 1.5rem;
`;

function Layout({ children, header }) {
  return (
    <Container>
      <Nav />
      <MainContainer>
        <TopBar>
          <Header>{header}</Header>
        </TopBar>
        {children}
      </MainContainer>
    </Container>
  );
}

export default Layout;
