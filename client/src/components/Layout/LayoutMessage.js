import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1.5em 2em;

  & > * + * {
    margin-top: 0.5em;
  }
`;

const Error = styled.h2`
  font-size: 1.8rem;
  line-height: 1.1em;
`;

const Sub = styled.p`
  color: ${({ theme }) => theme.clrs.neutral[600]};
`;

function LayoutMessage({ children, sub }) {
  return (
    <Container>
      <Error>{children}</Error>
      <Sub>{sub}</Sub>
    </Container>
  );
}

export default LayoutMessage;
