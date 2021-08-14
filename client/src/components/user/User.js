import React from 'react';
import styled from 'styled-components';
import UserPreview from './UserPreview';
import { clickableStyles } from '../post/Post';

import { useHistory } from 'react-router';

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.main};
  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[400]};

  ${clickableStyles}
`;

function User({ user }) {
  const history = useHistory();

  const onClick = () => {
    history.push(`/users/${user.username}`);
  };

  return (
    <Container onClick={onClick}>
      <UserPreview user={user} />
    </Container>
  );
}

export default User;
