import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 1rem;

  background-color: ${({ theme }) => theme.clrs.accent1[500]};
  color: ${({ theme }) => theme.clrs.neutral[100]};
  padding: 1em;
  margin-bottom: 1em;
  text-transform: capitalize;
`;
function Error({ children }) {
  return children && <Container>{children}</Container>;
}

export default Error;
