import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.main};
  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[300]};
`;
const Header = styled.h1`
  font-size: 1.5rem;
`;

function TopBar({ header }) {
  return (
    <Container>
      <Header>{header}</Header>
    </Container>
  );
}

export default TopBar;
