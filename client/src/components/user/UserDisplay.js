import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

const Container = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 0.5em;
  }
`;
const TextContainer = styled.div`
  cursor: pointer;
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

function UserDisplay({ user, onClick }) {
  return (
    <Container>
      <Avatar onClick={onClick} />
      <TextContainer onClick={onClick}>
        <DisplayName>{user.displayName}</DisplayName>
        <Username>@{user.username}</Username>
      </TextContainer>
    </Container>
  );
}

export default UserDisplay;
