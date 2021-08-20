import React from 'react';
import Profile from '../profile/Profile';
import Followings from '../followings/Followings';
import Followers from '../followers/Followers';
import LayoutHeader from '../../components/layout/LayoutHeader';
import PageNotFound from '../PageNotFound';
import FlexLink, { FlexLinkContainer } from '../../components/button/FlexLink';

import { useRouteMatch, Route, Switch, useParams } from 'react-router-dom';

function UserRoute() {
  const { path, url } = useRouteMatch();
  const { username } = useParams();

  return (
    <Switch>
      <Route exact path={path}>
        <Profile username={username}></Profile>
      </Route>
      <Route exact path={[`${url}/followers`, `${url}/following`]}>
        <LayoutHeader>{username}</LayoutHeader>
        <FlexLinkContainer>
          <FlexLink to={`${url}/followers`}>Followers</FlexLink>
          <FlexLink to={`${url}/following`}>Following</FlexLink>
        </FlexLinkContainer>
        <Switch>
          <Route exact path={`${path}/followers`}>
            <Followers username={username} />
          </Route>
          <Route exact path={`${path}/following`}>
            <Followings username={username} />
          </Route>
        </Switch>
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default UserRoute;
