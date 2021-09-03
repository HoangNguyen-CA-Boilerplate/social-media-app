import React, { Suspense } from 'react';

import Spinner from '../../components/Spinner';
import LayoutHeader from '../../components/layout/LayoutHeader';
import FlexLink, { FlexLinkContainer } from '../../components/button/FlexLink';

import { useRouteMatch, Route, Switch, useParams } from 'react-router-dom';

const Profile = React.lazy(() => import('../profile/Profile.js'));
const Followings = React.lazy(() => import('../followings/Followings.js'));
const Followers = React.lazy(() => import('../followers/Followers.js'));

function UserRoute() {
  const { path, url } = useRouteMatch();
  const { username } = useParams();

  return (
    <Switch>
      <Route exact path={[`${path}/followers`, `${path}/following`]}>
        <LayoutHeader bottomless>{username}</LayoutHeader>
        <FlexLinkContainer>
          <FlexLink to={`${url}/followers`}>Followers</FlexLink>
          <FlexLink to={`${url}/following`}>Following</FlexLink>
        </FlexLinkContainer>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={`${path}/followers`}>
              <Followers username={username} />
            </Route>
            <Route exact path={`${path}/following`}>
              <Followings username={username} />
            </Route>
          </Switch>
        </Suspense>
      </Route>
      <Route>
        <Profile username={username}></Profile>
      </Route>
    </Switch>
  );
}

export default UserRoute;
