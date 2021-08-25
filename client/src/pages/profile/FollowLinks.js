import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router';

const Container = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 1em;
  }
`;

const Bold = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.clrs.neutral[900]};
`;

const Link = styled.a`
  border-bottom: 1px solid transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.clrs.neutral[600]};

  &:hover {
    text-decoration: underline;
  }
`;

function FollowLinks({ user }) {
  const history = useHistory();

  const routeToFollowers = () => {
    history.push(`/users/${user.username}/followers`);
  };
  const routeToFollowings = () => {
    history.push(`/users/${user.username}/following`);
  };

  return (
    <Container>
      <Link onClick={routeToFollowers}>
        <Bold>{user.followers.length}</Bold> Follower
        {user.followers.length === 1 ? '' : 's'}
      </Link>
      <Link onClick={routeToFollowings}>
        <Bold>{user.followings.length}</Bold> Following
      </Link>
    </Container>
  );
}

export default FollowLinks;
