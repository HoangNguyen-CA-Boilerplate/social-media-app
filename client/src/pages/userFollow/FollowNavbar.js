import React from 'react';
import { useRouteMatch } from 'react-router';
import FlexLink, { FlexLinkContainer } from '../../components/button/FlexLink';

function Navbar({ username }) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <FlexLinkContainer>
      <FlexLink
        to={`/users/${username}/following`}
        $active={match.url === `/users/${username}/following`}
      >
        Following
      </FlexLink>
      <FlexLink
        to={`/users/${username}/followers`}
        $active={match.url === `/users/${username}/followers`}
      >
        Followers
      </FlexLink>
    </FlexLinkContainer>
  );
}

export default Navbar;
