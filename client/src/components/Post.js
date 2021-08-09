import React from 'react';
import styled, { css } from 'styled-components';
import UserDisplay from './UserDisplay';
import { useHistory } from 'react-router';

const hoverStyles = css`
  background-color: ${({ theme }) => theme.clrs.neutral[200]};
`;

const Container = styled.div`
  margin-top: 1em;
  padding: ${({ theme }) => theme.padding.main};

  border: 1px solid ${({ theme }) => theme.clrs.neutral[300]};
  & > * + * {
    margin-top: 0.5em;
  }

  transition: background-color 0.2s ease-out;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'auto')};

  &:hover {
    ${(props) => props.clickable && hoverStyles};
  }
`;

const Text = styled.p``;

function Post({ text, user, onClick }) {
  const clickable = onClick !== undefined;

  const history = useHistory();
  const routeToUser = (e) => {
    e.stopPropagation();
    history.push(`/users/${user.username}`);
  };
  return (
    <Container onClick={onClick} clickable={clickable}>
      <UserDisplay user={user} onClick={routeToUser} />
      <Text>{text}</Text>
    </Container>
  );
}

export default Post;
