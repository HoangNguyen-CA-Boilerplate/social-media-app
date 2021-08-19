import React from 'react';
import Profile from '../profile/Profile';
import Followings from '../followings/Followings';
import Followers from '../followers/Followers';
import LayoutHeader from '../../components/layout/LayoutHeader';
import FlexLink, { FlexLinkContainer } from '../../components/button/FlexLink';

import {
  useRouteMatch,
  Route,
  Switch,
  useParams,
  useLocation,
} from 'react-router-dom';

function UserRoute() {
  const { path, url } = useRouteMatch();
  const { username } = useParams();
  const location = useLocation();

  console.log(path, url, location.pathname);
  return (
    <Switch>
      <Route exact path={path}>
        <Profile username={username}></Profile>
      </Route>
      <>
        <LayoutHeader>{username}</LayoutHeader>
        <FlexLinkContainer>
          <FlexLink to={`${url}/followers`}>Followers</FlexLink>
          <FlexLink to={`${url}/following`}>Following</FlexLink>
        </FlexLinkContainer>
        <Route exact path={`${path}/followers`}>
          <Followers username={username} />
        </Route>
        <Route exact path={`${path}/following`}>
          <Followings username={username} />
        </Route>
      </>
    </Switch>
  );
}

export default UserRoute;
