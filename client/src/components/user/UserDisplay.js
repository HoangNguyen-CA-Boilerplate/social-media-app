import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

import { useHistory } from 'react-router';

const Container = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 0.5em;
  }
`;
const TextContainer = styled.div`
  cursor: pointer;
  font-size: 1rem;
`;

const DisplayName = styled.p`
  font-weight: 700;
  ${TextContainer}:hover & {
    text-decoration: underline;
  }
`;

const Username = styled.p`
  color: ${({ theme }) => theme.clrs.neutral[600]};
`;

function UserDisplay({ user }) {
  const history = useHistory();

  const routeToUser = (e) => {
    e.stopPropagation();
    history.push(`/users/${user.username}`);
  };

  return (
    <Container>
      <Avatar onClick={routeToUser} />
      <TextContainer onClick={routeToUser}>
        <DisplayName>{user.displayName}</DisplayName>
        <Username>@{user.username}</Username>
      </TextContainer>
    </Container>
  );
}

export default UserDisplay;
