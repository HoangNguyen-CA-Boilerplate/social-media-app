import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.main};
  border-bottom: ${(props) =>
    props.bottomless ? 'none' : `1px solid ${props.theme.clrs.neutral[300]}`};
`;

const Header = styled.h1`
  font-size: 1.5rem;
`;

function LayoutHeader({ children, bottomless }) {
  return (
    <Container bottomless={bottomless}>
      <Header>{children}</Header>
    </Container>
  );
}

export default LayoutHeader;
