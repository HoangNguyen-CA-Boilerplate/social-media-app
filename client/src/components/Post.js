import React from 'react';
import styled from 'styled-components';
import UserDisplay from './UserDisplay';
import { useHistory } from 'react-router';

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.main};

  border: 1px solid ${({ theme }) => theme.clrs.neutral[200]};
  & > * + * {
    margin-top: 0.5em;
  }
`;

const Text = styled.p``;

function Post({ text, _id, user }) {
  const history = useHistory();
  const routeToUser = (e) => {
    e.stopPropagation();
    history.push(`/users/${user.username}`);
  };
  return (
    <Container>
      <UserDisplay user={user} onClick={routeToUser} />
      <Text>{text}</Text>
    </Container>
  );
}

export default Post;
