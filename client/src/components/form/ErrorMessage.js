import React from 'react';
import styled from 'styled-components';
import { GoAlert } from 'react-icons/go';

const Message = styled.small.attrs({
  role: 'alert',
})`
  display: block;
  color: ${({ theme }) => theme.clrs.danger};
  text-transform: capitalize;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 0.4em;
  }
`;

const AlertIcon = styled(GoAlert)`
  font-size: 1rem;
  display: block;
  color: ${({ theme }) => theme.clrs.danger};
`;

function ErrorMessage({ children }) {
  let message = null;
  if (children) {
    message = (
      <Container>
        <AlertIcon />
        <Message>{children}</Message>
      </Container>
    );
  }
  return <>{message}</>;
}

export default ErrorMessage;
